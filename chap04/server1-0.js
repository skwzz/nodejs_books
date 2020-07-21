const http = require('http');

const server = http.createServer((req, res)=>{
    res.write("<h1>Hello node!</h1>");
    res.end("<p>Hello server</p>");
});

server.listen(8082);
server.on('listening', ()=>{
    console.log('8082포트에서 대기중.');
});
server.on('error', (err)=>{
    console.error(err);
});
