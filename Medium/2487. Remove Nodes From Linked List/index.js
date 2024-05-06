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
var removeNodes = function (head) {
  let current = head;
  let stack = reversedStack(current);

  let firstNode = new ListNode(0);
  current = firstNode;
  let max = -Infinity;
  for (let i = 0; i < stack.length; i++) {
    if (max !== Math.max(max, stack[i]) || max === stack[i]) {
      current.next = new ListNode(stack[i]);
      current = current.next;
      max = stack[i];
    }
  }

  let stack2 = reversedStack(firstNode.next);
  firstNode = new ListNode(0);
  current = firstNode;
  for (let i = 0; i < stack2.length; i++) {
    current.next = new ListNode(stack2[i]);
    current = current.next;
  }

  return firstNode.next;
};

function reversedStack(current) {
  let stack = [];
  while (current) {
    stack.push(current.val);
    current = current.next;
  }

  return stack.reverse();
}
