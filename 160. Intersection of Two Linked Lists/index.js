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
  let set = new Set();
  let current = headA;

  while (current) {
    set.add(current);
    current = current.next;
  }

  current = headB;

  while (current) {
    if (set.has(current)) {
      return current;
    } else set.add(current);

    current = current.next;
  }
};
