const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    fs.readFile('./chap04/server2.html', (err, data)=>{
        if(err){
            throw err;
        }
        res.end(data);
    });
}).listen('8082', ()=>{
    console.log('server2. 8082포트에서 대기중');
});