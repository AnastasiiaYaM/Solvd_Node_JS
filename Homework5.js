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


customFilterUnique(arrayProduct, specPropFilter);


/* Task 2: Array Chunking

1. Create a function called `chunkArray` that takes an array and a chunk size as arguments. The `chunkArray` function should divide the array into smaller arrays, each containing elements of the specified chunk size. The function should return an array of arrays.

2. Optimize the `chunkArray` function to minimize memory usage while chunking the array.
*/

function chunkArray(arr, size) {

    var myArray = [];

    for(var i = 0; i < arr.length; i += size) {

      myArray.push(arr.slice(i, i+size));
      
    }
    return myArray;
  }

chunkArray (['potato', 'tomato', 'lemon', 'orange', 'cabbage', 'carot', 'onion', 'garlic', 'pepper'], 3);

/* Task 3: Array Shuffling

1. Create a function called `customShuffle` that takes an array as an argument and returns a new array with its elements randomly shuffled.

2. Implement the `customShuffle` function using an efficient shuffling algorithm to achieve uniform randomness.
*/

const customShuffle = (array) => { 

    for (let i = array.length - 1; i > 0; i--) { 

      const j = Math.floor(Math.random() * (i + 1)); 

      [array[i], array[j]] = [array[j], array[i]]; 
    } 

    return array; 
  }; 
    
  
  const myArray = ['potato', 'tomato', 'lemon', 'orange', 'cabbage', 'carot', 'onion', 'garlic', 'pepper']; 

  const shuffledMyArray = customShuffle(myArray); 
  
  console.log(shuffledMyArray); 

/* Task 4: Array Intersection and Union

1. Create a function called `getArrayIntersection` that takes two arrays as arguments and returns a new array containing the common elements between the two arrays.

2. Create a function called `getArrayUnion` that takes two arrays as arguments and returns a new array containing all unique elements from both arrays, without any duplicates.
*/



/* Task 5: Array Performance Analysis

1. Implement a function called `measureArrayPerformance` that takes a function and an array as arguments. The `measureArrayPerformance` function should execute the provided function with the given array as input and measure the execution time.

2. Use the `measureArrayPerformance` function to compare the performance of built-in array methods (`map`, `filter`, `reduce`, etc.) against your custom array manipulation functions.
*/