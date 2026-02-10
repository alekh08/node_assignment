// Create a node server that listens on port 3000 and responds with "Hello, Node!" for any incoming http request.

const http=require('node:http');                // without node: prefix it can be ambigous whether it refers to built in file sys module or npm package
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello, Node!');
});
server.listen(49153,()=>{
    console.log('Server is running on port 3000');
});
