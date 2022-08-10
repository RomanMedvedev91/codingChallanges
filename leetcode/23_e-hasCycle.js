class Node {
  constructor(data, next) {
    this.data = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  hasCycle = (head) => {
    let current = head;

    while (current && current.next) {
      head = head.next;
      current = current.next.next;

      if (head === current) return true;
    }
    return false;
  };
}
