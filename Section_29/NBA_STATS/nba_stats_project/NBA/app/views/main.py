from flask import Flask, render_template, Blueprint
from nba_api.stats.endpoints import *

main = Blueprint('main', __name__)

@main.route('/')
def home():
    
    return render_template('index.html')

@main.route('/leage_leaders')
def league_leaders():
    leaders = leagueleaders.LeagueLeaders().get_dict()
    leaders = leaders['resultSet']['rowSet']
    
    
    print(leaders)
    
    return render_template('league_leaders.html', league_leaders=leaders)

@main.route('/team_standings')
def team_standings():
    standings = leaguestandings.LeagueStandings().get_dict()
    standings = standings['resultSets'][0]['rowSet']
    
    return render_template('team_standings.html', team_standings=standings)