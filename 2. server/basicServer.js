const http = require('http');  //Code module hai so we don't need to import it.
const url = require('url');

// define port for server to run
const port = process.env.PORT || 4000;  
//if no port is specified in start script, it'll take the port 4000 which is mentioned here.
//PORT is passed in start script using process.env=5000 node 'program_name'

// define host
var hostname = 'http://localhost' || 'http://127.0.0.1'

// Create Server using http's createServer method

// http.createServer((req, res) => {
// 	console.log(req.headers);
// 	res.end(req.method);
// }).listen(port, () => {
// 	console.log('listening on port 4000');
// });

// Instantiate Server
const server = http.createServer();

// Here server acts as an eventEmitter and emits 'request' method
server.on('request', (req, res) => {
  
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200);
  // res.statusCode = 200;
  res.end('Hello World!');
});

// Listens on specific port defined at top
server.listen(port, hostname, () => {
  console.log('Server listening on port:' + port);
});
