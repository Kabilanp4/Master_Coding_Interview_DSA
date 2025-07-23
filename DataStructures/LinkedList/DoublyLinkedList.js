class DoublyLinkedList {
  constructor(val) {
    this.head = {
      value: val,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 0;
  }

  append(val) {
    const newNode = {
      value: val,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    // console.log("newNode Prev", newNode.prev);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // console.log("Doubly LinkedList", this.head);
  }
  prepend(val) {
    const newNode = {
      value: val,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  printList() {
    let arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    console.log("arr", arr);
  }
  insert(index, val) {
    if (index >= this.length) {
      return this.append(val);
    }
    const newNode = {
      value: val,
      next: null,
      prev: null,
    };

    const leader = this.traverseToIndex(index - 1);
    let pointerNode = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = pointerNode;
    pointerNode.prev = newNode;
    this.length++;
    // console.log(this);
    // this.printList();
  }
  traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next; //Get the current index node
      count++;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const deleteNode = leader.next;
    leader.next = deleteNode.next;
    deleteNode.next.prev = leader;
    this.length--;
  }
}

const myLinkedList = new DoublyLinkedList(5);
myLinkedList.append(12);
myLinkedList.prepend(10);
myLinkedList.insert(2, 99);
myLinkedList.insert(1, 76);
myLinkedList.remove(1);

myLinkedList.printList();

// console.log("myLinkedList", myLinkedList);
