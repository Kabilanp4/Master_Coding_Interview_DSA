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
var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  let oddList = new ListNode();
  let evenList = new ListNode();
  let oddNode = oddList;
  let evenNode = evenList;
  let count = 1;
  while (head) {
    if (count % 2 === 0) {
      evenNode.next = head;
      evenNode = evenNode.next;
    } else {
      oddNode.next = head;
      oddNode = oddNode.next;
    }
    count++;
    head = head.next;
  }
  evenNode.next = null;
  oddNode.next = evenList.next;
  head = oddList.next;
  return head;
};
