const { Client, Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

// const connectToDB = () => {
//   const pool = new Pool({
//     connectionString: process.env.DB_URL,
//     ssl: true,
//   });

//   pool
//     .connect()
//     .then(() => console.log("Connected to the database"))
//     .catch((err) => {
//       console.error("Error connecting to the database", err);

//       setTimeout(() => {
//         console.log("Retrying connection..");
//         connectToDB();
//       }, 5000);
//     });

//   return pool;
// };

// const connectToDB = () => {
//   const client = new Client({
//     user: "postgres",
//     host: "localhost",
//     database: "snake_game",
//     password: "petproj",
//     port: 5432,
//   });

//   client
//     .connect()
//     .then(() => console.log("Connected to the database"))
//     .catch((err) => {
//       console.error("Error connecting to the database", err);

//       setTimeout(() => {
//         console.log("Retrying connection..");
//         connectToDB();
//       }, 5000);
//     });

//   return client;
// };

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: true,
});

pool
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });

// const pool = connectToDB();

module.exports = pool;
