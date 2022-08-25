// Implementation of a queue in javascript

// FIFO
// enqueue(element) - Add element to the end of the queue
// dequeue() - Remove element from the front of the queue and return it
// peek() - Get the element from the front of the queue without removing it
// isEmpty() - To check if the queue is empty
// size() - To get the number of elements in the queue
// print() - Print out the elements in the queue to visualize it

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return -1;
    }
    return this.queue.shift();
  }
  peek() {
    if (!this.isEmpty()) return this.queue[0];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  size() {
    return this.queue.length;
  }
  print() {
    console.log(this.queue.toString());
  }
}
class Queue_Optimised {
  // dequeue() is optimised from O(N) to O(1)
  constructor() {
    this.queue = {};
    this.front = 0;
    this.end = 0;
  }
  enqueue(element) {
    this.queue[this.end] = element;
    this.end++;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    const el = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return el;
  }
  peek() {
    if (!this.isEmpty()) return this.queue[this.front];
  }
  isEmpty() {
    return this.end - this.front === 0;
  }
  size() {
    return this.end - this.front;
  }
  print() {
    if (this.isEmpty()) return null;
    console.log(this.queue);
  }
}

const queue = new Queue_Optimised();
console.log(queue.isEmpty());

queue.enqueue(11);
queue.enqueue(22);
queue.enqueue(33);
console.log(queue.size());

console.log(queue.peek());
queue.print();
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.size());
