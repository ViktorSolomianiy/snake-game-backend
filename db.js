const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "snake_game",
  password: "petproj",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => {
    console.error("Error connecting to the database", err);
    setTimeout(
      console.log(
        client
          .connect()
          .then(() => console.log("Connected to the database"))
          .catch((err) => {
            console.error("Error connecting to the database", err);
            setTimeout(console.log("hello"), 5000);
          })
      ),
      5000
    );
  });

module.exports = client;
