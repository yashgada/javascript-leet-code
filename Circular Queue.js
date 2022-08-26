// Implementation of a circular queue

// enqueue(element) - Add element to the end of the queue
// dequeue() - Remove element from the front of the queue and return it
// isFull() - Check if the queue is full
// isEmpty() - To check if the queue is empty
// peek() - Get the element from the front of the queue without removing it
// size() - To get the number of elements in the queue
// print() - Print out the elements in the queue to visualize it

class Circular_Queue {
  constructor(capacity) {
    this.size = 0;
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.front = -1;
    this.end = -1;
  }
  isFull() {
    return this.size === this.capacity;
  }
  isEmpty() {
    return this.size === 0;
  }
  enqueue(element) {
    if (this.isFull()) {
      console.log(`Queue is full for ${element}`);
      return null;
    }
    if (this.front === -1) {
      this.front = 0;
    }
    this.end = (this.end + 1) % this.capacity;
    this.items[this.end] = element;
    this.size += 1;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty ");
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.size -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.end = -1;
    }
    return item;
  }
  peek() {
    if (!this.isEmpty()) return this.items[this.front];
  }
  size() {
    return this.size;
  }
  print() {
    if (this.isEmpty()) return "Queue Empty";
    let str = "";
    for (let i = this.front; i !== this.end; i = (i + 1) % this.capacity) {
      console.log(i);
      str += `${this.items[i]}`;
    }
    str += `${this.items[this.end]}`;
    console.log(str);
    return str;
  }
}

class CircularQueue_Index0 {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.length = 0;
    this.front = 0;
    this.end = 0;
  }
  isEmpty() {
    return this.length === 0;
  }
  isFull() {
    return this.length === this.items.length;
  }
  enqueue(item) {
    if (this.isFull()) {
      console.log("Queue full, can't add " + item);
      return false;
    }
    this.items[this.end] = item;
    this.end = (this.end + 1) % this.items.length;
    this.length += 1;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue empty, nothing to dequeue");
      return false;
    }
    const output = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.items.length;
    this.length -= 1;
    // if (this.front === this.end) {
    //   this.front = 0;
    //   this.end = 0;
    // }
  }
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty, nothing to peak");
      return null;
    }
    console.log(this.items[this.front]);
    return this.items[this.front];
  }
  size() {
    if (this.isEmpty()) {
      return false;
    }
    console.log(`Size is ${this.length}`);
    return this.length;
  }
  print() {
    if (this.isEmpty()) return null;
    let str = "";
    let i;
    for (
      i = this.front;
      i !== (this.end + this.items.length - 1) % this.items.length;
      i = (i + 1) % this.items.length
    ) {
      str += `${this.items[i]} `;
    }
    str += `${this.items[i]}`;
    console.log(str);
    return str;
  }
}

// print() - Print out the elements in the queue to visualize it

const q2 = new CircularQueue_Index0(4);
console.log(q2.isFull());
q2.enqueue("a");
q2.enqueue("b");
q2.enqueue("c");
q2.enqueue("d");
// q2.dequeue()
console.log(q2.isFull());
console.log(q2.isEmpty());
console.log(q2.size());
console.log(q2.print());

const q = new Circular_Queue(4);
console.log(q.isFull());
console.log(q.isEmpty());
q.enqueue("a");
console.log(q.isFull());
console.log(q.isEmpty());
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");
console.log(q.print());
console.log(q.isFull());
console.log(q.isEmpty());
q.dequeue();
q.enqueue("e");
console.log(q.peek());
q.enqueue("f");
console.log(q.print());
