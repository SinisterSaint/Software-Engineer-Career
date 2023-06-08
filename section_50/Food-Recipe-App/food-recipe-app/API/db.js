const { Client } = require("pg");
require("dotenv").config();

const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const DBPORT = process.env.DBPORT;
const DATABASE = process.env.DATABASE;

let db;
console.log(USER, PASSWORD, HOST, DBPORT, DATABASE );  
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

 