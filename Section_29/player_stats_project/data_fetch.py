import psycopg2
import requests

# Connect to PostgreSQL database
conn = psycopg2.connect(
    host="localhost",
    port="5432",
    database="player_stats_db",
    user="saphanley",
    password="prophetsaint1120"
)

cursor = conn.cursor()

# Create player_stats table
create_table_query = """
    CREATE TABLE IF NOT EXISTS player_stats (
        id SERIAL PRIMARY KEY,
        player_name TEXT,
        team TEXT,
        points_per_game REAL
    )
"""
cursor.execute(create_table_query)
conn.commit()

table_name = 'player_stats'
cursor.execute("SELECT EXISTS(SELECT 1 FROM information_schema.tables WHERE table_name=%s)", (table_name,))
result = cursor.fetchone()[0]

if result:
    print("Table exists")
else:
    print("Table does not exist")


# Fetch data from the NBA API
# https://stats.nba.com/stats/leagueLeaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2022-23&SeasonType=Regular%20Season&StatCategory=PTS
BASE_API_URL = "https://stats.nba.com/stats/leagueLeaders"
params = {
    "LeagueID": "00",
    "PerMode": "PerGame",
    "Scope": "S",
    "Season": "2022-23",
    "SeasonType": "Regular Season",
    "StatCategory": "PTS"
}

response = requests.get(BASE_API_URL, params=params)
# print(response.content)

if response.status_code == 200:
    data = response.json()
    # Extract relevant information from the API response and store it in the database
    insert_query = """
        INSERT INTO player_stats (player_name, team, points_per_game)
        VALUES (%s, %s, %s)
    """
    values = [(row[2], row[3], row[22]) for row in data["resultSet"]["rowSet"]]

    cursor.executemany(insert_query, values)
    conn.commit()
else:
    print("Error occurred while fetching data from the API.")
    print("Status code:", response.status_code)

# Close the database connection
cursor.close()
conn.close()