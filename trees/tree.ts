export class TreeNode {

    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

    isLeaf(): boolean {
        return this.left === null && this.right === null
    }

    isInternal(): boolean {
        return this.left !== null && this.right !== null
    }

    isLeafOrInternal(): boolean {
        return this.isLeaf() || this.isInternal()
    }

}