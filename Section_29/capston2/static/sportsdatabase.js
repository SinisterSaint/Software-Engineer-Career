const fetch = require("node-fetch");
const { Pool } = require("pg");

const pool = new Pool({
  user: "saphanley",
  host: "localhost",
  database: "sportsdatabase",
  password: "prophetsaint1120",
  port: 5432,
});

const BASE_API_URL =
  "https://stats.nba.com/stats/leagueLeaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2022-23&SeasonType=Regular%20Season&StatCategory=PTS";

async function pullStats() {
  try {
    const response = await fetch(BASE_API_URL);
    const data = await response.json();
    const stats = data.resultSets[0].rowSet;

    // Store stats in the database
    const client = await pool.connect();
    await client.query("DELETE FROM league_leaders"); // Clear existing data

    for (const stat of stats) {
      const query =
        "INSERT INTO league_leaders (rank, player, team, gp, min, fgm, fga, fg_pct, fg3m, fg3a, fg3_pct, ftm, fta, ft_pct, oreb, dreb, reb, ast, stl, blk, tov, pts, eff) " +
        "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)";
      const values = [
        stat[0],
        stat[1],
        stat[2],
        stat[3],
        stat[4],
        stat[5],
        stat[6],
        stat[7],
        stat[8],
        stat[9],
        stat[10],
        stat[11],
        stat[12],
        stat[13],
        stat[14],
        stat[15],
        stat[16],
        stat[17],
        stat[18],
        stat[19],
        stat[20],
        stat[21],
        stat[22],
        stat[23],
      ];
      await client.query(query, values);
    }

    await client.release();
    console.log("Stats fetched and stored successfully.");
  } catch (error) {
    console.error("Error fetching and storing stats:", error);
  }
}

pullStats();

