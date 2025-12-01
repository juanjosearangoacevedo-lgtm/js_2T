const CuentaBancaria = require ("./CuentaBancaria"); 

const cuenta = new CuentaBancaria (29322904348308309870, "Valentina", 2000000, 2022, "Ahorros", true);

cuenta.depositar(250000);
cuenta.retirar(500000);
cuenta.consultar();

