const http = require('http');

http.createServer((req, res)=>{
    res.write("<h1>Hello node!</h1>")
    res.end("<p>Hello server</p>");
}).listen(8082, ()=>{
    console.log('8082 포트에서 서버 대기중.')
})