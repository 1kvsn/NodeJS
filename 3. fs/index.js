// var fs = require('fs');
// const path = require('path');
// var userPath = path.join(__dirname , '../', 'nodetesting/user');
// console.log(userPath);

// const data = {
// 	name: 'Sasikant',
// 	place: 'Hyd',
// }

// /home/jax/AltCampus/NodeJS/nodetesting/user

// Create Operation

// fs.open(userPath + '/newuser.json', 'wx', (err, fd) => {
// 	if(err) return console.error('file already exists');
// 	fs.writeFile(fd, JSON.stringify(data), (err) => {
// 		if (err) return console.error("There is an error while performing write operation");
// 		fs.close(fd, (err) => {
// 			if(err) return console.error('"there is an error while closing this file"');
// 		})
// 	})
// })

// If the data passed above is json object, we need to stringify it before passing it.



// Read Operation

// fs.readFile(userPath + '/newuser.json', (err, result) => {
// 	if (err) console.error('there was an error reading file');
// 	console.log(result.toString());
// })


// Update Operation

// fs.open(userPath + '/newuser.json', 'r+', (err, fd) => {
// 	if(err) console.error('There is no such file in this directory');
// 	fs.ftruncate(fd, (err) => {
// 		if(err) console.error('There was an error truncating');
// 		fs.writeFile(fd, 'This is a replacer data', (err) => {
// 			if (err) console.error('Error writing file')
// 			fs.close(fd, (err) => {
// 				if(err) console.error('There was an error closing this file');
// 				console.log('success')
// 			})
// 		})
// 	})
// })

// Delete Operation

// fs.unlink(userPath + '/newuser.json', (err) => {
// 	if(err) console.error('There was an error deleting this file');
// 	console.log('successfully deleted the file');
// })


// Server CRUD

var http = require('http');
var url = require('url');
var path = require('path');
var userPath = path.join(__dirname , '../', 'nodetesting/user');
var fs = require('fs');

var server = http.createServer();

server.on('request', (req, res) => {
	var data = '';
	var parsed = url.parse(req.url, true);
	// true is making the query within the URL object as an Object
	// console.log(parsed);
	// console.log(req.url, 'is the URL');
	//logs GET when sent using pMan.
	// console.log(req.method, 'is output of reqMethod'); 

	// If req contains data, then handle data
	req.on('data', (chunk) => {
		data += chunk;
		//outputs data sent from pMan.
		// console.log(data); 

	})
	req.on('end', () => {
		// console.log(data, 'is data received in req.on');
		if(req.method === 'POST') {
			// console.log(data);
			var userData = JSON.parse(data);
			// console.log(userData);
			fs.open(userPath + '/' + userData.username + '.json', 'wx', (err, fd) => {
				console.log(userData.username);
				if(err) return res.end(err);
				fs.writeFile(fd, data, (err) => {
					if(err) res.end(err);
					fs.close(fd, (err) => {
						res.end(data);
					})
				})
			})
		}
		if(req.method === 'PUT') {
			var userToUpdate = parsed.query.username;
			console.log(userToUpdate);
			fs.open(userPath + "/" + userToUpdate + ".json", 'r+', (err, fd) => {
				if(err) res.end(err);
				fs.ftruncate(fd, (err) => {
					if(err) res.end(err);
					fs.writeFile(fd, data, (err) => {
						if(err) res.end(err);
						fs.close(fd, (err) => {
							res.end(data);
						})
					})
				})
			})
		}
		if(req.method === 'DELETE') {
			var userToUpdate = parsed.query.username;
			console.log(userToUpdate);
			fs.unlink(userPath + "/" + userToUpdate + ".json", (err) => {
				if(err) return console.log(err);
				res.end(err);
			})
		}
		if(req.method === 'GET') {
			var userToUpdate = parsed.query.username;
			fs.readFile(userPath + '/' + userToUpdate + '.json', (err, data) => {
				if(err) res.end(err);
				// console.log("tisdisfsdfsdfgd");
				res.end(data);
			})
		}
	})
})

server.listen(4000, () => {
	console.log('server started at port 4000');
})