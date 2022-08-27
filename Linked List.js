// Implementation of Linked lists

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      return;
    }
    let curr = this.head;
    let str = "";
    while (curr !== null) {
      str += `${curr.value} `;
      curr = curr.next;
    }
    return str;
  }
  append(value) {
    const node = new Node(value);
    // traverse the list
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size += 1;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.append(value);
    } else {
      let curr = this.head;
      let i;
      for (i = 1; i < index; i++) {
        curr = curr.next;
      }
      const node = new Node(value);
      node.next = curr.next;
      curr.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    if (0 > index || index >= this.size) {
      console.log("invalid index");
      return null;
    }
    if (index === 0) {
      const temp = this.head.next;
      this.head = temp;
    } else {
      let prev = this.head;
      for (let i = 1; i < index; i++) {
        prev = prev.next;
      }
      const next = prev.next;
      prev.next = next.next;
    }
    this.size--;
  }
  removeValue(value) {
    if (this.isEmpty()) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next === null) return null;
      const target = prev.next;
      prev.next = target.next;
      this.size--;
      return target.value;
    }
  }
  findIndexFor(value) {
    if (this.isEmpty()) return -1;
    // if(value === null)
    if (this.head.value === value) return 0;
    else {
      let curr = this.head;
      let i = 0;
      while (curr && curr.value !== value) {
        curr = curr.next;
        i++;
      }
      if (curr) return i;
      // if (curr.value === value) return i;
      else return -1;
    }
  }
  reverse() {
    if (this.isEmpty()) return -1;
    let prev = this.head;
    let curr = prev.next;
    prev.next = null;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  reverse2() {
    if (this.isEmpty()) return null;
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

// Test for remove()
// Send an invalid index, lower than 0, more than size of the list
// Send index 0 to remove the head node

const list = new LinkedList();
console.log("Is the list empty? ", list.isEmpty());
console.log("List size? ", list.getSize());
list.prepend(10);
console.log("List size? ", list.getSize());
list.prepend(20);
console.log(list.getSize());
console.log(list.print());
list.prepend(30);
list.append(40);
list.insert(50, 3);
list.insert(50, 3);
console.log(list.size);
console.log(list.print());
list.reverse2();
console.log(list.print());
list.removeFrom(-3);
list.removeFrom(69);
// list.removeFrom(1);
// list.removeFrom(2);
console.log(list.getSize());
console.log(list.removeValue(20));
console.log(list.print());
console.log(list.getSize());
console.log(list.findIndexFor());
