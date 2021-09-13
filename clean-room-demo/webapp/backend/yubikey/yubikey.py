from dotenv import load_dotenv
import os
import sys

from yubico_client import Yubico

sys.path.append("clean-room-demo/webapp/backend/sql")
import sqlinteractions as si


def get_keys():
    """return face key and url"""
    load_dotenv()
    client_id = os.getenv("CLIENT_ID")
    key = os.getenv("SECRET_KEY")

    return client_id, key


def verify(otp):
    client_id, key = get_keys()

    client = Yubico(client_id, key)
    try:
        result = client.verify(str(otp))
    except:
        return {"verification": "false"}

    if check_key_validity(otp) == True:
        return {"verification": "true"}


def verify_email(user_mail, otp):
    client_id, key = get_keys()

    client = Yubico(client_id, key)
    try:
        result = client.verify(str(otp))
    except:
        return {"verification": "false"}

    if check_key_user_combo(user_mail, otp) == True:
        return {"verification": "true"}


def check_key_validity(otp):
    """check the key identifier is a valid user"""

    otp_identifier = otp[0:12]

    user = si.get_user_from_yubi(otp_identifier)

    if user == None:
        return False

    return True


def check_key_user_combo(user_mail, otp):
    """check the key identifier against a valid user"""

    otp_identifier = otp[0:12]

    user = si.validate_user_from_yubi(user_mail, otp_identifier)

    if user == None:
        return False

    return True


print(verify("vvuvdvnhnnlktcrvivrrhcccudlnijeunhekucrbkeut"))
