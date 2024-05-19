const express = require('express')
const anything = require("./second")

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/users',require('../routes/api/users'))
app.listen(3000,()=>{
    console.log("Server staarted on : 3000");
})

console.log("Hello ", anything.name, "Your current status :" , anything.status) 