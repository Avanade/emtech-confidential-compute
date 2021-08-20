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
