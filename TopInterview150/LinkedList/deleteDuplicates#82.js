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
  let node = {
    val: null,
    next: head,
  };
  let curr = node;
  let prev = node;
  while (curr && curr.next) {
    if (curr?.val !== curr?.next?.val) {
      prev = curr;
      curr = curr?.next;
    } else {
      let currNew = curr;
      while (currNew.val === currNew.next.val) {
        currNew = currNew.next;
        if (!currNew.next) break;
      }
      curr = currNew.next;
      prev.next = curr;
    }
  }
  return node.next;
};
