""" Server allows people to record themselves on the fly,
and sync with their teams, wherever they may be."""
# Copyright (c) 2021 Chris Lloyd-Jones.
# Copyright (c) 2021 Avanade Inc.

import uuid
import os
import asyncio
from starlette.applications import Starlette
from starlette.responses import (
    Response,
    FileResponse,
    JSONResponse,
    RedirectResponse,
)
from starlette.staticfiles import StaticFiles
from starlette.routing import Route, Mount
from starlette.templating import Jinja2Templates
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.gzip import GZipMiddleware
from starlette.config import Config
import aiofiles
import uvicorn
from datetime import datetime, timedelta
from urllib.parse import quote
import json
import sys

sys.path.append("../notifications")
sys.path.append("../annotations")
sys.path.append("../documents")
sys.path.append("../face")
sys.path.append("../users")
sys.path.append("../users")
import notifications.notifications as notifications
import annotations.annotations as an
import documents.documents as documents
import face.faceverification as face
import users.users as users
import yubikey.yubikey as yubi

config = Config(".env")
DEBUG = config("DEBUG", cast=bool, default=False)

ERRORS = {"json_error": {"error": "Body is not a valid json"}}


def verify_json(test_json):

    try:
        json.loads(test_json)
        return True
    except:
        return False


async def get_notifications(request):
    # get all notifictions
    all_notifications = notifications.get_all()
    return JSONResponse(all_notifications)


async def append_notification(request):
    # append a new notification

    body_data = await request.body()

    # verify json
    if verify_json(body_data) == True:
        response = notifications.append(body_data)
    else:
        return JSONResponse(ERRORS["json_error"])

    return JSONResponse(response)


async def new_document(request):
    """take a document from the request body and send it to CL"""
    body_data = await request.body()

    # verify file
    if verify_json(body_data) == True:
        response = documents.append(body_data)
    else:
        return JSONResponse(ERRORS["json_error"])


async def search_document(request):
    doc_id = request.path_params["id"]

    document = documents.search(doc_id)

    return JSONResponse(document)


async def verify_faces(request):
    """json with two photos, verify faces are the same from the request body and send it to CL"""
    body_data = await request.body()

    # verify file
    if verify_json(body_data) == True:
        response = face.verify_from_json_one_image(body_data)
    else:
        return JSONResponse(ERRORS["json_error"])

    return JSONResponse(response)


async def verify_user_id(request):
    """check a user id exists currently in the autherised user base"""
    user_id = request.path_params["id"]

    status = users.verify(user_id)

    return JSONResponse(status)


async def list_documents(request):
    """List docuemnts in the store"""

    return JSONResponse(documents.list())


async def list_documents_for_user(request):
    """List docuemnts in the store for a given user"""
    user_id = request.path_params["id"]

    return JSONResponse(documents.list_verified(user_id))


async def list_annotations_for_doc(request):
    """list annotations for a given document"""
    doc_id = request.path_params["id"]

    list = an.list_annotations(doc_id)

    return JSONResponse(list)


async def new_annotation(request):
    """add a new annotation to a given doc id"""
    doc_id = request.path_params["id"]

    # json: {'User':[userId],"Content":[any content for the annotation]}
    body_data = await request.body()

    # verify file
    if verify_json(body_data) == True:
        response = id = an.new_annotation(doc_id, body_data)
    else:
        return JSONResponse(ERRORS["json_error"])


async def get_annotation(request):
    """get a specific annotation by its ID"""

    annotation_id = request.path_params["id"]

    annotation = an.get_annotation(annotation_id)

    return JSONResponse(annotation)


def verify_user_yubi(request):
    """check a user email against a registered key"""
    user_mail = request.path_params["mail"]

    otp = request.path_params["otp"]

    verification = yubi.verify_email(user_mail, otp)

    return JSONResponse(verification)


async def error_template(request, exc):  # scan:ignore
    """Returns an error template."""
    error_codes = {
        404: "Sorry, the page you're looking for isn't here.",
        500: "Internal Server error.",
    }
    status_code = exc.status_code
    if status_code in error_codes:
        error_message = error_codes[status_code]
    else:
        error_message = "Unknown error."
    return (  # scan:ignore
        "layout/error.html",
        {
            "request": request,
            "error_code": status_code,
            "error_message": error_message,
        },
    )


routes = [
    Route("/notifications/get", get_notifications, methods=["GET", "POST"]),
    Route("/notifications/append", append_notification, methods=["GET", "POST"]),
    Route("/documents/new", new_document, methods=["GET", "POST"]),
    Route("/documents/read/{id}", search_document, methods=["GET", "POST"]),
    Route("/documents/list", list_documents, methods=["GET", "POST"]),
    Route("/documents/list/{id}", list_documents_for_user, methods=["GET", "POST"]),
    Route("/face/verify", verify_faces, methods=["GET", "POST"]),
    Route("/users/verify/{id}", verify_user_id, methods=["GET", "POST"]),
    Route("/users/yubikey/{mail}/{otp}", verify_user_yubi, methods=["GET", "POST"]),
    Route("/annotation/new/{id}", new_annotation, methods=["GET", "POST"]),
    Route("/annotation/list/{id}", list_annotations_for_doc, methods=["GET", "POST"]),
    Route("/annotation/get/{id}", get_annotation, methods=["GET", "POST"]),
]

middleware = [Middleware(CORSMiddleware, allow_origins=["*"])]


exception_handlers = {404: error_template, 500: error_template}

app = Starlette(
    debug=DEBUG,
    routes=routes,
    middleware=middleware,
    exception_handlers=exception_handlers,
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000, log_level="info")
