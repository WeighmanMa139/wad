// Max W.
// 4/19/24
// Simple Couculator progect

//Imput

console.log(`
 Max Weighman
 4/19/24
 Js Simple couculateor
 `);

 const numOne = parseInt(prompt(`Number One`));
 const numTwo = parseInt(prompt(`Number Two`));

//Prosses 

const sum1 = numOne + numTwo;
const sum2 = numOne - numTwo;
const sum3 = numOne * numTwo;
const sum4 = numOne / numTwo;


//Output
const msg =(
`
    ${numOne} + ${numTwo} = ${sum1}
    ${numOne} - ${numTwo} = ${sum2}
    ${numOne} * ${numTwo} = ${sum3}
    ${numOne} / ${numTwo} = ${sum4}

    `
);

console.log(msg)