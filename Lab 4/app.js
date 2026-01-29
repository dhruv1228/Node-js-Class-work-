//query params

const express=require('express');
const app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));


let obj={
  id: 1212
}

let todos=[
  "coding",
  "reading books",
  "go to market"
]

app.get('/todos',(req,res)=>{
  res.render('index2',{todos});
});

app.post('/registered',(req,res)=>{
  console.log(req.body);
  res.send("user registered successfully");
});

app.get('/register',(req,res)=>{
  res.render('register');
})

app.set('view engine','ejs');
app.set('views','views');
app.get('/',(req,res)=>{
  res.render('index',{obj});
})

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