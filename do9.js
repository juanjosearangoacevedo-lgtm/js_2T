//Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci
function Fibonacci(){
    let i=0,inicio=0,inicio2=1,resultado;
    console.log(inicio);
    console.log(inicio2);
    do{
        resultado=inicio+inicio2;
        console.log(resultado);
        inicio2=inicio;
        inicio=resultado;
        i++;
    }
    while(i<=10)
}
Fibonacci();