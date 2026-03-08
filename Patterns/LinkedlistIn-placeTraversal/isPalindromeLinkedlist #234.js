/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let first = slow.next;
  let second = first.next;
  let tail = slow.next;
  tail.next = null;
  while (second) {
    let third = second.next;
    second.next = first;
    first = second;
    second = third;
  }
  slow.next = null;
  while (head && first) {
    if (head.val !== first.val) {
      return false;
    }
    head = head.next;
    first = first.next;
  }
  return true;
};
