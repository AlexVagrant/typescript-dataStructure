class TreeNode<T> {
  public data: T;
  public right: TreeNode<T>| null;
  public left: TreeNode<T>| null;
  constructor(data: T, left: TreeNode<T> | null, right: TreeNode<T> | null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  public show(): T {
    return this.data;
  }
}

class BST<T> {

  private root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  public insert(data: T): void {
    const n = new TreeNode(data, null, null);
    if (this.root === null) {
      this.root = n;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          if (current.left === null) {
            parent.left = n;
            break;
          }
        } else {
          if (current.right === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }
}

const bst = new BST();
bst.insert('1');

