// 1. Algoritmo para imprimir números del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Algoritmo para sumar los primeros 10 números
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log("Suma de 1 a 10:", suma);

// 3. Tabla de multiplicar de un número recibido por argumento
function tabla(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// 4. Contar ocurrencias de 'a' en un texto
function contarA(texto) {
    let contador = 0;
    for (let letra of texto) {
        if (letra.toLowerCase() === 'a') contador++;
    }
    return contador;
}

// 5. Calcular el factorial de un número
function factorial(n) {
    let total = 1;
    for (let i = 1; i <= n; i++) {
        total *= i;
    }
    return total;
}

// 6. Devolver solo los números pares de un array
function soloPares(arr) {
    let resultado = [];
    for (let num of arr) {
        if (num % 2 === 0) resultado.push(num);
    }
    return resultado;
}

// 7. Suma de cuadrados de los primeros N números naturales
function sumaCuadrados(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i * i;
    }
    return total;
}

// 8. Potencia base^exponente sin usar **
function potencia(base, exponente) {
    let resultado = 1;
    for (let i = 1; i <= exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

// 9. Generar primeros N términos de Fibonacci
function fibonacci(n) {
    let serie = [0, 1];
    if (n === 1) return [0];
    if (n === 2) return serie;

    for (let i = 2; i < n; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie;
}

// 10. Generar el total de las tablas de multiplicar hasta un número dado
function todasLasTablas(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`\nTabla del ${i}`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}
