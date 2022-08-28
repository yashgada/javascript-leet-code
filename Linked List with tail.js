class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class TailedLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List empty, nothing to print");
      return null;
    }
    let str = "";
    let curr = this.head;
    while (curr) {
      str += curr.value + " ";
      curr = curr.next;
    }
    console.log(str);
    return str;
  }
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    if (this.size === 0) this.tail = node;
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.size++;
  }
  getSize() {
    console.log(this.size);
    return this.size;
  }
  removeFromFront() {
    if (this.isEmpty()) return null;
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  removeFromEnd() {
    if (this.isEmpty()) return null;
    const value = this.tail.value;
    if (this.size === 1) {
      this.tail = null;
      this.head = null;
      this.size--;
      return value;
    }
    let prev = this.head;
    while (prev.next !== this.tail) {
      prev = prev.next;
    }
    prev.next = null;
    this.tail = prev;
    this.size--;
    return value;
  }
}

module.exports = TailedLinkedList;

// const list = new TailedLinkedList();
// list.prepend(1);
// list.prepend(2);
// list.append(3);
// // console.log(list.removeFromFront());
// console.log(list.removeFromEnd());
// console.log(list.print());
// console.log(list.getSize());
