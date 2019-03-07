const http = require('http');

const hostname = '127.0.0.1';
const port = 3030; //we changed this from 3000 to 3030

const server = http.createServer((req, res) => { //get requests, send response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); //tell browser what the content is
  res.end('Hello World\n'); // res.end is like a php echo statement //the n thing just means new line
});

server.listen(port, hostname, () => { //listening for communication on this port
  console.log(`Server running at http://${hostname}:${port}/`);
});