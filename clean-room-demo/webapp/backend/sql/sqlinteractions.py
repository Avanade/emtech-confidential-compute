import os
import sqlalchemy as sa
from sqlalchemy import create_engine
from dotenv import load_dotenv
import urllib
import random
from datetime import datetime
import time


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


print(check_access(1))
