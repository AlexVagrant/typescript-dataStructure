class TreeNode {
  public data: any;
  public right: TreeNode;
  public left: TreeNode;
  constructor(data: any, left?: TreeNode, right?: TreeNode) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  public show(): TreeNode {
    return this.data;
  }

}

export class BST {

  public root: TreeNode;

  constructor(data) {
    this.root = new TreeNode(data);
  }

  public insert(data: any): void {
    const n = new TreeNode(data);
    if (this.root === undefined) {
      this.root = n;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current == null) {
            parent.left = n;
            break; 
          }
        } else {
          current = current.right;
          if (current == null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }

  public inOrder(node: TreeNode) {
    if (node != null) {
      this.inOrder(node.left);
      console.log(node.show());
      this.inOrder(node.right);
    }
  }
}
