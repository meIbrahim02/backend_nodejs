const express = require("express");
const port = 3000;
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) =>{
    let diceVal = Math.floor(Math.random() * 6) + 1
    res.render("dice.ejs", {diceVal : diceVal});
})

app.listen(port, ()=>{
    console.log(`app is listining to port ${port}`)
})