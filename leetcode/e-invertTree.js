function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

class Tree {}

// node class
class Node extends Tree {
  constructor(left, v, right) {
    super();
    this.v = v;
    this.left = left;
    this.right = right;
  }
}

// leaf class

class Leaf extends Tree {
  constructor(v) {
    super();
    this.v = v;
  }
}
new Node(
  new Node(new Leaf(7), 3, new Leaf(3)),
  6,
  new Node(new Leaf(8), 4, new Leaf(1))
);

const invertTree = (root) => {
  if (root !== null) {
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
  }
  return root;
};

module.exports = invertTree;
