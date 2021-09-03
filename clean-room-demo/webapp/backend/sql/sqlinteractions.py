import os
import sqlalchemy as sa
from sqlalchemy import create_engine
from dotenv import load_dotenv
import urllib
import random
from datetime import datetime
import time
import uuid


def sql_engine():
    load_dotenv()  # take environment variables from .env.
    server = os.getenv("SERVER_NAME")
    database = os.getenv("DB_NAME")
    username = os.getenv("USERNAME")
    password = os.getenv("PASSWORD")
    port = os.getenv("PORT")
    driver = "{ODBC Driver 17 for SQL Server}"
    odbc_str = (
        "DRIVER="
        + driver
        + ";SERVER="
        + server
        + ";PORT="
        + port
        + ";UID="
        + username
        + ";DATABASE="
        + database
        + ";PWD="
        + password
    )
    connect_str = "mssql+pyodbc:///?odbc_connect=" + urllib.parse.quote_plus(odbc_str)
    engine = create_engine(connect_str)
    return engine


def get_all(table_name):
    engine = sql_engine()
    conn = engine.connect()
    metadata = sa.MetaData()
    metadata.reflect(bind=engine)
    table = metadata.tables[table_name]
    s = table.select()
    rs = conn.execute(s)
    return rs


def check_access(user_id):
    """check access of a specific user Id, return True or False"""
    engine = sql_engine()
    conn = engine.connect()
    metadata = sa.MetaData()
    metadata.reflect(bind=engine)
    result = engine.execute(
        f"SELECT * FROM [dbo].[Users] WHERE UserID = {user_id}"
    ).fetchall()
    if result != []:
        return True
    else:
        return False


def check_doc_access(user_id, doc_id):
    """check access of a specific user Id, return True or False"""
    engine = sql_engine()
    conn = engine.connect()
    metadata = sa.MetaData()
    metadata.reflect(bind=engine)
    result = engine.execute(
        f"SELECT * FROM [dbo].[Users] WHERE UserID = {user_id} AND DocumentStoreID = {doc_id}"
    ).fetchall()

    # TODO: check user status? Currently assume all access is equal - deleted if redacted

    if result != []:
        return True
    else:
        return False


def new_document(id, name, description):
    """add document information to the document store"""
    engine = sql_engine()
    conn = engine.connect()
    metadata = sa.MetaData()
    metadata.reflect(bind=engine)

    # datetime object containing current date and time
    now = datetime.now()
    # dd/mm/YY H:M:S
    time_stamp = now.strftime("%Y-%m-%d %H:%M:%S")

    result = engine.execute(
        f"INSERT INTO [dbo].[Document_Store] (DocumentStoreID, DocumentStoreName, DocumentDescription, IsActive,CreateDate) VALUES ({id},'{name}', '{description}', 1, {time_stamp});"
    ).fetchall()

    return id


def list_documents():
    """get a list of documents in the store"""
    engine = sql_engine()
    conn = engine.connect()
    metadata = sa.MetaData()
    metadata.reflect(bind=engine)

    # datetime object containing current date and time
    now = datetime.now()
    # dd/mm/YY H:M:S
    time_stamp = now.strftime("%Y-%m-%d %H:%M:%S")

    result = engine.execute(f"SELECT * FROM [dbo].[Document_Store]").fetchall()

    return result


def list_documents_verified(user_id):
    """get a list of documents the user is verified to see"""

    engine = sql_engine()
    conn = engine.connect()
    metadata = sa.MetaData()
    metadata.reflect(bind=engine)

    result = engine.execute(
        f"SELECT A.* FROM [dbo].[Document_Store] A INNER JOIN [dbo].[Document_Store_Acess] B on A.DocumentStoreID = B.DocumentStoreID WHERE B.UserId = '{user_id}'"
    ).fetchall()

    return result


def new_annotation(doc_id, user_id, content):
    """add annotation"""

    id = str(uuid.uuid4())

    engine = sql_engine()
    conn = engine.connect()
    metadata = sa.MetaData()
    metadata.reflect(bind=engine)

    # datetime object containing current date and time
    now = datetime.now()
    # dd/mm/YY H:M:S
    time_stamp = now.strftime("%Y-%m-%d %H:%M:%S")

    result = engine.execute(
        f"INSERT INTO [dbo].[Annotations] (AnnotationID, DocumentID, Contents, CreateDate,CreatedByUserID) VALUES ({id},{doc_id}, '{content}', {time_stamp}, {user_id});"
    ).fetchall()

    return id


def get_annotation(doc_id):
    """Get all annotations for a doc_id"""

    engine = sql_engine()
    conn = engine.connect()
    metadata = sa.MetaData()
    metadata.reflect(bind=engine)

    result = engine.execute(
        f"SELECT * FROM [dbo].[Annotations] WHERE DocumentID = {doc_id};"
    ).fetchall()

    return result


def get_named_annotation(annotation_id):
    """Get a named annotation by annotation ID"""
    engine = sql_engine()
    conn = engine.connect()
    metadata = sa.MetaData()
    metadata.reflect(bind=engine)

    result = engine.execute(
        f"SELECT * FROM [dbo].[Annotations] WHERE AnnotationID = {annotation_id};"
    ).fetchall()

    return result
