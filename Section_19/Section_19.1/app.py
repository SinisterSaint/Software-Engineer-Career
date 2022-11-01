from flask import Flask 

app = Flask(__name__)

@app.route('/hello')
def say_hello():
    return "hello there!"
