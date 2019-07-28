"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("./tree");
const tree = new tree_1.BST(1);
const arr = [2, 3, 4, 5, 6, 7];
arr.forEach(item => {
    tree.insert(item);
});
tree.inOrder(tree.root);
//# sourceMappingURL=treeEgrodic.js.map