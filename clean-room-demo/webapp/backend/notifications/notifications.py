import sys

sys.path.append("../../ledger")


import os

cwd = os.getcwd()

print(cwd)

import confidentialledger as cl


def append(content):
    """appends content to cl notifications, and returns a json"""
    try:
        id = cl.new_notification(content)
    except:
        return {"Error": "The confidential data connection isn't working"}

    return {"notification appended": id}


def get_all():
    """gets all notifications and returns a json"""
    try:
        latest_data = cl.read_all_notifications()
    except:
        errorMessage = "The confidential data connection isn't working"
        return {"Error": errorMessage}

    return {"notifications": (latest_data)}


print(cl.read_all_notifications())
