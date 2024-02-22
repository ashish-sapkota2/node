const express = require('express')
const anything = require("./second")

const app = express();
app.get('/',function(req,res){
    res.send("hello there")
})
app.listen(3000,()=>{
    console.log("Server staarted on : 3000");
})

console.log("Hello ", anything.name, "Your current status :" , anything.status) 