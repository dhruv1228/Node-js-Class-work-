const http=require('http');
const fs=require('fs');
const path=require('path');

const filePath=path.join(__dirname,'abc.txt');

const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    const timeStamp = new Date().toISOString()+'\n';
    fs.appendFile(filePath, timeStamp, 'utf8', (err) => {
      console.log("Failed to write");
    });
  }
});

server.listen(3000,()=>{
  console.log('Server running at port 3000');
});