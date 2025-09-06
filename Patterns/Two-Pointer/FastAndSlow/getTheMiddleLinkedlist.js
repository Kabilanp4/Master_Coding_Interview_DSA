function getTheMiddle(head) {
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next; // one step
    fast = fast.next.next; // two steps
  }
  return slow;
}
const input = {
  value: 4,
  next: {
    value: 3,
    next: {
      value: 8,
      next: {
        value: 9,
        next: {
          value: 6,
          next: {
            value: 28,
            next: null,
          },
        },
      },
    },
  },
};
const middle = getTheMiddle(input);
console.log("Middle", middle);
