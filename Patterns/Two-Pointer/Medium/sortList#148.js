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
var sortList = function (head) {
  if (!head || !head.next) return head;
  function getMiddleNode(head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  function getMergedList(left, right) {
    if (!left) return right;
    if (!right) return left;
    let result;
    if (left.val <= right.val) {
      result = left;
      result.next = getMergedList(left.next, right);
    } else {
      result = right;
      result.next = getMergedList(left, right.next);
    }
    return result;
  }
  let midNode = getMiddleNode(head);
  let nextOfMidNode = midNode.next;
  midNode.next = null;
  let left = sortList(head);
  let right = sortList(nextOfMidNode);
  return getMergedList(left, right);
};

//Should look at the constraints
