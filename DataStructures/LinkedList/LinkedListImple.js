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
    // return this.printList();
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
    leader.next = deleteNode.next;
    return this.printList();
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    //[1,2,3,4];
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    this.printList();
  }
  sort() {
    this.head = this.mergeSort(this.head);
    this.printList();
  }
  mergeSort(head) {
    if (!head || !head.next) return head; //base case
    // getting the middle node and split into two
    let middleNode = this.getMiddle(head); //Holding mid node referece
    let nextOfMiddle = middleNode.next;
    middleNode.next = null; // affecting the head becasue of the mid reference.
    console.log("head from mergeSort", head);
    let left = this.mergeSort(head);
    let right = this.mergeSort(nextOfMiddle);
    return this.sortedMerge(left, right);
  }
  sortedMerge(a, b) {
    if (!a) return b;
    if (!b) return a;
    let result;
    if (a.value <= b.value) {
      // 5< 6
      result = a; // result = {value:5, next: null}
      result.next = this.sortedMerge(a.next, b); // (null,{value:6, next:nulll})
    } else {
      result = b;
      result.next = this.sortedMerge(a, b.next);
    }
    return result; // result = {value: 5, next:null}
  }
  getMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next; //  Moves 1 step
      fast = fast.next.next; // Moves 2 steps
    }
    console.log("Slow", slow);
    return slow;
  }
}

const myLinkedList = new LinkedList(2);
myLinkedList.append(4);
myLinkedList.append(1);
myLinkedList.append(3);
myLinkedList.sort();

// myLinkedList.insert(1, 40);
// myLinkedList.insert(2, 2);

// myLinkedList.reverse();
// [1,10,16,88]

//linked list methods
// 1. append 2. prepend 3. insert 4.traverse 5. reverse 6.remove
