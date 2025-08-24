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
// prototype
// what is prototype
// how to create a prototype
// how to add a method to prototype
// how to use prototype
// what is __proto__
// what is prototype chain
// what is constructor
// what is the difference between __proto__ and prototype
// what is the difference between class and prototype
// what is the difference between class and constructor function
// what is the difference between class and object
// what is the difference between class and instance

// Prototype is a mechanism created to implement oop in javascript, perticularly inheritance.
// Every function in javascript has a property called prototype whih is an object.
// When a function is created, javascript engine adds two properties to it.
// 1. prototype: It is an object which contains a property called constructor which points to the function itself.
// 2. __proto__: It is an object which points to the prototype of the function.
// When a function is invoked with new keyword, a new object is created and the __proto__ property of the new object points to the prototype of the function.
// This is how inheritance is implemented in javascript.
// When a property is accessed on an object, javascript engine first looks for the property on the object itself.
// If the property is not found, it looks for the property on the __proto__ of the object.
// This is called prototype chain.
// If the property is not found on the __proto__, it looks for the property on the __proto__ of the __proto__ and so on until it reaches the end of the prototype chain.
// If the property is not found in the entire prototype chain, it returns undefined.
// Every object in javascript has a property called __proto__ which points to the prototype of the
