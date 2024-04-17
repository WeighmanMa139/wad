// Max W.
// 4/17/24
// Costomer Statistics Progect


//Imput

const peakTime1 = parseInt(prompt(`How meny costomers did you get at peak time #1`));
const peakTime2 = parseInt(prompt(`How meny costomers did you get at peak time #2`));
const peakTime3 = parseInt(prompt(`How meny costomers did you get at peak time #3`));
const peakTime4 = parseInt(prompt(`How meny costomers did you get at peak time #4`));

const totalNumberCostomers = peakTime1 + peakTime2 + peakTime3 + peakTime4;

//Prossess

const avrageNumberCostomers = totalNumberCostomers / 4;

const msg =
`
Rolling W Feed Store Costomer Statistics 

Number of Customers (First Hour): ${peakTime1}
Number of Customers (Second Hour): ${peakTime2}
Number of Customers (Therd Hour): ${peakTime3}
Number of Customers (Forth Hour): ${peakTime4}

Total Costomers Over Four Hours: ${totalNumberCostomers}
AVG Number Of Costomers Per Hour: ${avrageNumberCostomers}
`  
//Output
console.log(msg);