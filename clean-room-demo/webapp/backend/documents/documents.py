import sys
import json

sys.path.append("clean-room-demo/webapp/backend/ledger")
sys.path.append("clean-room-demo/webapp/backend/sql")


import os

import ledger.confidentialledger as cl
import sql.sqlinteractions as si


def append(content, name="no-name", description=""):
    """appends content to cl notifications, and returns a json"""
    try:
        id = cl.new_document(content)
    except:
        return {"Error": "The confidential data connection isn't working"}

    si.new_document(id, name, description)

    return {"document appended": id}


def search(id):
    """returns a json response with a document or error"""
    try:
        document = cl.get_document(id)
    except:
        errorMessage = "The document was not found"
        return {"Error": errorMessage}

    # TODO - what is the best way to return this?
    return {"document bytes": document}


def list():
    """return json list of what is in the document store"""

    try:
        docs = si.list_documents()
    except:
        errorMessage = "The document store connection is not working"
        return {"Error": errorMessage}

    return {"documents": (str(docs))}


def list_verified(user_id):
    """return json of what is in the document store that the user is autherised to see"""

    try:
        docs = si.list_documents_verified(user_id)
    except:
        errorMessage = "The document store connection is not working"
        return {"Error": errorMessage}

    return {"documents": (str(docs))}
