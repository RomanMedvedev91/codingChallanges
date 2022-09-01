var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.add = (value) => {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return undefined;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === newNode.value) {
        return null;
      }

      const direction = currentNode.value > newNode.value ? "left" : "right";
      if (!currentNode[direction]) {
        currentNode[direction] = newNode;
        return undefined;
      }

      currentNode = currentNode[direction];
    }
  };
  this.findMin = () => {
    if (!this.root) return null;

    let curr = this.root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.value;
  };

  this.findMax = () => {
    if (!this.root) return null;

    let curr = this.root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.value;
  };

  this.isPresent = (number) => {
    if (!this.root) return false;

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === number) return true;
      const direction = currentNode.value > number ? "left" : "right";
      if (!currentNode[direction]) return false;

      currentNode = currentNode[direction];
    }
    return false;
  };

  this.findMinHeight = () => {
    if (!this.root) return -1;

    function findNodeMinHeight(node) {
      if (!node) return 0;
      return (
        1 +
        Math.min(findNodeMinHeight(node.left), findNodeMinHeight(node.right))
      );
    }

    return findNodeMinHeight(this.root) - 1;
  };

  this.findMaxHeight = function () {
    if (!this.root) return -1;

    function findNodeMaxHeight(node) {
      if (!node) return 0;

      return (
        1 +
        Math.max(findNodeMaxHeight(node.left), findNodeMaxHeight(node.right))
      );
    }

    return findNodeMaxHeight(this.root) - 1;
  };

  this.isBalanced = function () {
    return this.findMinHeight() == this.findMaxHeight();
  };

  this.inorder = function () {
    if (!this.root) return null;

    function traverse(node) {
      if (!node) return [];
      const nodes = traverse(node.left); // Left
      nodes.push(node.value); // Root (in-order)
      nodes.push(...traverse(node.right)); // Right
      return nodes;
    }

    return traverse(this.root);
  };

  // Pre-order traversal
  this.preorder = function () {
    if (!this.root) return null;

    function traverse(node) {
      if (!node) return [];
      const nodes = [node.value]; // Root (pre-order)
      nodes.push(...traverse(node.left)); // Left
      nodes.push(...traverse(node.right)); // Right
      return nodes;
    }

    return traverse(this.root);
  };

  // Post-order traversal
  this.postorder = function () {
    if (!this.root) return null;

    function traverse(node) {
      if (!node) return [];
      const nodes = traverse(node.left); // Left
      nodes.push(...traverse(node.right)); // Right
      nodes.push(node.value); // Root (post-order)
      return nodes;
    }

    return traverse(this.root);
  };

  this.levelOrder = function () {
    if (!this.root) return null;

    function traverse(direction, node) {
      if (!node) return [];
      const queue = [node];
      const result = [];

      const addEl = (node, queue) => {
        if (node) queue.push(node);
      };

      while (queue.length > 0) {
        const temp = queue.shift();
        result.push(temp);

        if (direction === "level") {
          addEl(node.left, queue);
          addEl(node.right, queue);
        } else {
          addEl(node.right, queue);
          addEl(node.left, queue);
        }
      }
      return result;
    }

    return traverse("level", this.root);
  };

  this.reverseLevelOrder = function () {
    if (!this.root) return null;

    return traverse("reverseLevel", this.root);
  };
  // Only change code above this line
}
