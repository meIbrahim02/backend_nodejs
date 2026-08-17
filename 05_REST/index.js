const express = require("express");
const app = express();
const port = 8000;
const path = require("path");

app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "views")));

app.get('/', (req, res)=>{
    res.send("server is working well!")
})

app.listen(port, ()=>{
    console.log(`app is listning on port ${port}`);
});
