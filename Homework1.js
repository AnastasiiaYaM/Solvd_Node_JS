
// 1st task - SUM 

const sumFn = (firstNum, secNum) => {
  let i = firstNum.length - 1;
  let j = secNum.length - 1;
  let sum = 0, carryover = 0, res = ' ';
  while (i >= 0 || j >= 0) {
    const x = firstNum[i] || 0;
    const y = secNum[j] || 0;
    sum = parseInt(x) + parseInt(y) + carryover;
    carryover = Math.trunc(sum / 10);
    res = (sum % 10) + res;
    i--;
    j--;
  }
if (carryover) res = carryover + res;
return `${res}`;
}

console.log('sum result fn', sumFn("99888777998877889998878899987898778", "99888777998877889998878899987898778"));

// 2nd task - Substraction


const substractFn = (firstNum, secNum) => {
  let i = firstNum.length - 1;
  let j = secNum.length - 1;
  let sum = 0, carryover = 0, res = ' ';
  while (i >= 0 || j >= 0) {
    const x = firstNum[i] || 0;
    const y = secNum[j] || 0;
    sum = parseInt(x) - parseInt(y) - carryover;
    carryover = Math.trunc(sum / 10);
    res = (sum % 10) - res;
    i--;
    j--;
  }
if (carryover) res = carryover - res;
return `${res}`;
}

console.log('substraction result fn', substractFn("99888777998877889998878899987898778", "99888777998877889998878899987898770"));





/* 
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
*/