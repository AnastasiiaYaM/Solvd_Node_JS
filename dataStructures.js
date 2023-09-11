/* ## Homework Assignment: Data Structures and Algorithms in JavaScript

### Task

Your task is to demonstrate your knowledge of data structures (stack, queue, tree, graph, linked list) and implement algorithms to solve specific problems related to these data structures in JavaScript.

### Instructions

### Part 1: Data Structure Implementations

1. **Stack**: Implement a class for a stack data structure. Include methods for push, pop, and peek.
2. **Queue**: Implement a class for a queue data structure. Include methods for enqueue, dequeue, and peek.
3. **Binary Tree**: Implement a class for a binary tree data structure. Include methods for inserting nodes, searching for a node, and traversing the tree (e.g., in-order, pre-order, post-order).
4. **Graph**: Implement a class for a graph data structure. Include methods for adding vertices and edges, performing depth-first search (DFS), and breadth-first search (BFS).
5. **Linked List**: Implement a class for a singly linked list data structure. Include methods for inserting nodes, deleting nodes, and searching for a node.

### Part 2: Algorithmic Problems

1. **Min/Max Stack**: Implement a class for a stack that supports finding the minimum and maximum elements in constant time (O(1)). Include methods for push, pop, getMin, and getMax.
2. **Binary Search Tree**: Implement a function to determine if a binary tree is a binary search tree (BST). Provide an efficient algorithm that checks whether the tree satisfies the BST property.
3. **Graph Algorithms**: Implement algorithms to find the shortest path between two vertices in a graph using both Dijkstra's algorithm and Breadth-First Search (BFS).
4. **Linked List Cycle**: Implement a function to detect if a linked list has a cycle. Use Floyd's Cycle Detection Algorithm (Tortoise and Hare algorithm) to solve this problem efficiently.

### Part 3: Demonstration

1. **Usage Demonstration**: Create instances of your data structures and demonstrate their usage with sample data. Show how the algorithms you implemented can solve practical problems using these data structures.

### Part 4: Documentation

1. **Documentation**: Provide clear and concise comments and documentation for your code. Explain the purpose of each data structure, method, and algorithm. Describe how the algorithms work and their time complexity.

### Submission

Submit your JavaScript code along with detailed documentation and comments that explain your data structure implementations and algorithms. Ensure that your code is well-structured and adheres to best practices in data structures and algorithms.
*/

class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Stack {         // LIFO (Last In First Out) data structure type
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push (value){
    let node = new Node(value);
    if (!this.first){
        this.first = node;
        this.last = node;
    } else {
        let temp = this.first;
        this.first = node;
        this.first.next = temp;
    }
    return ++this.size;
  }
  pop (){
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last){
        this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
  peek() {                          // peek(): Get the top element of the stack 
    let node = new Node();                    
    return node[this.first-1];
  }
}

console.log("Creating Stack");
let myStack = new Stack();

console.log("Adding 1, 2, 3 to the stack");
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);

console.log('The top element of the stack');
myStack.peek();

console.log("Deleting from the stack");
myStack.pop(1);
console.log(myStack);
console.log('The top element of the stack');
myStack.peek();
console.log("Deleting from the stack");
myStack.pop(2);
console.log(myStack);
console.log('The top element of the stack');
myStack.peek();
console.log("Deleting from the stack");
myStack.pop(3);
console.log(myStack);

  
  class Queue {                  // FIFO (First In First Out) data structure type
    // Implement methods for enqueue, dequeue, peek...
  }
  
  class BinaryTree {
    // Implement methods for inserting nodes, searching, traversing...
  }
  
  class Graph {
    // Implement methods for adding vertices, edges, DFS, BFS...
  }
  
  

class LinkedList {
  constructor(){
    this.head = null;
    this.length = 0;
  }
  insert (position, value) {
    let node = new Node(value);

    if (position < 0 || position > this.length) { 
      return 'Incorrect value of position';
    }
    
    if (position === 0) { 
        node.next = this.head; 
        this.head = node;
    } else {
        let current = this.head;
        let prev = null;
        let index = 0;

        while (index < position) {
            prev = current;
            current = current.next;
            index++;
        }

        prev.next = node;
        node.next = current;
    }
    this.length++;
  }
  delete (position) {
    if (position < 0 || position > this.length) { 
      return 'Wrong position';
    }

    let current = this.head; 

    if (position === 0) {
        this.head = current.next;
    } else {
        let prev = null;
        let index = 0;

        while(index < position) {
            prev = current;
            current = current.next;
            index++;
        }

        prev.next = current.next; 
    }
    this.length--;
    return current.value;
  }
  search (position) {
    if (position < 0 || position > this.length) { 
        return 'Wrong position';
    }

    let current = this.head; 
    let index = 0; 

    while(index < position) {  
        current = current.next; 
        index++; 
    }
    return current.value;
  }
}

console.log("Creating Linked List");
let myList = new LinkedList();

myList.insert(0, 55);
myList.insert(1, 44);
myList.insert(2, 33);
myList.insert(3, 22);

console.log('My single linked list after 4 insertions looks like: ', myList);

myList.delete(1);

console.log('My single linked list after 1 deletion looks like: ', myList);

console.log('Single linked list, search ', myList.search(2));

function detectCycle (linkedList) {   // Floyd's Cycle Detection Algorithm (Tortoise and Hare algorithm)
  let slowPointer = linkedList;       // Tortoise
  let fastPointer = linkedList;       // Hare
  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer === fastPointer) {  
      return true;
    }
  }
  return false;
}

console.log('detectCycle(myList) function returns', detectCycle(myList));
  
  // Implement Min/Max Stack, Binary Search Tree, Graph Algorithms...
  // Demonstrate usage and provide documentation...
  
