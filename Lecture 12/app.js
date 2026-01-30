//query params

const express=require('express');
const path=require('path');
const app=express();
const bodyparser=require('body-parser');
app.set('view engine','ejs');
app.set('views','views');
app.use(bodyparser.urlencoded({extended:true}));

app.get('/register',(req,res)=>{
  res.render('index');
})

app.post('/register',(req,res)=>{
  console.log(req.body);
  res.render('user register successfully...');
})

app.listen(3000,()=>{
  console.log("server is running");
});