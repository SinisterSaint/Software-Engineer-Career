const app = require("./app");
require("dotenv").config();

app.listen(process.env.API_PORT, process.env.HOST, function () {
  console.log(`Started on http://localhost:${process.env.API_PORT}`);
  console.table({
    "API Port": process.env.API_PORT,
    "DB HOST": process.env.HOST,
    "DB PORT": process.env.DBPORT,
    "USER": process.env.USER,
    "PASSWORD": process.env.PASSWORD,
    "DATABASE": process.env.DATABASE,
  })
});