```python
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash

def connect_db():
    return sqlite3.connect('database.db')

def create_users_table():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

def register_user(username, password):
    conn = connect_db()
    cursor = conn.cursor()
    hashed_password = generate_password_hash(password)
    cursor.execute('''
        INSERT INTO users (username, password) VALUES (?, ?)
    ''', (username, hashed_password))
    conn.commit()
    conn.close()

def check_user(username, password):
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('''
        SELECT password FROM users WHERE username = ?
    ''', (username,))
    result = cursor.fetchone()
    conn.close()
    if result is None:
        return False
    return check_password_hash(result[0], password)

create_users_table()
```