const express = require("express");
const router = express.Router();

const client = require("../db");

router.get("/leaderboard", (req, res) => {
  client.query(
    "SELECT name, score FROM high_scores ORDER BY score DESC",
    (err, result) => {
      if (err) {
        console.error("Error executing query", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(result.rows);
      }
    }
  );
});

router.post("/highscores", (req, res) => {
  const { name, score } = req.body;

  client.query(
    "INSERT INTO high_scores (name, score) VALUES ($1, $2)",
    [name, score],
    (err, result) => {
      if (err) {
        console.error("Error executing query", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json({ success: true, message: "Data saved successfully" });
      }
    }
  );
});

module.exports = router;
