let http=require('http');

let server=http.createServer((req,res)=>{
  let header=req.headers.authorization;
  let secret="thisisasecret";
  if(!header)
  {
    res.statusCode=400;
    res.write('Kindly enter secret key');
    res.end();
    return;
  }
  if(header==secret)
  {
    res.statusCode=201;
    res.write('welcome');
    res.end();
    return;
  }
  else{
    res.statusCode=401;
    res.write("invalid user");
    res.end();
    return;
  }
})

server.listen(3000,()=>{
  console.log("server is running");
});