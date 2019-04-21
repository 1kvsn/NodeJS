// Require express
var express = require('express');
// mount express application on app variable
var app = express();
// Define a port
var port = process.env.PORT || 4000;

// Add listener for server to listen on a port
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

// // single line server
// require('express')().listen(4000, () => console.log('listen on port 4000'))
