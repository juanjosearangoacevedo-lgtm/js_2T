//Algoritmo para contar ocurrencias de 'a' en un texto
let i=0,texto="aslkadksaklAaAa".toLowerCase(),contador=0
while(i<=texto.length){
    if (texto[i]==="a"){
        contador++;
    }
    i++;
}
console.log(contador)