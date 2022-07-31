import pyrebase
from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
config = {

  "apiKey": "AIzaSyBivBS2AG5ddQN5mX9fXHC8kHnN9bbc50Q",

  "authDomain": "mcs-miniproject.firebaseapp.com",

  "databaseURL": "https://mcs-miniproject-default-rtdb.firebaseio.com",

  "projectId": "mcs-miniproject",

  "storageBucket": "mcs-miniproject.appspot.com",

  "messagingSenderId": "140083419904",

  "appId": "1:140083419904:web:8f3339a2d972a98a4ef1e5"

};
firebase = pyrebase.initialize_app(config)

import collections

@app.route('/')
def getData():
    db = firebase.database()
    text = db.child("display").get()
    text = list(text.val().items())
    last_text = text[-1]
    last_text_child = last_text[-1]
    return str(last_text_child)

if __name__ == '__main__':
    app.run()