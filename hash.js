/* Hash Functions and Hash Tables
### Task

Your task is to explore the concepts of hash functions and hash tables, and to implement a hash table with a custom hash function in JavaScript. This assignment will test your understanding of hash functions, collision resolution, and the practical application of hash tables.

### Instructions

### Part 1: Understanding Hash Functions

1. **Research**: Begin by researching and understanding what hash functions are, how they work, and their applications in computer science and data storage.

### Part 2: Implementing a Custom Hash Function

1. **Custom Hash Function**: Implement a custom hash function in JavaScript. Your hash function should take a string as input and produce a hash code (an integer) as output. Be creative, but ensure that your function distributes values uniformly.
2. **Collision Handling**: Implement a collision resolution strategy. You can choose from methods like separate chaining (using linked lists), open addressing (linear probing, quadratic probing), or any other technique you prefer.

### Part 3: Building a Hash Table

1. **Hash Table Class**: Create a JavaScript class for a hash table that uses your custom hash function. Include methods for inserting key-value pairs, retrieving values by key, and deleting key-value pairs.
2. **Testing**: Create test cases to ensure that your hash table and custom hash function work correctly. Test scenarios should include inserting, retrieving, and deleting values, as well as handling collisions gracefully.

### Part 4: Documentation and Analysis

1. **Documentation**: Provide clear and concise comments and documentation for your code. Explain how your custom hash function and hash table class work. 
2. **Analysis**: Write a brief analysis of the performance of your custom hash function and hash table. Discuss the time complexity of key operations (insertion, retrieval, deletion) and any trade-offs you made in your implementation.

### Submission

Submit your JavaScript code for the custom hash function and hash table along with your documentation and analysis. Include test cases that demonstrate the correctness and efficiency of your implementation.

### Bonus Challenge

For an extra challenge, consider implementing additional features for your hash table, such as resizing the table dynamically to maintain an efficient load factor, or implementing a method to iterate through all key-value pairs in the hash table.
*/

class CustomHashTable {
    constructor() {
        this.table = new Array(100);
        this.size = 0;
    }
  
    _hash(key) {                                     // the method is named using _ to indicate that it's a private method
        let hash = 0;
        if (key.length === 0) return hash;
        for (let i = 0; i < key.length; i++) {
          hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
  
    insert(key, value) {                            // set()
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
              }
            }
            this.table[index].push([key, value]);
          } else {
            this.table[index] = [];
            this.table[index].push([key, value]);
          }
        this.size++;
    }
  
    get(key) {
        const target = this._hash(key);
        if (this.table[target]) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[target][i][0] === key) {
                    return this.table[target][i][1];
                }
            }
        }
        return undefined;
    }
  
    delete(key) {
        const index = this._hash(key);
        if (this.table[index] && this.table[index].length) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        } else {
            return false;
        }
    }
}

  const myHashTable = new CustomHashTable;
  myHashTable.insert("Anna", 500);
  myHashTable.insert("Petr", 600);
  myHashTable.insert("Vadym", 10000);
  myHashTable.insert("Maya", 50000);
  myHashTable.insert("Volodymyr", 7000);
  myHashTable.insert("Olena", 5000);
  myHashTable.insert("Alina", 3000);
  myHashTable.insert("Viktor", 4000);
  myHashTable.insert("Abcdef", 4000);
  myHashTable.insert("Bcdefa", 400);
  myHashTable.insert("Cdefab", 40);

  console.log('myHashTable after 11 insertion', myHashTable);

  console.log(myHashTable.get("Olena"));
  console.log(myHashTable.get("Vadym"));
  console.log(myHashTable.get("Abcdef"));

  console.log(myHashTable.delete("Alina"));

  console.log('myHashTable after deleting "Alina"', myHashTable);









  