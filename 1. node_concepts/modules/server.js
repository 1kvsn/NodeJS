var http = require('http');

http.createServer((req,res) => {
	console.log(req.headers);
	// res.setHeader('Content-Type', 'text/html')
	res.write('Thisiadijafjeelksejksjeresrjle');
	res.end("<h2>This is hahahahha</h2>");
}).listen(4001);

// Console Output is:

// { host: 'localhost:4001',
//   connection: 'keep-alive',
//   'cache-control': 'max-age=0',
//   'upgrade-insecure-requests': '1',
//   'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36',
//   dnt: '1',
//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'en-US,en;q=0.9' }
// { host: 'localhost:4001',
//   connection: 'keep-alive',
//   pragma: 'no-cache',
//   'cache-control': 'no-cache',
//   'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36',
//   dnt: '1',
//   accept: 'image/webp,image/apng,image/*,*/*;q=0.8',
//   referer: 'http://localhost:4001/',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'en-US,en;q=0.9' }

// let bfastOrder = dinerBreakfast();
// "I'd like cheesy scrambled eggs please"

// bfastOrder("chocolate chip pancakes");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes please."

// bfastOrder("grits");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes and grits please."

// const order = "I'd like cheesy scrambled eggs please";