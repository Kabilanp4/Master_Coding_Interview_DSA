/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// Time - O(n) , Space - O(n)
var pairSum = function (head) {
  if (!head || !head.next) return head;
  let arr = [];
  let node = head;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  let left = 0;
  let right = arr.length - 1;
  let max = 0;
  while (left < right) {
    let sum = arr[left] + arr[right];
    max = Math.max(max, sum);
    left++;
    right--;
  }
  return max;
};

// Space O(1) is here
