
		var credito_jugador = 500;
		let apuesta;
		let credito_jugador_valor = document.getElementById("credito_jugador_valor");
		let credito_jugador_texto = document.getElementById("credito_jugador_texto");
		let barajaNaipes = document.querySelectorAll("div.carta");
		let barajaImagenes = document.querySelectorAll("img");
		let nueva_partida = document.getElementById("nueva_partida");
		let nueva_apuesta = document.getElementById("nueva_apuesta");
		let pedir_carta = document.getElementById("pedir_carta");
		let plantarse = document.getElementById("plantarse");
		let salir = document.getElementById("salir");
		let reiniciarPartida=false;
		var inicioPartida;
		var carta;
		var palo;
		var valor;
		var id;
		let cartaJugada;
		let cartasAs = [];
		let cartasJugadas = [];
		let cartasBanca;
		var baraja = [];
		var cartaRobada;
		var sumatorioCartasJugadas = 0;
		
		
		
		

		nueva_partida.addEventListener("click", nuevaPartida);
		pedir_carta.addEventListener("click", pideCarta);
		plantarse.addEventListener("click", repartirBanca);	
		
		nueva_apuesta.disabled = true;
		pedir_carta.disabled = true;
		plantarse.disabled = true;


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

		function nuevaPartida() {
		crearCartas();	
		shuffleArray(baraja);
	
		if (credito_jugador > 0 &&reiniciarPartida==false) {
			// apuesta = prompt("¿Cuanto quieres apostar?");
			credito_jugador_valor.innerHTML = credito_jugador - apuesta;
			barajar();
		}
		if (reiniciarPartida == true&&inicioPartida==false) {
			// for (let i=0; i<barajaNaipes.length; i++) {
			// 	barajaNaipes[i].classList.remove("repartir1", "repartir2", "repartir3", "repartir4", "repartir5", "repartir6", "repartir7", "repartir8", "repartir9", "repartir10", "voltear_carta1", "voltear_carta1-2", "carta_reparto1", "carta_reparto2", "carta_reparto3", "carta_reparto4", "carta_reparto5", "carta_reparto6", "carta_reparto7", "carta_reparto8", "carta_reparto9", "carta_reparto10", "carta_repartida");
			// }
			// for (let i=0; i<barajaImagenes.length; i++) {
			// 	barajaImagenes[i].src = "deck/anverso.png";
			// }
			
			// cartasJugadas.length = 0;
			// cartasAs.length = 0;
			// sumatorioCartasJugadas=0;
			// alert("Partida reiniciada");
			// barajar();
		}
	}

		function barajar() {
			inicioPartida = true;
			for (var i = 0; i < 3; i++) {                                  							//Bucle FOR con 3 iteraciones para barajar la baraja
				setTimeout(function() {																//Cada iteracion se ejecuta una vez mas tarde que la anterior
					barajaNaipes[3].classList.add("barajar1");												//Añade la clase barajar1 a la carta9
					barajaNaipes[3].addEventListener("animationend", function(){								//Al finalizar la animacion de la carta9
						barajaNaipes[3].classList.remove("barajar1");										//Elimina la clase barajar1 de la carta9
					});
					barajaNaipes[3].addEventListener("animationend", function(){								//Al finalizar la animacion de la carta9
						barajaNaipes[3].classList.add("barajar2");											//Añade la clase barajar2 a la carta9
					});
					barajaNaipes[3].classList.remove("barajar2");											//Elimina la clase barajar2 de la carta9
				}, i * 1000);
				barajaNaipes[3].classList.remove("barajar2");																		//Cada iteracion se ejecuta una vez mas tarde que la anterior
			}
				nueva_partida.disabled = true;														//Desactiva el boton nueva partida
				setTimeout(function() {										
					nueva_partida.classList.add("disabled");										//Añade la clase disabled a el boton nueva partida																//Inicializa la variable inicioPartida a 1
					mostrarBotones();													//Llamada a la funcion mostrarBotones
				}, 3000);
		}
									

		function mostrarBotones(){							
			if (inicioPartida==true){																//Si la variable inicioPartida es 1
				barajaNaipes[9].classList.add("repartir1");												//Añade la clase repartir1 a la carta10
				setTimeout(function() {															//Al finalizar la animacion de la carta10
					barajaNaipes[9].classList.add("carta_reparto1");
					alert("se coloca la primera carta")									//Añade la clase carta_reparto1 a la carta10
				}, 500);	
				setTimeout(function() {															//Al finalizar la animacion de la carta10
					if (barajaNaipes[9].classList.contains("carta_reparto1")){							//Si la carta10 tiene la clase carta_reparto1									//Añade la clase carta_reparto2 a la carta10
						barajaNaipes[8].classList.add("repartir2");										//Añade la clase repartir2 a la carta9
						alert("se coloca la segunda carta")									//Añade la clase carta_reparto2 a la carta9
					}}, 1000);
				setTimeout(function() {															//Al finalizar la animacion de la carta9	
					barajaNaipes[8].classList.add("carta_reparto2");										//Añade la clase carta_reparto2 a la carta9
					voltearCarta1();															//Llamada a la funcion voltearCarta1
				}, 1500);
			}
		}
		
		function voltearCarta1(){	
			inicioPartida=false;															//Funcion para voltear la carta1
			let cartaJugada = baraja.shift();	
			cartasJugadas.push(cartaJugada);
			console.log(cartasJugadas);											//Asigna el valor true a la propiedad owned de la instancia cartaJugador1
			if (barajaNaipes[8].classList.contains("carta_reparto2")){									//Si la carta9 tiene la clase carta_reparto2
				barajaNaipes[9].classList.remove("repartir1");											//Elimina la clase repartir1 de la carta10
				barajaNaipes[9].classList.add("voltear_carta1");										//Añade la clase voltear_carta1 a la carta10
				barajaNaipes[9].addEventListener("animationend", function(){							//Al finalizar la animacion de la carta10					
					barajaImagenes[9].src = "deck/"+cartaJugada.id+".png";								//Cambia la imagen de la carta10
					barajaNaipes[9].classList.remove("voltear_carta1");									//Elimina la clase voltear_carta1 de la carta10
					barajaNaipes[9].classList.add("voltear_carta1-2");									//Añade la clase voltear_carta1-2 a la carta10
					barajaNaipes[9].addEventListener("animationend", function(){
					alert("se va a voltear la 2ª carta");
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
				setTimeout(function(){
					carta8.classList.add("voltear_carta1");	
				}), 1000;
				barajaNaipes[7].addEventListener("animationend", function(){
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
				setTimeout(function(){
					barajaNaipes[6].classList.add("voltear_carta1");	
				}), 1000;
				barajaNaipes[6].addEventListener("animationend", function(){
					barajaImagenes[6].src = "deck/"+cartaJugada.id+".png";
					barajaNaipes[6].classList.remove("voltear_carta1");
					barajaNaipes[6].classList.add("voltear_carta1-2");
					barajaNaipes[6].addEventListener("animationend", function(){	
						comprobarSumatorioCartas();
					})
				});
			}	

		function pideCarta(){
			if(barajaNaipes[8].classList.contains("carta_repartida")){
				barajaNaipes[8].classList.remove("carta_repartida");	
				barajaNaipes[7].classList.add("repartir3");
				setTimeout(function() {
					barajaNaipes[7].classList.add("carta_reparto3");
					voltearCarta3();
			}, 500);
			}
			if (barajaNaipes[7].classList.contains("carta_repartida")){
				barajaNaipes[7].classList.remove("carta_repartida");
				barajaNaipes[6].classList.add("repartir4");
				setTimeout(function() {
					barajaNaipes[6].classList.add("carta_reparto4");
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
								alert("PERDISTE");
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
								return reiniciarPartida=true;
							}else if (cartasAs.length==2&&cartasAs.length<3){
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
								ordernarArrelgoAses(cartasJugadas);
								cartasJugadas[1].valor=1;
								sumarCartasJugador();
								if(sumatorioCartasJugadas>21&&cartasJugadas[1].valor==1&&cartasJugadas[2].valor==11){
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

			function ordernarArrelgoAses(cartasJugadas) {
				cartasJugadas.sort(function(a, b){
					if (a.carta > b.carta)
						return 1;
					if (a.carta < b.carta)
						return -1;
					return 0;
				});
			}

			function sumarCartasJugador(){
				sumatorioCartasJugadas = 0;
				for (cartaJuego of cartasJugadas){
					sumatorioCartasJugadas += cartaJuego.valor;
				}
					return sumatorioCartasJugadas;
				
			}

			function alertPerdiste(sumatorioCartasJugadas){
				if (sumatorioCartasJugadas>21){
					alert("PERDISTE");
				}
			}

			function compararSumatorioCartas(){
				if (sumatorioCartasJugadas>sumatorioCartasBanca){
					alert("GANASTE");
				}
			}
				
		

			
	
			
			