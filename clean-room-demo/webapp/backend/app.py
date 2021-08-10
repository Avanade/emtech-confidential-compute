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
from starlette.middleware.gzip import GZipMiddleware
from starlette.config import Config
import aiofiles
import uvicorn
from datetime import datetime, timedelta
from urllib.parse import quote
import json

import confidentialledger as cl

templates = Jinja2Templates(directory="templates")

config = Config(".env")
DEBUG = config("DEBUG", cast=bool, default=False)


async def get_notifications(request):
    # get all notifictions
    try:
        latest_data = cl.read_all_notifications()
    except:
        errorMessage = "The confidential data connection isn't working"
        return JSONResponse({"Error": errorMessage})

    return_json = {}
    return_json.update({"notifications": json.loads(latest_data)})

    return JSONResponse(return_json)


async def append_notification(request):
    # append a new notification

    body_data = await request.body()
    new_guid = uui

    # verify json
    try:
        json.loads(body_data)
    except:
        return JSONResponse({"error": "Body is not a valid json"})

    try:
        returndata = cl.new_notification(body_data)
    except:
        errorMessage = "The confidential data connection isn't working"
        return JSONResponse({"Error": errorMessage})

    return JSONResponse({"notification appended": returndata})


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
    return templates.TemplateResponse(  # scan:ignore
        "layout/error.html",
        {
            "request": request,
            "error_code": status_code,
            "error_message": error_message,
        },
    )


routes = [
    Route("/favicon.ico", FileResponse("static/favicon.ico")),
    Route("/notifications/get", get_notifications, methods=["GET", "POST"]),
    Route("/notifications/append", append_notification, methods=["GET", "POST"]),
    Mount(
        "/static",
        app=StaticFiles(directory="static"),
        name="static",
    ),
]

middleware = [
    Middleware(GZipMiddleware, minimum_size=500),
    Middleware(
        uvicorn.middleware.proxy_headers.ProxyHeadersMiddleware, trusted_hosts="*"
    ),
]

exception_handlers = {404: error_template, 500: error_template}

app = Starlette(
    debug=DEBUG,
    routes=routes,
    middleware=middleware,
    exception_handlers=exception_handlers,
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000, log_level="info")
