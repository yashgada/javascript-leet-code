const TailedLinkedList = require("./Linked List with tail");

class Queue {
  constructor() {
    this.list = new TailedLinkedList();
  }
  enqueue(value) {
    this.list.append(value);
  }
  dequeue() {
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

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.getSize());
console.log(queue.print());
console.log(queue.dequeue());
console.log(queue.getSize());
console.log(queue.print());
console.log(queue.peek());
