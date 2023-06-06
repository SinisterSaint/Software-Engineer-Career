const app = require("./app");

app.listen(process.env.API_PORT, process.env.HOST, function () {
  console.log(`Started on http://localhost:${process.env.API_PORT}`);
});
