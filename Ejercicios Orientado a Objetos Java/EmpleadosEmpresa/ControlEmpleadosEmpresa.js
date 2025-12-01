const EmpleadoFijo = require('./EmpleadoFijo.js');
const EmpleadoHora = require('./EmpleadoHora.js');

const empleadoFijo1 = new EmpleadoFijo(1, "Juan Pérez", 1500000);
const empleadoHora1 = new EmpleadoHora(2, "María Gómez", 25000, 8);

console.log(`Salario empleado fijo (${empleadoFijo1.nombre}): $${empleadoFijo1.calcularSalario()}`);
console.log(`Salario empleado por hora (${empleadoHora1.nombre}): $${empleadoHora1.calcularSalario()}`);