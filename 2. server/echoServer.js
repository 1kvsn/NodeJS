// Different versions of same thing

const http = require('http');

http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '/echo') {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.end(body);
      console.log(body);
    });
  } else {
    response.statusCode = 404;
    response.end('error');
  }
}).listen(8000);

// Here. we've created a server and is listening to the URL /echo for the POST request. When the POST request is received, the req.on takes the data (suppose form submit) and saves it into a variable called buffer.

// Once the data is saved and fully received, the res.end event is fired which sends the 200 as Status Code and finally sending back the data to the client.

// The writeHead could also have been written as res.statusCode = 200; something similar

// (chunk) is a callback which does the operation on the data.

// When we change the URL in the browser, we're basically creating a GET request. The program below is however listening for the POST request. Hence, we used POSTMAN on the /echo link.


// http.createServer((req, res) => {
//   if (req.method === 'POST' && req.url === '/echo') {
//     var buffer = '';
//     req.on('data', (chunk) => {
//       buffer += chunk.toString();
//     });

//     req.on('end', () => {
//         // console.log(buffer);
//         res.writeHead(200)
//         res.end(buffer);
//     });
//   } else {
//     res.statusCode = 404;
//     res.end();
//   }
// }).listen(8000);


