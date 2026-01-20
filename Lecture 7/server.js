const http=require('http');

const server=http.createServer((req,res)=>{
  console.log(req.url);
  res.statusCode=201;
  res.write('Server started successfully...');
  res.end();
});

server.listen(3000,()=>{
  console.log('Server is started');
});