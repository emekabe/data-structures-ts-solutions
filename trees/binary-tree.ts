import {TreeNode} from "./tree";

export class BinaryTree {

    root: TreeNode | null;

    constructor(root?: TreeNode | null) {
        this.root = (root===undefined ? null : root)
    }

    isLeaf(): boolean {
        return this.root === null || this.root.isLeaf()
    }

    getSize(): number {
        if (!this.root) {
            return 0
        }

        return 1 + this.getNodeSize(this.root.left) + this.getNodeSize(this.root.right)
    }

    private getNodeSize(node: TreeNode): number {
        if (!node) {
            return 0
        }

        return 1 + this.getNodeSize(node.left) + this.getNodeSize(node.right)
    }

    getHeight(): number {
        if (!this.root) {
            return 0
        }

        return 1 + Math.max(this.getNodeHeight(this.root.left), this.getNodeHeight(this.root.right))
    }

    private getNodeHeight(node: TreeNode): number {
        if (!node) {
            return 0
        }

        return 1 + Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right))
    }

    getLevelWithMaximumSum(): number {
        if (!this.root) {
            return 0
        }

        let maxLevel = 0
        let currentLevel = 0
        let maxSum = 0
        let currentSum = 0

        let currentQueue: TreeNode[] = [this.root]
        let nextQueue: TreeNode[] = []

        while (currentQueue.length > 0) {
            currentLevel++
            for (let i = 0; i < currentQueue.length; i++) {
                const node = currentQueue[i]
                currentSum += node.val
                if (node.left) {
                    nextQueue.push(node.left)
                }
                if (node.right) {
                    nextQueue.push(node.right)
                }
            }

            if (currentSum > maxSum) {
                maxSum = currentSum
                maxLevel = currentLevel
            }

            currentSum = 0

            currentQueue = nextQueue
            nextQueue = []
        }

        return maxLevel
    }
}

function getLeastCommonAncestor(node1: TreeNode, node2: TreeNode): TreeNode {
    // TODO: Implement this
    return null
}

function playWithTree() {
    let leftGrandChild = new TreeNode(4);

    let leftChild = new TreeNode(2);
    leftChild.left = leftGrandChild;

    let rightChild = new TreeNode(3);

    // let root = new TreeNode(1, leftChild, rightChild);
    let root = new TreeNode(1);
    root.left = leftChild;
    root.right = rightChild;

    console.log(root.isLeaf())
    console.log(root.left.isLeaf())

    const tree = new BinaryTree(root)
    console.log(tree.isLeaf())

    console.log(`Size: ${tree.getSize()}`)
    console.log(`Height: ${tree.getHeight()}`)
    console.log(`Level with maximum sum: ${tree.getLevelWithMaximumSum()}`)
}

playWithTree()