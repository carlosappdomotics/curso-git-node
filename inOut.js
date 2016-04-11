//stdin esta pausado por defecto, con resume lo activamos 
//para que pueda recibir datos
process.stdin.resume();
process.stdin.on('data' , function(chunk){
	process.stdout.write('data: '+ chunk);
});