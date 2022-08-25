// Implementing a stack
// LIFO
// push(element) - Add a new element to the top of the stack
// pop() - removes the top element from the stack
// peek() - returns the last element without removing it
// isEmpty() - check if the stack is empty
// size() - returns the size of the array
// print() - Visualize/ print out the stack

class Stack {
  constructor() {
    this.arr = [];
  }

  push(element) {
    this.arr.push(element);
  }
  pop() {
    if (!this.length) {
      console.log("Stack empty");
      return;
    }
    return this.arr.pop();
  }
  peek() {
    if (!this.arr.length) return null;
    return this.arr[this.arr.length - 1];
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  size() {
    return this.arr.length;
  }
  print() {
    console.log(this.arr.toString());
  }
}

const arr = new Stack();
arr.push(2);
arr.push("hi");
console.log(arr.size());
arr.print();
console.log(arr.pop());
arr.print();
