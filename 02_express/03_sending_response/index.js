const express = require('express');
const app = express();

let port = 8080;
app.listen(port, ()=>{
    console.log(`this app is listning on port ${port}`);
})

app.use((req, res)=>{
    console.log("request recived");
    // res.send("this is a basic response")

    // res.send({
    //     name : "apple",
    //     color : "red"
    // })

    // html response
    let code = "<h1>fruits</h1><ul><li>apple</li>orange<li></li></ul>"
    res.send(code)
})
