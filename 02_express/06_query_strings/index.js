const express = require('express');
const app = express();

let port = 3000;
app.listen(port, ()=>{
    console.log(`app is listning on ${port}`);
})

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("no result");
// })

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("nothing is searched")
    }
    res.send(`search result is: ${q}`);
})

// http://localhost:3000/search?q=apple&color=green
