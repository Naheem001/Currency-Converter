function currencyCalc(){
    var amount = document.getElementById("amount").value;
    var currency = document.getElementById("currency").value;

    if (isNaN(amount)){
        document.getElementById("nanAmount").innerHTML = "Amount must be digits";
    }
    else{
        //Run program
        var output;
        if(currency == "dollar"){
             output = amount * 365;
         }
         else if(currency == "euros"){
             output = amount * 395;
         }
         else if(currency == "pounds"){
             output = amount * 470;
         }
         else if(currency == "yen"){
             output = amount * 3;
         }else if(currency == "rupees"){
             output = amount * 5;
         }else if(currency == "bitcoin"){
             output = amount * 3686700;
         }
         document.getElementById("correctAmount").innerHTML = "The naira equivalent is N"+output;
    }   
}