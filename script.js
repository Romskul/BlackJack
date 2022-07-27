
	var credito_jugador;
	let apuesta;
	let credito_jugador_valor = document.getElementById("credito_jugador_valor");
	let credito_jugador_value = document.getElementById("credito_jugador_value");
	let credito_jugador_texto = document.getElementById("credito_jugador_texto");
	let puntuacion_jugador_value = document.getElementById("puntuacion_jugador_value");
	let puntuacion_banca_value = document.getElementById("puntuacion_banca_value");
	let barajaNaipes = document.querySelectorAll("div.carta");
	let barajaImagenes = document.querySelectorAll("img");
	let gameOVer = document.getElementById("game_over");
	let victoria = document.getElementById("victoria");
	let blackJack = document.getElementById("blackJack");
	let empate = document.getElementById("empate");
	let nueva_partida = document.getElementById("nueva_partida");
	let nueva_apuesta_gameover = document.getElementById("nueva_apuesta_gameOver");
	let nueva_apuesta_victoria = document.getElementById("nueva_apuesta_victoria");
	let nueva_apuesta_blackJack = document.getElementById("nueva_apuesta_blackJack");
	let nueva_apuesta_empate = document.getElementById("nueva_apuesta_empate");
	let pedir_carta = document.getElementById("pedir_carta");
	let plantarse = document.getElementById("plantarse");
	let salir = document.getElementById("salir");
	let reinicio = document.getElementById("reiniciar");
	let reiniciarPartida=false;
	var inicioPartida;
	var carta;
	var palo;
	var valor;
	var id;
	let cartaJugada;
	let cartasAs = [];
	let cartasAsBanca = [];
	let cartasJugadas = [];
	let cartasBanca = [];
	var baraja = [];
	var sumatorioCartasJugadas = 0;
	var sumatorioCartasJugadasBanca = 0;
	var intRepartoDosCartas
	var intCartaReparto1
	var intCartaReparto2
	var intVoltearCarta1
	var intVoltearCarta3
	var intVoltearCarta4
	
	
	
	

	nueva_partida.addEventListener("click", nuevaPartida);
	pedir_carta.addEventListener("click", pideCarta);
	plantarse.addEventListener("click", repartirBanca);	
	reinicio.addEventListener("click", reiniciar);
	nueva_apuesta_gameover.addEventListener("click", nuevaApuesta);
	nueva_apuesta_victoria.addEventListener("click", nuevaApuesta);
	nueva_apuesta_blackJack.addEventListener("click", nuevaApuesta);
	nueva_apuesta_empate.addEventListener("click", nuevaApuesta);
	nueva_apuesta_gameover.removeEventListener("click", repartirBanca);
	nueva_apuesta_victoria.removeEventListener("click", repartirBanca);
	nueva_apuesta_blackJack.removeEventListener("click", repartirBanca);
	nueva_apuesta_empate.removeEventListener("click", repartirBanca);
	
	
	pedir_carta.disabled = true;
	plantarse.disabled = true;
	
	credito_jugador_value.innerHTML = 1000;
	
		

	function reiniciar (){
		location.reload();																	
	}

	function nuevaPartida() {																										//   --- Nueva partida ---	
			credito_jugador = 1000;																									//   --- Credito inicial ---
			crearCartas();																											//   --- Crear cartas ---
			shuffleArray(baraja);																									//   --- Barajar cartas ---
			if (credito_jugador > 0 && reiniciarPartida==false) {																	//   --- Si el jugador tiene credito ---	
			//  --- Bucle para que el jugador pueda seleccionar la apuesta ---															
				do {
					apuesta = parseInt(prompt("¿Cuanto quieres apostar? (mínimo 100)"));
					if (apuesta == 0){
						alert("No has apostado nada, por favor introduce una cantidad");
					}else if (apuesta > credito_jugador) {
						alert("No tienes suficiente dinero para apostar esa cantidad, por favor introduce una cantidad menor");
					}else if (apuesta < 100) {
						alert("No puedes apostar menos de 100, por favor introduce una cantidad mayor");
					}else if (apuesta == null) {
						alert("No has introducido ningún valor, por favor introduce una cantidad");
					}
				} while (apuesta > credito_jugador||apuesta < 100||apuesta == 0||apuesta == null);
			//  --- Fin bucle ---
				credito_jugador = credito_jugador - apuesta;																//   --- Restar credito al jugador ---
				credito_jugador_value.innerHTML = credito_jugador;															//   --- Mostrar credito al jugador ---
				barajar();																									//   --- Barajar las cartas (función de animaciones) ---
			}
		}

		function nuevaApuesta() {																							//   --- Nueva apuesta ---
			reiniciarPartida=false;																							//   --- Reiniciar partida ---
			limpiarPantalla();																								//   --- Limpiar pantalla ---																	
			puntuacion_banca_value.innerHTML = "";																			//   --- Reset puntuación banca ---
			puntuacion_jugador_value.innerHTML = "";																		//   --- Reset puntuación jugador ---
			apuesta = 0;																									//   --- Reset apuesta ---
			//  --- Reset de clases de las cartas de la baraja ------------
			for (let i=0; i<barajaNaipes.length; i++) {
				barajaNaipes[i].classList.remove("repartir1", "barajar1", "barajar2", "repartir2", "repartir3", "repartir4", "repartir5", "repartir6", "repartir7", "repartir8", "voltear_carta1", "voltear_carta1-2", "carta_reparto1", "carta_reparto2", "carta_reparto3", "carta_reparto4", "carta_reparto5", "carta_reparto6", "carta_reparto7", "carta_reparto8", "carta_repartida");
			}
			//  -----------------------------------------------------------
			//  --- Poner las cartas boca abajo (anverso de las cartas) ---
			for (let i=0; i<barajaImagenes.length; i++) {
				barajaImagenes[i].src = "deck/anverso.png";
			}
			//  -----------------------------------------------------------
			if (credito_jugador > 0) {																						//  --- Si el jugador tiene credito ---
			//  --- Bucle para que el jugador pueda seleccionar la apuesta ---																							
				do {																												
					apuesta = parseInt(prompt("¿Cuanto quieres apostar?"));
					if (apuesta == 0){
						alert("No has apostado nada, por favor introduce una cantidad");
					}else if (apuesta > credito_jugador) {
						alert("No tienes suficiente dinero para apostar esa cantidad, por favor introduce una cantidad menor");
					}else if (apuesta < 100) {
						alert("No puedes apostar menos de 100, por favor introduce una cantidad mayor");
					}else if (apuesta == null) {
						alert("No has introducido ningún valor, por favor introduce una cantidad");
					}
				}  while (apuesta > credito_jugador||apuesta < 100||apuesta == 0||apuesta == null);
			//  --- Fin bucle ---
				credito_jugador = credito_jugador - apuesta;																//  --- Restar el dinero del jugador ---
				credito_jugador_value.innerHTML = credito_jugador;															//  --- Mostrar el dinero del jugador ---																
				resetValores();																								//  --- Resetear los valores ---
			}else {																											//  --- Si el jugador no tiene credito ---
				alert("No tienes crédito para apostar");																	//  --- Alerta de que no tiene crédito ---
				gameOVer.classList.add("mostrar_gameOver");																	//  --- Mostrar el game over ---
			}
		}
		function limpiarPantalla (){																						//  --- Limpiar la pantalla ---
			gameOVer.classList.remove("mostrar_gameOver");																	//  --- Ocultar el game over ---
			victoria.classList.remove("mostrar_victoria");																	//  --- Ocultar la victoria ---
			empate.classList.remove("mostrar_empate");																		//  --- Ocultar el empate ---
			blackJack.classList.remove("mostrar_blackJack");																//  --- Ocultar el blackJack ---
		}
		
		function resetValores(){																							//  --- Funcion para resetear los valores ---																			
			baraja.length = 0;
			cartasAs.length = 0;
			cartasAsBanca.length = 0;
			cartasJugadas.length = 0;
			cartasBanca.length = 0;
			sumatorioCartasJugadas = 0;
			sumatorioCartasJugadasBanca = 0;
			intRepartoDosCartas = 0;
			intCartaReparto1 = 0;
			intCartaReparto2 = 0;
			intVoltearCarta1 = 0;
			intVoltearCarta3 = 0;
			intVoltearCarta4 = 0;
			newGame();																										//  --- Llamar a la funcion newGame ---
		}

		function newGame(){																									//  --- Funcion para empezar un nuevo juego ---
			crearCartas();																									//  --- Crear las cartas ---
			shuffleArray(baraja);																							//  --- Barajar las cartas ---
			barajar();																										//  --- Barajar las cartas (función de animaciones) ---
		}

		function shuffleArray(baraja){																						//  --- Funcion para barajar las cartas ---
			baraja.sort(()=> Math.random() - 0.5);																			//  --- Barajar las cartas (ordena aleatoriamente el arreglo) ---
		}

		function crearCartas(palo, carta, valor){																			//  --- Funcion para crear las cartas ---
		class cartaJuego{																									//  --- Clase cartaJuego ---						
				constructor(palo, carta){																					//  --- Constructor de la clase cartaJuego ---	
				this.palo = palo;																							//  --- Atributo palo ---
				this.carta = carta;																							//  --- Atributo carta ---	
				this.valor = valor;																							//  --- Atributo valor ---
				this.id = id;																								//  --- Atributo id ---	
			}
		}
			for (var i = 0; i < 4; i++) { 																					//  --- Ciclo para crear las cartas (palos) ---
				for (var j = 1; j < 14; j++) {																				//  --- Ciclo para crear las cartas (valores)---
					if (i == 0) {																							//  --- Si el palo es de corazones ---
						palo = "cora";																						//  --- Palo de corazones ---
					}else if (i == 1) {																						//  --- Si el palo es de diamantes ---
						palo = "diaman";																					//  --- Palo de diamantes ---
					}else if (i == 2) {																						//  --- Si el palo es de picas ---
						palo = "trebol";																					//  --- Palo de picas ---
					}else if (i == 3) {																						//  --- Si el palo es de oros ---
						palo = "picas";																						//  --- Palo de oros ---
					}
					if (j == 1) {																							//  --- Si el valor es de as ---
						carta = "1";																						//  --- Carta de as ---
						valor = 11;																							//  --- Valor de as ---	
					}else if (j == 2) {																						//  --- Si el valor es de dos ---
						carta = "2";																						//  --- Carta de dos ---
						valor = 2;																							//  --- Valor de dos ---
					}else if (j == 3) {																						//  --- Si el valor es de tres ---
						carta = "3";																						//  --- Carta de tres ---
						valor = 3;																							//  --- Valor de tres ---
					}else if (j == 4) {																						//  --- Si el valor es de cuatro ---
						carta = "4";																						//  --- Carta de cuatro ---
						valor = 4;																							//  --- Valor de cuatro ---
					}else if (j == 5) {																						//  --- Si el valor es de cinco ---
						carta = "5";																						//  --- Carta de cinco ---
						valor = 5;																							//  --- Valor de cinco ---
					}else if (j == 6) {																						//  --- Si el valor es de seis ---
						carta = "6";																						//  --- Carta de seis ---
						valor = 6;																							//  --- Valor de seis ---
					}else if (j == 7) {																						//  --- Si el valor es de siete ---
						carta = "7";																						//  --- Carta de siete ---
						valor = 7;																							//  --- Valor de siete ---
					}else if (j == 8) {																						//  --- Si el valor es de ocho ---
						carta = "8";																						//  --- Carta de ocho ---
						valor = 8;																							//  --- Valor de ocho ---
					}else if (j == 9) {																						//  --- Si el valor es de nueve ---
						carta = "9";																						//  --- Carta de nueve ---
						valor = 9;																							//  --- Valor de nueve ---
					}else if (j == 10) {																					//  --- Si el valor es de diez ---
						carta = "10";																						//  --- Carta de diez ---
						valor = 10;																							//  --- Valor de diez ---
					}else if (j == 11) {																					//  --- Si el valor es de jota ---
						carta = "11";																						//  --- Carta de jota ---
						valor = 10;																							//  --- Valor de jota ---
					}else if (j == 12) {																					//  --- Si el valor es de reina ---
						carta = "12";																						//  --- Carta de reina ---
						valor = 10;																							//  --- Valor de reina ---
					}else if (j == 13) {																					//  --- Si el valor es de rey ---
						carta = "13";																						//  --- Carta de rey ---
						valor = 10;																							//  --- Valor de rey ---
					}
					id = carta + palo;																						//  --- Id de la carta ---
					var cartaJuegos = new cartaJuego(palo, carta, valor);													//  --- Crea una nueva carta ---
					baraja.push(cartaJuegos);																				//  --- Agrega la carta a la baraja ---
		}}}

		

		

		function barajar() {																								//  --- Baraja la baraja ---
			inicioPartida = true;																							//  --- Inicia la partida ---
			for (var i = 0; i < 3; i++) {                                  													//  --- Bucle FOR con 3 iteraciones para barajar la baraja
				setTimeout(function() {																						//  --- Cada iteracion se ejecuta una vez mas tarde que la anterior
					barajaNaipes[3].classList.add("barajar1");																//  --- Añade la clase barajar1 a la carta9
					barajaNaipes[3].addEventListener("animationend", function(){											//  --- Al finalizar la animacion de la carta9
						barajaNaipes[3].classList.remove("barajar1");														//  --- Elimina la clase barajar1 de la carta9
					});
					barajaNaipes[3].addEventListener("animationend", function(){											//  --- Al finalizar la animacion de la carta9
						barajaNaipes[3].classList.add("barajar2");															//  --- Añade la clase barajar2 a la carta9
					});
					barajaNaipes[3].classList.remove("barajar2");															//  --- Elimina la clase barajar2 de la carta9
				}, i * 1000);																								//  --- Cada iteracion se ejecuta una vez mas tarde que la anterior
				barajaNaipes[3].classList.remove("barajar2");									
			}
				nueva_partida.disabled = true;																				//  --- Deshabilita el boton nueva partida	
				intRepartoDosCartas = setInterval (repartir, 3000);															//  --- Ejecuta la funcion repartir cada 3 segundos
				function repartir(){																						//  --- Funcion repartir
					nueva_partida.classList.add("disabled");																//  --- Añade la clase disabled al boton nueva partida														
					repartoDosCartas();																						//  --- Ejecuta la funcion repartoDosCartas
					clearInterval(intRepartoDosCartas);																		//  --- Detiene la funcion repartir
				}																											//  --- Fin funcion repartir
				
		}
									
		
		function repartoDosCartas(){																						//  --- Funcion repartoDosCartas
			if (inicioPartida==true){																						//  --- Si inicioPartida es true
				barajaNaipes[9].classList.add("repartir1");																	//  --- Añade la clase repartir1 a la carta9 (animacion de la carta)
				intCartaReparto1 = setInterval (cartaReparto1, 500);														//  --- Ejecuta la funcion cartaReparto1 cada 500 milisegundos (duración de la animacion)
				function cartaReparto1() {																					//  --- Funcion cartaReparto1
					barajaNaipes[9].classList.add("carta_reparto1");														//  --- Añade la clase carta_reparto1 a la carta9 (colocacion de la carta)
					barajaNaipes[8].classList.add("repartir2");																//  --- Añade la clase repartir2 a la carta8 (animacion de la carta)
					clearInterval(intCartaReparto1);																		//  --- Detiene la funcion cartaReparto1	
				}																											//  --- Fin funcion cartaReparto1  ---																												
				intCartaReparto2 = setInterval (cartaReparto2, 1000);														//  --- Ejecuta la funcion cartaReparto2 cada 1000 milisegundos (duración de la animacion)
				function cartaReparto2() {																					//  --- Funcion cartaReparto2
					barajaNaipes[8].classList.add("carta_reparto2");														//  --- Añade la clase carta_reparto2 a la carta8 (colocacion de la carta)
					clearInterval(intCartaReparto2);																		//  --- Detiene la funcion cartaReparto2
				}																											//  --- Fin funcion cartaReparto2  ---
				intVoltearCarta1 = setInterval (voltear, 1000);																//  --- Ejecuta la funcion voltear cada 1000 milisegundos (duración de la animacion)
				function voltear(){																							//  --- Funcion voltear
					if (barajaNaipes[8].classList.contains("carta_reparto2")) {												//  --- Si la carta8 tiene la clase carta_reparto2
					voltearCarta1();																						//  --- Ejecuta la funcion voltearCarta1
					clearInterval(intVoltearCarta1);}																		//  --- Detiene la funcion voltear
				}																											//  --- Fin funcion voltear  ---
			}																												//  --- Fin si inicioPartida es true ---
		}																													//  --- Fin funcion repartoDosCartas ---			

		function repartirBanca(){																							//  --- Funcion repartirBanca
			plantarse.disabled = true;																						//  --- Deshabilita el boton plantarse	
			pedir_carta.disabled = true;																					//  --- Deshabilita el boton pedir_carta
			barajaNaipes[5].classList.add("repartir5");																		//  --- Añade la clase repartir5 a la carta5 (animacion de la carta)		
			var intCartaReparto5 = setInterval (cartaReparto5, 500);														//  --- Ejecuta la funcion cartaReparto5 cada 500 milisegundos (duración de la animacion)
			function cartaReparto5() {																						//  --- Funcion cartaReparto5
				clearInterval(intCartaReparto5);																			//  --- Detiene la funcion cartaReparto5
				barajaNaipes[5].classList.add("carta_reparto5");															//  --- Añade la clase carta_reparto5 a la carta5 (colocacion de la carta)	
				barajaNaipes[4].classList.add("repartir6");																	//  --- Añade la clase repartir6 a la carta4 (animacion de la carta)
			}																												//  --- Fin funcion cartaReparto5  ---																												
			var intCartaReparto6 = setInterval (cartaReparto6, 1000);														//  --- Ejecuta la funcion cartaReparto6 cada 1000 milisegundos (duración de la animacion)
			function cartaReparto6() {																						//  --- Funcion cartaReparto6
				barajaNaipes[4].classList.add("carta_reparto6");															//  --- Añade la clase carta_reparto6 a la carta4 (colocacion de la carta)
				clearInterval(intCartaReparto6);																			//  --- Detiene la funcion cartaReparto6
			}																												//  --- Fin funcion cartaReparto6  ---
			var intVoltearCarta5 = setInterval (voltear, 1100);																//  --- Ejecuta la funcion voltear cada 1100 milisegundos (duración de la animacion)	
			function voltear(){																								//  --- Funcion voltear		
				if (barajaNaipes[4].classList.contains("carta_reparto6")) {													//  --- Si la carta4 tiene la clase carta_reparto6
					voltearCarta5();																						//  --- Ejecuta la funcion voltearCarta5
					clearInterval(intVoltearCarta5);																		//  --- Detiene la funcion voltear	
				}																											//  --- Fin si la carta4 tiene la clase carta_reparto6  ---
			}																												//  --- Fin funcion voltear  ---
		}																													//  --- Fin funcion repartirBanca  ---
		
		function voltearCarta1(){																							//  --- Funcion voltearCarta1
			inicioPartida=false;																							//  --- InicioPartida es false
			let cartaJugada = baraja.shift();																				//  --- Roba la carta1 de la baraja
			cartasJugadas.push(cartaJugada);																				//  --- Añade la carta1 a la lista de cartas jugadas
			console.log(cartasJugadas);																										
			if (barajaNaipes[8].classList.contains("carta_reparto2")){														//  --- Si la carta8 tiene la clase carta_reparto2
				barajaNaipes[9].classList.remove("repartir1");																//  --- Quita la clase repartir1 a la carta9 (animacion de la carta)
				barajaNaipes[9].classList.add("voltear_carta1");															//  --- Añade la clase voltear_carta1 a la carta9 (animacion de la carta)
				barajaNaipes[9].addEventListener("animationend", volteo1);													//  --- Añade el evento animationend a la carta9 (animacion de la carta)	
			}																												//  --- Fin si la carta8 tiene la clase carta_reparto2  ---	
			function volteo1(){																								//  --- Funcion volteo1		
				barajaImagenes[9].src = "deck/"+cartaJugada.id+".png";														//  --- Cambia la imagen de la carta9	
				barajaNaipes[9].classList.remove("voltear_carta1");															//  --- Quita la clase voltear_carta1 a la carta9 (animacion de la carta)
				barajaNaipes[9].classList.add("voltear_carta1-2");															//  --- Añade la clase voltear_carta1-2 a la carta9 (animacion de la carta)
				barajaNaipes[9].removeEventListener("animationend", volteo1);												//  --- Quita el evento animationend a la carta9 (control de animacion de volteo)
				barajaNaipes[9].addEventListener("animationend", llamadaVoltearCarta2);										//  --- Añade el evento animationend a la carta9 (control de animacion de volteo)	
				function llamadaVoltearCarta2(){																			//  --- Funcion llamadaVoltearCarta2
					barajaNaipes[9].removeEventListener("animationend", llamadaVoltearCarta2);								//  --- Quita el evento animationend a la carta9 (animacion de la carta)
					voltearCarta2();																						//  --- Ejecuta la funcion voltearCarta2
				}																											//  --- Fin funcion llamadaVoltearCarta2  ---
			}																												//  --- Fin funcion volteo1  ---
		}																													//  --- Fin funcion voltearCarta1  ---		
		
		
		function voltearCarta2(){																							//  --- Funcion voltearCarta2
			let cartaJugada = baraja.shift();																				//  --- Roba la carta2 de la baraja
			cartasJugadas.push(cartaJugada);																				//  --- Añade la carta2 a la lista de cartas jugadas
			console.log(cartasJugadas);																								
			if (barajaNaipes[9].classList.contains("voltear_carta1-2")){													//  --- Si la carta9 tiene la clase voltear_carta1-2
				barajaNaipes[8].classList.remove("repartir2");																//  --- Quita la clase repartir2 a la carta8 (animacion de la carta)
				barajaNaipes[8].classList.add("voltear_carta1");															//  --- Añade la clase voltear_carta1 a la carta8 (animacion de la carta)
				barajaNaipes[8].addEventListener("animationend", volteo2);													//  --- Añade el evento animationend a la carta8 (control de animacion de volteo)	
			}																												//  --- Fin si la carta9 tiene la clase voltear_carta1-2  ---
			function volteo2(){																								//  --- Funcion volteo2	
				barajaImagenes[8].src = "deck/"+cartaJugada.id+".png";														//  --- Cambia la imagen de la carta8
				barajaNaipes[8].classList.remove("voltear_carta1");															//  --- Quita la clase voltear_carta1 a la carta8 (control de animacion de volteo)
				barajaNaipes[8].classList.add("voltear_carta1-2");															//  --- Añade la clase voltear_carta1-2 a la carta8 (control de animacion de volteo)
				barajaNaipes[8].classList.add("carta_repartida");															//  --- Añade la clase carta_repartida a la carta8 (clase vacia de control)
				barajaNaipes[8].removeEventListener("animationend", volteo2);												//  --- Quita el evento animationend a la carta8 (control de animacion de volteo)
				barajaNaipes[8].addEventListener("animationend", llamadaSumatorio);											//  --- Añade el evento animationend a la carta8 (control de animacion de volteo)
				function llamadaSumatorio(){																				//  --- Funcion llamadaSumatorio
					barajaNaipes[8].removeEventListener("animationend", llamadaSumatorio);									//  --- Quita el evento animationend a la carta8 (animacion de la carta)
					comprobarSumatorioCartas();																				//  --- Ejecuta la funcion comprobarSumatorioCartas
					pedir_carta.disabled = false;																			//  --- Habilita el boton pedir_carta
					plantarse.disabled = false;																				//  --- Habilita el boton plantarse
				}																											//  --- Fin funcion llamadaSumatorio  ---
			}																												//  --- Fin funcion volteo2  ---
		}																													//  --- Fin funcion voltearCarta2  ---
		

		function voltearCarta3(){																							//  --- Funcion voltearCarta3
			let cartaJugada = baraja.shift();																				//  --- Roba la carta3 de la baraja
			cartasJugadas.push(cartaJugada);																				//  --- Añade la carta3 a la lista de cartas jugadas
			if (barajaNaipes[8].classList.contains("voltear_carta1-2")){
				barajaNaipes[8].classList.remove("repartir2");
				intVoltearCarta3 = setInterval (voltearCarta3, 1000);
				function voltearCarta3(){
					barajaNaipes[7].classList.add("voltear_carta1");
					clearInterval(intVoltearCarta3);
				}
				barajaNaipes[7].addEventListener("animationend", volteo3);
			}	
			function volteo3(){
				barajaImagenes[7].src = "deck/"+cartaJugada.id+".png";
				barajaNaipes[7].classList.remove("voltear_carta1");
				barajaNaipes[7].classList.add("carta_repartida");
				barajaNaipes[7].classList.add("voltear_carta1-2");
				barajaNaipes[7].removeEventListener("animationend", volteo3);
				barajaNaipes[7].addEventListener("animationend", llamadaSumatorio);	
				function llamadaSumatorio(){
					barajaNaipes[7].removeEventListener("animationend", llamadaSumatorio);
					comprobarSumatorioCartas();
				}				
			}
			
		}	
			
		function voltearCarta4(){
			let cartaJugada = baraja.shift();
			cartasJugadas.push(cartaJugada);
			if (barajaNaipes[7].classList.contains("voltear_carta1-2")){
				barajaNaipes[7].classList.remove("repartir3");
				intVoltearCarta4 = setInterval (voltearCarta4, 1000);
				function voltearCarta4(){
					barajaNaipes[6].classList.add("voltear_carta1");
					clearInterval(intVoltearCarta4);
				}
				barajaNaipes[6].addEventListener("animationend", volteo4);
				
			}		
			function volteo4(){
				barajaImagenes[6].src = "deck/"+cartaJugada.id+".png";
				barajaNaipes[6].classList.remove("voltear_carta1");
				barajaNaipes[6].classList.add("voltear_carta1-2");
				barajaNaipes[6].classList.add("carta_repartida");
				barajaNaipes[6].removeEventListener("animationend", volteo4);
				barajaNaipes[6].addEventListener("animationend", llamadaSumatorio);
				function llamadaSumatorio(){
					barajaNaipes[6].removeEventListener("animationend", llamadaSumatorio);
					comprobarSumatorioCartas();
				}					
			}
			
		}	

		function voltearCarta5(){																	
			let cartaBancaJugada = baraja.shift();
			cartasBanca.push(cartaBancaJugada);														
			if (barajaNaipes[5].classList.contains("carta_reparto5")){							
				barajaNaipes[6].classList.remove("repartir4");									
				barajaNaipes[5].classList.add("voltear_carta1");								
				barajaNaipes[5].addEventListener("animationend", volteo5);
				
			}																								
			function volteo5(){
				barajaImagenes[5].src = "deck/"+cartaBancaJugada.id+".png";						
				barajaNaipes[5].classList.remove("voltear_carta1");							
				barajaNaipes[5].classList.add("voltear_carta1-2");
				barajaNaipes[5].classList.add("carta_repartida")
				barajaNaipes[5].removeEventListener("animationend", volteo5);
				barajaNaipes[5].addEventListener("animationend", llamadaVoltearCarta6);
				function llamadaVoltearCarta6(){
					barajaNaipes[5].removeEventListener("animationend", llamadaVoltearCarta6);
					voltearCarta6();
				}					
			}
			
		}

		function voltearCarta6(){																	
			let cartaBancaJugada = baraja.shift();	
			cartasBanca.push(cartaBancaJugada);														
			if (barajaNaipes[4].classList.contains("carta_reparto6")){							
				barajaNaipes[5].classList.remove("repartir5");									
				barajaNaipes[4].classList.add("voltear_carta1");								
				barajaNaipes[4].addEventListener("animationend", volteo6);															
				
																					
			}
			function volteo6(){
				barajaImagenes[4].src = "deck/"+cartaBancaJugada.id+".png";						//Cambia la imagen de la carta10
				barajaNaipes[4].classList.remove("voltear_carta1");							//Elimina la clase voltear_carta1 de la carta10
				barajaNaipes[4].classList.add("voltear_carta1-2");
				barajaNaipes[4].classList.add("carta_repartida")
				barajaNaipes[4].removeEventListener("animationend", volteo6);
				barajaNaipes[4].addEventListener("animationend", llamadaSumatorio);
				function llamadaSumatorio(){
					barajaNaipes[4].removeEventListener("animationend", llamadaSumatorio);
					comprobarSumatorioBanca();
				}					
			}
		}
		function voltearCarta7(){																	//Funcion para voltear la carta1
			let cartaBancaJugada = baraja.shift();	
			cartasBanca.push(cartaBancaJugada);														//Asigna el valor true a la propiedad owned de la instancia cartaJugador1
			if (barajaNaipes[3].classList.contains("carta_reparto7")){							//Si la carta9 tiene la clase carta_reparto2
				barajaNaipes[4].classList.remove("repartir6");									//Elimina la clase repartir1 de la carta10
				barajaNaipes[3].classList.add("voltear_carta1");								//Añade la clase voltear_carta1 a la carta10
				barajaNaipes[3].addEventListener("animationend", volteo7)				//Al finalizar la animacion de la carta10													
																								//Llamada a la funcion voltearCarta2
			}
			function volteo7(){
				barajaImagenes[3].src = "deck/"+cartaBancaJugada.id+".png";						//Cambia la imagen de la carta10
				barajaNaipes[3].classList.remove("voltear_carta1");							//Elimina la clase voltear_carta1 de la carta10
				barajaNaipes[3].classList.add("voltear_carta1-2");
				barajaNaipes[3].classList.add("carta_repartida");
				barajaNaipes[3].removeEventListener("animationend", volteo7);
				barajaNaipes[3].addEventListener("animationend", llamadaSumatorio);
				function llamadaSumatorio(){
					barajaNaipes[3].removeEventListener("animationend", llamadaSumatorio);
					comprobarSumatorioBanca();
				}					
			}
			
		}
		function voltearCarta8(){																	
			let cartaBancaJugada = baraja.shift();	
			cartasBanca.push(cartaBancaJugada);														
			if (barajaNaipes[2].classList.contains("carta_reparto8")){							
				barajaNaipes[3].classList.remove("repartir7");									
				barajaNaipes[2].classList.add("voltear_carta1");								
				barajaNaipes[2].addEventListener("animationend", volteo8);																
				
			}
			function volteo8(){
				barajaImagenes[2].src = "deck/"+cartaBancaJugada.id+".png";						
				barajaNaipes[2].classList.remove("voltear_carta1");							
				barajaNaipes[2].classList.add("voltear_carta1-2");
				barajaNaipes[2].classList.add("carta_repartida")
				barajaNaipes[2].removeEventListener("animationend", volteo8);
				barajaNaipes[2].addEventListener("animationend", llamadaSumatorio);
				function llamadaSumatorio(){
					barajaNaipes[2].removeEventListener("animationend", llamadaSumatorio);
					comprobarSumatorioBanca();
				}					
			}
			
		}

		function pideCartaBanca1(){
			if(barajaNaipes[4].classList.contains("carta_repartida")){
				barajaNaipes[4].classList.remove("carta_repartida");	
				barajaNaipes[3].classList.add("repartir7");
				var intCartaReparto7 = setInterval (cartaReparto7, 500);						
				function cartaReparto7() {
					barajaNaipes[3].classList.add("carta_reparto7");
					setTimeout(function(){
						clearInterval(intCartaReparto7);
						voltearCarta7();
					}, 50);
					
						
				}
			}
		}
		function pideCartaBanca2(){
			if(barajaNaipes[3].classList.contains("carta_repartida")){
				barajaNaipes[3].classList.remove("carta_repartida");	
				barajaNaipes[2].classList.add("repartir8");
				var intCartaReparto7 = setInterval (cartaReparto7, 500);						
				function cartaReparto7() {
					barajaNaipes[2].classList.add("carta_reparto8");
					setTimeout(function(){
						clearInterval(intCartaReparto7);
						voltearCarta8();
					}, 50);
					
						
				}
			}
		}

		function pideCarta(){
			if(barajaNaipes[8].classList.contains("carta_repartida")){
				barajaNaipes[8].classList.remove("carta_repartida");	
				barajaNaipes[7].classList.add("repartir3");
				var intCartaReparto3 = setInterval (cartaReparto3, 500);						
				function cartaReparto3() {
					barajaNaipes[7].classList.add("carta_reparto3");
					setTimeout(function(){
						clearInterval(intCartaReparto3);
						voltearCarta3();
					}, 50);
					
						
				}
			}
			if (barajaNaipes[7].classList.contains("carta_repartida")){
				barajaNaipes[7].classList.remove("carta_repartida");
				barajaNaipes[6].classList.add("repartir4");
				var intCartaReparto4 = setInterval (cartaReparto4, 500);
				function cartaReparto4() {
					barajaNaipes[6].classList.add("carta_reparto4");
					setTimeout(function(){
						clearInterval(intCartaReparto4);
						voltearCarta4();
					}, 50);	
				}	
			}
		}	
		
		function comprobarSumatorioCartas(){
			sumatorioCartasJugadas = 0;
			for (cartaJuego of cartasJugadas){
				sumatorioCartasJugadas += cartaJuego.valor;
				
				if (cartasJugadas.length==2&&sumatorioCartasJugadas==21){
					puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;
					calcularCreditoBlackJack(credito_jugador, apuesta);
					blackJack.classList.add("mostrar_blackJack");
					nueva_partida.disabled = false;
					return  reiniciarPartida=true;
				}else{
					pedir_carta.disabled = false;
					plantarse.disabled = false;
					console.log(sumatorioCartasJugadas);
				}
				if (sumatorioCartasJugadas>21){
					for (cartaJuego of cartasJugadas){
						cartasAs = cartasJugadas.filter(carta => carta.carta == "1");
						if (cartasAs.length==0){
							gameOVer.classList.add("mostrar_gameOver");
							nueva_partida.disabled = false;
							return reiniciarPartida=true;
						}
						if (cartasAs.length==1){
							ordernarArrelgoAses(cartasJugadas);
							cartasJugadas[0].valor=1;
							sumarCartasJugador();
							console.log(sumatorioCartasJugadas);
							alertPerdiste(sumatorioCartasJugadas);
							nueva_partida.disabled = false;
							return reIniciarPartida=true;
						}else if (cartasAs.length==2){
							ordernarArrelgoAses(cartasJugadas);
							cartasJugadas[0].valor=1;
							sumarCartasJugador();
							cartasJugadas[1].valor=1;
							sumarCartasJugador();
							puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;
							if (sumatorioCartasJugadas>21&&cartasJugadas[1].valor==1){
								alert("PERDISTE");
								nueva_partida.disabled = false;
								return reiniciarPartida=true;
							}else {
								cartasJugadas[1].valor=11;
								sumarCartasJugador();
								puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;
								alertPerdiste(sumatorioCartasJugadas);
								nueva_partida.disabled = false;
								return reiniciarPartida=true;
							}
						}else if (cartasAs.length==3){
							console.log("El sumatorio del paso 3 es: "+sumatorioCartasJugadas);
							ordernarArrelgoAses(cartasJugadas);
							cartasJugadas[1].valor=1;
							sumarCartasJugador();
							puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;
							if(sumatorioCartasJugadas>21&&cartasJugadas[1].valor==1&&cartasJugadas[2].valor==11){
								alert("entraFunction");
								console.log(cartasJugadas);
								cartasJugadas[2].valor=1;
								sumarCartasJugador();
								puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;
								alertPerdiste(sumatorioCartasJugadas);
								nueva_partida.disabled = false;
								return reiniciarPartida=true;
							}
						}
					}
				}
			}
			puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;
		}	

		function comprobarSumatorioBanca(){
			sumatorioCartasJugadasBanca = 0;
			for (cartaJuego of cartasBanca){
				sumatorioCartasJugadasBanca += cartaJuego.valor;
				console.log("sumatorio Banca = " +sumatorioCartasJugadasBanca)
				if (cartasBanca.length==2&&sumatorioCartasJugadasBanca==21){
					alert("BLACKJACK para la Banca");
					nueva_partida.disabled = false;
					gameOVer.classList.add("mostrar_gameOver");
					return  reiniciarPartida=true;
				}
				if (sumatorioCartasJugadasBanca>21){
					for (cartaJuego of cartasBanca){
						cartasAsBanca = cartasBanca.filter(carta => carta.carta == "1");
						if (cartasAsBanca.length==0){
							calcularCreditoVictoria();
							victoria.classList.add("mostrar_victoria");
							nueva_partida.disabled = false;
							return reiniciarPartida=true;
						}
						if (cartasAsBanca.length==1){
							ordernarArrelgoAses(cartasBanca);
							cartasBanca[0].valor=1;
							sumarCartasBanca();
							console.log("sumatorio Banca = " +sumatorioCartasJugadasBanca);
							comparaJuego();
							return reIniciarPartida=true;
						}else if (cartasAsBanca.length==2&&cartasAs.length<3){
							ordernarArrelgoAses(cartasBanca);
							cartasBanca[0].valor=1;
							sumarCartasBanca();
							cartasBanca[1].valor=1;
							sumarCartasBanca();
							if (sumatorioCartasJugadasBanca>21&&cartasBanca[1].valor==1){
								alert("case2");
								nueva_partida.disabled = false;
								return reiniciarPartida=true;
							}else {
								cartasBanca[1].valor=11;
								sumarCartasBanca();
								alert("case3");
								nueva_partida.disabled = false;
								if (sumatorioCartasJugadasBanca<=16&&cartasBanca.length==2){
									pideCartaBanca1();
								}if (sumatorioCartasJugadasBanca<=16&&cartasBanca.length==3){
									pideCartaBanca2();
								}
								return reiniciarPartida=true;
								
							}
						}else if (cartasAsBanca.length==3){
							console.log("sumatorio Banca = " +sumatorioCartasJugadasBanca);
							ordernarArrelgoAses(cartasBanca);
							cartasBanca[1].valor=1;
							sumarCartasBanca();
							if(sumatorioCartasJugadasBanca>21&&cartasBanca[1].valor==1&&cartasBanca[2].valor==11){
								console.log("sumatorio Banca = " +sumatorioCartasJugadasBanca);
								cartasBanca[2].valor=1;
								sumarCartasBanca();
								nueva_partida.disabled = false;
								return reiniciarPartida=true;
							}
						}
					}
				}
			}
			comparaJuego();
			puntuacion_banca_value.innerHTML = sumatorioCartasJugadasBanca;	
		}

		function ordernarArrelgoAses(cartasJugadas) {
			cartasJugadas.sort(function(a, b){							//ordena el array de cartasJugadas por valor
				if (a.carta > b.carta)									//si la carta es mayor que la siguiente
					return 1;											//se devuelve 1
				if (a.carta < b.carta)									//si la carta es menor que la siguiente
					return -1;											//se devuelve -1
				return 0;												//si no se cumple nada de lo anterior, se devuelve 0
			});
		}

		function ordernarArrelgoAses(cartasBanca) {
			cartasBanca.sort(function(a, b){							//ordena el array de cartasJugadas por valor
				if (a.carta > b.carta)									//si la carta es mayor que la siguiente
					return 1;											//se devuelve 1
				if (a.carta < b.carta)									//si la carta es menor que la siguiente
					return -1;											//se devuelve -1
				return 0;												//si no se cumple nada de lo anterior, se devuelve 0
			});
		}
		function sumarCartasJugador(){
			sumatorioCartasJugadas = 0;
			for (cartaJuego of cartasJugadas){
				sumatorioCartasJugadas += cartaJuego.valor;
			}
				return sumatorioCartasJugadas;
			
		}
		function sumarCartasBanca(){
			sumatorioCartasJugadasBanca = 0;
			for (cartaJuego of cartasBanca){
				sumatorioCartasJugadasBanca += cartaJuego.valor;
			}
			
		}

		function alertPerdiste(sumatorioCartasJugadas){
			if (sumatorioCartasJugadas>21){
				gameOVer.classList.add("mostrar_gameOver");
			}
		}
			
		function comparaJuego(){
			switch (cartasBanca.length){
				case 2:
					if (sumatorioCartasJugadasBanca<=16&&sumatorioCartasJugadasBanca<sumatorioCartasJugadas){
						pideCartaBanca1();
					}else if (sumatorioCartasJugadasBanca>sumatorioCartasJugadas&&sumatorioCartasJugadasBanca<=21){
						gameOVer.classList.add("mostrar_gameOver");
					}else if (sumatorioCartasJugadasBanca<sumatorioCartasJugadas){
						calcularCreditoVictoria();
						victoria.classList.add("mostrar_victoria");
					}else if (sumatorioCartasJugadas==sumatorioCartasJugadasBanca&&sumatorioCartasJugadasBanca>=17){
						calcularCreditoEmpate();
						empate.classList.add("mostrar_empate");
					}else if (sumatorioCartasJugadasBanca==sumatorioCartasJugadas&&sumatorioCartasJugadasBanca<=16){
						pedirCartaBanca1();
					}
					
					break;
				case 3:
					if (sumatorioCartasJugadasBanca<=16&&sumatorioCartasJugadasBanca<sumatorioCartasJugadas){
						pideCartaBanca2();
					}else if (sumatorioCartasJugadasBanca>sumatorioCartasJugadas&&sumatorioCartasJugadasBanca<=21){
						gameOVer.classList.add("mostrar_gameOver");
					}else if (sumatorioCartasJugadasBanca<sumatorioCartasJugadas){
						calcularCreditoVictoria();
						victoria.classList.add("mostrar_victoria");
					}else if (sumatorioCartasJugadas==sumatorioCartasJugadasBanca&&sumatorioCartasJugadasBanca>=17){
						calcularCreditoEmpate();
						empate.classList.add("mostrar_empate");
					}else if (sumatorioCartasJugadasBanca==sumatorioCartasJugadas&&sumatorioCartasJugadasBanca<=16){
						pedirCartaBanca2();
					}
					break;
				case 4:
					if (sumatorioCartasJugadasBanca>sumatorioCartasJugadas&&sumatorioCartasJugadasBanca<=21){
						gameOVer.classList.add("mostrar_gameOver");
					}else if (sumatorioCartasJugadasBanca<sumatorioCartasJugadas){
						calcularCreditoVictoria();
						victoria.classList.add("mostrar_victoria");
					}else if (sumatorioCartasJugadas==sumatorioCartasJugadasBanca){
						calcularCreditoEmpate();
						empate.classList.add("mostrar_empate");
					}
					break;
			}
		}

		function calcularCreditoVictoria(){
			credito_jugador = credito_jugador + (apuesta*2);
			credito_jugador_value.innerHTML = credito_jugador;
			console.log("credito jugador = " +credito_jugador);
		}

		function calcularCreditoEmpate(){
			credito_jugador = credito_jugador + apuesta;
			credito_jugador_value.innerHTML = credito_jugador;
			console.log("credito jugador = " +credito_jugador);
		}
		
		function calcularCreditoBlackJack(){
			credito_jugador = credito_jugador + (apuesta*3);
			credito_jugador_value.innerHTML = credito_jugador;
			console.log("credito jugador = " +credito_jugador);
		}
			
			