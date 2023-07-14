let newString = '99888777998877889998878899987898778';

const arrOfNum = newString.split('');
// console.log(arrOfNum);

const arrOfAbsNum = arrOfNum.map((num) => Math.abs(num));   // Math.abs() static method returns the absolute value of a number


// 1st task - SUM 

const sumArrEl = (accumulator, number) => accumulator + number;

console.log(arrOfAbsNum.reduce(sumArrEl).toString());


// 2nd task - Subtraction

const subtractArrEl = (accumulator, number) =>  accumulator - number;

console.log(Math.abs(arrOfAbsNum.reduce(subtractArrEl)).toString());


// 3rd task - Division

const divideByTwoArrEl = arrOfAbsNum.map(x => x / 2); 

const divideByTwoArrElAbs = divideByTwoArrEl.map(ele => ele.toFixed());  // the number will be rounded to the nearest integer (but returned as a string)

// console.log(divideByTwoArrElAbs);

const arrOfNumDivideByTwoArrEl = [];

divideByTwoArrElAbs.forEach(str => {                    
  arrOfNumDivideByTwoArrEl.push(parseInt(str));              // parseInt() function parses a string argument and returns an integer
});

console.log(arrOfNumDivideByTwoArrEl.toString());

// 4th task - Multiplication

const multiplyByTwoArrEl = arrOfAbsNum.map(x => x * 2); 

console.log(multiplyByTwoArrEl.toString());