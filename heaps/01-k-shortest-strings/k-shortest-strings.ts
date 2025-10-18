class MaxHeap {
    private heap: string[] = [];

    private getParentIndex(i: number): number { return Math.floor((i - 1) / 2); }
    private getLeftChildIndex(i: number): number { return 2 * i + 1; }
    private getRightChildIndex(i: number): number { return 2 * i + 2; }

    private swap(i: number, j: number) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    add(value: string) {
        this.heap.push(value);
        this.heapifyUp();
    }

    getMax(): string {
        return this.heap[0];
    }

    size(): number {
        return this.heap.length;
    }

    remove(): string | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown();
        return root;
    }

    private heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[this.getParentIndex(index)].length < this.heap[index].length) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

     getWords(): string[]{
        return this.heap;
    }

    private heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) < this.heap.length &&
                this.heap[this.getRightChildIndex(index)].length > this.heap[largerChildIndex].length) {
                largerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index].length >= this.heap[largerChildIndex].length) break;
            this.swap(index, largerChildIndex);
            index = largerChildIndex;
        }
    }
}


function computeKShortestStrings(k: number, words: string[]): string[] {
    const maxHeap = new MaxHeap();
    for(let i=0; i<words.length; i++)
    {
        maxHeap.add(words[i]);

        if (maxHeap.size() > k) {
            maxHeap.remove();
        }
    }
    return maxHeap.getWords()
}



console.log(computeKShortestStrings(3, ["do","a","apple", "ball", "cat", "dog", "elephant", "table", "cheese"]))