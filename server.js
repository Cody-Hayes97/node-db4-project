const express = require("express");
const server = express();
const RecipeRouter = require("./recipes/recipe-router.js");

server.use(express.json());
server.use("/api/recipes", RecipeRouter);

server.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = server;
