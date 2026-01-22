const express=require('express');
let app=express();
const path=require('path');

app.get('/',(req,res)=>{
  res.send("This is / route");
});

app.get('/login',(req,res)=>{
  res.send("This is /login route");
});

app.get('/register',(req,res)=>{
  res.send("This is /register route");
});

app.get('/signup',(req,res)=>{
  res.render('index');
})

app.listen(3000,()=>{
  console.log("Server is runningg");
})