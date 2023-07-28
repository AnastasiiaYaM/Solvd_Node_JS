/* Task 1: Immutability and Pure Functions

1. Implement a pure function called `calculateDiscountedPrice` that takes an array of products and a discount percentage as arguments. The function should return a new array of products with discounted prices based on the given percentage, without modifying the original products.

2. Create a pure function called `calculateTotalPrice` that takes an array of products as an argument. The function should return the total price of all products, without modifying the original array or its items.
*/

//1.1

let products = [5, 8, 12, 16, 22, 46, 48];
let discountedProducts = [];
let discount = 10;

function calculateDiscountedPrice (products, discount) {

discountedProducts = products.map(product =>  product - (product * discount / 100));

return discountedProducts;

}

console.log('discounted prices', calculateDiscountedPrice(products, discount));

//1.2

arr = products;

function calculateTotalPrice (arr){

    let totalPrice = 0;

    for (i = 0; i < arr.length; i++){
        totalPrice += arr[i]
     }
     return totalPrice

  }

console.log('The total price of all products is ', calculateTotalPrice(products));

arr = discountedProducts;

console.log('The total price of all discounted products is ', calculateTotalPrice(discountedProducts));

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
  
  function getFullName (obj){

    return obj.firstName + ' ' + obj.lastName;
  }
  
console.log('Full name is ', getFullName(person));

//2.2

let strText = 'an apple a day keeps the doctor away';

const filterUniqueWords = (strText) => strText.split(' ').sort();

console.log('an array of unique words, sorted in alphabetical order', filterUniqueWords(strText)); 

 //2.3

let students = [
    {
        name: 'Olena',
        grades: 100,
    },
    {
        name: 'Boris',
        grades: 85,
    },
    {
        name: 'Petr',
        grades: 70,
    }
]

const getAverageGrade = (students) => students.map(student => student.grades).reduce((prev, next) => prev + next);

console.log('the average grade of all students', getAverageGrade(students));

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

 const counter = createCounter ();

 console.log('start', counter());
 console.log('1st call', counter());
 console.log('2nd call', counter());
 console.log('3rd call', counter());

// 3.2

function repeatFunction (fn, num) {

    for (let i = 1; i <= num; i++) {

        fn (i);
    } 
    for (let i = 1; num < 0; i++) {  // infinite loop

        fn (i);
    } 
}

repeatFunction (console.log, 5); 




/*
Task 4: Recursion and Tail Call Optimization

1. Implement a recursive function called `calculateFactorial` that calculates the factorial of a given number. Optimize the function to use tail call optimization to avoid stack overflow for large input numbers.

2. Create a recursive function called `power` that takes a base and an exponent as arguments. The function should calculate the power of the base to the exponent using recursion.

*/



/*
Task 5: Lazy Evaluation and Generators

1. Implement a lazy evaluation function called `lazyMap` that takes an array and a mapping function. The function should return a lazy generator that applies the mapping function to each element of the array one at a time.

2. Create a lazy generator function called `fibonacciGenerator` that generates Fibonacci numbers one at a time using lazy evaluation.
*/