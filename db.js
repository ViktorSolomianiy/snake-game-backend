const { Client } = require("pg");

const connectToDB = () => {
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

      setTimeout(() => {
        console.log("Retrying connection...");
        connectToDB();
      }, 5000);
    });

  return client;
};

const client = connectToDB();

module.exports = client;
