
		var credito_jugador = 500;
		let apuesta;
		let credito_jugador_valor = document.getElementById("credito_jugador_valor");
		let credito_jugador_texto = document.getElementById("credito_jugador_texto");
		let barajaNaipes = document.querySelectorAll("div.carta");
		let barajaImagenes = document.querySelectorAll("img");
		let gameOVer = document.getElementById("game_over");
		let nueva_partida = document.getElementById("nueva_partida");
		let nueva_apuesta = document.getElementById("nueva_apuesta");
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
		nueva_apuesta.addEventListener("click", nuevaApuesta);
		nueva_apuesta.removeEventListener("click", repartirBanca);
		
		
		pedir_carta.disabled = true;
		plantarse.disabled = true;

		function reiniciar (){
			location.reload();
		}

		function nuevaApuesta() {
			reiniciarPartida=false;
			credito_jugador=500;
			gameOVer.classList.remove("mostrar_gameOver");
			for (let i=0; i<barajaNaipes.length; i++) {
				barajaNaipes[i].classList.remove("repartir1", "barajar1", "barajar2", "repartir2", "repartir3", "repartir4", "repartir5", "repartir6", "repartir7", "repartir8", "voltear_carta1", "voltear_carta1-2", "carta_reparto1", "carta_reparto2", "carta_reparto3", "carta_reparto4", "carta_reparto5", "carta_reparto6", "carta_reparto7", "carta_reparto8", "carta_repartida");
			}
			for (let i=0; i<barajaImagenes.length; i++) {
				barajaImagenes[i].src = "deck/anverso.png";
			}
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
			nuevaPartida();
		}

		function shuffleArray(baraja){
			baraja.sort(()=> Math.random() - 0.5);
		}

		function crearCartas(palo, carta, valor){
			class cartaJuego{
				constructor(palo, carta){
				this.palo = palo;
				this.carta = carta;
				this.valor = valor;
				this.id = id;
			}
		}
			for (var i = 0; i < 4; i++) { 											//Creamos la baraja de cartas
				for (var j = 1; j < 14; j++) {
					if (i == 0) {
						palo = "cora";
					}else if (i == 1) {
						palo = "diaman";
					}else if (i == 2) {
						palo = "trebol";
					}else if (i == 3) {
						palo = "picas";
					}
					if (j == 1) {
						carta = "1";
						valor = 11;
					}else if (j == 2) {
						carta = "2";
						valor = 2;
					}else if (j == 3) {
						carta = "3";
						valor = 3;
					}else if (j == 4) {
						carta = "4";
						valor = 4;
					}else if (j == 5) {
						carta = "5";
						valor = 5;
					}else if (j == 6) {
						carta = "6";
						valor = 6;
					}else if (j == 7) {
						carta = "7";
						valor = 7;
					}else if (j == 8) {
						carta = "8";
						valor = 8;
					}else if (j == 9) {
						carta = "9";
						valor = 9;
					}else if (j == 10) {
						carta = "10";
						valor = 10;
					}else if (j == 11) {
						carta = "11";
						valor = 10;
					}else if (j == 12) {
						carta = "12";
						valor = 10;
					}else if (j == 13) {
						carta = "13";
						valor = 10;
					}
					id = carta + palo;
					var cartaJuegos = new cartaJuego(palo, carta, valor);
					baraja.push(cartaJuegos);	
		}}}

		function nuevaPartida() {
			crearCartas();	
			shuffleArray(baraja);
		
			if (credito_jugador > 0 &&reiniciarPartida==false) {
				// apuesta = prompt("¿Cuanto quieres apostar?");
				credito_jugador_valor.innerHTML = credito_jugador - apuesta;
				barajar();
			}
		}

		

		function barajar() {
			inicioPartida = true;
			for (var i = 0; i < 3; i++) {                                  						//Bucle FOR con 3 iteraciones para barajar la baraja
				setTimeout(function() {															//Cada iteracion se ejecuta una vez mas tarde que la anterior
					barajaNaipes[3].classList.add("barajar1");									//Añade la clase barajar1 a la carta9
					barajaNaipes[3].addEventListener("animationend", function(){				//Al finalizar la animacion de la carta9
						barajaNaipes[3].classList.remove("barajar1");							//Elimina la clase barajar1 de la carta9
					});
					barajaNaipes[3].addEventListener("animationend", function(){				//Al finalizar la animacion de la carta9
						barajaNaipes[3].classList.add("barajar2");								//Añade la clase barajar2 a la carta9
					});
					barajaNaipes[3].classList.remove("barajar2");								//Elimina la clase barajar2 de la carta9
				}, i * 1000);																	//Cada iteracion se ejecuta una vez mas tarde que la anterior
				barajaNaipes[3].classList.remove("barajar2");									
			}
				nueva_partida.disabled = true;	
				intRepartoDosCartas = setInterval (repartir, 3000);
				function repartir(){
					nueva_partida.classList.add("disabled");
					console.log("int");									//Añade la clase disabled a el boton nueva partida																
					repartoDosCartas();
					clearInterval(intRepartoDosCartas);
				}												//Desactiva el boton nueva partida
				
		}
									
		
		function repartoDosCartas(){							
			if (inicioPartida==true){															//Si la variable inicioPartida es true
				barajaNaipes[9].classList.add("repartir1");	
				intCartaReparto1 = setInterval (cartaReparto1, 500);
				function cartaReparto1() {
					barajaNaipes[9].classList.add("carta_reparto1");
					barajaNaipes[8].classList.add("repartir2");
					cartaPosicionada=true;
					clearInterval(intCartaReparto1);
				}																							//Añade la clase repartir1 a la carta9																												
				intCartaReparto2 = setInterval (cartaReparto2, 1000);						
				function cartaReparto2() {
					barajaNaipes[8].classList.add("carta_reparto2");
					clearInterval(intCartaReparto2);
				}		
				intVoltearCarta1 = setInterval (voltear, 1000);
				function voltear(){
					if (barajaNaipes[8].classList.contains("carta_reparto2")) {
					voltearCarta1();
					clearInterval(intVoltearCarta1);}
				}
			}		
				
						
		}
		
		function voltearCarta1(){	
			inicioPartida=false;
																		//Funcion para voltear la carta1
			let cartaJugada = baraja.shift();	
			cartasJugadas.push(cartaJugada);
			console.log(cartasJugadas);															//Asigna el valor true a la propiedad owned de la instancia cartaJugador1
			if (barajaNaipes[8].classList.contains("carta_reparto2")){							//Si la carta9 tiene la clase carta_reparto2
				barajaNaipes[9].classList.remove("repartir1");									//Elimina la clase repartir1 de la carta10
				barajaNaipes[9].classList.add("voltear_carta1");								//Añade la clase voltear_carta1 a la carta10
				barajaNaipes[9].addEventListener("animationend", function(){				//Al finalizar la animacion de la carta10					
					barajaImagenes[9].src = "deck/"+cartaJugada.id+".png";						//Cambia la imagen de la carta10
					barajaNaipes[9].classList.remove("voltear_carta1");							//Elimina la clase voltear_carta1 de la carta10
					barajaNaipes[9].classList.add("voltear_carta1-2");							//Añade la clase voltear_carta1-2 a la carta10
					barajaNaipes[9].addEventListener("animationend", function(){
						voltearCarta2();															//Llamada a la funcion voltearCarta2
					});
				});
			}
		}
		function voltearCarta2(){
			
			let cartaJugada = baraja.shift();
			cartasJugadas.push(cartaJugada);
			console.log(cartasJugadas);
			if (barajaNaipes[9].classList.contains("votear_carta1-2"))
				barajaNaipes[8].classList.remove("repartir2");
				barajaNaipes[8].classList.add("voltear_carta1");		
				barajaNaipes[8].addEventListener("animationend", function(){
					barajaImagenes[8].src = "deck/"+cartaJugada.id+".png";
					barajaNaipes[8].classList.remove("voltear_carta1");
					barajaNaipes[8].classList.add("voltear_carta1-2");
					barajaNaipes[8].classList.add("carta_repartida");
					barajaNaipes[8].addEventListener("animationend", function(){
						comprobarSumatorioCartas();
					})
				});
			}
		

		function voltearCarta3(){
			
			let cartaJugada = baraja.shift();
			cartasJugadas.push(cartaJugada);
			if (barajaNaipes[8].classList.contains("votear_carta1-2"))
				barajaNaipes[8].classList.remove("repartir2");
				intVoltearCarta3 = setInterval (voltearCarta3, 1000);
				function voltearCarta3(){
					console.log("1")
					barajaNaipes[7].classList.add("voltear_carta1");
				}
				barajaNaipes[7].addEventListener("animationend", function(){
					clearInterval(intVoltearCarta3);
					barajaImagenes[7].src = "deck/"+cartaJugada.id+".png";
					barajaNaipes[7].classList.remove("voltear_carta1");
					barajaNaipes[7].classList.add("voltear_carta1-2");
					barajaNaipes[7].classList.add("carta_repartida");				//Añade la clase vacia "carta_repartida" para controlar que la carta está en juego
					barajaNaipes[7].addEventListener("animationend", function(){
						comprobarSumatorioCartas();
					})
				});
			}	
			
		function voltearCarta4(){
			let cartaJugada = baraja.shift();
			cartasJugadas.push(cartaJugada);
			if (barajaNaipes[7].classList.contains("votear_carta1-2"))
				barajaNaipes[7].classList.remove("repartir3");
				intVoltearCarta4 = setInterval (voltearCarta4, 1000);
				function voltearCarta4(){
					barajaNaipes[6].classList.add("voltear_carta1");
					clearInterval(intVoltearCarta4);
				}
				
				barajaNaipes[6].addEventListener("animationend", function(){
					barajaImagenes[6].src = "deck/"+cartaJugada.id+".png";
					barajaNaipes[6].classList.remove("voltear_carta1");
					barajaNaipes[6].classList.add("voltear_carta1-2");
					barajaNaipes[6].addEventListener("animationend", function(){	
						comprobarSumatorioCartas();
					})
				});
			}	

		function voltearCarta5(){																	//Funcion para voltear la carta1
			let cartaBancaJugada = baraja.shift();	
			cartasBanca.push(cartaBancaJugada);														//Asigna el valor true a la propiedad owned de la instancia cartaJugador1
			if (barajaNaipes[5].classList.contains("carta_reparto5")){							//Si la carta9 tiene la clase carta_reparto2
				barajaNaipes[6].classList.remove("repartir4");									//Elimina la clase repartir1 de la carta10
				barajaNaipes[5].classList.add("voltear_carta1");								//Añade la clase voltear_carta1 a la carta10
				barajaNaipes[5].addEventListener("animationend", function(){				//Al finalizar la animacion de la carta10					
					barajaImagenes[5].src = "deck/"+cartaBancaJugada.id+".png";						//Cambia la imagen de la carta10
					barajaNaipes[5].classList.remove("voltear_carta1");							//Elimina la clase voltear_carta1 de la carta10
					barajaNaipes[5].classList.add("voltear_carta1-2");
					barajaNaipes[5].classList.add("carta_repartida")							//Añade la clase voltear_carta1-2 a la carta10
					barajaNaipes[5].addEventListener("animationend", function(){
						voltearCarta6();															//Llamada a la funcion voltearCarta2
					});
				});
			}
		}

		function voltearCarta6(){																	//Funcion para voltear la carta1
			let cartaBancaJugada = baraja.shift();	
			cartasBanca.push(cartaBancaJugada);														//Asigna el valor true a la propiedad owned de la instancia cartaJugador1
			if (barajaNaipes[4].classList.contains("carta_reparto6")){							//Si la carta9 tiene la clase carta_reparto2
				barajaNaipes[5].classList.remove("repartir5");									//Elimina la clase repartir1 de la carta10
				barajaNaipes[4].classList.add("voltear_carta1");								//Añade la clase voltear_carta1 a la carta10
				barajaNaipes[4].addEventListener("animationend", function(){				//Al finalizar la animacion de la carta10					
					barajaImagenes[4].src = "deck/"+cartaBancaJugada.id+".png";						//Cambia la imagen de la carta10
					barajaNaipes[4].classList.remove("voltear_carta1");							//Elimina la clase voltear_carta1 de la carta10
					barajaNaipes[4].classList.add("voltear_carta1-2");
					barajaNaipes[4].classList.add("carta_repartida")							//Añade la clase voltear_carta1-2 a la carta10
					barajaNaipes[4].addEventListener("animationend", function(){
						comprobarSumatorioBanca();															//Llamada a la funcion voltearCarta2
					});
				});
			}
		}
		function voltearCarta7(){																	//Funcion para voltear la carta1
			let cartaBancaJugada = baraja.shift();	
			cartasBanca.push(cartaBancaJugada);														//Asigna el valor true a la propiedad owned de la instancia cartaJugador1
			if (barajaNaipes[3].classList.contains("carta_reparto7")){							//Si la carta9 tiene la clase carta_reparto2
				barajaNaipes[4].classList.remove("repartir6");									//Elimina la clase repartir1 de la carta10
				barajaNaipes[3].classList.add("voltear_carta1");								//Añade la clase voltear_carta1 a la carta10
				barajaNaipes[3].addEventListener("animationend", function(){				//Al finalizar la animacion de la carta10					
					barajaImagenes[3].src = "deck/"+cartaBancaJugada.id+".png";						//Cambia la imagen de la carta10
					barajaNaipes[3].classList.remove("voltear_carta1");							//Elimina la clase voltear_carta1 de la carta10
					barajaNaipes[3].classList.add("voltear_carta1-2");
					barajaNaipes[3].classList.add("carta_repartida")							//Añade la clase voltear_carta1-2 a la carta10
					barajaNaipes[3].addEventListener("animationend", function(){
						comprobarSumatorioBanca();																					//Llamada a la funcion voltearCarta2
					});
				});
			}
		}
		function voltearCarta8(){																	//Funcion para voltear la carta1
			let cartaBancaJugada = baraja.shift();	
			cartasBanca.push(cartaBancaJugada);														//Asigna el valor true a la propiedad owned de la instancia cartaJugador1
			if (barajaNaipes[2].classList.contains("carta_reparto8")){							//Si la carta9 tiene la clase carta_reparto2
				barajaNaipes[3].classList.remove("repartir7");									//Elimina la clase repartir1 de la carta10
				barajaNaipes[2].classList.add("voltear_carta1");								//Añade la clase voltear_carta1 a la carta10
				barajaNaipes[2].addEventListener("animationend", function(){				//Al finalizar la animacion de la carta10					
					barajaImagenes[2].src = "deck/"+cartaBancaJugada.id+".png";						//Cambia la imagen de la carta10
					barajaNaipes[2].classList.remove("voltear_carta1");							//Elimina la clase voltear_carta1 de la carta10
					barajaNaipes[2].classList.add("voltear_carta1-2");
					barajaNaipes[2].classList.add("carta_repartida")							//Añade la clase voltear_carta1-2 a la carta10
					barajaNaipes[2].addEventListener("animationend", function(){
						comprobarSumatorioBanca();																					//Llamada a la funcion voltearCarta2
					});
				});
			}
		}
		
		if (sumatorioCartasJugadasBanca<12){
			pideCartaBanca1();
		}

		function pideCartaBanca1(){
			if(barajaNaipes[4].classList.contains("carta_repartida")){
				barajaNaipes[5].classList.remove("carta_repartida");	
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
				barajaNaipes[4].classList.remove("carta_repartida");	
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
			
		function repartirBanca(){
			barajaNaipes[5].classList.add("repartir5");	
				var intCartaReparto1 = setInterval (cartaReparto1, 500);
				function cartaReparto1() {
					barajaNaipes[5].classList.add("carta_reparto5");
					barajaNaipes[4].classList.add("repartir6");
					clearInterval(intCartaReparto1);
				}																							//Añade la clase repartir1 a la carta9																												
				var intCartaReparto2 = setInterval (cartaReparto2, 1000);						
				function cartaReparto2() {
					barajaNaipes[4].classList.add("carta_reparto6");
					clearInterval(intCartaReparto2);
				}		
				var intVoltearCarta1 = setInterval (voltear, 1000);
				function voltear(){
					voltearCarta5();
					clearInterval(intVoltearCarta1);
				}
			}		
		


		function comprobarSumatorioCartas(){
			sumatorioCartasJugadas = 0;
			for (cartaJuego of cartasJugadas){
				sumatorioCartasJugadas += cartaJuego.valor;
				
				if (cartasJugadas.length==2&&sumatorioCartasJugadas==21){
					alert("BLACKJACK");
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
							if (sumatorioCartasJugadas>21&&cartasJugadas[1].valor==1){
								alert("PERDISTE");
								nueva_partida.disabled = false;
								return reiniciarPartida=true;
							}else {
								cartasJugadas[1].valor=11;
								sumarCartasJugador();
								alertPerdiste(sumatorioCartasJugadas);
								nueva_partida.disabled = false;
								return reiniciarPartida=true;
							}
						}else if (cartasAs.length==3){
							console.log("El sumatorio del paso 3 es: "+sumatorioCartasJugadas);
							ordernarArrelgoAses(cartasJugadas);
							cartasJugadas[1].valor=1;
							sumarCartasJugador();
							if(sumatorioCartasJugadas>21&&cartasJugadas[1].valor==1&&cartasJugadas[2].valor==11){
								alert("entraFunction");
								console.log(cartasJugadas);
								cartasJugadas[2].valor=1;
								sumarCartasJugador();
								alertPerdiste(sumatorioCartasJugadas);
								nueva_partida.disabled = false;
								return reiniciarPartida=true;
							}
						}
					}
				}
			}
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
							comparaJuego(sumatorioCartasJugadasBanca);
							nueva_partida.disabled = false;
							return reiniciarPartida=true;
						}
						if (cartasAsBanca.length==1){
							ordernarArrelgoAses(cartasBanca);
							cartasBanca[0].valor=1;
							sumarCartasBanca();
							console.log("sumatorio Banca = " +sumatorioCartasJugadasBanca);
							nueva_partida.disabled = false;
							if (sumatorioCartasJugadasBanca<16||sumatorioCartasJugadasBanca>=16&&sumatorioCartasJugadasBanca<=20&&cartasBanca.length==3){
								pideCartaBanca2();
							}
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
								if (sumatorioCartasJugadasBanca<16||sumatorioCartasJugadasBanca>=16&&sumatorioCartasJugadasBanca<=20&&cartasBanca.length<3){
									pideCartaBanca2();
								}
								nueva_partida.disabled = false;
								// if (sumatorioCartasJugadasBanca<16||sumatorioCartasJugadasBanca>=16&&sumatorioCartasJugadasBanca<=20&&cartasBanca.length==3){
								// 	pideCartaBanca2();
								// }
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
			if (cartasBanca.length==2&&sumatorioCartasJugadasBanca<=16){
				pideCartaBanca1();
			}
			if (cartasBanca.length>=2&&sumatorioCartasJugadasBanca>=17&&cartasAsBanca.length>=0){
				comparaJuego(sumatorioCartasJugadasBanca);
			}
			if (cartasBanca.length==4&&sumatorioCartasJugadasBanca<=17&&cartasAsBanca.length>=0){
				comparaJuego(sumatorioCartasJugadasBanca);
			}
			if (sumatorioCartasJugadasBanca<16||sumatorioCartasJugadasBanca>=16&&sumatorioCartasJugadasBanca<=17&&cartasBanca.length==3){
				pideCartaBanca2();
			}
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
				return sumatorioCartasJugadasBanca;
			
		}

		function alertPerdiste(sumatorioCartasJugadas){
			if (sumatorioCartasJugadas>21){
				gameOVer.classList.add("mostrar_gameOver");
			}
		}
			
		function comparaJuego(sumatorioCartasJugadasBanca){
			if (sumatorioCartasJugadas>sumatorioCartasJugadasBanca||sumatorioCartasJugadasBanca>21){
				alert("GANASTE");
			}
			if (sumatorioCartasJugadas<sumatorioCartasJugadasBanca&&sumatorioCartasJugadasBanca<=21){
				gameOVer.classList.add("mostrar_gameOver");
			}
			if (sumatorioCartasJugadas==sumatorioCartasJugadasBanca&&cartasBanca.length>2){
				alert("EMPATE");
			}
		}

			
	
			
			