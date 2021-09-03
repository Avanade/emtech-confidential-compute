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
        if result == True:
            return {"verification": "true"}
    except:
        return {"verification": "false"}
