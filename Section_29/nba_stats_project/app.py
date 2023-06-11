from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://saphanley:prophetsaint1120@localhost:5432/player_stats_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key'

db = SQLAlchemy(app)

class Player(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rank = db.Column(db.Integer)
    player_id = db.Column(db.Integer)
    player_name = db.Column(db.String)
    team_id = db.Column(db.Integer)
    team_name = db.Column(db.String)

class SearchForm(FlaskForm):
    player_name = StringField('Player Name')
    submit = SubmitField('Search')

@app.before_request
def create_tables():
    db.create_all()

@app.route('/', methods=['GET', 'POST'])
def index():
    form = SearchForm()

    if form.validate_on_submit():
        player_name = form.player_name.data
        players = Player.query.filter(Player.player_name.ilike(f'%{player_name}%')).all()
        return render_template('index.html', form=form, players=players)

    return render_template('index.html', form=form)

if __name__ == '__main__':
    app.run(debug=True)
