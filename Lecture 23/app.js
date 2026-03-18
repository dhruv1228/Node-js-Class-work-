const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const path=require('path');
app.set('view engine','ejs');
app.set('views','views');
app.use(bodyparser.urlencoded());

app.listen(3000,()=>{
  console.log('Server is running');
})