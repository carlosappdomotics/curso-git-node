var net = require('net');
var server = net.createServer(function(conn){
	console.log('conectado');
	conn.on('data', function(data){
		console.log(data + ' desde ' + conn.remoteAddress + ' ' + conn.remotePort);
		conn.write('Repitiendo: '+ data);
	});
	conn.on('close', function(){
		console.log('Cliente cerro la conexion');
	});

}).listen(8124);
console.log('escuchando en el puerto 8124');
