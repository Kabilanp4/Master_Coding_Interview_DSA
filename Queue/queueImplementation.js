class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    if (this.first === null) {
      return null;
    }
    console.log(this.first.value);
    return this.first.value;
  }
  printList() {
    let arr = [];
    let current = this.first;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    console.log("arr Values", arr);
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this.printList();
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    return holdingPointer;
  }
  isEmpty() {
    if (this.first === null) return true;
    return false;
  }
}

const myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.enqueue(20);
myQueue.dequeue();
myQueue.peek();
myQueue.dequeue();
//Joy
//Matt
//Pavel
//Samir
