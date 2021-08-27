# space for user interations
import sys

sys.path.append("clean-room-demo/webapp/backend/sql")
import sql.sqlinteractions as si


def verify(id):
    """verify a user id exists in the system"""

    status = si.check_access(id)

    if status == True:
        return {"verification status": "True"}
    else:
        return {"error": "user is not validated"}
