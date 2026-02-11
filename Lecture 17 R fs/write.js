const fs=require('fs');
let path=__dirname+'/a.txt';

fs.writeFile(path,"fs/promises module")
.then(()=>{
  console.log("done");
})
.catch((err)=>{
  console.log(err);
})