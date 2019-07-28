"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    show() {
        return this.data;
    }
}
class BST {
    constructor(data) {
        this.root = new TreeNode(data);
    }
    insert(data) {
        const n = new TreeNode(data);
        if (this.root === undefined) {
            this.root = n;
        }
        else {
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
                }
                else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }
    inOrder(node) {
        if (node != null) {
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }
}
exports.BST = BST;
//# sourceMappingURL=tree.js.map