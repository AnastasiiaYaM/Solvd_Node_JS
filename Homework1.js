/*
let arrOfStr = ['1', '2,3', '-3', '2', '5', '8', '6', '3', '4', '1', '2', '3', '4', '5', '6', '7', '3', '4', '10', '11', '12', '13', '14', '15', '6', '3', '4','14', '15', '1', '30', '31'];

const arrOfNum = [];

arrOfStr.forEach(str => {                    
  arrOfNum.push(parseInt(str));              // parseInt() function parses a string argument and returns an integer
});

const arrOfAbsNum = arrOfNum.map((num) => Math.abs(num));   // Math.abs() static method returns the absolute value of a number
*/

// const arrOfAbsNum = [9, 9, 8, 8, 8, 7, 7, 7, 9, 9, 8, 8, 7, 7, 8, 8, 9, 9, 9, 8, 8, 7, 8, 8, 9, 9, 9, 8, 7, 8, 9, 8, 7, 7, 8];

let num = 99888777998877889998878899987898778n;   // num to bigint
// console.log(typeof num);

const arrOfAbsNum = Array.from(String(num), Number);
console.log(arrOfAbsNum);


// 1st task - SUM 

const sumArrEl = (accumulator, number) => accumulator + number;

console.log(arrOfAbsNum.reduce(sumArrEl));


// 2nd task - Subtraction

const subtractArrEl = (accumulator, number) =>  accumulator - number;

console.log(Math.abs(arrOfAbsNum.reduce(subtractArrEl)));


// 3rd task - Division

const divideByTwoArrEl = arrOfAbsNum.map(x => x / 2); 

const divideByTwoArrElAbs = divideByTwoArrEl.map(ele => ele.toFixed());  // the number will be rounded to the nearest integer (but returned as a string)

// console.log(divideByTwoArrElAbs);

const arrOfNumDivideByTwoArrEl = [];

divideByTwoArrElAbs.forEach(str => {                    
  arrOfNumDivideByTwoArrEl.push(parseInt(str));              // parseInt() function parses a string argument and returns an integer
});

console.log(arrOfNumDivideByTwoArrEl);

// 4th task - Multiplication

const multiplyByTwoArrEl = arrOfAbsNum.map(x => x * 2); 

console.log(multiplyByTwoArrEl);
