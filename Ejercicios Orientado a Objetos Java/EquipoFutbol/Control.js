const jugadores = require ('./Jugadores.js');
const equipo = require ('./Equipo.js');

jugador1 = new jugadores ("Lionel Messi", "Delantero", 10, 36);
jugador2 = new jugadores ("Cristiano Ronaldo", "Delantero", 7, 39);
jugador3 = new jugadores ("Neymar Jr", "Delantero", 11, 32);

equipo1 = new equipo ("FC Barcelona", "Barcelona", "Xavi Hernandez", []);


equipo1.agregarJugador(jugador1);
equipo1.agregarJugador(jugador2);
equipo1.agregarJugador(jugador3);

equipo1.mostrarPlantilla();

equipo1.removerJugador("Cristiano Ronaldo");

equipo1.mostrarPlantilla();




