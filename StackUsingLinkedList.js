const TailedLinkedList = require("./Linked List with tail");

class Stack {
  constructor() {
    this.list = new TailedLinkedList();
  }
  push(value) {
    this.list.prepend(value);
  }
  pop() {
    return this.list.removeFromFront();
  }
  getSize() {
    return this.list.getSize();
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  print() {
    return this.list.print();
  }
}

const stack = new Stack();

console.log("Start");
stack.push(10);
stack.push(20);
stack.push(30);
// console.log(stack.getSize());
// console.log(stack.print());
stack.getSize();
stack.print();
console.log(stack.pop());
stack.getSize();
stack.print();
console.log(stack.peek());
