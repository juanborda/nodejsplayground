var http = require('http');

function handler(req, res) {
  res.writeHead(200, {'content-type' : 'text/html' });
  console.log('request received');
	res.end('Hello World!!!');
}

var server = http.createServer(handler);

server.listen('3000');
