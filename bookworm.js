function calculate(quantityBought, priceOfProduct){
    
    var qob = parseInt(quantityBought);
    var price = parseFloat(priceOfProduct);

    var presentSubtotal = parseInt(document.querySelectorAll("#subtotal").innerHTML); // bisi made some changes
    
    var summa = presentSubtotal + (price * qob);
    var vat = (5*summa)/100;
    var total = summa + vat;

    document.querySelectorAll("#subtotal").innerHTML = summa; //bisi made some changes here
    document.querySelectorAll(".vat").innerHTML = vat;//bisi made changes
    document.querySelectorAll(".total").innerHTML = total; //bisi made changes
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


   
