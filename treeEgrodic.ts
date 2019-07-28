import { BST } from './tree';

const tree = new BST(1);

const arr = [2,3,4,5,6,7];

arr.forEach(item => {
  tree.insert(item);
});

tree.inOrder(tree.root)