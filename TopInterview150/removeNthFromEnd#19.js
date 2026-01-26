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
// Double pass , but still O(n), okay ,but not that much optimal
var removeNthFromEnd = function (head, n) {
  if (!head || !head.next) return null;
  let totalLen = 0;
  let curr = head;
  while (curr) {
    totalLen++;
    curr = curr.next;
  }
  let curr1 = head;
  if (totalLen === n) {
    curr1 = curr1.next;
    return curr1;
  } else {
    let i = 1;
    while (i < totalLen - n) {
      curr1 = curr1.next;
      i++;
    }
    curr1.next = curr1?.next?.next;
  }
  console.log("totalLen", totalLen);
  console.log("curr1", curr1);
  return head;
};

// Single Pass using two pointer slow and fast pattern which is very optimal.
var removeNthFromEnd = function (head, n) {
  if (!head || !head.next) return null;
  // creating a dummy node to handle when we have to remove the head itselft..
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
