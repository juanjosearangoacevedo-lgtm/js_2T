const Cliente = require("./Cliente.js");
const Pedido = require("./Pedido.js");
const Producto = require("./Producto.js");

const Cliente1 = new Cliente("Juan Perez", "WgM4U@example.com", "1234567890");
const Producto1 = new Producto("Alitas BBQ", "A001");
const Pedido1 = new Pedido(new Date('2025-11-14'), 78000, Cliente1, [Producto1]);

console.log(Cliente1.mostrarInfo());
console.log(Producto1.mostrarInfo());
console.log(Pedido1.mostrarInfo());
