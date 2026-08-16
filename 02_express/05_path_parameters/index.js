const express = require('express');
const app = express();

let port = 8080;
app.listen(port, ()=>{
    console.log(`this app is listning on port ${port}`);
})


app.get("/", (req, res)=>{
    res.send( "you contacted the root path, look for help and search");
})

// app.get("/:username/:id", (req, res)=>{
//     console.log(req.params);
//     res.send("search for anyhting");
// })

app.get("/:username/:byear", (req, res)=>{
    let {username, byear} = req.params
    res.send(`welcome to the page of ${username} born in ${byear}`);
})