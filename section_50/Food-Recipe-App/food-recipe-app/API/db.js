const { Client } = require("pg");
require("dotenv").config();

// const USER = process.env.USER;
// const PASSWORD = process.env.PASSWORD;
// const HOST = process.env.HOST;
// const DBPORT = process.env.DBPORT;
// const DATABASE = process.env.DATABASE;


const USER="saphanley";
const PASSWORD="prophetsaint1120";
const HOST="localhost";
const DBPORT="5432";
const DATABASE="recipe_app";
const API_PORT="3000";

let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: `postgres://${USER}:${PASSWORD}@${HOST}:${DBPORT}/${DATABASE}`,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  db = new Client({
    connectionString: `postgres://${USER}:${PASSWORD}@${HOST}:${DBPORT}/${DATABASE}`,
  });
}

db.connect();

module.exports = db;
