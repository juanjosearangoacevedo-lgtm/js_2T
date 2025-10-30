//Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.
function totalTablas(){
    let i=1, entero=7,acumulador=0
    while(i<=10){
        acumulador+=(i*entero)
    }
    return acumulador
}
console.log(acumulador)