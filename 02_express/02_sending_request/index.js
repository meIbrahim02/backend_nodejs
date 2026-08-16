const express = require('express');
const app = express();

let port = 8080;
app.listen(port, ()=>{
    console.log(`this app is listning on port ${port}`);
})

app.use((req, res)=>{
    console.log("request recived");
})
// open localhost:8080