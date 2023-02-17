

// async function pullStats() {
//     // pull stats from nba.com
//     let response = await axios.get(`${BASE_API_URL}categories`, {
//       params: { count: 100 }
//     });
//     return response.data
//   }
// This function will pull nba stats from the api
const BASE_API_URL = "https://stats.nba.com/stats/leagueLeaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2022-23&SeasonType=Regular%20Season&StatCategory=PTS"
async function pullStats() {
// pull stats from nba.com
const response = await fetch(BASE_API_URL);
let data = await response.json();
console.log(data);
return response.data
}

pullStats();

