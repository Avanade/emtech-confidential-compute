import sys

sys.path.append("clean-room-demo/webapp/backend/sql")

import sql.sqlinteractions as si


def list_annotations(doc_id):
    """List notifications for a given user"""
    try:
        annotations = si.get_annotation(doc_id)
    except:
        errorMessage = "The annotation store connection is not working"
        return {"Error": errorMessage}

    return {"annotations": (str(annotations))}


def new_annotation(doc_id, body_json):
    """add a new annotation for a doc_id from a user with added content"""

    user_id = body_json["User"]
    content = body_json["Content"]

    try:
        id = si.new_annotation(doc_id, user_id, content)
    except:
        errorMessage = "The annotation store connection is not working"
        return {"Error": errorMessage}

    return {"annotation ID": (str(id))}


def get_annotation(annotation_id):

    try:
        annotation = si.get_named_annotation(annotation_id)
    except:
        errorMessage = "The annotation store connection is not working"
        return {"Error": errorMessage}

    return {"annotation": (str(annotation))}
