"""Forms for playlist app."""

from wtforms import validators, StringField, SelectField, TextAreaField
from flask_wtf import FlaskForm


class PlaylistForm(FlaskForm):
    """Form for adding playlists."""

    name = StringField('Name', validators=[validators.DataRequired()])
    description = TextAreaField('Description')


class SongForm(FlaskForm):
    """Form for adding songs."""

    title = StringField('Title', validators=[validators.DataRequired()])
    artist = StringField('Artist', validators=[validators.DataRequired()])


class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)
