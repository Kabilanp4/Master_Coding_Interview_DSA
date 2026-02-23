/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let node = head;
  let first = head;
  while (node) {
    if (node.val !== first.val) {
      first.next = node;
      first = first.next;
    }
    node = node.next;
  }
  first.next = null;
  return head;
};
