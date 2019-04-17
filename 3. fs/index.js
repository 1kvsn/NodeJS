var fs = require('fs');
const path = require('path');
var userPath = path.join(__dirname , '../', 'nodetesting/user');
console.log(userPath);

const data = {
	name: 'Sasikant',
	place: 'Hyd',
}

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

