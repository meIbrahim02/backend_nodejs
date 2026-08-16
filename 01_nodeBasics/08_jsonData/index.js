const express = require("express");
const app = express();
const path = require("path");

const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./da.json");
    const data = instaData[username];
    const comments = data.comments;
    if(!data) {
        return res.send("user not found");
    }else{
        res.render("home.ejs", {data, comments});
    }
    
})

app.listen(port, ()=>{
    console.log(`this app is listning on port ${port}`);
});
