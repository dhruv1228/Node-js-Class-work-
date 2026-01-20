let fs=require('fs/promises');
let path=__dirname+'/data.txt';

fs.writeFile(path,"Learning file system module")

.then(()=>{
  console.log("Done");
})
.catch((err)=>{
  console.log(err);
});
