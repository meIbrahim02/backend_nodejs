const express = require("express");
const app = express();

const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/register', (req,res)=>{
    let {user, password} = req.query;
    res.send(`standard GET response welocme ${user}`);
})

app.post('/register', (req,res)=>{
    let {user, password} = req.query;
    res.send(`standard POST response welocme ${user}`);
})

app.listen(port, ()=>{
    console.log(`the app is listening on port ${port}`);
})