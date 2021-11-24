const express = require("express");
const cors = require("cors");

//how we're going to communicate with mongo
const mongoose = require("mongoose");

//loads from dotenv file for safety
require("dotenv").config();

//Creates express server and sends to port
const app = express();
const port = process.env.PORT || 5000;

//This is the database and connecting to it
const uri = process.env.URI;
//
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

//once the connection is established, send a message to the console that it has been established
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

//Middleware
app.use(cors());

//allows parsing of JSON
app.use(express.json());

//Starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
