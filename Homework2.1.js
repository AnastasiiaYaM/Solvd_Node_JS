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

arr = [11,8,1,15,2,3,12,4,5,6,7,13,9,10,14];

// BubbleSort

function bubbleSort(arr){
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
       // console.log(arr, arr[j], arr[j+1]);
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;         
        }
      }
    }
    return arr;
  }

console.log('bubble sort', bubbleSort(arr)); // 0.139 seconds


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

console.log('mergeSort', mergeSort(arr)); // 0.139 seconds


