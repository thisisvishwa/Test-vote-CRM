```python
import sqlite3
from sqlite3 import Error

def create_connection():
    conn = None;
    try:
        conn = sqlite3.connect(':memory:')       
        print(sqlite3.version)
    except Error as e:
        print(e)
    
    if conn:
        return conn

def close_connection(conn):
    conn.close()

def add_request(conn, request):
    sql = ''' INSERT INTO requests(name, description, associated_voter, date_submitted, location, status)
              VALUES(?,?,?,?,?,?) '''
    cur = conn.cursor()
    cur.execute(sql, request)
    return cur.lastrowid

def remove_request(conn, id):
    sql = 'DELETE FROM requests WHERE id=?'
    cur = conn.cursor()
    cur.execute(sql, (id,))

def update_request(conn, request):
    sql = ''' UPDATE requests
              SET name = ? ,
                  description = ? ,
                  associated_voter = ? ,
                  date_submitted = ? ,
                  location = ? ,
                  status = ? 
              WHERE id = ?'''
    cur = conn.cursor()
    cur.execute(sql, request)

def get_request_details(conn, id):
    cur = conn.cursor()
    cur.execute("SELECT * FROM requests WHERE id=?", (id,))

    rows = cur.fetchall()

    for row in rows:
        print(row)
```