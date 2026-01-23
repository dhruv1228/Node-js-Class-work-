const fs = require("fs").promises;
const{promisify}=require("util");
const readFileAsync=promisify(require(fs).readFile);


fs.writeFile("hello.txt"," today we are learning file system",
    (error)=>{
        if(error){
            console.log("error is creating the file");
        }else{
            console.log("file is created");
        }
    })
// fs.readFile("hello.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log("error in loading")
//     }else{
//         console.log("File Data:",data)
//     }
// })
async function readFile(){
    try{
      const data =  await fs.readFile("hello.txt","utf-8")
      console.log("File content", data)  
    }catch (error){
        console.error("Error in file content",error)
    }
}
readFile();

async function readWithPromisify(){
    try{
      const data = await readFileAsync("hello.txt","utf-8");
      console.log( data);

      
    }
    catch(error){
       console.log(error);

    }
}
readWithPromisify();