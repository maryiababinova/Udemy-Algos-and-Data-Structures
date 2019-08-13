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

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    let node = new Node(val);
    let prevNode = this.get(idx - 1);
    let nextNode = prevNode.next;

    node.prev = prevNode;
    prevNode.next = node;
    node.next = nextNode;
    nextNode.prev = node;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let node = this.get(idx);
    let prevNode = node.prev;
    let nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    node.next = null;
    node.prev = null;
    this.length--;
    return node;
  }

  reverse() {
    let node = this.tail;
    this.tail = this.head;
    this.head = node;

    let nextNode, prevNode;
    for (let i = 0; i < this.length; i++) {
      nextNode = node.prev;
      prevNode = node;
      prevNode.next = nextNode;
      node = nextNode;
    }
    return this;
  }
}
