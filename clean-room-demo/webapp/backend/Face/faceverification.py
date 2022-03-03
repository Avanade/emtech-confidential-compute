import requests
import json
from dotenv import load_dotenv
import os
import base64
import io


def get_face_key():
    """return face key and url"""
    load_dotenv()
    key = os.getenv("FACE_KEY")
    url = os.getenv("FACE_URL")

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


def get_face_id_2(image_bytes):

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
        face_id_1 = json.loads(r.text)[0]["faceId"]
    except:
        print("No Face in the given image")
        raise ValueError("No Face in the given image")
    try:
        face_id_2 = json.loads(r.text)[1]["faceId"]
    except:
        print("No second Face in the given image")
        raise ValueError("Only one face in the given image")

    return face_id_1, face_id_2


def validate_face_ids(id1, id2):
    """compare two face ids and return a verification bool and confidence score"""

    url, key = get_face_key()
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


def validate_face_bytes(bytes_1, bytes_2):

    id1 = get_face_id(bytes_1)
    id2 = get_face_id(bytes_2)

    return validate_face_ids(id1, id2)


def validate_face_bytes_one_image(bytes_1):

    id1, id2 = get_face_id_2(bytes_1)

    return validate_face_ids(id1, id2)


def verify_from_json(json_data):
    """verify faces from teh request body and return the json with validation confidence"""

    images = json.loads(json_data)

    image_1_b64 = images["image1"]
    image_2_b64 = images["image2"]

    image_1_bytes = io.BytesIO(base64.b64decode(image_1_b64))
    image_2_bytes = io.BytesIO(base64.b64decode(image_2_b64))

    return validate_face_bytes(image_1_bytes, image_2_bytes)


def verify_from_json_one_image(json_data):

    image = json.loads(json_data)
    image_b64 = image["image"]

    image_bytes = io.BytesIO(base64.b64decode(image_b64))

    return validate_face_bytes_one_image(image_bytes)


"""with open(
    "/Users/ferguskidd/Desktop/Photo on 03-03-2022 at 13.34 #3.jpg", "rb"
) as image:
    f = image.read()
    body1 = bytearray(f)
    b64string1 = base64.b64encode(f)


b64string1 = base64.encodebytes(f).decode("utf-8")

json_test = body = {"image": b64string1}

verify_from_json_one_image(json.dumps(json_test))
"""
