function LinkedList() {
  var length = 0;
  var head = null;

  const Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function (element) {
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };

  // Only change code below this line
  this.isEmpty = function () {
    return this.size() > 0 ? false : true;
  };

  this.indexOf = function (element) {
    if (head === null) return -1;
    let current = head;
    let index = 0;
    while (current.element !== element && current.next !== null) {
      current = current.next;
      index++;
    }
    if (current.element !== element && current.next === null) {
      return -1;
    }
    return index;
  };

  this.elementAt = function (index) {
    if (head === null) return undefined;
    let current = head;
    let currentIndex = 0;
    while (currentIndex !== index && current.next !== null) {
      current = current.next;
      currentIndex++;
    }
    if (currentIndex !== index && current.next === null) {
      return undefined;
    }
    return current.element;
  };

  this.removeAt = function (index) {
    if (index < 0 || index >= length) {
      return null;
    }
    let deletedNode = head;

    if (index == 0) {
      head = null;
    } else {
      let currentNode = head;
      let currentIndex = 0;
      while (currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      deletedNode = currentNode.next;
      currentNode.next = deletedNode.next;
    }

    // Update and return
    length--;
    return deletedNode.element;
  };
  // Only change code above this line
}
