/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  function order(head, stack = []) {
    stack.push(head?.val);
    if (head) {
      order(head.left, stack);
      order(head.right, stack);
    }

    return stack;
  }

  return JSON.stringify(order(p)) === JSON.stringify(order(q));
};
