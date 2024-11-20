//array

// const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, true, "manay"]
let myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[2]);

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(0)   //Added the number at first load in the array 
myArr.shift(0)    // Remove that number which has been added by unshift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(5));

const newArr = myArr.join()

console.log(newArr);     // Convert the array into string
console.log(typeof newArr);    
console.log(myArr);

// slice ---splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)    // When slicing is done it only prints start letter not last range doeas not includes, wihtout manupilating(any change) in the array

console.log(myn1);
console.log("B", myArr)


const myn2 = myArr.splice(1,3)   //When splicing is done it prints start letter as well as last range, but it aslo manupilates(any change) the array
console.log("C", myArr);
console.log(myn2);