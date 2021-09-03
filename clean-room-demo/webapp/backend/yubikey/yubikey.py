from dotenv import load_dotenv
import os

from yubico_client import Yubico


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


def check_key_validity(otp):
    """check the key identifier is a valid user"""

    otp_identifier = otp[0:12]
    print(otp_identifier)

    return True


print(verify("")
