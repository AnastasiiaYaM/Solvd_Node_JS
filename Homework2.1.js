/* Homework Task: Analyzing Sorting Algorithm Performance

### Task

Your task is to analyze the performance of three sorting algorithms: QuickSort, BubbleSort, and Merge Sort. You will determine the array length at which QuickSort and Merge Sort start to outperform BubbleSort consistently. You are required to implement the sorting algorithms on your own.

### Instructions

1. Implement the QuickSort, BubbleSort, and Merge Sort algorithms from scratch.
2. Create three types of arrays for testing the sorting algorithms:
    - **Sorted Array:** An array with elements in ascending order.
    - **Sorted Backward Array:** An array with elements in descending order.
    - **Random Array:** An array with elements placed randomly.
3. Start with arrays containing 2 elements and gradually increase the number of elements.
4. Measure the execution time of each sorting algorithm for each type of array and different array lengths.
5. Determine the length of the array at which QuickSort and Merge Sort start to consistently outperform BubbleSort. Record these lengths.
6. Run the sorting tests multiple times using different random placements of elements to ensure consistent results.
7. Once you've found the results, run the tests for a few more array lengths to observe how the time complexity of BubbleSort compares to QuickSort and Merge Sort.

### Submission

Prepare a report that includes:

- Your implementations of QuickSort, BubbleSort, and Merge Sort.
- The process you followed to determine the lengths at which QuickSort and Merge Sort become faster than BubbleSort.
- A table or graph showing the array length and execution time for each sorting algorithm.
- Your conclusions and observations about the performance of the three sorting algorithms.

### Example

For example, your report might include:

```
Results for Sorting Algorithm Performance Analysis

Array Length | QuickSort Time | BubbleSort Time | Merge Sort Time
---------------------------------------------------------------
2            | 0.002 ms       | 0.004 ms       | 0.003 ms
5            | 0.005 ms       | 0.020 ms       | 0.008 ms
10           | 0.010 ms       | 0.100 ms       | 0.015 ms
...

```

### Bonus

Analyze and explain why QuickSort and Merge Sort are generally faster than BubbleSort, considering the time complexity of all three algorithms.
*/


// BubbleSort

function bubbleSort(arr){
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
       // console.log(arr, arr[j], arr[j+1]);
        if(arr[j] > arr[j+1]){                   // (arr[j] < arr[j+1]) - descending order
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;         
        }
      }
    }
    return arr;
  }


// MergeSort

function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
      if(arr2[j] > arr1[i]){
          results.push(arr1[i]);
          i++;
      } else {
          results.push(arr2[j])
          j++;
      }
  }
  while(i < arr1.length) {
      results.push(arr1[i])
      i++;
  }
  while(j < arr2.length) {
      results.push(arr2[j])
      j++;
  }
  return results;
}

function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}


// QuickSort

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) 
      
        quickSort(arr,left,pivotIndex-1);
        
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 

// Arrays

const num = 100;
const arr = Array.from({length: num}, (_, index) => index + 1);

// console.log(arr);


// Sorted Array

let arr1Lenght2 = [1,  2];

let arr1Lenght5 = [1,  2,  3,  4,  5];

let arr1Lenght10 = [1,  2,  3,  4,  5,  6,  7,  8,  9, 10];

let arr1Lenght15 = [1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15];

let arr1Lenght25 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

let arr1Lenght50 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

let arr1Lenght100 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

// Sorted Backward Array

let arr2Lenght2 = [15, 14];

let arr2Lenght5 = [15, 14, 13, 12, 11];

let arr2Lenght10 = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6];

let arr2Lenght15 = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let arr2Lenght25 = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let arr2Lenght50 = [50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let arr2Lenght100 = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// Random Array

let arr3Lenght2 = arr1Lenght2.sort(() => Math.random() - 0.5);

let arr3Lenght5 = arr1Lenght5.sort(() => Math.random() - 0.5);

let arr3Lenght10 = arr1Lenght10.sort(() => Math.random() - 0.5);

let arr3Lenght15 = arr1Lenght15.sort(() => Math.random() - 0.5);

let arr3Lenght25 = arr1Lenght25.sort(() => Math.random() - 0.5);

let arr3Lenght50 = arr1Lenght50.sort(() => Math.random() - 0.5);

let arr3Lenght100 = arr1Lenght100.sort(() => Math.random() - 0.5);

// console.log(arr3Lenght15);


// Measure the execution time

let t1 = performance.now();

// bubbleSort(arr1Lenght2);
// bubbleSort(arr1Lenght5);
// bubbleSort(arr1Lenght10);
// bubbleSort(arr1Lenght15);
// bubbleSort(arr1Lenght25);
// bubbleSort(arr1Lenght50);
// bubbleSort(arr1Lenght100);


// bubbleSort(arr2Lenght2);
// bubbleSort(arr2Lenght5);
// bubbleSort(arr2Lenght10);
// bubbleSort(arr2Lenght15);
// bubbleSort(arr2Lenght25);
// bubbleSort(arr2Lenght50);
// bubbleSort(arr2Lenght100);

// bubbleSort(arr3Lenght2);
// bubbleSort(arr3Lenght5);
// bubbleSort(arr3Lenght10);
// bubbleSort(arr3Lenght15);
// bubbleSort(arr3Lenght25);
// bubbleSort(arr3Lenght50);
// bubbleSort(arr3Lenght100);

//

mergeSort(arr1Lenght2);
mergeSort(arr1Lenght5);
mergeSort(arr1Lenght10);
mergeSort(arr1Lenght15);

mergeSort(arr2Lenght2);
mergeSort(arr2Lenght5);
mergeSort(arr2Lenght10);
mergeSort(arr2Lenght15);

mergeSort(arr3Lenght2);
mergeSort(arr3Lenght5);
mergeSort(arr3Lenght10);
mergeSort(arr3Lenght15);

//

quickSort(arr1Lenght2);
quickSort(arr1Lenght5);
quickSort(arr1Lenght10);
quickSort(arr1Lenght15);

quickSort(arr2Lenght2);
quickSort(arr2Lenght5);
quickSort(arr2Lenght10);
quickSort(arr2Lenght15);

quickSort(arr3Lenght2);
quickSort(arr3Lenght5);
quickSort(arr3Lenght10);
quickSort(arr3Lenght15);

let t2 = performance.now();
console.log(`Time Elapsed: ${t2-t1} ms`);

/* Report

Array Length | BubbleSort Time | Merge Sort Time | QuickSort Time
---------------------------------------------------------------
2            | 0 ms            | 0.004 ms        | 0.003 ms
5            | 0 ms            | 0.020 ms        | 0.008 ms
10           | 0.100 ms        | 0.100 ms        | 0.015 ms
15           | 0.100 ms        | 0.100 ms        | 0.015 ms
25           | 0.100 ms        | 0.100 ms        | 0.015 ms
50           | 0.200 ms        | 0.100 ms        | 0.015 ms
100          | 0.500 ms        | 0.100 ms        | 0.015 ms

*/

/* Bonus

Analyze and explain why QuickSort and Merge Sort are generally faster than BubbleSort, considering the time complexity of all three algorithms.

*/
