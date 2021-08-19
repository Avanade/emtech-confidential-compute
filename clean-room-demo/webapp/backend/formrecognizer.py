from dotenv import load_dotenv
import os
import requests

import confidentialledger as cl


def get_layout_url():
    load_dotenv()

    return os.getenv("FR_LAYOUT_URL")


def test_layout_connection():
    """returns true if the contianer is alive, false if not"""
    url = get_layout_url()
    r = requests.get(f"http://{url}/ContainerLiveness")

    if r.status_code == 200:
        return True
    else:
        return False


def layout_post(doc_Id):
    """submits a document to FR layout and returns the operation Id"""
    document = cl.get_document(doc_Id)
    url = get_layout_url()

    headers = {
        # Request headers
        "Content-Type": "application/png"
    }

    body = document

    r = requests.post(
        f"http://{url}/formrecognizer/v2.1/layout/analyze?%s",
        data=body,
        headers=headers,
    )

    if r.status == 202:
        returned_url = r.headers["Operation-Location"]
        op_id = returned_url.split("/")[-1]

        return op_id

    else:
        return "Error submittign docuemnt to container"


def layout_results(op_Id):
    """retrieves the content from FR layout for a fiven operation Id"""
    url = get_layout_url()

    r = requests.get(
        (f"http://{url}/formrecognizer/v2.1/layout/analyzeResults/{op_Id}")
    )

    return r.content
