const fs = require('fs');
const http = require('http');
const url =require('url');

// ************************************files*************

// //blocking synchronous way
// const textIn = fs.readFileSync('./messages.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is WHat we know about the avocado : ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./output.txt', textOut);
// console.log("File has been written"); 

// //Non-blocking asynchronous way

// fs.readFile('./file.txt', 'utf-8', (err, data)=>{
//     console.log(data);
// })
// console.log("will read file!");

// *****************Server************


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res)=>{
    const pathname = req.url;

    if(pathname === '/' || pathname==='/overview'){
        res.end('This is the OVERVIEW');

    }else if(pathname === '/product'){
        res.end('This is the product');
    }else if(pathname === '/api'){
           res.writeHead(200, {'Content-type' : 'application/json'});
            res.end(data);

    }else{
        res.end('Page could not be found');
    }
});

server.listen(2000,'127.0.0.1',()=>{
    console.log("Listening to the request on port 3000");
});