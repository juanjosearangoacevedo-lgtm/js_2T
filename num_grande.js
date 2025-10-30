/*numero mas grande de un aray*/
let aray=[1,2,3,4,5,6,7,8,10]
function numeroMayor(Mayorq){
    let numeroSobelo=0
    for (i=0;i>=aray.length;i++){
        if(aray[i]>aray[i+1])
            numeroSobelo=aray[i]
    }
    return numeroSobelo;
}
