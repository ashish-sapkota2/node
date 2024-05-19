const fs= require('fs');
const http = require('http');

const data = fs.readFileSync(`${__dirname}/../udemy/dev-data/data.json`, 'utf-8');
const dataobj = JSON.parse(data);

const server =http.createServer((req,res)=>{
    pathname = req.url;
    if(pathname === '/'){
        res.writeHead(200, {'Content-type' : 'application/json'});
        res.end(data);
    }
})

server.listen(2000,'127.0.0.1',()=>{
    console.log("Listening to the port 2000");
})