/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head || !head.next) return head;
  let beforeDummy = new ListNode(0);
  let afterDummy = new ListNode(0);
  let before = beforeDummy;
  let after = afterDummy;
  let curr = head;
  while (curr) {
    let nextNode = curr.next;
    curr.next = null;
    if (curr.val < x) {
      before.next = curr;
      before = before.next;
    } else {
      after.next = curr;
      after = after.next;
    }
    curr = nextNode;
  }
  before.next = afterDummy.next;
  return beforeDummy.next;
};
