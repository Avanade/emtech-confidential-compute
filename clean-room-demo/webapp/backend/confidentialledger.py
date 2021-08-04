# Copyright (c) 2021 Avanade Inc.
# Copyright (c) 2021 Microsoft.

from dotenv import load_dotenv
from datetime import datetime
import json
import os
import uuid

from azure.confidentialledger import ConfidentialLedgerClient
from azure.identity import ClientSecretCredential
from azure.confidentialledger.identity_service import (
    ConfidentialLedgerIdentityServiceClient,
)


def get_ledger_creds():

    load_dotenv()

    client_id = os.getenv("CL_APP_ID")
    client_secret = os.getenv("CL_CLIENT_SC")  # scan:ignore
    tenant_id = os.getenv("AZURE_TENANT_ID")

    # Create a Credential Object
    credential = ClientSecretCredential(
        tenant_id=tenant_id, client_id=client_id, client_secret=client_secret
    )

    ledger_name = os.getenv("RESOURCE_NAME")

    identity_url = "https://identity.accledger.azure.com"
    ledger_url = "https://" + ledger_name + ".confidential-ledger.azure.com"

    return credential, ledger_name, identity_url, ledger_url


def get_ledger_client():

    credential, ledger_name, identity_url, ledger_url = get_ledger_creds()

    identity_client = ConfidentialLedgerIdentityServiceClient(identity_url)
    network_identity = identity_client.get_ledger_identity(ledger_id=ledger_name)

    ledger_tls_cert_file_name = "networkcert.pem"
    with open(ledger_tls_cert_file_name, "w") as cert_file:
        cert_file.write(network_identity.ledger_tls_certificate)

    ledger_client = ConfidentialLedgerClient(
        endpoint=ledger_url,
        credential=credential,
        ledger_certificate_path=ledger_tls_cert_file_name,
    )

    return ledger_client


def append_cl(data, guid, sub_ledger=None):

    data = append_meta_data(json.loads(data), guid)

    ledger_client = get_ledger_client()

    if sub_ledger == None:
        append_result = ledger_client.append_to_ledger(
            entry_contents=str((json.dumps(data)))
        )
    else:
        append_result = ledger_client.append_to_ledger(
            entry_contents=str((json.dumps(data))), sub_ledger_id=sub_ledger
        )

    return guid, append_result.transaction_id


def read_all():
    ledger_client = get_ledger_client()
    all = []
    for entry in ledger_client.get_ledger_entries():
        all.append([entry.contents, entry.transaction_id])

    return all


def read_all_of_type(type):
    """Read all from a sub ledger type"""
    ledger_client = get_ledger_client()
    all = []
    for entry in ledger_client.get_ledger_entries(sub_ledger_id=type):
        all.append([entry.contents, entry.transaction_id])

    return all


def read_all_notifications():
    """Get a full list of notifications"""
    return read_all_of_type("notifications")


def read_all_documents():
    """Get a full list of documents"""
    return read_all_of_type("documents")


def new_notification(content):
    """Append new notification to the ledger"""
    notifiction_id = str(uuid.uuid4())
    append_cl(content, notifiction_id, "notification")

    return notifiction_id


def new_document(blob):
    """Append a new document to the document ledger"""
    document_id = str(uuid.uuid4())
    append_cl(blob, document_id, "document")

    return document_id


def search_entries_guid(search_guid):
    """Returns a list of entries with the relavant guid"""
    returns = []

    ledger_client = get_ledger_client()
    entries = ledger_client.get_ledger_entries()

    for entry in entries:
        try:
            json_read = json.loads(str(entry.contents))
            if (json_read["Meta"]["guid"]) == search_guid:
                returns.append(entry.contents)

        except:
            # not a valid json
            pass

    return returns[0]


def search_entries_license(search_license):
    """Returns a json of entries with the relavant licese"""
    returns = {}

    ledger_client = get_ledger_client()
    entries = ledger_client.get_ledger_entries()

    for entry in entries:
        try:
            json_read = json.loads(str(entry.contents))
            if (json_read["Licence"]) == search_license:
                returns.update(json_read)

        except:
            # not a valid json
            pass

    return returns


def append_meta_data(content, guid):
    """appends new guid and timestamp to given json"""
    timestamp = str(datetime.now())

    meta = {"Meta": {"TimeStamp": timestamp, "guid": str(guid)}}

    content.update(meta)

    return content
