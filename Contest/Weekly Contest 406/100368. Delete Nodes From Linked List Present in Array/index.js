// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {number[]} nums
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var modifiedList = function (nums, head) {
//   let curr = head;
//   let stack = [];
//   while (curr?.val) {
//     stack.push(curr.val);
//     curr = curr.next;
//   }

//   nums.forEach((num) => {
//     stack = stack.filter((val) => val !== num);
//   });

//   let firstNode = new ListNode();
//   curr = firstNode;

//   for (let i = 0; i < stack.length; i++) {
//     curr.next = new ListNode(stack[i]);
//     curr = curr.next;
//   }

//   return firstNode.next;
// };
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
  let curr = head;
  let i = 0;
  let hash = new Map();
  let firstNode = new ListNode();
  let curr2 = firstNode;

  while (curr?.val) {
    hash.set(i, curr.val);
    if (nums.includes(curr.val)) {
      hash.delete(i);
    }
    const val = hash.get(i);
    if (val) {
      curr2.next = new ListNode(val);
      curr2 = curr2.next;
    }
    curr = curr.next;
    i++;
  }

  return firstNode.next;
};
