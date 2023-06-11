from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from models import PlayerStats

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://saphanley:prophetsaint1120@localhost:5432/player_stats_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# from models import PlayerStats  # Remove this line

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['GET'])
def results():
    player_name = request.args.get('player_name')
    stat_category = request.args.get('stat_category')

    # Perform the search query based on the user's input
    results = PlayerStats(db).query.filter_by(player_name=player_name, stat_category=stat_category).all()

    return render_template('results.html', results=results)

if __name__ == '__main__':
    app.run()

