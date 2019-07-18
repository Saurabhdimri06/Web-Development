// global.v1 = "Hello Node"
const express = require('express');
const app = express();

var port = 3000;

console.log("Before Require")
const obj = require('./file.js')

console.log(obj)
app.get('/',(req,res) =>{
    res.send("Hello World")
    res.send(obj);
});

app.listen(port,(err, res) =>{
    if(err){
        console.log("Error occured");
    }
    else{
        console.log("server started");
    }
});
console.log("Done Require")