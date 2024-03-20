/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let stack = [];
  let stack2 = [];
  let current = list1;
  let current2 = list2;
  while (current) {
    stack.push(current.val);
    current = current.next;
  }
  while (current2) {
    stack2.push(current2.val);
    current2 = current2.next;
  }
  let firstNode = new ListNode(0);
  current = firstNode;

  for (let i = 0; i < stack.length; i++) {
    if (a === i) {
      let increment = 0;
      while (increment < stack2.length) {
        current.next = new ListNode(stack2[increment]);
        current = current.next;
        increment++;
      }
      i = b + 1;
    }
    current.next = new ListNode(stack[i]);
    current = current.next;
  }
  return firstNode.next;
};
