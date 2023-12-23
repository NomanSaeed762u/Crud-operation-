import mongoose from "mongoose";
const Connection=async()=>{
     console.log("enter");
     const URL = 'mongodb://127.0.0.1:27017/crudapp';
try{
await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
console.log("database connected successfully");
}
catch(error){
console.log('error while connecting with the database',error);
}
}
export default Connection;