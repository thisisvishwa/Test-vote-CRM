```python
import sqlite3

def create_connection():
    conn = None;
    try:
        conn = sqlite3.connect('campaign_crm.db') # create a database connection to a SQLite database
        print(sqlite3.version)
    except Error as e:
        print(e)
    return conn

def create_table(conn, create_table_sql):
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
    except Error as e:
        print(e)

def main():
    database = r"campaign_crm.db"

    sql_create_voters_table = """ CREATE TABLE IF NOT EXISTS voters (
                                        id integer PRIMARY KEY,
                                        full_name text NOT NULL,
                                        dob text,
                                        phone text,
                                        email text,
                                        instagram text,
                                        facebook text,
                                        key_issues text,
                                        data_consent text,
                                        address text,
                                        location text,
                                        referral text,
                                        vote_intent text
                                    ); """

    sql_create_requests_table = """CREATE TABLE IF NOT EXISTS requests (
                                    id integer PRIMARY KEY,
                                    name text NOT NULL,
                                    description text NOT NULL,
                                    associated_voter integer NOT NULL,
                                    date_submitted text,
                                    location text,
                                    status text,
                                    FOREIGN KEY (associated_voter) REFERENCES voters (id)
                                );"""

    conn = create_connection()

    if conn is not None:
        create_table(conn, sql_create_voters_table)
        create_table(conn, sql_create_requests_table)
    else:
        print("Error! cannot create the database connection.")

if __name__ == '__main__':
    main()
```