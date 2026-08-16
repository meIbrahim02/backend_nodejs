const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res) => {
    const followers = ["adam", "bob", "tom", "jerry"];
    let {username} = req.params;
    res.render("home.ejs", {username, followers});
});

app.listen(port, ()=>{
    console.log(`app is listining to port ${port}`)
});