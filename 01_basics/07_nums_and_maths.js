const score = 700
console.log(score);
console.log(typeof score);

const balance = new Number(100)
console.log(balance);
console.log(typeof balance);

console.log(typeof balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));   // return number of digits after the decimal 

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(5));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));         // this function return the number in Indian standard form 
console.log(hundreds.toLocaleString('en-US'));         // this function return the number in US standard form 


// ---------------------------------------------Math----------------------------------------------

console.log(Math);
console.log(Math.abs(-4));      //absolute value which return positive value
console.log(Math.round(5.456));      //absolute value which return round-off value
console.log(Math.ceil(5.456)); 
console.log(Math.floor(5.456));     // The Math.floor() method rounds a number DOWN to the nearest integer.
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));

console.log(Math.random());     // return random number in the range of 0 to 1

console.log(Math.random()*10);  // multipling random number to shift the decimal point

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min);