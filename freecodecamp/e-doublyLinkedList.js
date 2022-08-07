var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.add = function (element) {
    const node = new Node(element, this.tail);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let currentNode = this.tail;
      currentNode.next = node;
      this.tail = node;
    }
  };

  this.remove = function (data) {
    if (this.head === null) return null;
    let tempNode = this.head;
    while (tempNode !== this.tail) {
      if (tempNode.data === data) {
        if (tempNode === this.head) {
          this.head = tempNode.next;
          tempNode.next.prev = null;
        } else {
          let prevNode = tempNode.prev;
          prevNode.next = tempNode.next;
        }
      }
      tempNode = tempNode.next;
    }
    if (tempNode.data === data) {
      this.tail = tempNode.prev;
      tempNode.prev.next = null;
    }
  };
  // Only change code above this line
};
