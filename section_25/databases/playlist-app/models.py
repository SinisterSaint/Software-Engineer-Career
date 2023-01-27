"""Models for Playlist app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Playlist(db.Model):
    """Playlist."""
  
   

    # ADD THE NECESSARY CODE HERE
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=False)

class Song(db.Model):
    """Song."""
  

    # ADD THE NECESSARY CODE HERE
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)    
    artist = db.Column(db.Text, nullable=False)

class PlaylistSong(db.Model):
    """Mapping of a playlist to a song."""
    

    # ADD THE NECESSARY CODE HERE
    id = db.Column(db.Integer, primary_key=True)
    playlist_id = db.Column(db.Integer, primary_key=True)
    song_id = db.Column(db.Integer, primary_key=True)
# DO NOT MODIFY THIS FUNCTION
def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)
