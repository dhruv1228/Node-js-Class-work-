let http=require('http');

let server=http.createServer((req,res)=>{
  res.write("Hello ");
  res.end();
})
server.listen(3000,()=>{
  console.log("Running");
})