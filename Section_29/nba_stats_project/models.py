from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Player(db.Model):
    __tablename__ = 'players'
    id = db.Column(db.Integer, primary_key=True)
    rank = db.Column(db.Integer)
    player_id = db.Column(db.Integer)
    player_name = db.Column(db.String)
    team_id = db.Column(db.Integer)
    team_name = db.Column(db.String)
    # Add more columns for other player statistics

    def __repr__(self):
        return f"<Player(id={self.id}, player_name='{self.player_name}')>"
