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
  // Only change code above this line
}
