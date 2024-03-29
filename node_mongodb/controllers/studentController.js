const express = require ('express')
var router =express.Router()
const mongoose = require('mongoose')
const Student = mongoose.model('Student')

router.get('/',(req,res)=>{
    res.render('student/addOredit'),{
        viewTitle : 'Insert Student'
    }
})

router.post ('/', (req, res)=>{
    if(res.body._id== ''){
        insertRecord(req,res)
    }else{
        updateRecord(req,res)
    }
})

function insertRecord(req,res){
    var student = new Student()
    student.fullName = req.body.fullName;
    student.email = req.body.email;
    student.mobile = req.bosy.mobile;
    student.city = req.body.city;
    student.save((err,doc)=>{
        if(!err){
            res.redirect('student/list')
        }else{
            console.log('error during insert : '+err)
        }
    })
}

function updateRecord(req,res){
    Student.findOneAndUpdate({_id: req.body._id}, req.body , {new: true},(err,doc)=>{
        if(!err){
            res.redirect('student/list')
        }else{
            console.log('error during update: ' +err)
        }
    });
}

router.get('/list',(req,res)=>{
    Student.find().then((err,docs)=>{
        if(!err){
            res.render('../views/student/list',{
                list :docs
            });
        }else{
            console.log('error while retriving: '+err)
        }
    })
});

router.get('/:id',(req,res)=>{
    Student.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render("student/addOredit",{
                viewTitle : "update successful",
                student: doc,
            });
            console.log(doc);
        }
    });
});

router.get('delete/:id',(req,res)=>{
    Student.findByIdAndRemover(req.params.id,(err,doc)=>{
        if(!err){
            res.redirect("student/list");
        }else{
            console.log("Error in deletion " +err);
        }
    });
});

module.exports = router

