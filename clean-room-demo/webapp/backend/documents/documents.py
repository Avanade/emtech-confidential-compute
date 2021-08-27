import sys
sys.path.append("clean-room-demo/webapp/backend/ledger")
sys.path.append("clean-room-demo/webapp/backend/sql")


import os

import confidentialledger as cl
import sql.sqlinteractions as si


def append(content,name='no-name',description=''):
    """appends content to cl notifications, and returns a json"""
    try:
        id = cl.new_document(content)
    except:
        return {"Error": "The confidential data connection isn't working"}

    si.new_document(id,name,description)

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
