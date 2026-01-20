let fs=require('fs/promises');
let path=__dirname+'/data.txt';

fs.readFile(path)
.then((data)=>{
  console.log(data);
})
.catch((err)=>{
  console.log(err);
})