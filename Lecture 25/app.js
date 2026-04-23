let express=require('express');
let app=express();
let jwt=require('jsonwebtoken');
require('dotenv').config();

app.get('/register',(req,res)=>{
    let {username,password}=req.body;
})

app.listen(process.env.port,()=>{
    console.log('Server is running');
})