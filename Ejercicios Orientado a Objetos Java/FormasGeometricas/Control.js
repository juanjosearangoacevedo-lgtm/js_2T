const Circulo = require("./circulo");
const Rectangulo = require('./Rectangulo');

const Rectangulo1 = new Rectangulo("Azul", 0, 4, 6);
const Circulo1 = new Circulo("Rojo", 0, 5);

console.log(Rectangulo1.mostrarInfo());
console.log(Circulo1.mostrarInfo());


