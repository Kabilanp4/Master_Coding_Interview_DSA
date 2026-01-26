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
  if (!head || !head.next) return head;
  let totalLen = 1;
  function reverse(list) {
    let first = list;
    let second = first.next;
    let tail = list;
    while (second) {
      let third = second.next;
      second.next = first;
      first = second;
      second = third;
      totalLen++;
    }
    tail.next = null;
    return first;
  }

  function reverseStart(list) {
    let first = list;
    let second = first.next;
    let tail = list;
    let i = 1;
    while (second && i < k % totalLen) {
      let third = second.next;
      second.next = first;
      first = second;
      second = third;
      i++;
    }
    tail.next = second;
    return first;
  }

  function reverseEnd(list) {
    let slow = list;
    let itr = k % totalLen;
    while (itr - 1) {
      slow = slow.next;
      itr--;
    }
    console.log("slow", slow);
    let first = slow;
    let second = first.next;
    let end = slow;
    while (second) {
      let third = second.next;
      second.next = first;
      first = second;
      second = third;
    }
    end.next = first;
    return list;
  }
  let reversedList = reverse(head);
  let reversedStart = reverseStart(reversedList);
  let reversedEnd = reverseEnd(reversedStart);
  console.log("reversedList", reversedList);
  console.log("reversedStart", reversedStart);
  console.log("reversedEnd", reversedEnd);
  console.log("totalLen", totalLen);

  // let reversedStart = reverseStart(1,reversedList);
  // let reversedEnd = reverseEnd(reversedStart);
  // console.log("reversedEnd",reversedEnd);
  // return reversedEnd;
  // return reversedEnd;
};
