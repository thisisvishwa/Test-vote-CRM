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

def add_voter(conn, voter):
    sql = ''' INSERT INTO voters(full_name,date_of_birth,phone_number,email,instagram,facebook,key_issues,data_consent,address,location,referral,vote_intent)
              VALUES(?,?,?,?,?,?,?,?,?,?,?,?) '''
    cur = conn.cursor()
    cur.execute(sql, voter)
    return cur.lastrowid

def remove_voter(conn, id):
    sql = 'DELETE FROM voters WHERE id=?'
    cur = conn.cursor()
    cur.execute(sql, (id,))

def update_voter(conn, voter):
    sql = ''' UPDATE voters
              SET full_name = ? ,
                  date_of_birth = ? ,
                  phone_number = ? ,
                  email = ? ,
                  instagram = ? ,
                  facebook = ? ,
                  key_issues = ? ,
                  data_consent = ? ,
                  address = ? ,
                  location = ? ,
                  referral = ? ,
                  vote_intent = ? 
              WHERE id = ?'''
    cur = conn.cursor()
    cur.execute(sql, voter)

def get_voter_details(conn, id):
    cur = conn.cursor()
    cur.execute("SELECT * FROM voters WHERE id=?", (id,))

    rows = cur.fetchall()

    for row in rows:
        print(row)

def filter_voters(conn, filter_criteria):
    cur = conn.cursor()
    cur.execute("SELECT * FROM voters WHERE ?", (filter_criteria,))

    rows = cur.fetchall()

    for row in rows:
        print(row)

def sort_voters(conn, sort_criteria):
    cur = conn.cursor()
    cur.execute("SELECT * FROM voters ORDER BY ?", (sort_criteria,))

    rows = cur.fetchall()

    for row in rows:
        print(row)
```