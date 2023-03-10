/** Database setup for BizTime. */
/** Database setup for BizTime. */


const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql:///biztime"
});

client.connect();


module.exports = client;