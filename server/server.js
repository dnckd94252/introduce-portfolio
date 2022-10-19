const http = require('http');
const axios = require("axios");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const server = http.createServer(app);
const RouteController = require('./Route');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(
  express.urlencoded({
    limit: "50mb",
    extended: false,
  })
);
app.use(RouteController);
app.use(bodyParser.json());
app.use(cookieParser());

server.listen(port);