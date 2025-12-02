console.log("========= 1. Interés del 2% mensual =========");
function interesMensual(capital) {
    let ganancia = capital * 0.02;
    let total = capital + ganancia;
    console.log(`Capital: $${capital} - Ganancia del mes: $${ganancia} - Total: $${total}`);
}
interesMensual(1000000);



console.log("\n========= 2. Número par =========");
function esPar(num) {
    if (num % 2 === 0) {
        console.log(`${num} es par`);
    } else {
        console.log(`${num} NO es par`);
    }
}
esPar(8);



console.log("\n========= 3. Triple si es mayor o igual a 10 =========");
function tripleSiMayor10(num) {
    if (num >= 10) {
        console.log(`El triple de ${num} es ${num * 3}`);
    } else {
        console.log(`${num} es menor que 10, no se triplica`);
    }
}
tripleSiMayor10(12);



console.log("\n========= 4. Computador con descuento si cuesta 1M =========");
function precioComputador(precio) {
    let descuento = 0;
    if (precio >= 1000000) descuento = precio * 0.10;

    let precioConDescuento = precio - descuento;
    let iva = precioConDescuento * 0.19;
    let total = precioConDescuento + iva;

    console.log(`Precio original: $${precio}\nDescuento: $${descuento}\nIVA: $${iva}\nTotal a pagar: $${total}`);
}
precioComputador(1200000);



console.log("\n========= 5. Suma si el primero es mayor =========");
function sumarSiMayor(num1, num2) {
    if (num1 > num2) {
        console.log(`La suma es: ${num1 + num2}`);
    } else {
        console.log(`No se suma porque ${num1} no es mayor que ${num2}`);
    }
}
sumarSiMayor(10, 5);



console.log("\n========= 6. Descuento del 20% si supera 100.000 =========");
function descuentoAlmacen(valorCompra) {
    let descuento = 0;
    if (valorCompra > 100000) descuento = valorCompra * 0.20;

    let total = valorCompra - descuento;
    console.log(`Compra: $${valorCompra}, Descuento: $${descuento}, Total a pagar: $${total}`);
}
descuentoAlmacen(150000);



console.log("\n========= 7. Salario con retención del 10% si supera 2M =========");
function salarioNeto(salarioBruto) {
    let retencion = 0;
    if (salarioBruto > 2000000) retencion = salarioBruto * 0.10;

    let salarioNeto = salarioBruto - retencion;
    console.log(`Salario bruto: $${salarioBruto}, Retención: $${retencion}, Neto: $${salarioNeto}`);
}
salarioNeto(2500000);



console.log("\n========= 8. Múltiplo de 5 =========");
function multiploDe5(num) {
    if (num % 5 === 0) {
        console.log(`${num} es múltiplo de 5`);
    } else {
        console.log(`${num} NO es múltiplo de 5`);
    }
}
multiploDe5(25);



console.log("\n========= 9. Mayor de edad =========");
function mayorEdad(edad) {
    if (edad >= 18) {
        console.log(`Con ${edad} años: Es mayor de edad`);
    } else {
        console.log(`Con ${edad} años: No es mayor de edad`);
    }
}
mayorEdad(20);



console.log("\n========= 10. Computador con descuento + IVA (versión general) =========");
function computador2(precio) {
    let descuento = precio >= 1000000 ? precio * 0.10 : 0;
    let precioConDescuento = precio - descuento;
    let iva = precioConDescuento * 0.19;
    console.log(`Total final: $${precioConDescuento + iva}`);
}
computador2(800000);



console.log("\n========= 11. Artículo con clave 01 y 02 =========");
function precioArticulo(nombre, clave, precio) {
    let descuento = 0;

    if (clave === "01") descuento = precio * 0.10;
    else if (clave === "02") descuento = precio * 0.20;

    let total = precio - descuento;

    console.log(`
Artículo: ${nombre}
Clave: ${clave}
Precio original: $${precio}
Descuento: $${descuento}
Precio final: $${total}
`);
}
precioArticulo("Teclado Gamer", "02", 50000);



console.log("\n========= 12. Compra de camisas =========");
function compraCamisas(cantidad, precioUnitario) {
    let total = cantidad * precioUnitario;
    let descuento = cantidad >= 3 ? total * 0.20 : total * 0.10;

    console.log(`Cantidad: ${cantidad}
Precio unitario: $${precioUnitario}
Descuento aplicado: $${descuento}
Total a pagar: $${total - descuento}`);
}
compraCamisas(4, 30000);
