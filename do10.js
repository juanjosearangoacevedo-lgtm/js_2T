//Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.
function totalTablas(){
    let i=1, entero=7,acumulador=0;
    do{
        acumulador+=(i*entero);
        i++;
    }
    while(i<=10)
    return acumulador
};
console.log(acumulador)