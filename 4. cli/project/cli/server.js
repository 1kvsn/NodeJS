const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

// created Server object so that we can export it.
// server.httpServer is creating a method and saving it in a variable httpServer
const server = {};
const httpServer = server.httpServer = http.createServer();

httpServer.on('request', (req, res) => {
  res.writeHead(200, {
      'Content-Type': 'text/plain'
  });
  res.write('Welcome to CLI');
  res.end();
});

// calling this listener method in index.js
server.init = () => {
  httpServer.listen(8000, () => {
      console.log("Server listening on port 8000");
  });
}


module.exports = server;