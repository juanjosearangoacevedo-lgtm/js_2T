let numeros=[2,3,214,3,352,54,12,13,12,243];
function darmePares(numeros){
    let pares=[]
    for(i=0;i>=numeros.length;i++){
        if(numeros[i]%2===0){
            pares.push(numeros[i])
        }
    }
    return pares;
}
