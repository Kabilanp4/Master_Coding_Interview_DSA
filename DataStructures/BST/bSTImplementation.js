class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null; //pointer
  }

  insert(value) {
    if (!value) return "value should not be empty!";
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let newRoot = this.root;
    while (newRoot !== null) {
      if (newRoot.value < value) {
        if (newRoot.right === null) {
          newRoot.right = node;
          return;
        } else {
          newRoot = newRoot.right;
        }
      } else {
        if (newRoot.left === null) {
          newRoot.left = node;
          return;
        } else {
          newRoot = newRoot.left;
        }
      }
    }
  }

  //Look up
  search(value) {
    if (!this.root) return "Tree is empty";
    let rootNode = this.root;
    while (rootNode !== null) {
      if (rootNode.value === value) {
        console.log("Is value available: ", true);
        return true;
      } else if (rootNode.value < value) {
        rootNode = rootNode.right;
      } else {
        rootNode = rootNode.left;
      }
    }
    console.log("Value is not available.");
    return false;
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchRecursive(queue, list);
  }

  DFSInorder() {
    return traverseInorder(this.root, []);
  }
  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
}

function traverseInorder(node, list) {
  if (node.left) {
    traverseInorder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInorder(node.right, list);
  }
  return list;
}
function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}
function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  console.log("travesed values", tree);
  return tree;
}

const tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.search(4);
// JSON.stringify(traverse(tree.root));
// console.log("BST", tree);
//const BFSList = tree.breadthFirstSearch();
//const BFSRList = tree.breadthFirstSearchRecursive([tree.root], []);
//const DFSPreOrder = tree.DFSInorder();
//const DFSPreOrder = tree.DFSPreOrder();
const DFSPostOrder = tree.DFSPostOrder();
console.log("DFSPostOrder list ", DFSPostOrder);

//BFS takes more memory space.
// DFS
//  1.Inorder
//  2.PreOrder
//  3.PostOrder
