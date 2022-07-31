import mongoose from "mongoose";

let connected=false;
const dbConnect = async () =>{
    if(connected===false){
        await mongoose.connect(process.env.mongodb_url!);
        connected=true;
    }
  
}

export default dbConnect;