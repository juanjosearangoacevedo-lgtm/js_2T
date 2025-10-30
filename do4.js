//Algoritmo para contar ocurrencias de 'a' en un texto
let i=0,texto="aslkadksaklAaAa".toLowerCase(),contador=0
do{
    if (texto[i]==="a"){
        contador++;
    }
    i++;
}
while(i<=texto.length)
console.log(contador)