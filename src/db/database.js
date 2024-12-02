import mongoose from "mongoose";
import {db_name} from "./constants.js"

const connectdb = async ()=>{
    try{
        const conncetionInstance=await mongoose.connect('${process.env.mongodb_url}/${db_name}')
        console.log('\n Mongodb connected !! db host:${connectionInstance.connection.host}');
    }catch(error){
        consolel.log("mongoose connection error",error);
        process.exit(1)
    }
}

export default connectdb