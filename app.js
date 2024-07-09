const { log } = require('console');
const express = require('express');
const app = express();
const port = process.env.PORT||4000;

app.get('/',(req,res)=>{
    res.send("Hello world! I am coming");
});

app.listen(port,()=>{
    console.log("Server is running at http://localhost:$(port)/");
});

