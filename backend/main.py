```python
from flask import Flask, request, jsonify
from database import init_db, db_session
from voter import Voter
from request import Request
from authentication import Authentication

app = Flask(__name__)
init_db()

@app.route('/voters', methods=['GET', 'POST', 'PUT', 'DELETE'])
def handle_voters():
    if request.method == 'GET':
        voters = Voter.query.all()
        return jsonify([voter.serialize for voter in voters]), 200
    elif request.method == 'POST':
        data = request.get_json()
        new_voter = Voter(**data)
        db_session.add(new_voter)
        db_session.commit()
        return jsonify(new_voter.serialize), 201
    elif request.method == 'PUT':
        data = request.get_json()
        voter = Voter.query.filter_by(id=data['id']).first()
        for key, value in data.items():
            setattr(voter, key, value)
        db_session.commit()
        return jsonify(voter.serialize), 200
    elif request.method == 'DELETE':
        data = request.get_json()
        voter = Voter.query.filter_by(id=data['id']).first()
        db_session.delete(voter)
        db_session.commit()
        return '', 204

@app.route('/requests', methods=['GET', 'POST', 'PUT', 'DELETE'])
def handle_requests():
    if request.method == 'GET':
        requests = Request.query.all()
        return jsonify([request.serialize for request in requests]), 200
    elif request.method == 'POST':
        data = request.get_json()
        new_request = Request(**data)
        db_session.add(new_request)
        db_session.commit()
        return jsonify(new_request.serialize), 201
    elif request.method == 'PUT':
        data = request.get_json()
        request = Request.query.filter_by(id=data['id']).first()
        for key, value in data.items():
            setattr(request, key, value)
        db_session.commit()
        return jsonify(request.serialize), 200
    elif request.method == 'DELETE':
        data = request.get_json()
        request = Request.query.filter_by(id=data['id']).first()
        db_session.delete(request)
        db_session.commit()
        return '', 204

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    auth = Authentication()
    if auth.authenticate(data['username'], data['password']):
        return '', 200
    else:
        return '', 401

if __name__ == '__main__':
    app.run(debug=True)
```