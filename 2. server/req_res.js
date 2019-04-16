const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => { // request is an incoming message, ReadableStream
  const { method, url, headers } = req; // Node makes it easy to access the method and url

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // console.log(method, url, headers);

  // // res.end('Hello World!\n');                            // response is a WriteableStream, 

  res.write('<html>');
  res.write('<body>');
  console.log(url);
  // // res.write('<h1>Hello, World!</h1>');
  // // res.write('</body>');
  // // res.write('</html>');
  res.end();
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

// Fetch or Axios method like in Node


// http.get('http://www.google.com', (res) => {
//   res.on('data', (chunk) => {
//     console.log(`BODY: ${chunk}`);
//   });
// });

// req.url gives the URL of the request after the PORT #.