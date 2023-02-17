"""Models for Sports Database App"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Sport(db.model):
    """Sports"""

    __tablename__ = "Sports"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Name = Name = db.Column(db.Text, nullable=False)

class Team(db.model):
    """Team"""

    __tablename__ = "Team"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    SportID = db.Column(db.Integer, db.ForeignKey("sport.id") primary_key=True, autoincrement=True)
    Location = db.Column(db.Text, primary_key=True)
    TeamMembers = db.Column(db.Text, primary_key=True)
    Competitions =  db.Column(db.Text, primary_key=True)

class Players(db.Model):
    """Players"""

    __tablename__ = "Players"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    TeamID = db.Column(db.Integer, db.ForeignKey("team.id"))
    Name = db.Column(db.Text, nullable=False)
    Position = db.Column(db.Text, nullable=False)
    Number = db.Column(db.Integer, nullable=False)
    Height = db.Column(db.Float, nullable=False)
    Weight = db.Column(db.Float, nullable=False)
    League = db.Column(db.Text, nullable=False)








def connect_db(app):
    """Function to connect to database"""

    db.app = app
    db.init_app(app)