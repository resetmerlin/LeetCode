/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  function inOrder(head, stack = []) {
    if (head) {
      inOrder(head.left, stack);
      stack.push(head.val);
      inOrder(head.right, stack);
    }
    return stack;
  }

  return inOrder(root);
};
