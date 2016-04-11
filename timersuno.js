//var sys = require("sys"); (sys esta desfasado)
//ejemplo de timeout, espera dos segundos antes de continuar el siguiente paso.
var start_time = new Date();
//sys.puts("inicia un timer de dos segundos");
console.log("inicia un timer de dos segundos");
setTimeout(function(){
	var end_time = new Date();
	var diference = end_time.getTime() - start_time.getTime();
	//sys.puts("detener timer despues de " + Math.round(diference/1000) + "segundos");
	console.log("detener timer despues de " + Math.round(diference/1000) + " segundos");
	clear_timeout_ejemplo();
}, 2000);

//ejemplo de clearTimeout, configurado en 30seg, se cancela enseguida a traves de clearTimeout, sin salida
function clear_timeout_ejemplo(){
	var start_time = new Date();
	console.log("se inicia timer de 30 seg que se detiene enseguida sin disparar llamada");
	var timeout = setTimeout(function(){
		var end_time = new Date();
		var diference = end_time.getTime() - start_time.getTime();
		console.log("detenido timer despues de " + Math.round(diference/1000) + "segundos");
	},30000);
	clearTimeout(timeout);
	interval_ejemplo();
}

function interval_ejemplo(){
	var start_time = new Date();
	console.log("se inicia intervalo de 2 seg que se detiene al quinto tick(iteracion)");
	var count = 1;
	var interval = setInterval(function(){
		if(count == 5){
			clearInterval(interval);
		}
		var end_time = new Date();
		var diference = end_time.getTime() - start_time.getTime();
		console.log("Tick numero: "+ count + " despues de " + Math.round(diference/1000) + " segundos");
		count++;
	}, 2000);
}