const http=require('http');
const fs=require('fs');
const path=require('path');

const filePath=path.join(__dirname,'abc.txt');

const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    const time=new Date().toISOString()+'\n';
    fs.appendFile(filePath,time,'utf8',(err)=>{
      console.log(err);
    });
  }
});

server.listen(3000,()=>{
  console.log('Server running at port 3000');
});