
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
	var intCartaReparto3
	var intCartaReparto4
	var intCartaReparto5
	var intCartaReparto6
	var intCartaReparto7
	var intCartaReparto8
	var intVoltearCarta1
	var intVoltearCarta3
	var intVoltearCarta4
	var intVoltearCarta5
	
	
	
	

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

	//**************************  Funciónes de control de Rejugabilidad (apuestas sucesivas) *************************************************************************************************************************************************************************
	// - Al iniciar una nueva partida, se otorga un crédito inicial de 1000 puntos
	// - se crea la baraja de cartas y se baraja.
	// - Se le solicita una apuesta al jugador y se guarda en la variable apuesta.
	// - Una vez introducida la cantidad de apuesta, se baraja.

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

	//**************************************************************************************************************************************************************************************************************************************************************************

	//**************************  Funciónes de control de Rejugabilidad (apuestas sucesivas) *************************************************************************************************************************************************************************
	// - Una vez comprobadas las condiciones de victoria/derrota, se puede volver a jugar o salir del juego.
	// - Si el jugador quiere seguir jugando, puede volver a realizar una apuesta siempre que tenga credito.
	// - El juego le preguntará cuánto quiere apostar si el jugador quiere volver a jugar, y la cantidad se le restará a su crédito.
	// - Para que el juego se pueda volver a jugar, hay que resetear todas las variables y las cartas.
	// - Una vez introducida la cantidad de apuesta, y el reset se haya efectuado, se crea una nueva baraja de cartas y se baraja.

	function nuevaApuesta() {																							//   --- Nueva apuesta ---
		reiniciarPartida=false;																							//   --- Reiniciar partida ---
		limpiarPantalla();																								//   --- Limpiar pantalla ---																	
		puntuacion_banca_value.innerHTML = "";																			//   --- Reset puntuación banca ---
		puntuacion_jugador_value.innerHTML = "";																		//   --- Reset puntuación jugador ---
		apuesta = 0;																									//   --- Reset apuesta ---
		//  --- Reset de clases de las cartas de la baraja ------------
		for (let i=0; i<barajaNaipes.length; i++) {																		//   --- Recorrer baraja ---
			barajaNaipes[i].classList.remove("repartir1", "barajar1", "barajar2", "repartir2", "repartir3", "repartir4", "repartir5", "repartir6", "repartir7", "repartir8", "voltear_carta1", "voltear_carta1-2", "carta_reparto1", "carta_reparto2", "carta_reparto3", "carta_reparto4", "carta_reparto5", "carta_reparto6", "carta_reparto7", "carta_reparto8", "carta_repartida");
		}
		//  -----------------------------------------------------------
		//  --- Poner las cartas boca abajo (anverso de las cartas) ---
		for (let i=0; i<barajaImagenes.length; i++) {																	//   --- Recorrer todas las cartas ---
			barajaImagenes[i].src = "deck/anverso.png";																	//   --- Cambiar imagen de las cartas al anverso ---
		}
		//  -----------------------------------------------------------
		if (credito_jugador > 0) {																						//  --- Si el jugador tiene credito ---
		//  --- Bucle para que el jugador pueda seleccionar la apuesta ---																							
			do {																												
				apuesta = parseInt(prompt("¿Cuanto quieres apostar?"));
				if (apuesta == 0){																						//   --- Si no se introduce ninguna cantidad ---
					alert("No has apostado nada, por favor introduce una cantidad");									//
				}else if (apuesta > credito_jugador) {																	//   --- Si el jugador no tiene suficiente credito ---
					alert("No tienes suficiente dinero para apostar esa cantidad, por favor introduce una cantidad menor");
				}else if (apuesta < 100) {																				//   --- Si la apuesta es menor que 100 ---	
					alert("No puedes apostar menos de 100, por favor introduce una cantidad mayor");
				}else if (apuesta == null) {																			//  --- Si el jugador no introduce ningún valor ---
					alert("No has introducido ningún valor, por favor introduce una cantidad");
				}
			}  while (apuesta > credito_jugador||apuesta < 100||apuesta == 0||apuesta == null);							//  --- Fin bucle ---
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
	
	//  --- Funcion para resetear los valores ---	

	function resetValores(){																																									
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
		intCartaReparto3 = 0;
		intCartaReparto3 = 0;
		intCartaReparto5 = 0;
		intCartaReparto6 = 0;
		intCartaReparto7 = 0;
		intCartaReparto8 = 0;
		intVoltearCarta1 = 0;
		intVoltearCarta3 = 0;
		intVoltearCarta4 = 0;
		intVoltearCarta5 = 0;
		newGame();																										//  --- Llamar a la funcion newGame ---
	}

	//  -------------------------------------------

	function newGame(){																									//  --- Funcion para empezar un nuevo juego ---
		crearCartas();																									//  --- Crear las cartas ---
		shuffleArray(baraja);																							//  --- Barajar las cartas ---
		barajar();																										//  --- Barajar las cartas (función de animaciones) ---
	}

	//**************************************************************************************************************************************************************************************************************************************************************************
	

	//**************************  Función para crear la bajara de cartas *******************************************************************************************************************************************************************************************************
	// - Se crean las cartas de la baraja y se añaden a un arreglo para que se puedan usar en el juego
	// - La misma función encargada de crear la clase de las cartas, es la misma que crea toda la baraja

	function crearCartas(palo, carta, valor){																			
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

	//**************************************************************************************************************************************************************************************************************************************************************************


	//**************************  Funcion para barajar la baraja (aleatorizar el arreglo de la baraja) *************************************************************************************************************************************************************************
	// - Con el método sort() se ordena el arreglo de la baraja de forma aleatoria

	function shuffleArray(baraja){																						//  --- Funcion para barajar las cartas ---
		baraja.sort(()=> Math.random() - 0.5);																			//  --- Barajar las cartas (ordena aleatoriamente el arreglo) ---
	}
	//**************************************************************************************************************************************************************************************************************************************************************************
	

	//**************************  Funciones para barajar la baraja (animaciones) ***********************************************************************************************************************************************************************************************
	//  - Mediante un bucle FOR  de 3 iteraciones, se alternan las clases "barajar1" y "barajar2" para que la baraja se baraje.
	//  - Cada iteracion se espera un tiempo de 1 segundo.
	// 	- Al finalizar la animacion, se reparten las 2 primeras cartas al jugador.

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

	//**************************************************************************************************************************************************************************************************************************************************************************
	

	//	**************************  Funciones del Jugador  *********************************************************************************************************************************************************************************************************************
	//  - Con estas funciones se controla el flujo del juego y las animaciones de las cartas.
	//  - Las funciones se van ejecutando mediante intervalos de tiempo que se van cancelando y se vuelven a ejecutar
	//    a medida que se va jugando, coincidiendo los tiempos con los tiempos de las animaciones.
	//  - Una vez que se han repartido las 2 primeras cartas, se ejecutan las funciones de volteo de cartas (voltearCarta1 y voltearCarta2)
	//    en las que  a su vez, antes de voltear las cartas, se determina qué cartas han sido robadas mediante el método shift(),
	//    se añaden al array cartasJugadas y se muestran al jugador, para posteriormente hacer el sumatorio de las cartas robadas (comprobarSumatorioCartas()).  

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

	function pideCarta(){																								//  --- Funcion pideCarta para el JUGADOR	
		if(barajaNaipes[8].classList.contains("carta_repartida")){														//  --- Si la carta8 tiene la clase carta_repartida										
			barajaNaipes[8].classList.remove("carta_repartida");														//  --- Quita la clase carta_repartida a la carta8
			barajaNaipes[7].classList.add("repartir3");																	//  --- Añade la clase repartir3 a la carta7 (animacion de la carta)
			intCartaReparto3 = setInterval (cartaReparto3, 500);													//  --- Ejecuta la funcion cartaReparto3 cada 500 milisegundos (duración de la animacion)	
			function cartaReparto3() {																					//  --- Funcion cartaReparto3	
				barajaNaipes[7].classList.add("carta_reparto3");														//	--- Añade la clase carta_reparto3 a la carta7 (colocacion de la carta)			
				setTimeout(function(){																					//  --- Funcion setTimeout
					clearInterval(intCartaReparto3);																	//  --- Detiene la funcion cartaReparto3
					voltearCarta3();																					//  --- Ejecuta la funcion voltearCarta3
				}, 50);																									//  --- Fin funcion setTimeout	
			}																											//  --- Se retrasa la animación de voltear la carta7 para darle tiempo a la colocación	
																														//  	y evitar así fallos en las animaciones. 
		}																												//  --- Fin si la carta8 tiene la clase carta_repartida
		if (barajaNaipes[7].classList.contains("carta_repartida")){														//  --- Si la carta7 tiene la clase carta_repartida
			barajaNaipes[7].classList.remove("carta_repartida");														//  --- Quita la clase carta_repartida a la carta7		
			barajaNaipes[6].classList.add("repartir4");																	//  --- Añade la clase repartir4 a la carta6 (animacion de la carta)
			intCartaReparto4 = setInterval (cartaReparto4, 500);													//  --- Ejecuta la funcion cartaReparto4 cada 500 milisegundos (duración de la animacion)		
			function cartaReparto4() {																					//  --- Funcion cartaReparto4
				barajaNaipes[6].classList.add("carta_reparto4");														//	--- Añade la clase carta_reparto4 a la carta6 (colocacion de la carta)
				setTimeout(function(){																					//  --- Funcion setTimeout
					clearInterval(intCartaReparto4);																	//  --- Detiene la funcion cartaReparto4
					voltearCarta4();																					//  --- Ejecuta la funcion voltearCarta4		
				}, 50);																									//  --- Fin funcion setTimeout
			}																											//  --- Se retrasa la animación de voltear la carta6 para darle tiempo a la colocación
		}																												//  --- Fin si la carta7 tiene la clase carta_repartida
	}																													//  --- Fin funcion pideCarta

	
	
	function voltearCarta1(){																							//  --- Funcion voltearCarta1
		inicioPartida=false;																							//  --- InicioPartida es false
		let cartaJugada = baraja.shift();																				//  --- Roba la carta1 de la baraja
		cartasJugadas.push(cartaJugada);																				//  --- Añade la carta1 a la lista de cartas jugadas
		console.log(cartasJugadas);																										
		if (barajaNaipes[8].classList.contains("carta_reparto2")){														//  --- Si la carta8 tiene la clase carta_reparto2
			barajaNaipes[9].classList.remove("repartir1");																//  --- Quita la clase repartir1 a la carta9 (animacion de la carta)
			barajaNaipes[9].classList.add("voltear_carta1");															//  --- Añade la clase voltear_carta1 a la carta9 (animacion de la carta)
			barajaNaipes[9].addEventListener("animationend", volteo1);													//  --- Añade el evento animationend a la carta9 (animacion de la carta)
																														//  --- Estos eventListeners se ejecutan cuando la animacion termina, aunque hay que eliminarlos puesto que se quedan en ejecucion continuamente														
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
		if (barajaNaipes[8].classList.contains("voltear_carta1-2")){													//  --- Si la carta8 tiene la clase voltear_carta1-2
			barajaNaipes[8].classList.remove("repartir2");																//  --- Quita la clase repartir2 a la carta8 (animacion de la carta)
			intVoltearCarta3 = setInterval (voltearCarta3, 1000);														//  --- Ejecuta la funcion voltearCarta3 cada 1 segundo
			function voltearCarta3(){																					//  --- Funcion voltearCarta3
				barajaNaipes[7].classList.add("voltear_carta1");														//  --- Añade la clase voltear_carta1 a la carta7 (animacion de la carta)
				clearInterval(intVoltearCarta3);																		//  --- Quita el intervalo de la funcion voltearCarta3
			}																											//  --- Fin funcion voltearCarta3  ---
			barajaNaipes[7].addEventListener("animationend", volteo3);													//  --- Añade el evento animationend a la carta7 (control de animacion de volteo)	
		}																												//  --- Fin si la carta8 tiene la clase voltear_carta1-2  ---
		function volteo3(){																								//  --- Funcion volteo3
			barajaImagenes[7].src = "deck/"+cartaJugada.id+".png";														//  --- Cambia la imagen de la carta7
			barajaNaipes[7].classList.remove("voltear_carta1");															//  --- Quita la clase voltear_carta1 a la carta7 (control de animacion de volteo)	
			barajaNaipes[7].classList.add("carta_repartida");															//  --- Añade la clase carta_repartida a la carta7 (clase vacia de control)
			barajaNaipes[7].classList.add("voltear_carta1-2");															//  --- Añade la clase voltear_carta1-2 a la carta7 (control de animacion de volteo)
			barajaNaipes[7].removeEventListener("animationend", volteo3);												//  --- Quita el evento animationend a la carta7 (control de animacion de volteo)
			barajaNaipes[7].addEventListener("animationend", llamadaSumatorio);											//  --- Añade el evento animationend a la carta7 (control de animacion de volteo)
			function llamadaSumatorio(){																				//  --- Funcion llamadaSumatorio
				barajaNaipes[7].removeEventListener("animationend", llamadaSumatorio);									//  --- Quita el evento animationend a la carta7 (animacion de la carta) antes de sumar.
				comprobarSumatorioCartas();																				//  --- Ejecuta la funcion comprobarSumatorioCartas
			}																											//  --- Fin funcion llamadaSumatorio  ---
		}																												//  --- Fin funcion volteo3  ---	
	}																													//  --- Fin funcion voltearCarta3  ---
	
	function voltearCarta4(){																							//  --- Funcion voltearCarta4
		let cartaJugada = baraja.shift();																				//  --- Roba la carta4 de la baraja		
		cartasJugadas.push(cartaJugada);																				//  --- Añade la carta4 a la lista de cartas jugadas
		if (barajaNaipes[7].classList.contains("voltear_carta1-2")){													//  --- Si la carta7 tiene la clase voltear_carta1-2	
			barajaNaipes[7].classList.remove("repartir3");																//  --- Quita la clase repartir3 a la carta7 (animacion de la carta)
			intVoltearCarta4 = setInterval (voltearCarta4, 1000);														//  --- Ejecuta la funcion voltearCarta4 cada 1 segundo
			function voltearCarta4(){																					//  --- Funcion voltearCarta4	
				barajaNaipes[6].classList.add("voltear_carta1");														//  --- Añade la clase voltear_carta1 a la carta6 (animacion de la carta)	
				clearInterval(intVoltearCarta4);																		//  --- Quita el intervalo de la funcion voltearCarta4
			}																											//  --- Fin funcion voltearCarta4  ---	
			barajaNaipes[6].addEventListener("animationend", volteo4);													//  --- Añade el evento animationend a la carta6 (control de animacion de volteo)	
		}																												//  --- Fin si la carta7 tiene la clase voltear_carta1-2  ---
		function volteo4(){																								//  --- Funcion volteo4	
			barajaImagenes[6].src = "deck/"+cartaJugada.id+".png";														//  --- Cambia la imagen de la carta6
			barajaNaipes[6].classList.remove("voltear_carta1");															//  --- Quita la clase voltear_carta1 a la carta6 (control de animacion de volteo)
			barajaNaipes[6].classList.add("voltear_carta1-2");															//  --- Añade la clase voltear_carta1-2 a la carta6 (control de animacion de volteo)
			barajaNaipes[6].classList.add("carta_repartida");															//  --- Añade la clase carta_repartida a la carta6 (clase vacia de control)
			barajaNaipes[6].removeEventListener("animationend", volteo4);												//  --- Quita el evento animationend a la carta6 (control de animacion de volteo)
			barajaNaipes[6].addEventListener("animationend", llamadaSumatorio);											//  --- Añade el evento animationend a la carta6 (control de animacion de volteo)
			function llamadaSumatorio(){																				//  --- Funcion llamadaSumatorio	
				barajaNaipes[6].removeEventListener("animationend", llamadaSumatorio);									//  --- Quita el evento animationend a la carta6 (animacion de la carta) antes de sumar.			
				comprobarSumatorioCartas();																				//  --- Ejecuta la funcion comprobarSumatorioCartas
			}																											//  --- Fin funcion llamadaSumatorio  ---
		}																												//  --- Fin funcion volteo4  ---
	}																													//  --- Fin funcion voltearCarta4  ---
	//**************************************************************************************************************************************************************************************************************************************************************************	
	
	//	**************************  Funciones de la Banca  *********************************************************************************************************************************************************************************************************************

	function repartirBanca(){																							//  --- Funcion repartirBanca
		plantarse.disabled = true;																						//  --- Deshabilita el boton plantarse	
		pedir_carta.disabled = true;																					//  --- Deshabilita el boton pedir_carta
		barajaNaipes[5].classList.add("repartir5");																		//  --- Añade la clase repartir5 a la carta5 (animacion de la carta)		
		intCartaReparto5 = setInterval (cartaReparto5, 500);														//  --- Ejecuta la funcion cartaReparto5 cada 500 milisegundos (duración de la animacion)
		function cartaReparto5() {																						//  --- Funcion cartaReparto5
			clearInterval(intCartaReparto5);																			//  --- Detiene la funcion cartaReparto5
			barajaNaipes[5].classList.add("carta_reparto5");															//  --- Añade la clase carta_reparto5 a la carta5 (colocacion de la carta)	
			barajaNaipes[4].classList.add("repartir6");																	//  --- Añade la clase repartir6 a la carta4 (animacion de la carta)
		}																												//  --- Fin funcion cartaReparto5  ---																												
		intCartaReparto6 = setInterval (cartaReparto6, 1000);														//  --- Ejecuta la funcion cartaReparto6 cada 1000 milisegundos (duración de la animacion)
		function cartaReparto6() {																						//  --- Funcion cartaReparto6
			barajaNaipes[4].classList.add("carta_reparto6");															//  --- Añade la clase carta_reparto6 a la carta4 (colocacion de la carta)
			clearInterval(intCartaReparto6);																			//  --- Detiene la funcion cartaReparto6
		}																												//  --- Fin funcion cartaReparto6  ---
		intVoltearCarta5 = setInterval (voltear, 1100);																//  --- Ejecuta la funcion voltear cada 1100 milisegundos (duración de la animacion)	
		function voltear(){																								//  --- Funcion voltear		
			if (barajaNaipes[4].classList.contains("carta_reparto6")) {													//  --- Si la carta4 tiene la clase carta_reparto6
				voltearCarta5();																						//  --- Ejecuta la funcion voltearCarta5
				clearInterval(intVoltearCarta5);																		//  --- Detiene la funcion voltear	
			}																											//  --- Fin si la carta4 tiene la clase carta_reparto6  ---
		}																												//  --- Fin funcion voltear  ---
	}																													//  --- Fin funcion repartirBanca  ---

	function voltearCarta5(){																							//  --- Funcion voltearCarta5
		let cartaBancaJugada = baraja.shift();																			//  --- Roba la carta5 de la baraja	
		cartasBanca.push(cartaBancaJugada);																				//  --- Añade la carta5 a la lista de cartas banca
		if (barajaNaipes[5].classList.contains("carta_reparto5")){														//  --- Si la carta5 tiene la clase carta_reparto5
			barajaNaipes[6].classList.remove("repartir4");																//  --- Quita la clase repartir4 a la carta6 (animacion de la carta)
			barajaNaipes[5].classList.add("voltear_carta1");															//	--- Añade la clase voltear_carta1 a la carta5 (animacion de la carta)
			barajaNaipes[5].addEventListener("animationend", volteo5);													//	--- Añade el evento animationend a la carta5 (control de animacion de volteo)
		}																												//  --- Fin si la carta5 tiene la clase carta_reparto5
		function volteo5(){																								//  --- Funcion volteo5
			barajaImagenes[5].src = "deck/"+cartaBancaJugada.id+".png";													//  --- Cambia la imagen de la carta5
			barajaNaipes[5].classList.remove("voltear_carta1");															//  --- Quita la clase voltear_carta1 a la carta5 (control de animacion de volteo)
			barajaNaipes[5].classList.add("voltear_carta1-2");															//  --- Añade la clase voltear_carta1-2 a la carta5 (control de animacion de volteo)
			barajaNaipes[5].classList.add("carta_repartida");															//  --- Añade la clase carta_repartida a la carta5 (clase vacia de control)									
			barajaNaipes[5].removeEventListener("animationend", volteo5);												//  --- Quita el evento animationend a la carta5 (control de animacion de volteo)	
			barajaNaipes[5].addEventListener("animationend", llamadaVoltearCarta6);										//  --- Añade el evento animationend a la carta5 (control de animacion de volteo)
			function llamadaVoltearCarta6(){																			//  --- Funcion llamadaVoltearCarta6
				barajaNaipes[5].removeEventListener("animationend", llamadaVoltearCarta6);								//  --- Quita el evento animationend a la carta5 (control de animacion de volteo)
				voltearCarta6();																						//  --- Ejecuta la funcion voltearCarta6
			}																											//  --- Fin funcion llamadaVoltearCarta6  ---			
		}																												//  --- Fin funcion volteo5  ---
	}																													//  --- Fin funcion voltearCarta5  ---

	function voltearCarta6(){																							//  --- Funcion voltearCarta6	
		let cartaBancaJugada = baraja.shift();																			//  --- Roba la carta6 de la baraja												
		cartasBanca.push(cartaBancaJugada);																				//  --- Añade la carta6 a la lista de cartas banca
		if (barajaNaipes[4].classList.contains("carta_reparto6")){														//  --- Si la carta6 tiene la clase carta_reparto6						
			barajaNaipes[5].classList.remove("repartir5");																//  --- Quita la clase repartir5 a la carta5 (animacion de la carta)
			barajaNaipes[4].classList.add("voltear_carta1");															//	--- Añade la clase voltear_carta1 a la carta4 (animacion de la carta)	
			barajaNaipes[4].addEventListener("animationend", volteo6);													//	--- Añade el evento animationend a la carta4 (control de animacion de volteo)																								
		}																												//  --- Fin si la carta4 tiene la clase carta_reparto6
		function volteo6(){																								//  --- Funcion volteo6
			barajaImagenes[4].src = "deck/"+cartaBancaJugada.id+".png";													//  --- Cambia la imagen de la carta4				
			barajaNaipes[4].classList.remove("voltear_carta1");															//  --- Quita la clase voltear_carta1 a la carta4 (control de animacion de volteo)
			barajaNaipes[4].classList.add("voltear_carta1-2");															//  --- Añade la clase voltear_carta1-2 a la carta4 (control de animacion de volteo)
			barajaNaipes[4].classList.add("carta_repartida");															//  --- Añade la clase carta_repartida a la carta4 (clase vacia de control)							
			barajaNaipes[4].removeEventListener("animationend", volteo6);												//  --- Quita el evento animationend a la carta4 (control de animacion de volteo)
			barajaNaipes[4].addEventListener("animationend", llamadaSumatorio);											//  --- Añade el evento animationend a la carta4 (control de animacion de volteo)
			function llamadaSumatorio(){																				//  --- Funcion llamadaSumatorio
				barajaNaipes[4].removeEventListener("animationend", llamadaSumatorio);									//  --- Quita el evento animationend a la carta4 (control de animacion de volteo)
				comprobarSumatorioBanca();																				//  --- Ejecuta la funcion comprobarSumatorioBanca
			}																											//  --- Fin funcion llamadaSumatorio
		}																												//  --- Fin funcion volteo6
	}																													//  --- Fin funcion voltearCarta6

	function voltearCarta7(){																							//  --- Funcion voltearCarta7
		let cartaBancaJugada = baraja.shift();																			//  --- Roba la carta7 de la baraja
		cartasBanca.push(cartaBancaJugada);																				//  --- Añade la carta7 a la lista de cartas banca				
		if (barajaNaipes[3].classList.contains("carta_reparto7")){														//  --- Si la carta7 tiene la clase carta_reparto7
			barajaNaipes[4].classList.remove("repartir6");																//  --- Quita la clase repartir6 a la carta4 (animacion de la carta)
			barajaNaipes[3].classList.add("voltear_carta1");															//	--- Añade la clase voltear_carta1 a la carta3 (animacion de la carta)
			barajaNaipes[3].addEventListener("animationend", volteo7)													//	--- Añade el evento animationend a la carta3 (control de animacion de volteo)				
		}																												//  --- Fin si la carta7 tiene la clase carta_reparto7
		function volteo7(){																								//  --- Funcion volteo7	
			barajaImagenes[3].src = "deck/"+cartaBancaJugada.id+".png";													//  --- Cambia la imagen de la carta3	
			barajaNaipes[3].classList.remove("voltear_carta1");															//  --- Quita la clase voltear_carta1 a la carta3 (control de animacion de volteo)
			barajaNaipes[3].classList.add("voltear_carta1-2");															//  --- Añade la clase voltear_carta1-2 a la carta3 (control de animacion de volteo)
			barajaNaipes[3].classList.add("carta_repartida");															//  --- Añade la clase carta_repartida a la carta3 (clase vacia de control)
			barajaNaipes[3].removeEventListener("animationend", volteo7);												//  --- Quita el evento animationend a la carta3 (control de animacion de volteo)
			barajaNaipes[3].addEventListener("animationend", llamadaSumatorio);											//  --- Añade el evento animationend a la carta3 (control de animacion de volteo)	
			function llamadaSumatorio(){																				//  --- Funcion llamadaSumatorio
				barajaNaipes[3].removeEventListener("animationend", llamadaSumatorio);									//  --- Quita el evento animationend a la carta3 (control de animacion de volteo)
				comprobarSumatorioBanca();																				//  --- Ejecuta la funcion comprobarSumatorioBanca
			}																											//  --- Fin funcion llamadaSumatorio ---
		}																												//  --- Fin funcion volteo7	---
	}																													//  --- Fin funcion voltearCarta7 ---

	function voltearCarta8(){																							//  --- Funcion voltearCarta8
		let cartaBancaJugada = baraja.shift();																			//  --- Roba la carta8 de la baraja
		cartasBanca.push(cartaBancaJugada);																				//  --- Añade la carta8 a la lista de cartas banca
		if (barajaNaipes[2].classList.contains("carta_reparto8")){														//  --- Si la carta8 tiene la clase carta_reparto8
			barajaNaipes[3].classList.remove("repartir7");																//  --- Quita la clase repartir7 a la carta3 (animacion de la carta)
			barajaNaipes[2].classList.add("voltear_carta1");															//	--- Añade la clase voltear_carta1 a la carta2 (animacion de la carta)
			barajaNaipes[2].addEventListener("animationend", volteo8);													//	--- Añade el evento animationend a la carta2 (control de animacion de volteo)				
		}																												//  --- Fin si la carta8 tiene la clase carta_reparto8												
		function volteo8(){																								//  --- Funcion volteo8
			barajaImagenes[2].src = "deck/"+cartaBancaJugada.id+".png";													//  --- Cambia la imagen de la carta2
			barajaNaipes[2].classList.remove("voltear_carta1");															//  --- Quita la clase voltear_carta1 a la carta2 (control de animacion de volteo)
			barajaNaipes[2].classList.add("voltear_carta1-2");															//  --- Añade la clase voltear_carta1-2 a la carta2 (control de animacion de volteo)	
			barajaNaipes[2].classList.add("carta_repartida")															//  --- Añade la clase carta_repartida a la carta2 (clase vacia de control)	
			barajaNaipes[2].removeEventListener("animationend", volteo8);												//  --- Quita el evento animationend a la carta2 (control de animacion de volteo)	
			barajaNaipes[2].addEventListener("animationend", llamadaSumatorio);											//  --- Añade el evento animationend a la carta2 (control de animacion de volteo)	
			function llamadaSumatorio(){																				//  --- Funcion llamadaSumatorio
				barajaNaipes[2].removeEventListener("animationend", llamadaSumatorio);									//  --- Quita el evento animationend a la carta2 (control de animacion de volteo)			
				comprobarSumatorioBanca();																				//  --- Ejecuta la funcion comprobarSumatorioBanca
			}																											//  --- Fin funcion llamadaSumatorio ---
		}																												//  --- Fin funcion volteo8	---
	}																													//  --- Fin funcion voltearCarta8 ---													
	// Funcion que se ejecuta cuando la banca, despues de robar 2 cartas, suma menos de 16
	function pideCartaBanca1(){																							//  --- Funcion pideCartaBanca1
		if(barajaNaipes[4].classList.contains("carta_repartida")){														//  --- Si la carta4 tiene la clase carta_repartida
			barajaNaipes[4].classList.remove("carta_repartida");														//  --- Quita la clase carta_repartida a la carta4 (clase vacia de control)
			barajaNaipes[3].classList.add("repartir7");																	//  --- Añade la clase repartir7 a la carta3 (animacion de la carta)
			intCartaReparto7 = setInterval (cartaReparto7, 500);													//  --- Crea una variable intCartaReparto7 que ejecuta la funcion cartaReparto7 cada 500ms, coincidiendo con el tiempo de la animacion de la carta
			function cartaReparto7() {																					//  --- Funcion cartaReparto7
				barajaNaipes[3].classList.add("carta_reparto7");														//  --- Añade la clase carta_reparto7 a la carta3 (animacion de la carta)
				setTimeout(function(){																					//  --- Crea una variable setTimeout que ejecuta la funcion despues de 50ms
					clearInterval(intCartaReparto7);																	//  --- Limpia la variable intCartaReparto7
					voltearCarta7();																					//  --- Ejecuta la funcion voltearCarta7	
				}, 50);																									//  --- Fin setTimeout	
			}																											//  --- Se retrasa la animación de voltear la carta7 para darle tiempo a la colocación	
		}																												//  	y evitar así fallos en las animaciones. 
	}																													//  --- Fin funcion pideCartaBanca1 ---
	
	
	//	Funcion que se ejecuta cuando la banca, despues de robar 3 cartas, suma menos de 16
	function pideCartaBanca2(){																							//  --- Funcion pideCartaBanca2
		if(barajaNaipes[3].classList.contains("carta_repartida")){														//  --- Si la carta3 tiene la clase carta_repartida		
			barajaNaipes[3].classList.remove("carta_repartida");														//  --- Quita la clase carta_repartida a la carta3 (clase vacia de control)	
			barajaNaipes[2].classList.add("repartir8");																	//  --- Añade la clase repartir8 a la carta2 (animacion de la carta)	
			intCartaReparto8 = setInterval (cartaReparto8, 500);													//  --- Crea una variable intCartaReparto7 que ejecuta la funcion cartaReparto7 cada 500ms, coincidiendo con el tiempo de la animacion de la carta
			function cartaReparto8() {																					//  --- Funcion cartaReparto7
				barajaNaipes[2].classList.add("carta_reparto8");														//  --- Añade la clase carta_reparto8 a la carta2 (animacion de la carta)
				setTimeout(function(){																					//  --- Crea una variable setTimeout que ejecuta la funcion despues de 50ms
					clearInterval(intCartaReparto8);																	//  --- Limpia la variable intCartaReparto7
					voltearCarta8();																					//  --- Ejecuta la funcion voltearCarta8
				}, 50);																									//  --- Fin setTimeout		
			}																											//  --- Se retrasa la animación de voltear la carta7 para darle tiempo a la colocación	
		}																												//  	y evitar así fallos en las animaciones. 
	}																													//  --- Fin funcion pideCartaBanca1 ---

	//**************************************************************************************************************************************************************************************************************************************************************************

	//	************************** Algoritmos de calculo de sumatorios de cartas de Jugador ************************************************************************************************************************************************************************************
	//  - Funcion que calcula la suma de las cartas del Jugador y la muestra en el HTML.
	//	- Se tienen en cuenta la posibilidad de robar ases y, en caso de superar 21, cambiar su valor de 11 a 1 comprobando que no se exceda de 21.
	//	- Para ello, se comprueba si la suma de las cartas es mayor que 21, si es asi, se mediante un bucle se comprueba con un filtro si hay un as en la mano, se añade al arreglo cartasAs, y se reordenan las cartas.
	//	- Al reordenar el arreglo, se posicionan los ases en las primeras posiciones para controlar el valor de los mismos de manera correcta y se vuele a verificar el sumatorio.

	function comprobarSumatorioCartas(){																				//  --- Funcion comprobarSumatorioCartas
		sumatorioCartasJugadas = 0;																						//  --- Inicializa la variable sumatorioCartasJugadas a 0, para que cada sumatorio se realice con cada nueva adicion de cartas
		for (cartaJuego of cartasJugadas){																				//  --- Recorre el arreglo cartasJugadas (cartas que se han robado)
			sumatorioCartasJugadas += cartaJuego.valor;																	//  --- Suma el valor de cada carta al sumatorio
			if (cartasJugadas.length==2&&sumatorioCartasJugadas==21){													//  --- Si el jugador tiene 2 cartas y el sumatorio es 21, es un BLACKJAC
				puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;											//  --- Muestra el valor del sumatorio en el HTML
				calcularCreditoBlackJack(credito_jugador, apuesta);														//  --- Ejecuta la funcion calcularCreditoBlackJack para aplicar el premio
				blackJack.classList.add("mostrar_blackJack");															//  --- Muestra el popup de blackjack																			
				return  reiniciarPartida=true;																			//  --- Devuelve la variable reiniciarPartida a true para reiniciar la partida
			}																											
			if (sumatorioCartasJugadas>21){																				//  --- Si el sumatorio es mayor que 21, se comprueba si hay un as en la mano
				for (cartaJuego of cartasJugadas){																		//  --- Recorre el arreglo cartasJugadas (cartas que se han robado)
					cartasAs = cartasJugadas.filter(carta => carta.carta == "1");										//  --- Crea un arreglo cartasAs con las cartas que sean un as
					switch (cartasAs.length){																			//  --- Se comprueba el numero de ases en la mano
						case 0:																							//  --- Si no hay ases y el sumatorio supera 21, el jugador pierde.
							gameOVer.classList.add("mostrar_gameOver");													//  --- Muestra el popup de gameOver
							break;																						//  --- Fin case 0

						case 1:																							//  --- Si hay un as, se cambia su valor a 1 y se recalcula el sumatorio
							ordernarArrelgoAses(cartasJugadas);															//  --- Se ordena el arreglo cartasJugadas con los ases en la primera posicion	
							cartasJugadas[0].valor=1;																	//  --- Se cambia el valor del as a 1	
							sumarCartasJugador();																		//  --- Se recalcula el sumatorio	
							puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;								//  --- Muestra el valor del sumatorio en el HTML		
							console.log(sumatorioCartasJugadas);														//  --- Muestra el valor del sumatorio en la consola
							break;																						//  --- Fin case 1
						
						case 2:																							//  --- Si hay dos ases, se cambian sus valores a 1 y se recalcula el sumatorio
							ordernarArrelgoAses(cartasJugadas);															//  --- Se ordena el arreglo cartasJugadas con los ases en la primera posicion	
							cartasJugadas[0].valor=1;																	//  --- Se cambia el valor del as en la primera posicion a 1
							puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;								//  --- Muestra el valor del sumatorio en el HTML
							if (sumatorioCartasJugadas>21&&cartasJugadas[0].valor==1&&cartasJugadas.length<3){			//  --- Si el sumatorio es mayor que 21, se comprueba si hay otro as en la mano y se comprueba si el jugador tiene menos de 3 cartas	
								cartasJugadas[1].valor==1;																//  --- Se cambia el valor del as en la segunda posicion a 1
								sumarCartasJugador();																	//  --- Se recalcula el sumatorio		
								console.log("puntuacion jugador: "+ sumatorioCartasJugadas);							//  --- Muestra el valor del sumatorio en la consola	
								puntuacion_banca_value.innerHTML = sumatorioCartasJugadasBanca;							//  --- Muestra el valor del sumatorio en el HTML
							}
							if (sumatorioCartasJugadas<21&&cartasJugadas[1].valor==1&&cartasJugadas.length<=3){			//  --- Si el sumatorio es menor que 21, se comprueba si el jugador tiene AL MENOS 3 cartas, y si el as en la segunda posicion tiene valor 1
								cartasJugadas[1].valor=11;																//  --- Se cambia el valor del as en la segunda posicion a 11
								sumarCartasJugador();																	//  --- Se recalcula el sumatorio
								console.log("puntuacion jugador: "+ sumatorioCartasJugadas);							//  --- Muestra el valor del sumatorio en la consola	
								puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;							//  --- Muestra el valor del sumatorio en el HTML
							}
							if (sumatorioCartasJugadas>21&&cartasJugadas[1].valor==11&&cartasJugadas.length>=3){		//  --- Si el sumatorio es mayor que 21, se comprueba si el as en la segunda posicion tiene valor 11 y si el jugador tiene 3 o más cartas
								cartasJugadas[1].valor=1;																//  --- Se cambia el valor del as en la segunda posicion a 1
								sumarCartasJugador();																	//  --- Se recalcula el sumatorio
								console.log("puntuacion jugador: "+ sumatorioCartasJugadas);							//  --- Muestra el valor del sumatorio en la consola
								puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;							//  --- Muestra el valor del sumatorio en el HTML
							}																										
							break;																						//  --- Fin case 2

						case 3:																							//  --- Si hay tres ases, se cambian sus valores a 1 y se recalcula el sumatorio
							ordernarArrelgoAses(cartasJugadas);															//  --- Se ordena el arreglo cartasJugadas con los ases en la primera posicion
							cartasJugadas[1].valor=1;																	//  --- Se cambia el valor del as en la segunda posicion a 1
							sumarCartasJugador();																		//  --- Se recalcula el sumatorio
							console.log("El sumatorio del paso 3 es: "+sumatorioCartasJugadas);							//  --- Muestra el valor del sumatorio en la consola		
							puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;								//  --- Muestra el valor del sumatorio en el HTML
							if(sumatorioCartasJugadas>21&&cartasJugadas[1].valor==1&&cartasJugadas[2].valor==11){		//  --- Si el sumatorio es mayor que 21, se comprueba si el as en la segunda posicion tiene valor 1 y si el as en la tercera posicion tiene valor 11
								console.log(cartasJugadas);																//  --- Muestra el arreglo cartasJugadas en la consola
								cartasJugadas[2].valor=1;																//  --- Se cambia el valor del as en la tercera posicion a 1
								sumarCartasJugador();																	//  --- Se recalcula el sumatorio
								puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;							//  --- Muestra el valor del sumatorio en el HTML		
							}
						break;
						
						case 4: 																						//  --- Si hay cuatro ases, se cambian lo valores de los 3 primeros a 1 y se recalcula el sumatorio
							ordernarArrelgoAses(cartasJugadas);															//  --- Se ordena el arreglo cartasJugadas con los ases en la primera posicion		
							cartasJugadas[2].valor=1;																	//  --- Se cambia el valor del as en la tercera posicion a 1
							sumarCartasJugador();																		//  --- Se recalcula el sumatorio
							console.log("El sumatorio del paso 4 es: "+sumatorioCartasJugadas);							//  --- Muestra el valor del sumatorio en la consola	
							puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;								//  --- Muestra el valor del sumatorio en el HTML
							break;
					}
				}
			}
		}
		puntuacion_jugador_value.innerHTML = sumatorioCartasJugadas;													//  --- Muestra el valor del sumatorio en el HTML
	}	

	//*******************************************************************************************************************************************************************************************************************************************************************************

	//	************************** Algoritmos de calculo de sumatorios de cartas de la Banca *****************************************************************************************************************************************************************************************
	//  - Funcion que calcula la suma de las cartas de la Banca y la muestra en el HTML.
	//	- Se tienen en cuenta la posibilidad de robar ases y, en caso de superar 21, cambiar su valor de 11 a 1 comprobando que no se exceda de 21.
	//	- Para ello, se comprueba si la suma de las cartas es mayor que 21, si es asi, se mediante un bucle se comprueba con un filtro si hay un as en la mano, se añade al arreglo cartasAs, y se reordenan las cartas.
	//	- Al reordenar el arreglo, se posicionan los ases en las primeras posiciones para controlar el valor de los mismos de manera correcta y se vuele a verificar el sumatorio.
	//  - Si la suma de las cartas es menor que 16, se roba una carta para la banca.
	//  - Si la suma de las cartas es mayor o igual a 17, la banca tiene la obligación de plantarse.
	//  - Al finalizar las condiciones de suma de la banca (robo de cartas o plantarse), se compara la puntuacion de la banca con la del jugador mediante la función comparaJuego().

	function comprobarSumatorioBanca(){																					//  --- Funcion que comprueba el sumatorio de las cartas de la Banca
		sumatorioCartasJugadasBanca = 0;																				//  --- Se inicializa el sumatorio de las cartas de la Banca a 0
		for (cartaJuego of cartasBanca){																				//  --- Se recorre el arreglo cartasBanca
			sumatorioCartasJugadasBanca += cartaJuego.valor;															//  --- Se suma el valor de la carta al sumatorio de las cartas de la Banca
			console.log("sumatorio Banca = " +sumatorioCartasJugadasBanca)												//  --- Muestra el valor del sumatorio en la consola
			if (cartasBanca.length==2&&sumatorioCartasJugadasBanca==21){												//  --- Si hay dos cartas en la mano y el sumatorio es 21, el resultado es un BlackJack para la banca y el jugador pieder automaticamente aunque tenga 21.
				alert("BLACKJACK para la Banca");																		//  --- Muestra un mensaje de alerta	
				gameOVer.classList.add("mostrar_gameOver");																//  --- Se muestra el mensaje de Game Over en el HTML																		//  --- Se devuelve el valor de reiniciarPartida a true para que se reinicie la partida	
			}
			if (sumatorioCartasJugadasBanca>21){																		//  --- Si el sumatorio de las cartas es mayor que 21, se comprueba si hay un as en la mano, se añade al arreglo cartasAs, y se reordenan las cartas.
				for (cartaJuego of cartasBanca){																		//  --- Se recorre el arreglo cartasBanca
					cartasAsBanca = cartasBanca.filter(carta => carta.carta == "1");									//  --- Se filtra el arreglo cartasBanca para obtener las cartas que contengan el valor 1 (Ases)
					switch (cartasAsBanca.length){																		//  --- Se comprueba si hay un as en la mano
						case 0:																							//  --- Si no hay un as en la mano, la banca a superado 21 y el jugador gana
							calcularCreditoVictoria();																	//  --- Se calcula el nuevo crédito del jugador por la victoria
							victoria.classList.add("mostrar_victoria");													//  --- Se muestra el mensaje de victoria en el HTML
							break;																						//  --- Se sale del switch

						case 1:																							//  --- Si hay un as en la mano, se cambia su valor a 1 y se reordenan las cartas.													
							ordernarArrelgoAses(cartasBanca);															//  --- Se reordena el arreglo cartasBanca
							cartasBanca[0].valor=1;																		//  --- Se cambia el valor del as a 1	
							sumarCartasBanca();																			//  --- Se suman las cartas de la Banca
							puntuacion_banca_value.innerHTML = sumatorioCartasJugadasBanca;								//  --- Se muestra el sumatorio de las cartas de la Banca en el HTML
							comparaJuego();																				//  --- Se comprueba el resultado del juego	
							console.log("sumatorio Banca = " +sumatorioCartasJugadasBanca);								//  --- Muestra el valor del sumatorio en la consola
							break;																						//  --- Se sale del switch

						case 2:																							//  --- Si hay dos ases en la mano, se reordenan las cartas.															
							ordernarArrelgoAses(cartasBanca);															//  --- Se reordena el arreglo cartasBanca
							cartasBanca[0].valor=1;																		//  --- Se cambia el valor del as a 1
							puntuacion_banca_value.innerHTML = sumatorioCartasJugadasBanca;								//  --- Se muestra el sumatorio de las cartas de la Banca en el HTML
							if (sumatorioCartasJugadasBanca>21&&cartasBanca[0].valor==1&&cartasBanca.length<3){			//  --- Si el sumatorio de las cartas es mayor que 21,  el primer as vale 1 y la banca tiene menos de 3 cartas	
								cartasBanca[1].valor==1;																//  --- Se cambia el valor del segundo as a 1
								sumarCartasBanca();																		//  --- Se recalcula el sumatorio de las cartas de la Banca
								puntuacion_banca_value.innerHTML = sumatorioCartasJugadasBanca;							//  --- Se muestra el sumatorio de las cartas de la Banca en el HTML
								comparaJuego();																			//  --- Se comprueba el resultado del juego
							}
							if (sumatorioCartasJugadasBanca<21&&cartasBanca[1].valor==1&&cartasBanca.length<=3){		//  --- Si el sumatorio de las cartas es menor que 21,  el segundo as vale 1 y la banca tiene AL MENOS 3 cartas	
								cartasBanca[1].valor=11;																//  --- Se cambia el valor del segundo as a 11
								sumarCartasBanca();																		//  --- Se recalcula el sumatorio de las cartas de la Banca
								puntuacion_banca_value.innerHTML = sumatorioCartasJugadasBanca;							//  --- Se muestra el sumatorio de las cartas de la Banca en el HTML	
								comparaJuego();																			//  --- Se comprueba el resultado del juego
							}
							if (sumatorioCartasJugadasBanca>21&&cartasBanca[1].valor==11&&cartasBanca.length>=3){		//  --- Si el sumatorio de las cartas es mayor que 21,  el segundo as vale 11 y la banca tiene 3 o más cartas	
								cartasBanca[1].valor=1;																	//  --- Se cambia el valor del segundo as a 1
								sumarCartasBanca();																		//  --- Se recalcula el sumatorio de las cartas de la Banca
								console.log("sumatorio Banca = " +sumatorioCartasJugadasBanca);							//  --- Muestra el valor del sumatorio en la consola
								puntuacion_banca_value.innerHTML = sumatorioCartasJugadasBanca;							//  --- Se muestra el sumatorio de las cartas de la Banca en el HTML
								comparaJuego();																			//  --- Se comprueba el resultado del juego
							}																							
							break;																						//  --- Se sale del switch

						case 3:																							//  --- Si hay tres ases en la mano, se reordenan las cartas.
							console.log("sumatorio Banca = " +sumatorioCartasJugadasBanca);								//  --- Muestra el valor del sumatorio en la consola		
							ordernarArrelgoAses(cartasBanca);															//  --- Se reordena el arreglo cartasBanca	
							cartasBanca[1].valor=1;																		//  --- Se cambia el valor del segundo as a 1
							sumarCartasBanca();																			//  --- Se recalcula el sumatorio de las cartas de la Banca
							if(sumatorioCartasJugadasBanca>21&&cartasBanca[1].valor==1&&cartasBanca[2].valor==11){		//  --- Si el sumatorio de las cartas es mayor que 21,  el segundo as vale 1 y el tercer as vale 11
								console.log("sumatorio Banca = " +sumatorioCartasJugadasBanca);							//  --- Muestra el valor del sumatorio en la consola
								cartasBanca[2].valor=1;																	//  --- Se cambia el valor del tercer as a 1	
								sumarCartasBanca();																		//  --- Se recalcula el sumatorio de las cartas de la Banca	
								puntuacion_banca_value.innerHTML = sumatorioCartasJugadasBanca;							//  --- Se muestra el sumatorio de las cartas de la Banca en el HTML
								comparaJuego();																			//  --- Se comprueba el resultado del juego
							}
							break;																						//  --- Se sale del switch

						case 4:																							//  --- Si hay cuatro ases en la mano, se reordenan las cartas.
							console.log("sumatorio Banca = " +sumatorioCartasJugadasBanca);								//	--- Muestra el valor del sumatorio en la consola			
							ordernarArrelgoAses(cartasBanca);															//  --- Se reordena el arreglo cartasBanca
							cartasBanca[2].valor=1;																		//  --- Se cambia el valor del tercer as a 1
							sumarCartasBanca();																			//  --- Se recalcula el sumatorio de las cartas de la Banca
							comparaJuego();																				//  --- Se comprueba el resultado del juego
							break;																						//  --- Se sale del switch
					}
				}
			}
		}
		comparaJuego();																									//  --- Se comprueba el resultado del juego
		puntuacion_banca_value.innerHTML = sumatorioCartasJugadasBanca;													//  --- Se muestra el sumatorio de las cartas de la Banca en el HTML
	}

	//**************************************************************************************************************************************************************************************************************************************************************************

	//	**************************  Funciones para reordenar los arreglos de las manos con ases  *******************************************************************************************************************************************************************************
	//  - Con estas funciones se reordenan los arreglos de las manos con ases en función del valor de las cartas.
	//  - La idea es colocar los ases en las primeras posiciones para tener un mejor control a la hora de poder asignarles un valor.

	function ordernarArrelgoAses(cartasJugadas) {
		cartasJugadas.sort(function(a, b){																				//  --- Se ordena el arreglo cartasJugadas en función del valor de las cartas
			if (a.carta > b.carta)																						//  --- Si la carta de la posición a es mayor que la carta de la posición b
				return 1;																								//  --- Se devuelve 1
			if (a.carta < b.carta)																						//  --- Si la carta de la posición a es menor que la carta de la posición b
				return -1;																								//  --- Se devuelve -1
			return 0;																									//  --- Si no se cumple ninguna de las anteriores, se devuelve 0
		});																												//  --- Se sale del sort			
	}

	function ordernarArrelgoAses(cartasBanca) {																			//  --- Se reordena el arreglo cartasBanca en función del valor de las cartas
		cartasBanca.sort(function(a, b){																				//  --- Se ordena el arreglo cartasBanca en función del valor de las cartas
			if (a.carta > b.carta)																						//  --- Si la carta de la posición a es mayor que la carta de la posición b	
				return 1;																								//  --- Se devuelve 1
			if (a.carta < b.carta)																						//  --- Si la carta de la posición a es menor que la carta de la posición b
				return -1;																								//  --- Se devuelve -1
			return 0;																									//  --- Si no se cumple ninguna de las anteriores, se devuelve 0
		});																												//  --- Se sale del sort	
	}

	//**************************************************************************************************************************************************************************************************************************************************************************

	//	**************************  Funciones para recalcular los sumatorios una vez que se han asignado nuevos valores a los ases  ********************************************************************************************************************************************
	// - Estas son las funciones que se ejecutan cuando se asignan nuevos valores a los ases para recalcular el sumatorio de las cartas de la Banca y el Jugador.

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

	//**************************************************************************************************************************************************************************************************************************************************************************

	//	**************************  Función para comparar el resultado del juego  **********************************************************************************************************************************************************************************************	
	//  - Esta función se ejecutan cuando se comprueba el resultado del juego.
	//  - Se comprueba el resultado del juego y se muestra el mensaje correspondiente.
	//  - Se comprueba si el jugador ha ganado o perdido.
	//  - La comprobación se hace en función de la cantidad de cartas de la Banca y su sumatorio ya que las animaciones terminan cuando la banca se planta.
	//  - Tambien sirve para que la banca robe una carta en caso de que no haya sacado 17 o más.

	function comparaJuego(){																							//  --- Se comprueba el resultado del juego
		console.log ("comparaJuego");																					//  --- Se muestra en consola que se está comprobando el juego		
		switch (cartasBanca.length){																					//  --- Se comprueba el número de cartas de la Banca
			case 2:																										//  --- Si la Banca tiene 2 cartas -------------------------------------------------
				if (sumatorioCartasJugadasBanca<=16&&sumatorioCartasJugadasBanca<sumatorioCartasJugadas){				//  --- Si el sumatorio de las cartas de la Banca es menor que 16 y es menor que el sumatorio de las cartas del Jugador
					pideCartaBanca1();																					//  --- Se pide una tercera carta a la Banca
				}else if (sumatorioCartasJugadasBanca>sumatorioCartasJugadas&&sumatorioCartasJugadasBanca<=21){			//  --- Si el sumatorio de las cartas de la Banca es mayor que el sumatorio de las cartas del Jugador y es menor que 21	
					gameOVer.classList.add("mostrar_gameOver");															//  --- El jugador pierde y se muestra el mensaje de Game Over	
				}else if (sumatorioCartasJugadasBanca<sumatorioCartasJugadas){											//  --- Si el sumatorio de las cartas de la Banca es menor que el sumatorio de las cartas del Jugador	
					calcularCreditoVictoria();																			//  --- Se calcula el crédito al jugador en caso de que haya ganado
					victoria.classList.add("mostrar_victoria");															//  --- Se muestra el mensaje de Victoria
				}else if (sumatorioCartasJugadas==sumatorioCartasJugadasBanca&&sumatorioCartasJugadasBanca>=17){		//  --- Si el sumatorio de las cartas de la Banca es igual que el sumatorio de las cartas del Jugador y es mayor o igual que 17	
					calcularCreditoEmpate();																			//  --- Se calcula el crédito al jugador en caso de que haya empatado	
					empate.classList.add("mostrar_empate");																//  --- Se muestra el mensaje de Empate
				}else if (sumatorioCartasJugadasBanca==sumatorioCartasJugadas&&sumatorioCartasJugadasBanca<=16){		//  --- Si el sumatorio de las cartas de la Banca es igual que el sumatorio de las cartas del Jugador y es menor que 16
					pideCartaBanca1();																					//  --- Se pide una tercera carta a la Banca
				}
				break;																									
			case 3:																										//  --- Si la Banca tiene 3 cartas -------------------------------------------------
				if (sumatorioCartasJugadasBanca<=16&&sumatorioCartasJugadasBanca<sumatorioCartasJugadas){				//  --- Si el sumatorio de las cartas de la Banca es menor que 16 y es menor que el sumatorio de las cartas del Jugador
					pideCartaBanca2();																					//  --- Se pide una cuarta carta a la Banca
				}else if (sumatorioCartasJugadasBanca>sumatorioCartasJugadas&&sumatorioCartasJugadasBanca<=21){			//  --- Si el sumatorio de las cartas de la Banca es mayor que el sumatorio de las cartas del Jugador y es menor que 21
					gameOVer.classList.add("mostrar_gameOver");															//  --- El jugador pierde y se muestra el mensaje de Game Over
				}else if (sumatorioCartasJugadasBanca<sumatorioCartasJugadas){											//  --- Si el sumatorio de las cartas de la Banca es menor que el sumatorio de las cartas del Jugador	
					calcularCreditoVictoria();																			//  --- Se calcula el crédito al jugador en caso de que haya ganado
					victoria.classList.add("mostrar_victoria");															//  --- Se muestra el mensaje de Victoria	
				}else if (sumatorioCartasJugadas==sumatorioCartasJugadasBanca&&sumatorioCartasJugadasBanca>=17){		//  --- Si el sumatorio de las cartas de la Banca es igual que el sumatorio de las cartas del Jugador y es mayor o igual que 17
					calcularCreditoEmpate();																			//  --- Se calcula el crédito al jugador en caso de que haya empatado
					empate.classList.add("mostrar_empate");																//  --- Se muestra el mensaje de Empate
				}else if (sumatorioCartasJugadasBanca==sumatorioCartasJugadas&&sumatorioCartasJugadasBanca<=16){		//  --- Si el sumatorio de las cartas de la Banca es igual que el sumatorio de las cartas del Jugador y es menor que 16
					pideCartaBanca2();																					//  --- Se pide una cuarta carta a la Banca	
				}
				break;
			case 4:																										//  --- Si la Banca tiene 4 cartas -------------------------------------------------
				if (sumatorioCartasJugadasBanca>sumatorioCartasJugadas&&sumatorioCartasJugadasBanca<=21){				//  --- Si el sumatorio de las cartas de la Banca es mayor que el sumatorio de las cartas del Jugador y es menor que 21	
					gameOVer.classList.add("mostrar_gameOver");															//  --- El jugador pierde y se muestra el mensaje de Game Over
				}else if (sumatorioCartasJugadasBanca<sumatorioCartasJugadas){											//  --- Si el sumatorio de las cartas de la Banca es menor que el sumatorio de las cartas del Jugador
					calcularCreditoVictoria();																			//  --- Se calcula el crédito al jugador en caso de que haya ganado
					victoria.classList.add("mostrar_victoria");															//  --- Se muestra el mensaje de Victoria
				}else if (sumatorioCartasJugadas==sumatorioCartasJugadasBanca){											//  --- Si el sumatorio de las cartas de la Banca es igual que el sumatorio de las cartas del Jugador
					calcularCreditoEmpate();																			//  --- Se calcula el crédito al jugador en caso de que haya empatado
					empate.classList.add("mostrar_empate");																//  --- Se muestra el mensaje de Empate
				}													
				break;
		}
	}

//**************************************************************************************************************************************************************************************************************************************************************************

//	**************************  Funciones para calcular el beneficio del Jugador en caso de haber ganado a la banca  *******************************************************************************************************************************************************
	//  - Si el jugador ha ganado, se le suma apuesta*2 al jugador.
	//  - Si el jugador ha perdido, se le resta apuesta al jugador.
	//  - Si el jugador ha empatado, se le suma apuesta al jugador.
	//  - Si el jugador ha sacado un BlackJack, se le suma apuesta*3 al jugador.

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

	//**************************************************************************************************************************************************************************************************************************************************************************
		
		