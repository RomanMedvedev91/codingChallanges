function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left ? left : right;
};

module.exports = lowestCommonAncestor;
