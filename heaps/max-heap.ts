class MaxHeap {
    private heap: number[] = [];

    private getParentIndex(i: number): number { return Math.floor((i - 1) / 2); }
    private getLeftChildIndex(i: number): number { return 2 * i + 1; }
    private getRightChildIndex(i: number): number { return 2 * i + 2; }

    private swap(i: number, j: number) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(value: number) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop(): number | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown();
        return root;
    }

    private heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[this.getParentIndex(index)] < this.heap[index]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    private heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) < this.heap.length &&
                this.heap[this.getRightChildIndex(index)] > this.heap[largerChildIndex]) {
                largerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] >= this.heap[largerChildIndex]) break;
            this.swap(index, largerChildIndex);
            index = largerChildIndex;
        }
    }
}

// Example usage
const maxHeap = new MaxHeap();
maxHeap.push(10);
maxHeap.push(5);
maxHeap.push(20);

console.log(maxHeap.pop()); // 20
console.log(maxHeap.pop()); // 10
console.log(maxHeap.pop()); // 5