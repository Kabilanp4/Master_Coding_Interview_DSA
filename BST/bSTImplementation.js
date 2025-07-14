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
JSON.stringify(traverse(tree.root));
console.log("BST", tree);
