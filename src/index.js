//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectdb from "./db/database.js"



dotenv.config({
    path:'./env'
})

connectdb()
.then(()=>{
    app.listen(process.env.PORT||8000 ,()=>{
        console.log('server is running on port 8000: ${process.env.port}');  
    })
})
.catch((err)=>{
    app.on("error",(error)=>{
        console.log("error:",error);
        throw error
    })
    console.log("Mongodb connection failed !!!,err")
})


/*
import express from "express";
const app =express();
(async ()=>{
    try{
         await mongoose.connect('${process.env.mongodb_url}/$db_name')
         app.on("error", (error)=>{
            console.log("Error:",error);
            throw error
         })

         app.listen(process.env.PORT,()=>[
            console,log('App is listening on port ${process.env.port}')
         ])
   
    }catch(error){
        console.error("ERROR",error)
        throw error
    }

})
    */