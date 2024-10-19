const express = require("express");
const app = express();
const { sequelize } = require("./models");
const cors = require("cors");

app.use(express.json());
const rx_group =  require("./routes/rx_routes.js");
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://www.localhost:5173",
      "http://www.localhost:5173",
      "http://localhost:5173/"

    ],
    credentials: true,
  })
);
app.use(express.static("public"));

app.use("/rx_group", rx_group);

sequelize.authenticate().then((req) => {
  app.listen(5000, function () {
    console.log("Server is running on port 5000");
  });
});


