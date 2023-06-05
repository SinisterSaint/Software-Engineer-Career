const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3001;


// Create a MySql connection
const db = mysql.createConnection({
    host: 'your-database-host',
    user: 'your-username',
    password: 'your-password',
    database: 'food_recipe_app',
  });
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("Connected to the my recipe app database");
  });

//   User registration for API
app.post("/register", (req, res) => {
    const { username, password } = req.body;
    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            res.status(500).json({error: "Error: registered unsuccessfully" });
        } else {
            res.json({ message: "User has registered successfully" });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})