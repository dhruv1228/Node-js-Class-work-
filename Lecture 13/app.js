const express=require('express');
const path=require('path');
const app=express();
const bodyparser=require('body-parser');
app.set('view engine','ejs');
app.set('views','views');
app.use(bodyparser.urlencoded({extended:true}));

app.get('/registered',(req,res)=>{
  res.render('index');
})
app.get('/register',(req,res)=>{
  res.render('index2');
});

app.post('/register',(req,res)=>{
  if(req.body.password==req.body.cpass)
  {
    res.send("Registered Successfully");
  }
  else{
    res.send("Password does not match");
  }
  console.log(req.body);
})

app.get('/submit',(req,res)=>{
  console.log(req.query);
  res.send('user register successfully...');
})

app.listen(3000,()=>{
  console.log("server is running");
});