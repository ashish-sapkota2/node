const express =require('express');
const mysql = require('mysql');

// create connection

const db= mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: ''
})

//connect to mySQL

db.connect(err =>{
    if(err){
        throw err
    }
    console.log('MySql Connected')
})

const app = express()

//create Database

app.get('/createdb', (req,res)=>{
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql,err =>{
        if(err){
            res.send("Error");
        }
        res.send("Database Created");
    });
});

//create Table
app.get('/createemployee', (req,res)=>{
    let sql = 'CREATE TABLE nodemysql.employee(id int AUTO_INCREMENT, name VARCHAR(20), designation VARCHAR(20), PRIMARY KEY(id))'
    db.query(sql,err =>{
        if(err){
            throw err
        }
        res.send("employee table created");
    });
});

// insert employee
app.get('/employee',(req,res)=>{
    let post = {name : "Ashish Sapkota", designation : "Developer"}
    let sql = 'INSERT INTO nodemysql.EMPLOYEE SET ?'
    let query = db.query(sql,post,err =>{
        if(err){
            throw err
        }
        res.send('employee added')
    })
})

//select employee

app.get('/getemployee', (req,res)=>{
    let sql ='SELECT * FROM nodemysql.employee'
    let query = db.query(sql,(err,results)=>{
        if(err){
            throw err
        }
        console.log(results)
        res.send('employee data fetched')
    })
})

//update employee

app.get('/updateemployee/:id', (req,res)=>{
    let newName = 'updated Name'
    let sql = `UPDATE nodemysql.employee SET name = '${newName}' WHERE id = '${req.params.id}'`
    let query = db.query(sql,err=>{
        if(err){
            throw err
        }
        res.send('employee updated')
    })
})

//delete employee

app.get('/deleteemployee/:id',(req,res)=>{
    let sql = `DELETE FROM nodemysql.employee where id = '${req.params.id}'`
    let query = db.query(sql,err=>{
        if(err){
            throw err
        }
        res.send('employee deleted')
    })
})

app.listen('3000', ()=>{
    console.log('server started on port 3000');
})