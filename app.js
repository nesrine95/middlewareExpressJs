"use strict"
const express= require ("express");
const app= express();
const port = process.env.port || 3000;
//npm install cors 
const cors=require("cors");

// mıddleware are functions called in order 
//there are many types of mıddlewares lıke cookıes and authentıfıcatıon and password verıfıcatıon 
const {sup,how}=require("./middle.js")
//call the mıddleware ın every call 
app.use(sup);
app.use(cors());
app.get("/",how,sup,(req,res)=>{
res.send({data:"hi"});

})

app.listen(port,err=>{
    if (err){
        return console.log("ERROR",err)
    }
    console.log(`Listening on port ${port}`);
})
