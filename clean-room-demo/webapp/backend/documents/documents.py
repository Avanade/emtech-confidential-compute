import sys

sys.path.append("clean-room-demo/webapp/backend/ledger")

import os

import confidentialledger as cl


def append(content):
    """appends content to cl notifications, and returns a json"""
    try:
        id = cl.new_document(content)
    except:
        return {"Error": "The confidential data connection isn't working"}

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
