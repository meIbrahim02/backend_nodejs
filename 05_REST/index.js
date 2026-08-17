const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
let posts = [
    {
        username : "ibrahim siddique",
        content : "nothing"
    },
    {
        username : "bob",
        content : "something"
    },
    {
        username : "william",
        content : "everything"
    },
]

app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res)=>{
    res.send("server is working well!")
});

app.get('/posts', (req, res)=>{
    res.render("index.ejs", {posts: posts});
});

app.get('/posts/new', (req, res)=>{
    res.render("new.ejs",);
});

app.post('/posts', (req, res)=>{
    let ({username , content}) = req.body;
    posts.push({username , content});
    res.send("post request working");
})

app.listen(port, ()=>{
    console.log(`app is listning on port ${port}`);
});
