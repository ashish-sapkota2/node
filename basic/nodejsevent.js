const { EventEmitter } = require("stream");

class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter ();

myEmitter.on('WaterFull',()=>{
    console.log('Please turn off the moter');
    setTimeout(()=>{
        console.log("Reminder!");
    },3000)
})
console.log("code is running successfully");
myEmitter.emit("WaterFull");