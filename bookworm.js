function calculate(quantityBought, priceOfProduct){
    
    var qob = parseInt(quantityBought);
    var price = parseFloat(priceOfProduct);

    var presentSubtotal = parseInt(document.querySelector("#subtotal").innerHTML);
    
    var summa = presentSubtotal + (price * qob);
    var vat = (5*summa)/100;
    var total = summa + vat;

    document.querySelector("#subtotal").innerHTML = summa;
    document.querySelector(".vat").innerHTML = vat;
    document.querySelector(".total").innerHTML = total;
}

function remove(a,b,c){
  document.getElementsByClassName(a).style.display = "none";
  document.getElementsByClassName(b).style.display = "none";
  document.getElementsByClassName(c).style.display = "none";

    
    //document.getElementsByClassName(b).style.display = "none";
    //document.getElementsByClassName(c).style.display = "none";

    //var book2 = document.querySelector('.cart-item');
    //book2.style.display = "none";
}


   
