/* ## Bonus Homework Assignment: Implementing a Red-Black Tree

### Task

As a bonus challenge, you are tasked with implementing a Red-Black Tree data structure in JavaScript. Red-Black Trees are a type of self-balancing binary search tree. This exercise will deepen your understanding of tree structures and balancing algorithms.

### Instructions

1. **Red-Black Tree Implementation**: Create a class for a Red-Black Tree that includes methods for insertion, deletion, and searching. Implement the Red-Black Tree balancing rules to ensure that the tree remains balanced after each operation.
2. **Insertion**: Implement the insertion operation for the Red-Black Tree. Ensure that the tree maintains the Red-Black properties, including colorings and rotations as necessary.
3. **Deletion**: Implement the deletion operation for the Red-Black Tree. Handle cases for both removing nodes with no children, one child, and two children while preserving the Red-Black properties.
4. **Search**: Implement a method to search for a specific value in the Red-Black Tree. Ensure that the search operation is efficient and respects the tree's structure.

### Submission

Submit your JavaScript code for the Red-Black Tree implementation along with detailed comments and documentation explaining your implementation. Provide examples of inserting, deleting, and searching for values in the Red-Black Tree.
*/

const NodeColor = {
    RED: 'RED',
    BLACK: 'BLACK',
}
  
  class RBTNode {
    constructor(value, parent = null) {
      this.value = value
      this.left = null
      this.right = null
      this.parent = parent
      this.color = NodeColor.RED
    }
  }
  
class RedBlackTree {
    constructor() {
      this.root = null
    }
  
    insert(value) {                    // This method is used to insert a new value into the Red-Black Tree. The method starts by creating a new node and placing it in the correct position, like in a standard Binary Search Tree. After the node is inserted, the _insertFixup method is called to restore the Red-Black Tree properties.
      
        const insertHelper = (node) => {
            const currNode = node
            if (value < currNode.value) {
                if (currNode.left) {
                    insertHelper(currNode.left)
                } else {
                    currNode.left = new RBTNode(value)
                    currNode.left.parent = currNode
                    this._insertFixup(currNode.left)
                }
            } else if (value > currNode.value) {
                if (currNode.right) {
                    insertHelper(currNode.right)
                } else {
                    currNode.right = new RBTNode(value)
                    currNode.right.parent = currNode
                    this._insertFixup(currNode.right)
                }
            }
        }
   
        if (!this.root) {
            this.root = new RBTNode(value)
            this._insertFixup(this.root)
        } else {
            insertHelper(this.root)
        }
    }
  
    _insertFixup(node) {                  // This is a helper method used to ensure that the Red-Black Tree properties are maintained after an insertion operation. The method adjusts the color of nodes and performs rotations as needed until the tree is balanced and follows the Red-Black Tree rules.
      let currNode = node
      while (this._isRed(currNode.parent) && currNode.parent.parent) {
        const { parent } = currNode
        const grandparent = parent.parent
        if (parent === grandparent.left) {
            if (this._isRed(grandparent.right)) {
                this._flipColor(grandparent)
            } else {
                if (currNode === parent.right) {
                    this._leftRotation(parent)
                    currNode = parent
                }
                this._rightRotation(grandparent)
            }
        } else {
            if (this._isRed(grandparent.left)) {
                this._flipColor(grandparent)
                currNode = grandparent
            } else {
                if (currNode === parent.left) {
                    this._rightRotation(parent)
                    currNode = parent
                }
                this._leftRotation(grandparent)
            }
        }
        currNode = grandparent
      }
      this.root.color = NodeColor.BLACK
    }
  
    delete(value, node = this.root) {        // This method removes a node with a given value from the tree. It first finds the node using the search method, then removes it while maintaining the Red-Black Tree properties. After the node is deleted, the _deleteFixup method is called to restore the Red-Black Tree properties.
        const targetNode = this.search(value, node)
        if (!targetNode) {
            return false
        }
        if (!targetNode.left && !targetNode.right) {
            if (this._isRed(targetNode)) {
                this._replaceParent(targetNode, null)
            } else {
                this._deleteFixup(targetNode)
                this._replaceParent(targetNode, null)
            }
        } else if (!targetNode.left || !targetNode.right) {
            if (targetNode.left) {
                targetNode.left.color = NodeColor.BLACK
                targetNode.left.parent = targetNode.parent
                this._replaceParent(targetNode, targetNode.left)
            } else {
                targetNode.right.color = NodeColor.BLACK
                targetNode.right.parent = targetNode.parent
                this._replaceParent(targetNode, targetNode.right)
            }
        } else {
            const aux = this.findMin(targetNode.right)
            targetNode.value = aux.value
            this.delete(aux.value, targetNode.right)
        }
        return this.root
    }

    _deleteFixup(node) {               // This is a helper method used to ensure that the Red-Black Tree properties are maintained after a deletion operation. Similar to the _insertFixup method, it adjusts the color of nodes and performs rotations as needed until the tree is balanced and follows the Red-Black Tree rules.
        let currNode = node
        while (currNode !== this.root && !this._isRed(currNode)) {
            const { parent } = currNode
            let sibling
            if (currNode === parent.left) {
                sibling = parent.right
                if (this._isRed(sibling)) {
                this._leftRotation(parent)
                }
                else if (!this._isRed(sibling.left) && !this._isRed(sibling.right)) {
                    if (this._isRed(parent)) {
                        parent.color = NodeColor.BLACK
                        sibling.color = NodeColor.RED
                        break
                    }
                    sibling.color = NodeColor.RED
                    currNode = parent
                }
                else if (this._isRed(sibling.left) && !this._isRed(sibling.right)) {
                    this._rightRotation(sibling)
                }
                else {
                    this._leftRotation(parent)
                    parent.color = NodeColor.BLACK
                    sibling.right.color = NodeColor.BLACK
                    break
                }
            } else {
                sibling = parent.left
                if (this._isRed(sibling)) {
                    this._rightRotation(parent)
                } else if (!this._isRed(sibling.left) && !this._isRed(sibling.right)) {
                    if (this._isRed(parent)) {
                        parent.color = NodeColor.BLACK
                        sibling.color = NodeColor.RED
                        break
                    }
                    sibling.color = NodeColor.RED
                    currNode = parent
                } else if (this._isRed(sibling.right) && !this._isRed(sibling.left)) {
                    this._leftRotation(sibling)
                } else {
                    this._rightRotation(parent)
                    parent.color = NodeColor.BLACK
                    sibling.left.color = NodeColor.BLACK
                    break
                }
            }
        }
    }

    _replaceParent(currNode, newNode) {           // This helper method is used to replace the parent of a given node with a new node. It’s used during rotations and node deletions.
        const { parent } = currNode
        if (!parent) {
          this.root = newNode
        }
        else if (currNode === parent.left) {
          parent.left = newNode
        }
        else {
          parent.right = newNode
        }
    }
    
    _leftRotation(node) {                       // These are helper method used to perform left  rotation algorithms on the tree. It is used during the insert and delete operations to maintain the Red-Black Tree properties.
        const currNode = node.right
        node.right = currNode.left
        currNode.left = node
        currNode.color = node.color
        node.color = NodeColor.RED
        this._replaceParent(node, currNode)
        currNode.parent = node.parent
        node.parent = currNode
        if (node.right) {
          node.right.parent = node
        }
    }
    
    _rightRotation(node) {
        const currNode = node.left
        node.left = currNode.right
        currNode.right = node
        currNode.color = node.color
        node.color = NodeColor.RED
        this._replaceParent(node, currNode)
        currNode.parent = node.parent
        node.parent = currNode
        if (node.left) {
          node.left.parent = node
        }
    }

    _isRed(node) {                // Helper method to check the node color
        return node ? node.color === NodeColor.RED : false
    }
  
    _flipColor(node) {            // A helper method that changes the color of a node and its children. It is used during insert and delete operations to maintain the Red-Black Tree properties.
        node.color = NodeColor.RED
        node.left.color = NodeColor.BLACK
        node.right.color = NodeColor.BLACK
      }

    search(value, node = this.root) {             // This method finds a node in the tree that matches a given value. It’s used during the delete operation to find the node that needs to be removed.
      if (!node) {
        return false
      }
      if (value === node.value) {
        return node
      }
      if (value < node.value) {
        return this.search(value, node.left)
      }
      return this.search(value, node.right)
    }
}
  
console.log("Creating a Red-Black Tree");
  let myRBT = new RedBlackTree;

  console.log("Inserting 18, 20, 7, 17, 3, 25, 9, 1, 11 to the my Red-Black Tree");
  myRBT.insert(18);
  myRBT.insert(20);
  myRBT.insert(7);
  myRBT.insert(17);
  myRBT.insert(3);
  myRBT.insert(25);
  myRBT.insert(9);
  myRBT.insert(1);
  myRBT.insert(11);

  console.log(myRBT);

  console.log("Deleting 1, 20 from the my Red-Black Tree");
  myRBT.delete(1);
  myRBT.delete(20);

  console.log(myRBT);

  console.log("My Red-Black Tree Search '17 value': ", myRBT.search(17));
  