const sup =(req,res,next)=>{
    console.log(req.method);
    console.log("sup");
    next();
}
const how=(req,res,next)=>{
    
    console.log("how are you doing !!");
next();
}
module.exports={sup, how};