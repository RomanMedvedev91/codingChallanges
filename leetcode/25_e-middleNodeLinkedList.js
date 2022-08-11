class Node {
  constructor(data, next) {
    this.data = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}

/*
initial state
f
1 -> 2 -> 3 -> 4 -> 5
s

1st loop
		  f
1 -> 2 -> 3 -> 4 -> 5
     s
	 
2nd loop
		            f
1 -> 2 -> 3 -> 4 -> 5
          s

when f reach end of the linked list, s will be at the middle.

f = fast pointer
s = slow pointer
*/

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  middleNode = (head) => {
    let fast = (slow = head);

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return slow;
  };
}
