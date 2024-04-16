// Max W.
// 4/15/24
// Java Intro

document.getElementById("btn").addEventListener("click", placeOrder);

function placeOrder(){

//imput

let size = prompt("Enter size of pizza (medeum, small, large");

let topping1 = prompt("Enter first topping:")
let topping2 = prompt("Enter second topping:")

//prosess

let msg = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;



//output

alert(msg);

}