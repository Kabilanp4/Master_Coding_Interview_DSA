class LinkedList {
  constructor(val) {
    this.head = {
      value: val,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(val) {
    let newNode = {
      value: val,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // console.log("headValue", this.head);
  }
  prepend(val) {
    const newNode = {
      value: val,
      next: {},
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  printList() {
    const arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    console.log("Total List values: ", arr);
  }
  insert(index, val) {
    if (index >= this.length) {
      return this.append(val);
    }
    const newNode = {
      value: val,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const pointerNode = leader.next;
    leader.next = newNode;
    newNode.next = pointerNode;
    this.length++;
    return this.printList();
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
    let leader = this.traverseToIndex(index - 1); //6
    let deleteNode = leader.next;
    console.log("deleteNode", deleteNode);
    leader.next = deleteNode.next;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(5);
myLinkedList.append(6);
myLinkedList.append(8);

myLinkedList.insert(1, 40);
myLinkedList.insert(2, 2);
myLinkedList.remove(2);
