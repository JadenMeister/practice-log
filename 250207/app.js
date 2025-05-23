const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
  if (request.method === "GET") {
    if (request.url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      const data = fs.readFileSync("index.html");
      response.end(data);
    }
    if (request.url === "/webtoon") {
      response.writeHead(200, { "Content-Type": "text/html" });
      const data = fs.readFileSync();
      response.end(data);
    }
    if (request.url === "/login") {
      response.writeHead(200, { "Content-Type": "text/html" });
      const data = fs.readFileSync();
      response.end(data);
    }
  }
});

const PORT = 3001;
server.listen(PORT);

console.log(PORT, "번 포트에서 대기중");
