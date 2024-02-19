var http = require('http');

http.createServer(function(req,res){
    res.write("Hello World ! Welcome to the Node.js Class");
    res.end();
}).listen(8081);