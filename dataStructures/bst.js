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
}
