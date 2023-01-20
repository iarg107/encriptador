	//Programa encargado de la encrptación y/o desencrptación de mensajes sin mayusculas y acentos
		
	var vocales = ["a", "e", "i", "o", "u"]; 						//Vocales permitidas			
	var codigos = ["ai", "enter", "imes", "ober", "ufat"]; 			//Codigos
	var caracteres =["á", "é", "í", "ó", "ú"] 						//Excepciones 
	var input = document.getElementById("inp"); 					//Contenido del Textarea
	var estado = true; 												//Verificador de mensaje
	var encriptado = []; 											//Mensaje final encriptado
	var desencriptado = []; 										//Mensaje final desencriptado
	
	function minusculas(mensaje){ 									//Función para convertir mayusculas a minusculas
		return mensaje.toLowerCase();
	}
	
	function validarmensaje(mensaje){ 								//Función para validar mensaje sin acentos
		for(var cont1 = 0; cont1 < mensaje.length; cont1++){																				
			for(var cont2 = 0; cont2<caracteres.length; cont2++){								
				if(mensaje[cont1]==caracteres[cont2]){
					estado=false;	
					break;
				}				
			}
		}	
	}

	function desbloquear(){ 										//Función para desbloquear elementos graficos de la pantalla principal
		document.getElementById("primer-mensaje").hidden = true;
		document.getElementById("segundo-mensaje").hidden = true;
		document.getElementById("imagen-marca").hidden = true;
		document.getElementById("resultado").hidden = false;
		document.getElementById("cop").hidden = false;
	}	
							
	function encriptar(){ 											//Función para encriptar el mensaje
		var valor =	minusculas(input.value);
		var mensaje = valor.split('');
		var mensajeEncriptado = "";
		
		validarmensaje(mensaje);		
		encriptado = mensaje;
		
		if(estado){
			
			desbloquear();
			for(var cont1 = 0; cont1 < mensaje.length; cont1++){																				
				for(var cont2 = 0; cont2<mensaje.length; cont2++){								
					if(mensaje[cont2]==vocales[cont1]){
						encriptado[cont2]=codigos[cont1];
					}
				}
			}							
							
			for(var cont3 = 0; cont3<encriptado.length; cont3++){
				mensajeEncriptado += encriptado[cont3];
			}
							
			document.getElementById("resultado").value = mensajeEncriptado;	
		}
		else{
			alert("¡Solamente se permiten letras minusculas sin acento!");									
			window.location.reload();
		}
	}
						
	function desencriptar(){										//Función para desencriptar el mensaje
		var valor =	minusculas(input.value);
		var mensaje = valor.split('');
		var mensajeDesencriptado = "";
		var cont2 = 0;	

	validarmensaje(mensaje);		

		if(estado){
			
			desbloquear();
			for(var cont1 = 0; cont1 < mensaje.length; cont1++){													
							
				switch (mensaje[cont1]) {
 				case 'a':
					desencriptado[cont2] = mensaje[cont1];
					cont1 = cont1 + 1;
					cont2++;
   				break;
 				case 'e':
					desencriptado[cont2] = mensaje[cont1];
					cont1 = cont1 + 4;
					cont2++;
   				break;
  				case 'i':
					desencriptado[cont2] = mensaje[cont1];
					cont1 = cont1 + 3;
					cont2++;
				break;
 				case 'o':
					desencriptado[cont2] = mensaje[cont1];
					cont1 = cont1 + 3;
					cont2++;
				break;	
  				case 'u':
					desencriptado[cont2] = mensaje[cont1];
					cont1 = cont1 + 3;
					cont2++;
  				break;
  				default:
					desencriptado[cont2] = mensaje[cont1];
					cont2++;									
				}
			}	

				for(var cont3 = 0; cont3<desencriptado.length; cont3++){															
					mensajeDesencriptado += desencriptado[cont3];
				}

				document.getElementById("resultado").value = mensajeDesencriptado;		
			}
			
		else{
			alert("¡Solamente se permiten letras minusculas sin acento!");									
			window.location.reload();
		}
	}
							
	function copiar(){												//Función para habilitar el boton de copiado	
		document.getElementById("resultado").select();
		document.execCommand("copy");					
	}	
	
	var botonEncriptado = document.getElementById("enc"); 			//Boton de encriptado
		botonEncriptado.onclick = encriptar;

	var botonDesencriptado = document.getElementById("des"); 		//Boton de desencriptado	
		botonDesencriptado.onclick = desencriptar;	
						
	var botonCopia = document.getElementById("cop"); 				//Boton de copiado
		botonCopia.onclick = copiar;	