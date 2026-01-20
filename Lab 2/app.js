let math=require("./math.js");
let fs=require("fs");
// console.log(sum(2,3));
// console.log(product(2,3));

// let person={
//   name: "dhruv"
// };

// let {name}=person;

// console.log(name);

// let {sum}=math;

let path=__dirname+'/data.txt';
fs.writeFile(path,"Hello Dhruv",(err)=>{
  if(err)
  {
    console.log(err);
  }
  else{
    console.log("Done Successfully...");
  }
})
