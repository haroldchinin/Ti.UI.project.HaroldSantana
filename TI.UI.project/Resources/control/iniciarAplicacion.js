/*
 * Autor: Harold Santana
 */

function Iniciar(){
	var VentanaPrincipal;
	var botonAbrir;
	
	VentanaPrincipal = Ti.UI.createWindow({
		//backgroundColor : '#ccc',
		backgroundImage : '/images/default.png'
	});
	
	botonAbrir = Ti.UI.createButton({
		title : 'Entrar',
		width : "30%",
		heigth: 40,
		color : '#666',
		bottom: 30		
	});
	
	botonAbrir.addEventListener('click', function(){
		var NuevaVentana = require('/ui/primeraVentana').PrimeraVentana();
		NuevaVentana.open();
	});
	
	VentanaPrincipal.add(botonAbrir);
	VentanaPrincipal.open();
}

exports.Iniciar = Iniciar;
