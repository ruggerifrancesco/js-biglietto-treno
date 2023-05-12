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
if (userAge < 18) {
    discountTicket = Math.round(priceTicket * (20 / 100));
} 
// Discount Statement for Over 65 
else if (userAge >= 65) {
    discountTicket = Math.round(priceTicket * (40 / 100));
} else {
    discountTicket = 0;
}

const finalPrice = priceTicket - discountTicket

alert("Il costo per " + userDistance + "chilometri e di " + finalPrice + " euro.")
console.log(finalPrice);
