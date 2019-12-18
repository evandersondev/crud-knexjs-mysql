const express = require("express");
const app = express();
const { resolve } = require("path");

const routes = require("./routes");

//view engine
app.set("views", resolve(__dirname, "views"));
app.set("view engine", "ejs");

//public
app.use(express.static(resolve(__dirname, "public")));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(routes);

module.exports = app;
