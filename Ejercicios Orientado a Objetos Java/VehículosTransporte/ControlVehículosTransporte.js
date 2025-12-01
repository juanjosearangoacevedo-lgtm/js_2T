const VehiculoTerrestre = require('./VehiculoTerrestre.js');
const VehiculoAcuatico = require('./VehiculoAcuatico.js');

const carro = new VehiculoTerrestre("Toyota", "Corolla", 5, 4);
const barco = new VehiculoAcuatico("Yamaha", "WaveRunner", 3, "motor a gasolina");

console.log("\n--- Vehículo Terrestre ---");
console.log(carro.mostrarInformacion());
console.log(carro.moverse());
console.log(carro.frenar());

console.log("\n--- Vehículo Acuático ---");
console.log(barco.mostrarInformacion());
console.log(barco.moverse());
console.log(barco.anclar());