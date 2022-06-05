"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



module.exports = app;

app.use("/", home);

