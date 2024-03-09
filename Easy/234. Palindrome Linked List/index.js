/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let current = head;
  let stack = [];
  while (current) {
    stack.push(current.val);
    current = current.nex;
  }

  let left = 0;
  let right = stack.length - 1;

  while (left < right) {
    if (stack[left] !== stack[right]) return false;
    left++;
    right--;
  }

  return true;
};
