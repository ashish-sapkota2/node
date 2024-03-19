const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/studentdb"

const connectToMongo = async()=>{
    try{
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI)
        console.log('Mongo Connceted')
    }catch(error){
        console.log(error)
        
    }
}
module.export =connectToMongo;

// mongoose.connect('mongodb://localhost:27017/studentdb', {
//     useNewUrlparser :true
// },
// err =>{
//     if(!err){
//         console.log('connection succeeded')
//     }else{
//         console.log('error in connection' +err)
//     }
// })

require('./student_model')