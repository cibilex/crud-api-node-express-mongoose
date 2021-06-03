const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "config/.env"),
});
const PORT = process.env.PORT || 8080;
const MODE = process.env.API_MODE || "production";
const dbConnection = require("./helpers/dbConnection.js");
const routers = require("./routers/main");
const colors = require("colors");

dbConnection();

if (MODE == "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routers);
app.use(require(path.join(__dirname, "middlewares/errorHandler.js")));
app.listen(PORT, () =>
  console.log(
    `server listening to http://localhost:${PORT} by ${MODE} mode`.yellow.bold
  )
);
