// Working code but zero readability and maintanability.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  // Edge case
  if (!head || !head.next || !k) return head;
  function reverse(start, end, list, sec) {
    let first = list;
    let second = first.next;
    let tail = list;
    let i = start;
    while (second && i < end) {
      let third = second.next;
      second.next = first;
      first = second;
      second = third;
      i++;
    }
    if (sec === "all") {
      tail.next = null;
    }
    if (sec === "start") {
      tail.next = second;
    }
    return first;
  }
  function reverseEnd(start, end, list) {
    let slow = list;
    let itr = start - 1;
    while (itr && slow) {
      slow = slow.next;
      itr--;
    }
    if (slow && slow.next) {
      let reversed = reverse(start, end, slow.next, "all");
      slow.next = reversed;
    }
    return list;
  }

  let totalLen = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    totalLen++;
  }
  let rotateCount = k % totalLen;
  if (rotateCount === 0) return head;
  let reversed = reverse(1, totalLen, head, "all");
  let reversedStart = reverse(1, rotateCount, reversed, "start");
  let reversedEnd = reverseEnd(rotateCount, totalLen, reversedStart);
  return reversedEnd;
};

//Optimal and best solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;

  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }

  k = k % length;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  fast.next = head;
  head = slow.next;
  slow.next = null;

  return head;
};
