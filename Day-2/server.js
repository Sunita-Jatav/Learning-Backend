//server

//http is module
const http = require('http')

// creation and response of request
// we programmed the server to response on request at localhost:3000
const server = http.createServer((req,res)=>{
    res.end("Hello from Server") ;
})

server.listen(3000,()=>{
    console.log("Server is ready to process request at 3000 port");
})

