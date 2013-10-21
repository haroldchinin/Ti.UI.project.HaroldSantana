/**
 * @author Harold Santana Sayas
 */

//Función para crear la ventana de bienvenida
function PrimeraVentana(){
	// creación de grupo de tap
	var tabGroup = Titanium.UI.createTabGroup();
	
	//
	// creación de la ventana 1 con sus controles
	//
	var ventanita1 = Titanium.UI.createWindow({
		fullscreen: true,
		title:'Sofá Café Restaurante',
	    backgroundColor:'#fff'
	});
	
	//creación de un tap para la ventana 1
	var tab1 = Titanium.UI.createTab({  
	    icon:'../images/home48.png',
	    title:'Inicio',
	    window:ventanita1
	});
	
	//Creación de una imagen 1
	var imagenBienvenida = Ti.UI.createImageView({
		width: '100%',
		height: '100%',
		image:'../images/sofa.jpg',
	});
	
	ventanita1.add(imagenBienvenida);
	
	//Creación de una vista1 para la ventana 1
	var vistaMenu1 = Ti.UI.createView({
		top:60,
		height: 40,
		width : '100%',
		backgroundColor:'#fff',
		opacity: 0.8
	});
	
	
	//Texto para la vista1
	var botonVistaMenu1 = Ti.UI.createLabel({
		color:'#000',
		text:'Bienvenido',
		font:{fontSize:20,fontFamily:'sans-serif'},
		textAlign:'center',
		width:'auto'
	});
	
	//agregando el texto botón a la vista
	vistaMenu1.add(botonVistaMenu1);
	//agregando la vista la imagen
	ventanita1.add(vistaMenu1);
	
	
	//creación de una vista2 para la ventana1
	var vistaMenu2 = Ti.UI.createView({
		top: 102,
		height:40,
		width:'100%',
		backgroundColor:'#fff',
		opacity: 0.8
	});
	
	//creando un texto botón a la vista
	var botonVistaMenu2 = Ti.UI.createLabel({
		color: '#000',
		text: 'al café restaurante',
		font : {fontSize:20, fontFamily: 'sans-serif'},
		textAlign: 'center',
		width: 'auto',
	});
	
	//agregando el texto botón a la vista
	vistaMenu2.add(botonVistaMenu2);
	//agregando la vistaMenu2 a la ventana1
	ventanita1.add(vistaMenu2);
	
	//botón iniciar sesión
	var vistaBotonIniciarSesion = Ti.UI.createView({
		bottom : 30,
		height : 30,
		width  : 100,
		right  : 20,
		backgroundColor : '#207AC7'
	});
	var textoBoton = Ti.UI.createLabel({
		color : '#fff',
		text  : 'Harold',
		font : {fontSize:15, fontFamily: 'sans-serif'},
		textAlign: 'center',
		width: 'auto'
	});
	
	vistaBotonIniciarSesion.add(textoBoton);
	ventanita1.add(vistaBotonIniciarSesion);
	
	
	/////////////////////////////////////////////
	// creación de la ventana 2 y sus controloles
	/////////////////////////////////////////////
	
	var ventanita2 = Titanium.UI.createWindow({  
	    title:'La carta',
	    backgroundColor:'#fff'
	});
	
	//Creando una vista para mostrar mesas disponibles
	var vistaCarta = Ti.UI.createWebView({
		url: "../cartaDisponible.html"
	});
	
	ventanita2.add(vistaCarta);
	
	var tab2 = Titanium.UI.createTab({  
	    icon:'../images/carta48.png',
	    title:'Menú',
	    window:ventanita2
	});
	
	/////////////////////////////////////////////
	// creación de la ventana 3 y sus controloles
	/////////////////////////////////////////////
	var ventanita3 = Titanium.UI.createWindow({
		fullscreen: true,
		title:'Mesas disponibles',
	    backgroundColor:'#fff'
	});
	
	//creación de un tap para la ventana 1
	var tab3 = Titanium.UI.createTab({  
	    icon:'../images/menu48.png',
	    title:'Mesas',
	    window:ventanita3
	});
	//Creando una vista para mostrar mesas disponibles
	var vistaMesas = Ti.UI.createWebView({
		url: "../mesasDisponibles.html"
	});
	
	ventanita3.add(vistaMesas);
	
	///////////////////
	//agregando las tabs al grupo de taps
	//////////////////////
	tabGroup.addTab(tab1);  
	tabGroup.addTab(tab2);
	tabGroup.addTab(tab3);  
	
	// retornando el grupo de taps
	return tabGroup;
};

exports.PrimeraVentana = PrimeraVentana;
