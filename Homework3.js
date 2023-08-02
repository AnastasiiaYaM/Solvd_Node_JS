/* Task 1: Immutability and Pure Functions

1. Implement a pure function called `calculateDiscountedPrice` that takes an array of products and a discount percentage as arguments. The function should return a new array of products with discounted prices based on the given percentage, without modifying the original products.

2. Create a pure function called `calculateTotalPrice` that takes an array of products as an argument. The function should return the total price of all products, without modifying the original array or its items.
*/

//1.1

const products = [
    {name: 'potato', price: 100},
    {name: 'tomato', price: 80},
    {name: 'onion', price: 60}
];
let discountedProducts = [];
let discount = 10;

function calculateDiscountedPrice (obj, prop, discount) {

    if (Array.isArray(products) && products.every(product => typeof product.price === 'number' && typeof product.name === 'string') && typeof discount === 'number') {

        discountedProducts = obj.map(value =>  value[prop] - (value[prop] * discount / 100));
    
        return discountedProducts;
    } else {

        throw new Error(`Wrong input data type`);
    }
}

console.log('discounted prices', calculateDiscountedPrice(products, 'price', discount));

//1.2

function calculateTotalPrice (obj, prop){

    if (Array.isArray(products) && products.every(product => typeof product.price === 'number' && typeof product.name === 'string')) {

        const totalPrice = obj.reduce(function(previousValue, currentValue) {

            return previousValue + currentValue[prop];
        }, 0);

        console.log('Total prise is', totalPrice);
    } else {
        throw new Error(`Wrong input data type`);
    }
  }

calculateTotalPrice(products, 'price');

/*

Task 2: Function Composition and Point-Free Style

1. Implement a function called `getFullName` that takes a person object with `firstName` and `lastName` properties. The function should return the person's full name in the format "FirstName LastName".

2. Create a function called `filterUniqueWords` that takes a string of text and returns an array of unique words, sorted in alphabetical order, without using explicit loops. Use function composition and point-free style.

3. Implement a function called `getAverageGrade` that takes an array of student objects, each containing a `name` and `grades` property. The function should return the average grade of all students, without modifying the original array or its items. Use function composition and point-free style.

*/

//2.1

const person = {
    firstName: 'Anastasiia',
    lastName: 'Melenevych'
  };
  
  function getFullName (obj) {

    if (typeof person === 'object') {

    return obj.firstName + ' ' + obj.lastName;

    } 
    throw new Error(`The ${person} should be an object`);
  }
  
console.log('Full name is ', getFullName(person));

//2.2

let strText = 'hello Hello Alan ZERO zero wake, Wake ALPHABET alpha . ? ? ?';

const filterUniqueWords = (strText) => {

    if (typeof strText === 'string') {

        const arrayFromStrText = strText.toLowerCase().split(/\W+/);
        const filterEmptyWordsAndSort = arrayFromStrText.filter(word => word.length > 0).sort();
        return Array.from(new Set(filterEmptyWordsAndSort));
    }
    throw new Error(`The ${strText} should be a string`);
}

console.log('an array of unique words, sorted in alphabetical order', filterUniqueWords(strText)); 


// 2.3

let students = [
    {
        name: 'Olena',
        grades: [ 100, 80, 75 ],
    },
    {
        name: 'Boris',
        grades: [ 85, 92, 94 ],
    },
    {
        name: 'Petr',
        grades: [ 70, 84, 78 ],
    }
    ]

const getAverageGrade = (students) => students.map(student => student.grades.reduce((acc, cur) => acc + cur, 0) / student.grades.length).reduce((prev, next) => prev + next, 0) / students.length;
             
console.log('average grade of all students', getAverageGrade(students));

/*
const getAverageGrade = (students) => {

    if (Array.isArray(students) && students.every(student => typeof student.name === 'string' && Array.isArray(student.grades)) && student.grades.every(grade => typeof grade === 'number')) {        
        
        const averageGrade = (students) => students.map(student => student.grades.reduce((acc, cur) => acc + cur, 0) / student.grades.length).reduce((prev, next) => prev + next, 0) / students.length;
             
        return averageGrade;

        } else {

            throw new Error(`Wrong input data type`);
        }
    }   
    
console.log('average grade of all students', getAverageGrade(students));
*/
    
/*
Task 3: Closures and Higher-Order Functions

1. Create a function called `createCounter` that returns a closure. The closure should be a counter function that increments the count on each call and returns the updated count. Each closure should have its own independent count.

2. Implement a higher-order function called `repeatFunction` that takes a function and a number as arguments. The function should return a new function that invokes the original function multiple times based on the provided number. If the number is negative, the new function should invoke the original function indefinitely until stopped.
*/

//3.1

function createCounter () {

    let count = 0;
    
    return () => {

    return count++;

    }

}

 const counter1 = createCounter ();
 const counter2 = createCounter ();

 console.log('counter 1', counter1());
 console.log('counter 1', counter1());
 console.log('counter 2', counter2());
 console.log('counter 2', counter2());
 console.log('counter 2', counter2());
 console.log('counter 1', counter1());

// 3.2

function repeatFunction (fn, num) {
    if (num === 0) {
        return 0;
    }

    else if (typeof num === 'number') {
        for (let i = 1; i <= num; i++) {

            fn (i);
        } 
        for (let i = 1; num < 0; i++) {  // infinite loop

            fn (i);
        } 
    }

    else {
        return 'Wrong input data types';
    }
}
repeatFunction (console.log, 5); 

/*
Task 4: Recursion and Tail Call Optimization

1. Implement a recursive function called `calculateFactorial` that calculates the factorial of a given number. Optimize the function to use tail call optimization to avoid stack overflow for large input numbers.

2. Create a recursive function called `power` that takes a base and an exponent as arguments. The function should calculate the power of the base to the exponent using recursion.

*/

//4.1

function calculateFactorial (num) {

    if (typeof num === 'number') {

         return recursiveFactorial (num, 1); 

        function recursiveFactorial (num, accumulator) {

            if (num <= 0) return accumulator;
  
             return recursiveFactorial (num-1, num*accumulator);
        }
    } else {
        return 'impossible to calculate, because it is not a number';
    }
}

let num = 4;

console.log(`factorial of ${num} is`, calculateFactorial (num));

// 4.2

function power (base, exponent) {

    if (typeof base === 'number' && typeof exponent === 'number') {

        if (exponent == 0) return 1;

        else return base * power(base, exponent - 1);

    } else {
        return 'Wrong input data types';
    }
}

let base = 3;
let exponent = 5;

console.log(`${base} in ${exponent} degree is equal to`, power (base, exponent));


/*
Task 5: Lazy Evaluation and Generators

1. Implement a lazy evaluation function called `lazyMap` that takes an array and a mapping function. The function should return a lazy generator that applies the mapping function to each element of the array one at a time.

2. Create a lazy generator function called `fibonacciGenerator` that generates Fibonacci numbers one at a time using lazy evaluation.
*/

// 5.1

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function lazyMap (array) {
    
let arrayMapResults = [];

    if (Array.isArray(array) && array.every(item => typeof item === 'number')) {

        for (let i = 0, el; i < array.length; i++) {

            el = array[i];

            if (el % 2) {

             arrayMapResults.push(`odd: ${el}`);

            }   
        }
    } else {
        return 'Wrong input data types';
    }
return arrayMapResults;

}    

console.log(lazyMap(array));

// 5.2

const fibonacciGenerator = (n) => {

    const result = [];
    let start = 0;
    let next = 1;

    if (typeof n === 'number') {

        switch (n) {
            case 0:
                break;
            case 1:
                result.push(start);
                break;
            case 2:
                result.push(start);
                result.push(next);
                break;        
            default:
                result.push(start);
                result.push(next);
            for (let i = 2; i < n; i++) {
                const val = start + next;
                start = next;
                next = val;
                result.push(val);
            }           
        }
      return result;

    } else {
        return 'Wrong input data types';
    }
}

console.log(fibonacciGenerator('3'));
console.log(fibonacciGenerator(10));
