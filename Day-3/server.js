// cmd = npm init -y
// npm i express since it is a package

const express = require('express');

const app = express(); // creation 

// response

app.get('/',(req,res)=>{
    res.send("Welcome to the server");
}) 

app.get('/home',(req,res)=>{
    res.send("In home page");
})

app.get('/about',(req,res)=>{
    res.send("In about page");
})

app.get('/contact',(req,res)=>{
    res.send("In contact page");
})

//starting of server
app.listen(3001,()=>{
    console.log("Server is starting at 3001 port");
})