Math.pow(numero,2)
let array=[2,3,4,5,6,7,8,9,10]
function exponente(){
    let acumulador=0
    for(i=0;1<=array.length;i++){
        acumulador+=Math.pow(array[i],2)
    }
    return acumulador
}