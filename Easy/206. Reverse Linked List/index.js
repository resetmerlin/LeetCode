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
var reverseList = function (head) {
    let current = head;
    let stack = [];
    while (current) {
      stack.push(current.val);
      current = current.next;
    }
  
    stack.reverse();
  
    let firstNode = new ListNode(0);
    current = firstNode;
    for (let i = 0; i < stack.length; i++) {
      current.next = new ListNode(stack[i]);
      current = current.next;
    }
  
    return firstNode.next
  };
  