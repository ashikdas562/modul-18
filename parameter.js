function bringSingara(taka) {
    console.log("singara er jonno dise",taka);
    console.log("mama singara den")
    var singaraprice = 10;
    var singaraQuantity = taka / singaraprice;
    return singaraQuantity;
}
var money = 250;
var singara =  bringSingara(money);
console.log("Ai nen singara" , singara);