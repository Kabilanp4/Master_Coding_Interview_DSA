class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (true) {
      if (node.value > current.value) {
        // console.log("--Hi--");
        if (current.right === null) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        if (current.left === null) {
          current.left = node;
          break;
        }
        current = current.left;
      }
      // console.log("current", this.root);
    }
  }
  //Using Divide and Conquer method , why because we are not traversing the entire nodes in the tree.
  lookup(value) {
    let current = this.root;
    if (value === current.value) {
      console.log("true");
      return true;
    }
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else if (value === current.value) {
        console.log("true");
        return true;
      }
    }
    console.log("false");
    return false;
  }

  // remove(value) {
  //   let current = this.root;
  //   //If it is a root node
  //   if (value === current.value) {
  //     current = null;
  //   }
  //   //Iterating
  //   while (current) {
  //     if (value < current.value) {
  //       current = current.left;
  //     } else if (value > current.value) {
  //       current = current.right;
  //     } else if (value === current.value) {
  //       let leftHoldingPointer = current.left;
  //       let rightHoldingPointer = current.right;
  //       // console.log("leftHoldingPointer", leftHoldingPointer);
  //       // console.log("rightHoldingPointer", rightHoldingPointer);
  //       let deleteNode = current;

  //       current = current.right;
  //       if (current.left !== null) {
  //         current = current.left;
  //       } else {
  //         // current=null;
  //         current.left = deleteNode.left; //valid
  //         current.right = deleteNode.right;
  //         deleteNode = current;
  //         console.log("Next root node", this.root);
  //       }
  //     }
  //   }
  // }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.lookup(6);
// tree.lookup(10);
tree.remove(4);
// JSON.stringify(traverse(tree.root));

// tree.remove(170);
// JSON.stringify(traverse(tree.root));
// console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  console.log("Tree", tree);
  return tree;
}
