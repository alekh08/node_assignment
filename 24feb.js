const cluster=require('node:cluster');
const http = require('node:http');
const os = require('node:os');
const numCPUs=require('node:os').cpus().length;

if(cluster.isMaster){
    console.log(`Master ${process.pid} is running`);

    for(let i=0;i<numCPUs;i++){
        cluster.fork();
    }

    cluster.on('exit',(worker,code,signal)=>{
        console.log(`Worker ${worker.process.pid} died`);
    });
}else{
    http.createServer((req,res)=>{
        res.writeHead(200);
        res.end('Hello World\n');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}  