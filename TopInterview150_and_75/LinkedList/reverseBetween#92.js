/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || !head.next) return head;
  function reverse(head1) {
    console.log("head1", head1);
    let first = head1;
    let tail = head1;
    let second = first.next;
    let j = left;
    while (second && j < right) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
      j++;
    }
    tail.next = second;
    return first;
  }

  let i = 1;
  let curr = head;
  while (i < left - 1) {
    curr = curr.next;
    i++;
  }
  if (left === 1) {
    curr = reverse(curr);
    return curr;
  } else {
    curr.next = reverse(curr.next);
  }
  console.log("curr", curr);
  return head;
};

// Optimized version below
