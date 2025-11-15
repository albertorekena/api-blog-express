const http = require("node:http");
require("colors");
const app = require("./src/app");
const db = require("./config/db");

require("dotenv").config();

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT);

server.on("listening", async () => {
  console.log(`Server listening on port ${PORT}`.bold.green);

  try {
    const connection = await db.getConnection();

    console.log("Database connection successful".bold.green);

    connection.release();
  } catch (error) {
    console.error("Database connection failed:".bold.red, error.message);

    process.exit(1);
  }
});

server.on("error", error => {
  console.log(error);
});