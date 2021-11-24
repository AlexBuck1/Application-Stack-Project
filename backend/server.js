const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//loads from dotenv file for safety
require("dotenv").config();

//Creates express server and sends to port
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());

//allows parsing of JSON
app.use(express.json());

//Starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
