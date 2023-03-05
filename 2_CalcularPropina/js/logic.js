function calculateTip(billAmount, tipPercentage) 
{
    var miPropina;
    miPropina = billAmount * (tipPercentage/100);
    console.log("Propina " + miPropina);
    return miPropina;
}

console.log(calculateTip(1524.33, 25));