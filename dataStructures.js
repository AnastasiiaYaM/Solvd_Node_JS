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

// Stack

class Stack {         // LIFO (Last In First Out) data structure type
  constructor() {
    this.data = [];
  }
  push (value){
    this.data.push(value);
  }
  pop (){
    if (this.data.length === 0) {
      console.log("Underflow");
    } else {
      return this.data.pop();
    }
  }
  peek() {                          // peek(): Get the top element of the stack 
    return this.data[this.data.length - 1];
  }
}

console.log("Creating Stack");
let myStack = new Stack();

console.log("Adding 1, 2, 3 to the stack");
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack);

console.log('The top element of the stack ', myStack.peek());

console.log("Deleting from the stack");
myStack.pop(1);

console.log(myStack);

console.log('The top element of the stack ', myStack.peek());

console.log("Deleting from the stack");
myStack.pop(2);

console.log("Stack after adding items: ");
console.log(myStack);

console.log('The top element of the stack: ', myStack.peek());

console.log("Deleting from the stack");
myStack.pop(3);

console.log(myStack);

console.log('The top element of the stack ', myStack.peek());

console.log("Deleting from the stack");
myStack.pop(4);

// Queue

  class Queue {                  // FIFO (First In First Out) data structure type
    constructor() {
      this.data = {};
      this.headIndex = 0;
      this.tailIndex = 0;
    }
    enqueue(el) {
      this.data[this.tailIndex] = el;
      this.tailIndex++;
    }
    dequeue() {
      let removedEl = this.data[this.headIndex];
      delete this.data[this.headIndex];
      this.headIndex++;
      return removedEl;
    }
    peek() {
      let peekEl = this.data[this.headIndex];
      return peekEl;
    }
  }
  
  console.log("Creating Queue");
  let myQueue = new Queue();

  console.log("Adding 1, 2, 3 to the queue");
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
    
  console.log("Queue after adding elements:");
  console.log(myQueue);
  
  console.log("1st removing from the queue");
  myQueue.dequeue();
  
  console.log("Queue after removing an element:");
  console.log(myQueue);
  
  console.log("The front element of the queue is");
  console.log(myQueue.peek());


// Binary Tree

  class Node {
    constructor(value){
        this.value = value;
        this.next = null;            // for Linked List
        this.left = null;
        this.right = null;
    }
  }

  class BinaryTree {
    constructor(){
      this.root = null;
    }
    insert (value){
      let newNode = new Node(value);
      if (this.root === null) {
          this.root = newNode;
          return this;
      }
      let current = this.root;
      while (true) {
          if (value === current.value) {
            return undefined;
          }
          if (value < current.value) {
              if (current.left === null) {
                  current.left = newNode;
                  return this;
              } else {
              current = current.left;
              }
          } else {
              if (current.right === null) {
                  current.right = newNode;
                  return this;
              } else {
              current = current.right;
              }
          }
      }
    }
    search (value){
      if (this.root === null) {
        return false;
      }
      let current = this.root,
          found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              found = true;
          }
      }
      if(!found) return undefined;
      return current;
    }
    inorder () {
      let data = [];
      function traverse(node){
          if (node.left) {
            traverse(node.left);
          }
          data.push(node.value);
          if (node.right) {
            traverse(node.right);
          }
      }
      traverse(this.root);
      return data;
    }
    preorder () {
      let data = [];
      function traverse(node){
          data.push(node.value);
          if (node.left) {
            traverse(node.left);
          }
          if (node.right) {
            traverse(node.right);
          }
      }
      traverse(this.root);
      return data;
    }
    postorder () {
      let data = [];
      function traverse(node){
          if (node.left) {
            traverse(node.left);
          }
          if (node.right) {
            traverse(node.right);
          }
          data.push(node.value);
      }
      traverse(this.root);
      return data;
    }
  }

  console.log("Creating Binary Tree");
  let myBinaryTree = new BinaryTree;

  console.log("Inserting 18, 20, 7, 17, 3, 25, 9, 1, 11 to the Binary Tree");
  myBinaryTree.insert(18);
  myBinaryTree.insert(20);
  myBinaryTree.insert(7);
  myBinaryTree.insert(17);
  myBinaryTree.insert(3);
  myBinaryTree.insert(25);
  myBinaryTree.insert(9);
  myBinaryTree.insert(1);
  myBinaryTree.insert(11);

  console.log(myBinaryTree);

  const inorderBT = myBinaryTree.inorder();
  console.log('in-order Binary Tree: ', inorderBT);

  const preorderBT = myBinaryTree.preorder();
  console.log('pre-order Binary Tree: ', preorderBT);

  const postorderBT = myBinaryTree.postorder();
  console.log('post-order Binary Tree: ', postorderBT);


// Graph

  class Graph {
    constructor(){
      this.adjacencyList = {};
  }
  addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1,v2){
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
  }
  depthFirstSearch (start){
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while(stack.length){
        currentVertex = stack.pop();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(neighbor => {
           if(!visited[neighbor]){
               visited[neighbor] = true;
               stack.push(neighbor)
           } 
        });
    }
    return result;
  }
  breadthFirstSearch (start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length){
        currentVertex = queue.shift();
        result.push(currentVertex);
       

        this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return result;
  }
}

console.log("Creating Graph");
let myGraph = new Graph;

console.log("Adding 5 vertex");

myGraph.addVertex("Kyiv");
myGraph.addVertex("Chernivtsi");
myGraph.addVertex("Kharkiv");
myGraph.addVertex("Odesa");
myGraph.addVertex("Lviv");

console.log("Adding 8 edges");

myGraph.addEdge("Kharkiv", "Kyiv");
myGraph.addEdge("Kyiv", "Lviv");
myGraph.addEdge("Lviv", "Chernivtsi");
myGraph.addEdge("Chernivtsi", "Kharkiv");
myGraph.addEdge("Kharkiv", "Lviv");
myGraph.addEdge("Lviv", "Odesa");
myGraph.addEdge("Odesa", "Kharkiv");
myGraph.addEdge("Odesa", "Chernivtsi");

console.log("My Graph: ", myGraph);

console.log("Kharkiv DFS: ", myGraph.depthFirstSearch("Kharkiv"));

console.log("Kharkiv BFS: ", myGraph.breadthFirstSearch("Kharkiv"));

// Linked List

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


// Min/Max Stack

class MinStack {                                
  constructor() {
    this.data = [];
    this.minEl;             
  }
  push(el) {
    if (this.data.length === 0) {
        this.minEl = el;
        this.data.unshift(el);
        console.log("Number Inserted: ", el);
        return;
    }
    else if (el < this.minEl) {
        this.data.unshift(2 * el - this.minEl);
        this.minEl = el;
    }
    else {
        this.data.unshift(el);
    }
    console.log("Number Inserted: ", el);
  }
  pop() {
    if (this.data.length === 0) {
        console.log("Stack is empty ");
        return;
    }
    console.log("Top Most Element Removed: ");
    let top = this.data[0]; 
    this.data.shift();
    if (top < this.minEl) {
        console.log(this.minEl);
        this.minEl = (2 * this.minEl) - top;
    }
    else {
        console.log(top);
    }
  }
  getMin() {
    if (this.data.length === 0){
        console.log("Stack is empty");
    } else {
        console.log("Minimum Element in the stack is: ", this.minEl);
    }  
  }  
};

console.log("Creating New Stack, Min");
let myMinStack = new MinStack;

myMinStack.push(2);
myMinStack.push(8);
myMinStack.getMin();
myMinStack.push(5);
myMinStack.push(1);
myMinStack.getMin();
myMinStack.pop();
myMinStack.getMin();

class MaxStack {                                
  constructor() {
    this.data = [];
    this.maxEl;             
  }
  push(el) {
    if (this.data.length === 0) {
        this.maxEl = el;
        this.data.push(el);
        console.log("Number Inserted: ", el);
        return;
    }
    else if (el > this.maxEl) {
        this.data.push(2 * el - this.maxEl);
        this.maxEl = el;
    }
    else {
        this.data.push(el);
    }
    console.log("Number Inserted: ", el);
  }
  pop() {
    if (this.data.length === 0) {
        console.log("Stack is empty ");
        return;
    }
    console.log("Top Most Element Removed: ");
    let top = this.data[this.data-1]; 
    this.data.pop();
    if (top > this.maxEl) {
        console.log(this.maxEl);
        this.maxEl = (2 * this.maxEl) - top;
    }
    else {
        console.log(top);
    }
  }
  getMax() {
    if (this.data.length === 0){
        console.log("Stack is empty");
    } else {
        console.log("Maximum Element in the stack is: ", this.maxEl);
    }  
  }  
};

console.log("Creating New Stack, Max");

let myMaxStack = new MaxStack;

myMaxStack.push(2);
myMaxStack.push(4);
myMaxStack.getMax();
myMaxStack.push(5);
myMaxStack.push(1);
myMaxStack.getMax();
myMaxStack.pop();
myMaxStack.getMax();


// Binary Search Tree checking

function isValidBST (root) {   
  if (!root) {
      return true;
  }
  return dfs(root, -Infinity, Infinity);    // Depth First Search - Pre-order Traversing
};

const dfs = (node, min, max) => {
  if (node.val <= min || node.val >= max) {
      return false;
  }
  if (node.left) {
      if (!dfs(node.left, min, node.val)) {
          return false;
      }
  }
  if (node.right) {
      if (!dfs(node.right, node.val, max)) {
          return false;
      }
  }
  return true;
}

let valBT = isValidBST(myBinaryTree);
console.log('is valid BST ', valBT);

// Graph Algorithms 

class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex (vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge (vertex1,vertex2, weight) {
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    dijkstra (start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] 
        let smallest;
       
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }
}

console.log("Creating Weighted Graph");
let myWeightGraph = new WeightedGraph()

myWeightGraph.addVertex("Kyiv");
myWeightGraph.addVertex("Chernivtsi");
myWeightGraph.addVertex("Kharkiv");
myWeightGraph.addVertex("Odesa");
myWeightGraph.addVertex("Lviv");

console.log("Adding 8 edges");
myWeightGraph.addEdge("Kharkiv", "Kyiv", 1);
myWeightGraph.addEdge("Kyiv", "Lviv", 6);
myWeightGraph.addEdge("Lviv", "Chernivtsi", 2);
myWeightGraph.addEdge("Chernivtsi", "Kharkiv", 8);
myWeightGraph.addEdge("Kharkiv", "Lviv", 7);
myWeightGraph.addEdge("Lviv", "Odesa", 5);
myWeightGraph.addEdge("Odesa", "Kharkiv", 3);
myWeightGraph.addEdge("Odesa", "Chernivtsi", 4);

console.log("The shortest path between 'Chernivtsi', 'Odesa' using Dijkstra's algorithm: ", myWeightGraph.dijkstra("Chernivtsi", "Odesa"));
console.log("The shortest path between 'Chernivtsi', 'Kyiv' using Dijkstra's algorithm: ", myWeightGraph.dijkstra("Chernivtsi", "Kyiv"));
console.log("The shortest path between 'Chernivtsi', 'Kharkiv' using Dijkstra's algorithm: ", myWeightGraph.dijkstra("Chernivtsi", "Kharkiv"));

//Linked List Cycle

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
  
 
