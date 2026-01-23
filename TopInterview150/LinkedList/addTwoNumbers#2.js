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
  let l1Str = "";
  let l2Str = "";
  while (l1) {
    l1Str += String(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    l2Str += String(l2.val);
    l2 = l2.next;
  }

  const result = String(Number(l1Str).reverse() + Number(l2Str).reverse());
  function buildList(len) {
    //base case
    const length = len - 1;
    const value = result[length];
    if (!value) return null;
    let node = {
      val: Number(value),
      next: null,
    };
    node.next = buildList(length);
    return node;
  }
  const finalList = buildList(result.length);
  return finalList;
};
