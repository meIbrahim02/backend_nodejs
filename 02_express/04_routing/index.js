const express = require('express');
const app = express();

let port = 8080;
app.listen(port, ()=>{
    console.log(`this app is listning on port ${port}`);
})

const data = "<h1>do routing for help and search</h1>"
app.get("/", (req, res)=>{
    res.send(data, "you contacted the root path, look for help and search");
})

app.get("/help", (req, res)=>{
    res.send("you contacted the help path")
})

app.get("/search", (req, res)=>{
    res.send("you contacted the search path")
})

app.get("", (req, res)=>{
    res.send("this path does not exist")
})

app.post("/", (req, res)=>{
    res.send("you sent post request")
})