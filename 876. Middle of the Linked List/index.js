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
var middleNode = function (head) {
  let current = head;
  let nodeLength = 0;

  while (current) {
    nodeLength += 1;
    current = current.next;
  }

  nodeLength =
    nodeLength % 2 == 0 ? nodeLength / 2 + 1 : Math.floor(nodeLength / 2) + 1;

  while (head && nodeLength !== 1) {
    nodeLength--;
    head = head.next;
  }

  return head;
};
