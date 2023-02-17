"Flask App for Sports Database"
from flask import pandas as pd
pd.set_option('display.max_columns', None) #To see all columns in a wide DataFrame
from flask import Flask, request, json, render_template, redirect, jsonify
from models import db, connect_db, Players, Sport, Team






app = Flask(__name__) 

app.config['SQLACLHEMY_DATABASE_URI'] = 'postgresql:///sportsdatabase'
app.config['SECRET_KEY'] = "thesecretkey"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


connect_db(app)
db.create_all()

# Create a login and register
# Create profile route oprional
# Create stats route(Stats.html)
# Create get route for retrieving data from nba.com




@app.route("/")
def root():
    """Render Homepage"""
    
    return render_template("index.html")

@app.route("/api/")