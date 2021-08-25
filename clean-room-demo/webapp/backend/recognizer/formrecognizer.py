from dotenv import load_dotenv
import os
import requests
import sys

sys.path.append("clean-room-demo/webapp/backend/ledger")

import confidentialledger as cl

PATHS = {"receipt": "prebuilt/receipt", "layout": "layout"}


def get_FR_url(service):
    load_dotenv()
    if service == "layout":
        url = os.getenv("FR_LAYOUT_URL")
    elif service == "reciept":
        url = os.getenv("FR_RECEIPT_URL")

    return url


def test_connection(service):
    """returns true if a given contianer is alive, false if not"""
    url = get_FR_url(service)
    r = requests.get(f"http://{url}/ContainerLiveness")

    if r.status_code == 200:
        return True
    else:
        return False


def FR_post_document(service, doc_Id):
    """submits a document to a FR service and returns the operation Id"""
    document = cl.get_document(doc_Id)
    url = get_FR_url(service)
    path = PATHS[service]

    headers = {
        # Request headers
        "Content-Type": "application/png"  # TODO: set type
    }

    body = document

    r = requests.post(
        f"http://{url}/formrecognizer/v2.1/{path}/analyze?%s",
        data=body,
        headers=headers,
    )

    if r.status == 202:
        returned_url = r.headers["Operation-Location"]
        op_id = returned_url.split("/")[-1]

        return op_id

    else:
        return "Error submitting document to container"


def FR_get_results(service, op_Id):
    """retrieves the content from FR for a given service and operation Id"""
    url = get_FR_url(service)
    path = PATHS[service]

    r = requests.get(
        (f"http://{url}/formrecognizer/v2.1/{path}/analyzeResults/{op_Id}")
    )

    return r.content
