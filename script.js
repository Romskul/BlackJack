
		var credito_jugador = 500;
		let apuesta;
		let credito_jugador_valor = document.getElementById("credito_jugador_valor");
		let credito_jugador_texto = document.getElementById("credito_jugador_texto");
		let carta1 = document.getElementById("carta1");
		let carta2 = document.getElementById("carta2");
		let carta3 = document.getElementById("carta3");
		let carta4 = document.getElementById("carta4");
		let carta5 = document.getElementById("carta5");
		let carta6 = document.getElementById("carta6");
		let carta7 = document.getElementById("carta7");
		let carta8 = document.getElementById("carta8");
		let carta9 = document.getElementById("carta9");
		let carta10 = document.getElementById("carta10");
		let naipe1 = document.getElementById("naipe1");
		let naipe2 = document.getElementById("naipe2");
		let naipe3 = document.getElementById("naipe3");
		let naipe4 = document.getElementById("naipe4");
		let naipe5 = document.getElementById("naipe5");
		let naipe6 = document.getElementById("naipe6");
		let naipe7 = document.getElementById("naipe7");
		let naipe8 = document.getElementById("naipe8");
		let naipe9 = document.getElementById("naipe9");
		let naipe10 = document.getElementById("naipe10");
		let nueva_partida = document.getElementById("nueva_partida");
		let nueva_apuesta = document.getElementById("nueva_apuesta");
		let pedir_carta = document.getElementById("pedir_carta");
		let plantarse = document.getElementById("plantarse");
		let salir = document.getElementById("salir");
		var inicioPartida;
		var carta;
		var palo;
		var valor;
		var id;
		let cartaJugada;
		let cartasJugadas = [];
		let cartasBanca;
		var baraja = [];
		var cartaRobada;
		var sumatorioCartasJugadas = 0;
		
		
		
		

		nueva_partida.addEventListener("click", nuevaPartida);
		pedir_carta.addEventListener("click", pideCarta);
		plantarse.addEventListener("click", repartirBanca);	
		
		function nuevaPartida() {
			function crearCartas(palo, carta, valor){
			class cartaJuego{
				constructor(palo, carta){
				this.palo = palo;
				this.carta = carta;
				this.valor = valor;
				this.id = id;
			}
		}
			for (var i = 0; i < 4; i++) { 
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
		crearCartas();

		// console.log(baraja);

		function shuffleArray(baraja){
			baraja.sort(()=> Math.random() - 0.5);
		}
		shuffleArray(baraja);
			if (credito_jugador > 0) {
				// apuesta = prompt("¿Cuanto quieres apostar?");
				credito_jugador_valor.innerHTML = credito_jugador - apuesta;
				barajar();
				inicioPartida = true;
		}}

		function barajar() {
			for (var i = 0; i < 3; i++) {                                  							//Bucle FOR con 3 iteraciones para barajar la baraja
				setTimeout(function() {																//Cada iteracion se ejecuta una vez mas tarde que la anterior
					carta9.classList.add("barajar1");												//Añade la clase barajar1 a la carta9
					carta9.addEventListener("animationend", function(){								//Al finalizar la animacion de la carta9
						carta9.classList.remove("barajar1");										//Elimina la clase barajar1 de la carta9
					});
					carta9.addEventListener("animationend", function(){								//Al finalizar la animacion de la carta9
						carta9.classList.add("barajar2");											//Añade la clase barajar2 a la carta9
					});
					carta9.classList.remove("barajar2");											//Elimina la clase barajar2 de la carta9
				}, i * 1000);																		//Cada iteracion se ejecuta una vez mas tarde que la anterior
			}
				nueva_partida.disabled = true;														//Desactiva el boton nueva partida
				setTimeout(function() {										
					nueva_partida.classList.add("disabled");										//Añade la clase disabled a el boton nueva partida																//Inicializa la variable inicioPartida a 1
					mostrarBotones(inicioPartida);													//Llamada a la funcion mostrarBotones
				}, 3000);
		}
										

		function randomizarCartas(){															//Funcion para generar una carta aleatoria
			randomizarPalo();
			randomizarCarta();
			generarID(carta, palo);		
		}

		function mostrarBotones(inicioPartida){							
			if (inicioPartida==true){																//Si la variable inicioPartida es 1
				carta10.classList.add("repartir1");												//Añade la clase repartir1 a la carta10
				setTimeout(function() {															//Al finalizar la animacion de la carta10
					carta10.classList.add("carta_reparto1");									//Añade la clase carta_reparto1 a la carta10
				}, 500);	
				setTimeout(function() {															//Al finalizar la animacion de la carta10
					if (carta10.classList.contains("carta_reparto1")){							//Si la carta10 tiene la clase carta_reparto1
						carta9.classList.add("repartir2");										//Añade la clase repartir2 a la carta9
					}}, 1000);
				setTimeout(function() {															//Al finalizar la animacion de la carta9	
					carta9.classList.add("carta_reparto2");										//Añade la clase carta_reparto2 a la carta9
					voltearCarta1();															//Llamada a la funcion voltearCarta1
				}, 1500);
			}
		}
		
		function voltearCarta1(){																//Funcion para voltear la carta1
			let cartaJugada = baraja.shift();	
			cartasJugadas.push(cartaJugada);
			console.log(baraja);											//Asigna el valor true a la propiedad owned de la instancia cartaJugador1
			if (carta9.classList.contains("carta_reparto2")){									//Si la carta9 tiene la clase carta_reparto2
				carta10.classList.remove("repartir1");											//Elimina la clase repartir1 de la carta10
				carta10.classList.add("voltear_carta1");										//Añade la clase voltear_carta1 a la carta10
				carta10.addEventListener("animationend", function(){							//Al finalizar la animacion de la carta10					
					naipe10.src = "deck/"+cartaJugada.id+".png";								//Cambia la imagen de la carta10
					carta10.classList.remove("voltear_carta1");									//Elimina la clase voltear_carta1 de la carta10
					carta10.classList.add("voltear_carta1-2");									//Añade la clase voltear_carta1-2 a la carta10
					carta10.addEventListener("animationend", function(event){
						// console.log(event);						//Al finalizar la animacion de la carta10
					voltearCarta2();															//Llamada a la funcion voltearCarta2
					});
				});
			}
		}
		function voltearCarta2(){
			let cartaJugada = baraja.shift();
			cartasJugadas.push(cartaJugada);
			console.log(baraja);
			if (carta10.classList.contains("votear_carta1-2"))
				carta9.classList.remove("repartir2");
				carta9.classList.add("voltear_carta1");		
				carta9.addEventListener("animationend", function(){
					naipe9.src = "deck/"+cartaJugada.id+".png";
					carta9.classList.remove("voltear_carta1");
					carta9.classList.add("voltear_carta1-2");
					carta9.classList.add("carta_repartida");
					carta9.addEventListener("animationend", function(){
						comprobarSumatorioCartas();
					})
				});
			}
		

		function voltearCarta3(){
			let cartaJugada = baraja.shift();
			cartasJugadas.push(cartaJugada);
			console.log(baraja);
			if (carta9.classList.contains("votear_carta1-2"))
				carta9.classList.remove("repartir2");
				setTimeout(function(){
					carta8.classList.add("voltear_carta1");	
				}), 1000;
				carta8.addEventListener("animationend", function(){
					naipe8.src = "deck/"+cartaJugada.id+".png";
					carta8.classList.remove("voltear_carta1");
					carta8.classList.add("voltear_carta1-2");
					carta8.classList.add("carta_repartida");				//Añade la clase vacia "carta_repartida" para controlar que la carta está en juego
					carta8.addEventListener("animationend", function(){
						comprobarSumatorioCartas();
					})
				});
			}	
			
		function voltearCarta4(){
			let cartaJugada = baraja.shift();
			cartasJugadas.push(cartaJugada);
			console.log(baraja);
			if (carta8.classList.contains("votear_carta1-2"))
				carta8.classList.remove("repartir3");
				setTimeout(function(){
					carta7.classList.add("voltear_carta1");	
				}), 1000;
				carta7.addEventListener("animationend", function(){
					naipe7.src = "deck/"+cartaJugada.id+".png";
					carta7.classList.remove("voltear_carta1");
					carta7.classList.add("voltear_carta1-2");
					carta7.addEventListener("animationend", function(){	
						comprobarSumatorioCartas();
					})
				});
			}	

		function pideCarta(){
			if(carta9.classList.contains("carta_repartida")){
				carta9.classList.remove("carta_repartida");	
				carta8.classList.add("repartir3");
				setTimeout(function() {
					carta8.classList.add("carta_reparto3");
					voltearCarta3();
			}, 500);
			}
			if (carta8.classList.contains("carta_repartida")){
				carta8.classList.remove("carta_repartida");
				carta7.classList.add("repartir4");
				setTimeout(function() {
					carta7.classList.add("carta_reparto4");
					voltearCarta4();
			}, 500);	
			}
		}
			
		function repartirBanca(){

		}


			function comprobarSumatorioCartas(){
				sumatorioCartasJugadas = 0;
				for (cartaJuego of cartasJugadas){
					sumatorioCartasJugadas += cartaJuego.valor;
					if (cartasJugadas.length==2&&sumatorioCartasJugadas==21){
						alert("BLACKJACK");
						return true;
					}else{
						pedir_carta.classList.add("mostrar_boton");
					}
					if (sumatorioCartasJugadas>21){
						for (cartaJuego of cartasJugadas){
							cartasAs = cartasJugadas.filter(carta => carta.carta == "1");
							if (cartasAs.length==0){
								alert("PERDISTE");
								return true;
							}
							if (cartasAs.length==1){
								cartasJugadas.sort(function(a, b){
									if (a.carta > b.carta)
										return 1;
									if (a.carta < b.carta)
										return -1;
									return 0;
								});
							}
							cartasJugadas[0].valor=1;
							sumatorioCartasJugadas = 0;
							for (cartaJuego of cartasJugadas){
								sumatorioCartasJugadas += cartaJuego.valor;
								console.log(sumatorioCartasJugadas);
								if (sumatorioCartasJugadas>21){
									alert("PERDISTE");
									return true;
								}else if (cartasAs.length==2){
									cartasJugadas.sort(function(a, b){
										if (a.carta > b.carta) {
											return 1;
										  }
										  if (a.carta < b.carta) {
											return -1;
										  }
										  // a must be equal to b
										  return 0;
										});
									cartasJugadas[0].valor=1;
									cartasJugadas[1].valor=1;
									sumatorioCartasJugadas = 0;
									for (cartaJuego of cartasJugadas){
										sumatorioCartasJugadas += cartaJuego.valor;
										console.log(sumatorioCartasJugadas);
										if (sumatorioCartasJugadas>21){
											alert("PERDISTE");
											return true;
										}else {
											cartasJugadas[1].valor=1;
										}
									}
								} else if (cartasAs.length==3){
									cartasJugadas.sort(function(a, b){
										if (a.carta > b.carta) {
											return 1;
										  }
										  if (a.carta < b.carta) {
											return -1;
										  }
										  // a must be equal to b
										  return 0;
										});
									cartasJugadas[0].valor=1;
									cartasJugadas[1].valor=1;
									cartasJugadas[2].valor=1;
									sumatorioCartasJugadas = 0;
									for (cartaJuego of cartasJugadas){
										sumatorioCartasJugadas += cartaJuego.valor;
										console.log(sumatorioCartasJugadas);
										if (sumatorioCartasJugadas>21){
											alert("PERDISTE");
											return true;
										}
									}}
							}
						}
					}else {

					}
				}}	
		

			
	
			
			