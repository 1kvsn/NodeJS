const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => { // request is an incoming message, ReadableStream
  const { method, url, headers } = req; // Node makes it easy to access the method and url

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  console.log(method, url, headers);

  res.end('Hello World!\n');                            // response is a WriteableStream, 

  // res.write('<html>');
  // res.write('<body>');
  // res.write('<h1>Hello, World!</h1>');
  // res.write('</body>');
  // res.write('</html>');
  // res.end();
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

// http.get('http://nodejs.org/dist/index.json', (res) => {
//   res.on('data', (chunk) => {
//     console.log(`BODY: ${chunk}`);
//   });
// });
