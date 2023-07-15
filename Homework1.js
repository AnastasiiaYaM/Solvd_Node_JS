
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


// 4th task - Multiplication

const multiplyFn = (firstNum, secNum) => {
  if (firstNum === '0' || secNum === '0') return '0'
  
  const m = firstNum.length, n = secNum.length, res = new Array(m+n).fill(0);
  
  for (let i=m-1; i>=0; i--) {
      for (let j=n-1; j>=0; j--) {
          const p1=i+j, p2=i+j+1;
          let sum = res[p2] + Number(firstNum[i]) * Number(secNum[j]);
          res[p2] = sum % 10;
          res[p1] += Math.floor(sum / 10);
      }
  }
  if (res[0] === 0) res.shift();
  return res.join('');
  
}

console.log('multiplication result fn', multiplyFn("99888777998877889998878899987898778", "99888777998877889998878899987898770"));


/* 
let newString = '99888777998877889998878899987898778';

const arrOfNum = newString.split('');
// console.log(arrOfNum);

const arrOfAbsNum = arrOfNum.map((num) => Math.abs(num));   // Math.abs() static method returns the absolute value of a number


// 1st task - SUM 

const sumArrEl = (accumulator, number) => accumulator + number;

console.log(arrOfAbsNum.reduce(sumArrEl).toString());


// 2nd task - Substraction

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