class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

let node1 = new Node(10);
let node2 = new Node(20);

node1.next = node2;

let node3 = new Node(30);
node2.next = node3;

let node4 = new Node(40);
node3.next = node4;

// console.log(node1);

// function traverse(head) {
//   let current = head;
//   while (current !== null) {
//     console.log(current.val);
//     current = current.next;
//   }
// }
console.log(node1.next.next.next.val);
