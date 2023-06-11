from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
db = SQLAlchemy()

class NBAdatabase(db.Model):
    """Sports"""

    __tablename__ = "League Leaders"

    Players_ID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Rank = db.Column(db.Integer, nullable=False)
    Player = db.Column(db.Text, nullable=False)
    Team_ID = db.Column(db.Integer)
    Team = db.Column(db.Text, nullable=False)
    GP = db.Column(db.Integer, nullable=False)
    MIN = db.Column(db.Integer, nullable=False)
    FGM = db.Column(db.Integer, nullable=False)
    FGA = db.Column(db.Integer, nullable=False)
    FG_PCT = db.Column(db.Integer, nullable=False)
    FG3M = db.Column(db.Integer, nullable=False)
    FG3A = db.Column(db.Integer, nullable=False)
    FG3_PCT = db.Column(db.Integer, nullable=False)
    FTM = db.Column(db.Integer, nullable=False)
    FTA = db.Column(db.Integer, nullable=False)
    FT_PCT = db.Column(db.Integer, nullable=False)
    OREB = db.Column(db.Integer, nullable=False)
    DREB = db.Column(db.Integer, nullable=False)
    REB = db.Column(db.Integer, nullable=False)
    AST = db.Column(db.Integer, nullable=False)
    STL = db.Column(db.Integer, nullable=False)
    BLK = db.Column(db.Integer, nullable=False)
    TOV = db.Column(db.Integer, nullable=False)
    PTS = db.Column(db.Integer, nullable=False)
    EFF = db.Column(db.Integer, nullable=False)


class Players(db.Model):
    """Players"""

    __tablename__ = "Players"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    TeamID = db.Column(db.Integer)
    Player = db.Column(db.Text, nullable=False)
    Position = db.Column(db.Text, nullable=False)
    Number = db.Column(db.Integer, nullable=False)
    Height = db.Column(db.Float, nullable=False)
    Weight = db.Column(db.Float, nullable=False)


class User(db.Model):
    """User in the system."""

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text, nullable=False, unique=True)
    email = db.Column(db.Text, nullable=False, unique=True)
    password = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f"<User #{self.id}: {self.username}, {self.email}>"

    @classmethod
    def signup(cls, username, email, password):
        """Sign up user.

        Hashes password and adds user to system.
        """

        hashed_pwd = bcrypt.generate_password_hash(password).decode('UTF-8')

        user = User(
            username=username,
            email=email,
            password=hashed_pwd,
        )

        db.session.add(user)
        return user

    @classmethod
    def authenticate(cls, username, password):
        """Find user with `username` and `password`.

        This is a class method (call it on the class, not an individual user.)
        It searches for a user whose password hash matches this password
        and, if it finds such a user, returns that user object.

        If can't find matching user (or if password is wrong), returns False.
        """

        user = cls.query.filter_by(username=username).first()

        if user and bcrypt.check_password_hash(user.password, password):
            return user

        return False


def connect_db(app):
    """Connect this database to provided Flask app."""

    db.app = app
    db.init_app(app)
