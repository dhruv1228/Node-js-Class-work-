const http=require('http');
let server=http.createServer((req,res)=>{
  res.statusCode=205;
  res.write("Learning node.js")
  res.end();
});

server.listen(3000);