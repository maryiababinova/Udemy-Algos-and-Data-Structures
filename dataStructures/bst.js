class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;

    while (true) {
      if (current.val === val) return undefined;
      if (current.val > val) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (current.val < val) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (val < current.val) current = current.left;
      else if (val > current.val) current = current.right;
      else found = true;
    }
    if (!found) return undefined;
    return current;
  }
}
