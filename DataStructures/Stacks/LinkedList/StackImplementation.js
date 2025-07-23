class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null; //head
    this.bottom = null; //tail
    this.length = 0;
  }

  peek() {
    console.log("Peek", this.top.value);
    return this.top.value;
  }

  push(value) {
    const newNode = new Node(value);
    // let current = this.top;
    if (this.top === null) {
      console.log("No of times:");
      this.top = newNode;
      this.bottom = newNode;
    } else {
      //   this.top.next = newNode; //mistake
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    console.log("Push Values", this.top);
    return this.length;
  }
  printList() {
    let arr = [];
    let current = this.bottom;
    while (current.next !== null) {
      arr.push(current.value);
      current = current.next;
    }
    console.log("PrintListValues", arr);
  }
  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.length--;
    console.log("PoppedValue", poppedValue);
    return poppedValue;
  }

  isEmpty() {
    if (this.top === null) {
      console.log("true");
      return true;
    }
    console.log("false");
    return false;
  }
}

const myStack = new Stack();
myStack.push(4);
// myStack.push(5);
// myStack.push(8);
// myStack.push(10);
// myStack.push(20);
// myStack.peek();
myStack.pop();
myStack.isEmpty();
console.log("myStack", myStack);
// const node = new Node(5);
