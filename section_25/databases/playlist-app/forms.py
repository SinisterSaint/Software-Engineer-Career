from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, TextAreaField, BooleanField
from wtforms.validators import InputRequired, Length, NumberRange, URL, Optional

"""Forms for playlist app."""




class PlaylistForm(FlaskForm):
    """Form for adding playlists."""
    # Add the necessary code to use this form
    name = StringField(
        "Playlist",
        validators=[InputRequired()],
    )

    discription = TextAreaField(
        "Decsrition",
        validators=[Optional(), Length(min=10)],
    )

    # Add the necessary code to use this form


class SongForm(FlaskForm):
    """Form for adding songs."""

    # Add the necessary code to use this form
    title = StringField(
        "title",
        validators=[InputRequired()],
    )

    name = StringField(
        "title",
        validators=[InputRequired()],
    )



# DO NOT MODIFY THIS FORM - EVERYTHING YOU NEED IS HERE
class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)
