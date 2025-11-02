/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return head;
  let node = {
    val: null,
    next: head,
  };
  let slow = node;
  let fast = node;

  while (n) {
    fast = fast.next;
    n--;
  }
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return node.next;
};

const list = {
  val: 1,
  next: {
    val: 2,
    next: null,
  },
};
const head = removeNthFromEnd(list, 2);
console.log("head", head);
