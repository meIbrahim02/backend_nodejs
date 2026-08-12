const express = require("express");
const app = express();
const path = require("path");

const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/search", (req, res) => {
    res.render("search.ejs");
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("this is hello page");
});

app.listen(port, () => {
    console.log(`listing on port ${port}`);
});