from dotenv import load_dotenv
import os
import requests


def get_layout_url():
    load_dotenv()

    return os.getenv("FR_LAYOUT_URL")


def test_layout_connection():
    """returns true if the contianer is alive, false if not"""
    print(get_layout_url())

    r = requests.get("http://" + get_layout_url() + "/ContainerLiveness")

    if r.status_code == 200:
        return True
    else:
        return False
