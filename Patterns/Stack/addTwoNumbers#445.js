/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1 || !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;
  let list1 = [];
  let list2 = [];
  //Build list1 stack
  let node1 = l1;
  while (node1) {
    list1.push(node1.val);
    node1 = node1.next;
  }
  //Build list2 stack
  let node2 = l2;
  while (node2) {
    list2.push(node2.val);
    node2 = node2.next;
  }
  let head = null;
  let i = list1.length;
  let j = list2.length;
  let carry = 0;
  while (i > 0 || j > 0 || carry) {
    let sum = carry;
    const a = i > 0 ? list1.pop() : 0;
    const b = j > 0 ? list2.pop() : 0;
    sum += a + b;
    carry = Math.floor(sum / 10);
    let newNode = new ListNode(sum % 10);
    newNode.next = head;
    head = newNode;
    i--;
    j--;
  }
  return head;
};
