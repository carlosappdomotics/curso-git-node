var http = require('http');
http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Curso de node.js\n');
}).listen(3000, "127.0.0.1");
console.log('Servidor escuchando en puerto 3000');