/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let current = head;
    let stack = [];
    let findLength = 0;
    while (current) {
      stack.push(current.val);
      findLength++;
      current = current.next;
    }
  
    findLength -= n;
  
    let firstNode = new ListNode(0);
    let newCurrent = firstNode;
  
    for (let i = 0; i < stack.length; i++) {
      if (i !== findLength) {
        newCurrent.next = new ListNode(stack[i], null);
        newCurrent = newCurrent.next;
      }
    }
  
    return firstNode.next;
  };
  