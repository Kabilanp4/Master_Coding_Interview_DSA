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
// Brute force and the limitations are there, not optimal.
// var addTwoNumbers = function (l1, l2) {
//   let l1Arr = [];
//   let l2Arr = [];
//   while (l1) {
//     l1Arr.push(l1.val);
//     l1 = l1.next;
//   } // O(n)
//   while (l2) {
//     l2Arr.push(l2.val);
//     l2 = l2.next;
//   } //O(n)

//   const result =
//     Number(l1Arr.reverse().join("")) + Number(l2Arr.reverse().join(""));
//   const resultStr = String(result);
//   console.log("resultStr", resultStr);
//   function buildList(len) {
//     //base case
//     const length = len - 1;
//     const value = resultStr[length];
//     if (!value) return null;
//     let node = {
//       val: Number(value),
//       next: null,
//     };
//     node.next = buildList(length);
//     return node;
//   }
//   const finalList = buildList(resultStr.length);
//   return finalList;
// };

// Optimal code,
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
  function add(l1, l2, carry) {
    if (!l1 && !l2 && carry === 0) return null;
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    let mod = sum % 10; //0
    carry = Math.floor(sum / 10);
    let node = {
      val: mod,
      next: null,
    };
    let first = l1 ? l1.next : null;
    let second = l2 ? l2.next : null;
    node.next = add(first, second, carry);
    return node;
  }
  const list = add(l1, l2, 0);
  return list;
};
