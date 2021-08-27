# space for user interations
import sys

sys.path.append("clean-room-demo/webapp/backend/sql")
import sql.sqlinteractions as si


def status_return(status):
    if status == True:
        return {"verification status": "True"}
    else:
        return {"error": "user is not validated"}


def verify(id):
    """verify a user id exists in the system"""

    status = si.check_access(id)

    return status_return(status)


def verify_doc_access(user_id, doc_id):
    """verify user has access to a specific document"""

    status = si.check_doc_access(user_id, doc_id)

    return status_return(status)
