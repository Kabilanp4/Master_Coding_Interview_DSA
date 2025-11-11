/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head?.next) return false;
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast=fast.next.next;
        if(slow === fast) return true;
    }
    return false;
};

// Important note

//When you check for cycle, slow moves 1 step and fast moves two steps. At some point of time
//if slow meets the same reference of the fast then it is a cycle(Infinite loop);