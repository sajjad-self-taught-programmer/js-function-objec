function bringsingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 500;
 var singaras = bringsingara(myTaka);
 console.log('eating singaras:', singaras)