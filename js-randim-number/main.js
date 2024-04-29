// Max W.
// 4/24/24
// Random Numbers



//number reternd will never be one and
//will never be less than one

console.log(`First randomly generated number: ${Math.random()}`);
//console.log(`Second randomly generated number: ${Math.random()}`);
//console.log(`Third randomly generated number: ${Math.random()}`);




// How to generate random numbers `between 0 and 5

//console.log(`A randomly generated number between 0 and 5: ${Math.random() * 5}`);
//console.log(`Another randomly generated number between 0 and 5: ${Math.random() * 5}`);



// how to randomly generate numbers between 0 and 25

//console.log(`A randomly generated number between 0 and 25: ${Math.random() * 25}`);
//console.log(`Another randomly generated number between 0 and 25: ${Math.random() * 25}`);




// Rounding down useing the Math.floor() method
// need to combind math floor with math random
// to generate random numbers useing arreys

//const firstRandNum = 4.5841287;
//const secondRandNum = 3.33333333;
//const thirdRandNum = 0.6793244370235062;

//console.log(`First number rounded down useing Math.floor() method: ${Math.floor(firstRandNum)}`);
//console.log(`Second number rounded down useing Math.floor() method: ${Math.floor(secondRandNum)}`);
//console.log(`Third number rounded down useing Math.floor() method: ${Math.floor(thirdRandNum)}`);




// Use Math.random() and Math.floor() methods together
// to generate a random number that you can use with your array

const words =["cat", "mitten", "house", "superhero" , "hamburger",]

//const randomIndex = Math.floor(Math.random() *5)
const randomIndex = Math.floor(Math.random() * words.length)

console.log(`Randomly generated Index number between 0 and 5 is: ${randomIndex}`);
console.log(`Randomly selected array element: ${words[randomIndex]}`);
