const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let tasks = [];

app.get("/", (req, res) => {
  res.render("index", { tasks });
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`To do List app is listing http://localhost:${port}`);
});
