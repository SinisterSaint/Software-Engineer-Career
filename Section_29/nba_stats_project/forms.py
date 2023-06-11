from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class SearchForm(FlaskForm):
    player_name = StringField('Player Name')
    submit = SubmitField('Search')

