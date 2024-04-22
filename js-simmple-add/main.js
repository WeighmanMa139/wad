// Max W.
// 4/22/24
// simple Addition Couculateor

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {

    // Input
    const num1 = +document.getElementById("num1-in").value;
    const num2 = +document.getElementById("num2-in").value;

    // Proses
    const total = num1 + num2;

    // Output
    document.getElementById("output").innerHTML = total;
}