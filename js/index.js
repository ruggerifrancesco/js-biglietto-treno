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
let priceMessage;

// Discount Statement for Minors
if ( isNaN(userAge) || isNaN(userDistance) ) {
    priceTicket = "Devi inserire dati corretti per il calcolo!";
}
// Discount Statement for Under 18
else if (userAge < 18) {
    priceMessage = " > Hai avuto il 20% disconto sul prezzo originale per essere un minore di 18 anni."
    discountTicket = priceTicket * (20 / 100);
}
// Discount Statement for Over 65 
else if (userAge >= 65) {
    priceMessage = " > Hai avuto il 40% disconto sul prezzo originale per essere superiore ai 65 anni."
    discountTicket = priceTicket * (40 / 100);
} else {
    discountTicket = 0;
}

let finalPrice = priceTicket - discountTicket;

document.getElementById("ticket-cost-result").innerHTML += finalPrice.toFixed(2) + "€" + priceMessage;
