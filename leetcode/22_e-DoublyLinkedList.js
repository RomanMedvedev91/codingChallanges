class Node {
  constructor(data, next) {
    this.data = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add = (element) => {
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

  // itterative
  reverseItterative = (head) => {
    let temp = null;
    let prev = null;
    let currentNode = head;

    if (!head) return null;

    this.tail = currentNode;

    while (currentNode) {
      temp = currentNode.next;
      prev = currentNode;
      currentNode.next = prev;
      currentNode = temp;
    }

    return prev;
  };
  reverseEs6 = (head) => {
    let [prev, current] = [null, head];

    while (current) {
      [current.next, prev, current] = [prev, current, current.next];
    }
    return prev;
  };

  reverseRecursive = (head) => {
    if (head == null || head.next == null) {
      return head;
    }

    let reversedList = this.reverseRecursive(head.next);

    head.next.next = head;
    head.next = null;

    return reversedList;
  };
}

module.exports = { DoublyLinkedList, Node };
