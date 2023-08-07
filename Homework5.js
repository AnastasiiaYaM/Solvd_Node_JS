/* Task 1: Advanced Array Filtering

1. Create a function called `customFilterUnique` that takes an array and a callback function as arguments. The `customFilterUnique` function should filter the array using the callback function to determine uniqueness. The resulting array should contain only unique elements based on the callback's logic.

2. Use the `customFilterUnique` function to filter an array of objects based on a specific property and return only unique objects.
*/

let customFilterUnique = function (array, callback) {

    if (Array.isArray(array) && typeof callback === "function") { 

        return callback(array);
    }
}


const arrayProduct = [
    {
        name: 'laptop',
        price: 3000,
        quantity: 5
    },
    {
        name: 'smartphone',
        price: 900,
        quantity: 5
    },
    {
        name: 'laptop',
        price: 5000,
        quantity: 2
    },
    {
        name: 'TV',
        price: 900,
        quantity: 5
    },
    {
        name: 'laptop',
        price: 3000,
        quantity: 5
    },
    {
        name: 'TV',
        price: 300,
        quantity: 2
    },
    {
        name: 'tablet',
        price: 1100,
        quantity: 1
    },
    {
        name: 'TV',
        price: 900,
        quantity: 5
    },
    {
        name: 'smartphone',
        price: 900,
        quantity: 5
    }
  ];


let specPropFilter = function (arrayProduct) {
   
    let currentFilter = [];

    if (Array.isArray(arrayProduct) && arrayProduct.every(product => typeof product.name === 'string' && typeof product.price === 'number' && typeof product.quantity === 'number')) {

    currentFilter = arrayProduct.filter((obj, index) => arrayProduct.findIndex((item) => item.name === obj.name && item.price === obj.price && item.quantity === obj.quantity) === index);

    } 

    return currentFilter;
}


console.log('Advanced Array Filtering', customFilterUnique(arrayProduct, specPropFilter));


/* Task 2: Array Chunking

1. Create a function called `chunkArray` that takes an array and a chunk size as arguments. The `chunkArray` function should divide the array into smaller arrays, each containing elements of the specified chunk size. The function should return an array of arrays.

2. Optimize the `chunkArray` function to minimize memory usage while chunking the array.
*/

function chunkArray(arr, size) {

    var myArray = [];

    for(let i = 0; i < arr.length; i += size) {

      myArray.push(arr.slice(i, i+size));
      
    }
    return myArray;
  }

  console.log('Array Chunking', chunkArray (['potato', 'tomato', 'lemon', 'orange', 'cabbage', 'carot', 'onion', 'garlic', 'pepper'], 3));

/* Task 3: Array Shuffling

1. Create a function called `customShuffle` that takes an array as an argument and returns a new array with its elements randomly shuffled.

2. Implement the `customShuffle` function using an efficient shuffling algorithm to achieve uniform randomness.
*/

let customShuffle = (array) => { 

    for (let i = array.length - 1; i > 0; i--) { 

      const j = Math.floor(Math.random() * (i + 1)); 

      [array[i], array[j]] = [array[j], array[i]]; 
    } 

    return array; 
  }; 
    
  
  const myArray = ['potato', 'tomato', 'lemon', 'orange', 'cabbage', 'carot', 'onion', 'garlic', 'pepper']; 

  const shuffledMyArray = customShuffle(myArray); 
  
  console.log('custom array shuffling', shuffledMyArray); 


/* Task 4: Array Intersection and Union

1. Create a function called `getArrayIntersection` that takes two arrays as arguments and returns a new array containing the common elements between the two arrays.

2. Create a function called `getArrayUnion` that takes two arrays as arguments and returns a new array containing all unique elements from both arrays, without any duplicates.
*/

let firstArray = [1, 3, 5, 7, 8, 9];
let secondArray = [2, 3, 4, 5, 6, 9];
 
let getArrayIntersection = (firstArray, secondArray) => {

    let newArray = [];

    for (let i = 0; i < firstArray.length; i++) {

        for (let j = 0; j < secondArray.length; j++) {

            if (firstArray[i] === secondArray[j]) {

                newArray.push(firstArray[i]);
            }
        }
    }
    return newArray;
};
 
console.log('new array containing the common elements between the two arrays', getArrayIntersection(firstArray, secondArray));


let getArrayUnion = (firstArray, secondArray) => {

    return firstArray.concat(secondArray.filter(function (item) {

        return firstArray.indexOf(item) === -1;

    }));

}

console.log('new array containing all unique elements from both arrays', getArrayUnion(firstArray, secondArray));

/* Task 5: Array Performance Analysis

1. Implement a function called `measureArrayPerformance` that takes a function and an array as arguments. The `measureArrayPerformance` function should execute the provided function with the given array as input and measure the execution time.

2. Use the `measureArrayPerformance` function to compare the performance of built-in array methods (`map`, `filter`, `reduce`, etc.) against your custom array manipulation functions.
*/

let measureArrayPerformance = (fn, array) => {

    const startTime = new Date().getTime();

     fn(array);    

    const endTime = new Date().getTime();

    console.log((endTime - startTime), 'milliseconds');

}

measureArrayPerformance(customShuffle, myArray);


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

measureArrayPerformance(getAverageGrade, students);


