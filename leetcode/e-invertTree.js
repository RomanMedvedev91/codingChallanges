function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const invertTree = (root) => {
  if (root !== null) {
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
  }
  return root;
};

module.exports = invertTree;
