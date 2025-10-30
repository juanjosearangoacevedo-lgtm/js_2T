//Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.
let array=[2,3,4,5,6,7,8,20]
function daremosPares(){
    let i=0
    let nuevo=[]
    do{
        if (array[i]%2===0){
            nuevo.push(array[i])
        }
        i++;
    }
    while(i<=array.length)}