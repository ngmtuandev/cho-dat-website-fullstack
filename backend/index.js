const express = require("express");
require("dotenv").config();
const cors = require("cors");
const db_connect_ap = require("./config/connectDB");
const app = express();
// control access server
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
); // app.use use when want install a middleware for app server

// data from client : [], {}, a, b, 1 is data JSON  ===> server recive - express.json -- parser data to [], {}... NOT JSON
app.use(express.json());

// data send from body
app.use(express.urlencoded({ extended: true }));

// app.listen(5000, () => console.log("hello"));
// app.use("/", (req, res) => res.send("success"));

// Connect database postgres
db_connect_ap();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server run port", PORT);
});
