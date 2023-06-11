from flask import Flask, render_template, redirect, flash, session, g
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://saphanley:prophetsaint1120@localhost:5432/sportsdatabase"
app.config["SECRET_KEY"] = "thesecretkey"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


class LeagueLeaders(db.Model):
    __tablename__ = "league_leaders"

    id = db.Column(db.Integer, primary_key=True)
    rank = db.Column(db.Integer, nullable=False)
    player = db.Column(db.Text, nullable=False)
    team = db.Column(db.Text, nullable=False)
    gp = db.Column(db.Integer, nullable=False)
    min = db.Column(db.Integer, nullable=False)
    fgm = db.Column(db.Integer, nullable=False)
    fga = db.Column(db.Integer, nullable=False)
    fg_pct = db.Column(db.Float, nullable=False)
    fg3m = db.Column(db.Integer, nullable=False)
    fg3a = db.Column(db.Integer, nullable=False)
    fg3_pct = db.Column(db.Float, nullable=False)
    ftm = db.Column(db.Integer, nullable=False)
    fta = db.Column(db.Integer, nullable=False)
    ft_pct = db.Column(db.Float, nullable=False)
    oreb = db.Column(db.Integer, nullable=False)
    dreb = db.Column(db.Integer, nullable=False)
    reb = db.Column(db.Integer, nullable=False)
    ast = db.Column(db.Integer, nullable=False)
    stl = db.Column(db.Integer, nullable=False)
    blk = db.Column(db.Integer, nullable=False)
    tov = db.Column(db.Integer, nullable=False)
    pts = db.Column(db.Integer, nullable=False)
    eff = db.Column(db.Integer, nullable=False)


@app.route("/")
def home():
    # Fetch data from the database
    try:
        leaders = LeagueLeaders.query.all()
    except Exception as e:
        flash("Error retrieving data from the database.", "error")
        leaders = []

    return render_template("home.html", leaders=leaders)


@app.route("/users/signup", methods=["GET", "POST"])
def signup():
    # Handle signup logic
    # ...


@app.route("/users/login", methods=["GET", "POST"])
def login():
    # Handle login logic
    # ...


if __name__ == "__main__":
    app.run()
