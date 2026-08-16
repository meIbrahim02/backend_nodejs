// this will work in the browser, but not in Node.js
// because the `window` object is not defined in Node.js
// this will be the server-side entry point for the application

const express = require('express');
const app = express();

let port = 3000;
app.listen(port, ()=>{
    console.log(`this app is listning on port ${port}`);
})

// user control + c to quit server
// if we use this server on chrome or any browser
// localhost:3000
// it'll show cannot get /
// the server is running but it cannot get response.