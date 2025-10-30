//Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, sin usar el operador de potencia **.
function exponente(){
    let i=0, array=[2,3,4,5,6,7,8,9,10], acumulador=0
    while(i<=array.length){
        acumulador+=Math.pow(array[i],2)
    }
    return acumulador
}
console.log(acumulador)





