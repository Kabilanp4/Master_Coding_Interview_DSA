/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA && headB) return headB;
  if (headA && !headB) return headA;
  if (!headA && !headB) return null;
  let aCount = 0;
  let bCount = 0;
  let nodeA = headA;
  while (nodeA) {
    nodeA = nodeA.next;
    aCount++;
  }
  let nodeB = headB;
  while (nodeB) {
    nodeB = nodeB.next;
    bCount++;
  }
  let diff = Math.abs(aCount - bCount);
  let node1 = null;
  let node2 = null;
  if (aCount < bCount) {
    while (diff) {
      headB = headB.next;
      diff--;
    }
  } else {
    while (diff) {
      headA = headA.next;
      diff--;
    }
  }
  while (headA && headB) {
    if (headA === headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }
  return null;
};

// Using hashTable
var getIntersectionNode = function (headA, headB) {
  // put all nodes of headB inside a set
  let store = new Set();
  while (headB) {
    store.add(headB);
    headB = headB.next;
  }

  // check for  each element of headA if they are present in set
  while (headA) {
    if (store.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }

  return null;
};
