class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (val > currentNode.val) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new Node(val);
          return this.val;
        }
      } else if (val < currentNode.val) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = new Node(val);
          return this.val;
        }
      } else {
        return this.val;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
   
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  findIteratively(val) {
    
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return undefined;



    let currentNode = this.root;
    console.log(currentNode)
    console.log(currentNode.val)

    while(true) {
      if (currentNode.val === val) {
        return currentNode
      } else if (currentNode.val === val) {
        return currentNode
      } else if (currentNode.val < val) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

}

module.exports = BinarySearchTree;



// insert
// This function should insert a node in a binary tree.It should return the BinarySearchTree and should be solved using iteration.
// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// console.log(binarySearchTree.root.val) // 15
// console.log(binarySearchTree.root.right.val) // 20
// console.log(binarySearchTree.root.left.right.val) // 12

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12);
// console.log(binarySearchTree.root.val) // 15
// console.log(binarySearchTree.root.right.val) // 20
// console.log(binarySearchTree.root.left.right.val) // 12





// insertRecursively
// This function should insert a node in a binary tree.It should return the BinarySearchTree and should be solved using recursion.

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insertRecursively(15);
// binarySearchTree.root.value // 15
// binarySearchTree.root.left // null
// binarySearchTree.root.right // null

// var binarySearchTree = new BinarySearchTree();

// binarySearchTree.insertRecursively(15);
// binarySearchTree.insertRecursively(20);
// binarySearchTree.insertRecursively(10);
// binarySearchTree.insertRecursively(12);
// binarySearchTree.root.value // 15
// binarySearchTree.root.right.value // 20
// binarySearchTree.root.left.right.value // 12

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insertRecursively(15)
// binarySearchTree.insertRecursively(20)
// binarySearchTree.insertRecursively(10)
// binarySearchTree.insertRecursively(12);
// binarySearchTree.root.value // 15
// binarySearchTree.root.right.value // 20
// binarySearchTree.root.left.right.value // 12




// find
// This function should find a node in a binary tree.It should return the node if found, otherwise return undefined.This should be solved using iteration.

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12);
// var foundNode = binarySearchTree.findIteratively(20);
// console.log(foundNode.val) // 20
// console.log(foundNode.left) // null
// console.log(foundNode.right) // null

// var foundNode = binarySearchTree.findIteratively(20);
// console.log(foundNode.val)

// var binarySearchTree = new BinarySearchTree();

// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12);
// var foundNode = binarySearchTree.findIteratively(120);
// console.log(foundNode) // undefined






// findRecursively
// This function should find a node in a binary tree.It should return the node if found, otherwise return undefined.This should be solved using recursion.

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15)
binarySearchTree.insert(20)
binarySearchTree.insert(10)
binarySearchTree.insert(12);
var foundNode = binarySearchTree.findRecursively(20);
console.log(foundNode.val) // 20
console.log(foundNode.left) // null
console.log(foundNode.right) // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15)
binarySearchTree.insert(20)
binarySearchTree.insert(10)
binarySearchTree.insert(12);
var foundNode = binarySearchTree.findRecursively(120);
console.log(foundNode) // undefined



// dfsPreOrder
// This function should search through each node in the binary search tree using pre - order depth first search and return an array containing each node’s value.

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12)
// binarySearchTree.insert(1)
// binarySearchTree.insert(5)
// binarySearchTree.insert(50);
// binarySearchTree.dfsPreOrder() // [15, 10, 1, 5, 12, 20, 50]
// dfsInOrder
// This function should search through each node in the binary search tree using in -order depth first search and return an array containing each node’s value.

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12)
// binarySearchTree.insert(1)
// binarySearchTree.insert(5)
// binarySearchTree.insert(50);
// binarySearchTree.dfsInOrder() // [1, 5, 10, 12, 15, 20, 50]
// dfsPostOrder
// This function should search through each node in the binary search tree using post - order depth first search and return an array containing each node’s value.

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12)
// binarySearchTree.insert(1)
// binarySearchTree.insert(5)
// binarySearchTree.insert(50);
// binarySearchTree.dfsPostOrder() // [5, 1, 12, 10, 50, 20, 15]
// bfs
// This function should search through each node in the binary search tree using breadth first search and return an array containing each node’s value.

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15)
// binarySearchTree.insert(20)
// binarySearchTree.insert(10)
// binarySearchTree.insert(12)
// binarySearchTree.insert(1)
// binarySearchTree.insert(5)
// binarySearchTree.insert(50);
// binarySearchTree.bfs() // [15, 10, 20, 1, 12, 50, 5]