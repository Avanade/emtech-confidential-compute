import requests
import json
from dotenv import load_dotenv
import os


def get_face_key():
    """return face key and url"""
    load_dotenv()
    key = os.getenv("FACE_KEY")
    url = os.geenc("FACE_URL")

    return url, key


def get_face_id(image_bytes):
    """get a face id for a given image in bytes"""
    url, key = get_face_key()

    headers = {
        # Request headers
        "Content-Type": "application/octet-stream",
        "Ocp-Apim-Subscription-Key": key,
    }

    r = requests.post(
        f"https://{url}/face/v1.0/detect",
        data=image_bytes,
        headers=headers,
    )

    try:
        face_id = json.loads(r.text)[0]["faceId"]
    except:
        raise ValueError("No Face in the given image")

    return face_id


def validate_face_ids(id1, id2):
    """compare two face ids and return a verification bool and confidence score"""

    body = {"faceId1": id1, "faceId2": id2}

    headers = {
        # Request headers
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": key,
    }

    r = requests.post(
        f"https://{url}/face/v1.0/verify",
        data=json.dumps(body),
        headers=headers,
    )

    return r.text


def validate_face_bytes(bytes1, bytes2):

    id1 = get_face_id(bytes1)
    id2 = get_face_id(bytes2)

    return validate_face_ids(id1, id2)
