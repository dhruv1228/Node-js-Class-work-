const express=require('express');

const app=express();

app.get('/product/:id',(req,res)=>{
  console.log(req.params.id);
  res.send(req.params);
})

app.listen(3000,()=>{
  console.log(`Running at 3000`);
});