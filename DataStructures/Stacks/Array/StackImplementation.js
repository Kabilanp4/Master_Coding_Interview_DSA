class Stack {
  constructor() {
    this.arr = [];
    this.length = 0;
  }

  peek() {
    const peekElement = this.arr[this.length - 1];
    console.log("peekElement", peekElement);
    return peekElement;
  }

  push(value) {
    this.arr[this.length] = value;
    this.length++;
    console.log("arr", this.arr);
    return this.length;
  }
  pop() {
    const lastElement = this.arr[this.length - 1];
    delete this.arr[this.length - 1];
    this.length--;
    console.log("lastElement", lastElement);
    console.log("Array after pop operation", this.arr);
    return lastElement;
  }

  isEmpty() {
    console.log("length", this.arr.length);
    if (this.length === 0) {
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
myStack.pop();
myStack.isEmpty();

// myStack.push(10);
// myStack.push(20);
// myStack.peek();

// const node = new Node(5);
