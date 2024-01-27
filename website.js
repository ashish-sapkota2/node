const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode=200;
    res.setHeader('content-Type','text/html');
    if(req.url=='/'){

        res.end('<h1>This is Ashish</h1> <p>This is ashish learning node js</p>');
    }
    if(req.url=='/about'){

        res.end('<h1>This is About</h1> <p>This is ashish learning node js</p>');
    }
})

server.listen(port ,()=>{
    
console.log('server is listening on port', port);
})