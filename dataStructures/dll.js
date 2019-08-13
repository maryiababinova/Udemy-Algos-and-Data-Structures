class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    let tmp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      tmp.prev = null;
    }
    this.length--;
    return tmp;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    let count;
    let current;
    if (idx <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count < idx) {
        current = current.next;
        count++;
      }
    }
    if (idx > this.length / 2) {
      count = this.length - 1;
      current = this.tail;
      while (count > idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(idx, val) {
    let found = this.get(idx);
    if (!found) return false;
    else {
      found.val = val;
      return true;
    }
  }
}
