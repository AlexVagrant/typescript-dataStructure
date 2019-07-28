declare class TreeNode {
    data: any;
    right: TreeNode;
    left: TreeNode;
    constructor(data: any, left?: TreeNode, right?: TreeNode);
    show(): TreeNode;
}
export declare class BST {
    root: TreeNode;
    constructor(data: any);
    insert(data: any): void;
    inOrder(node: TreeNode): void;
}
export {};
