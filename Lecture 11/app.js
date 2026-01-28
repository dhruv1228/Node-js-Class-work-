//query params

const express=require('express');
const app=express();

app.get('/product/:id',(req,res)=>{
  console.log(req.params);
  res.send("This is a product route");
});

app.get('/todo/:id',(req,res)=>{
  console.log("todo",req.params.id);
  res.send("This is a todo page");
});

app.listen(3000,()=>{
  console.log("server is running");
});