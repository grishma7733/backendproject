const asynhandler =(requesthandler)=>{
    (req,res,next)=>{
        Promise.resolve().catch((err)=>next(err))
    }
}

export {asynchandler}


// try catch method
// const asynchandler=()=>{}
// const asynchandler=(func)=>()=>{}
// const asynchandler=(func)=>async()=>{}


// const asynchandler=(fn)=>async(req,res,next)=>{
//     try{
//         await fn(req,res,next)

//     }catch(error){
//         res.status(err.code||404).json({
//             success:false,
//             message:err.message
//         })
//     }

// }