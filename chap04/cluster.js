const cluster = require("cluster");
const http = require("http");
const numCpu = require("os").cpus().length;

if (cluster.isMaster) {
    console.log(`마스터 프로세스 아이디 : ${process.pid}`);
    //CPU 개수 만큼 워커 생산
    for (var i = 0; i < numCpu; i++) {
        cluster.fork();
    }

    //워커가 종료되었을 때
    cluster.on("exit", (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);

        //죽었을때 새로운 워커 생성
        cluster.fork();
    });
} else {
    http.createServer((req, res) => {
        res.write("<h1>Hello World</h>");
        res.end("<p>Hi</p>");

        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }).listen(8088);

    console.log(`${process.pid}번 워커 실행`);
}
