// Consolore Loader
console.log("JS Biglietto Treno Loaded");

// User Inputs
let userDistance = parseInt
    (prompt("Indica il numero di chilometri che vuoi percorrere:"));
const userAge = parseInt
    (prompt("Indica la tua eta:"));

// Casting Variables
let priceTicket= userDistance * 0.21;
let discountTicket;

// Discount Statement for Minors
if ( isNaN(userAge) || isNaN(userDistance) ) {
    priceTicket = "Devi inserire dati corretti per il calcolo!";
}
// Discount Statement for Under 18
else if (userAge < 18) {
    discountTicket = priceTicket * (20 / 100);
}
// Discount Statement for Over 65 
else if (userAge >= 65) {
    discountTicket = priceTicket * (40 / 100);
} else {
    discountTicket = 0;
}

let finalPrice = priceTicket - discountTicket;

document.getElementById("ticket-cost-result").innerHTML += finalPrice.toFixed(2)
