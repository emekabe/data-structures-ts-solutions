type Position = {
    x: number;
    y: number;
    z: number;
};

type HeapObject = {
    star: Position;
    distance: number;
};

function calculateDistance(a: Position): number {
    return Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2) + Math.pow(a.z, 2));
}

function generateHeapObjectArray(stars: Position[]): HeapObject[] {
    return stars.map((star) => ({
        star: star,
        distance: calculateDistance(star),
    }));
}

/**
function generatePositionArray(heapObjects: HeapObject[]) : Position[] {
    return heapObjects.map(heapObject => ({
            ...heapObject.star
        }
    ))
}
 */

function generatePositionArray(maxHeap: MaxHeap) : Position[] {
    const position: Position[] = []

    while (maxHeap.size() > 0){
        position.push(maxHeap.remove().star)
    }

    return position.reverse(); // Reversing is optional if the stars can be returned in any order and it's going to be in descending order. Reversing it gives us the closest star positions in ascending order.
}

class MaxHeap {
    private heap: HeapObject[] = [];

    private getParentIndex(i: number): number { return Math.floor((i - 1) / 2); }
    private getLeftChildIndex(i: number): number { return 2 * i + 1; }
    private getRightChildIndex(i: number): number { return 2 * i + 2; }

    private swap(i: number, j: number) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    add(value: HeapObject) {
        this.heap.push(value);
        this.heapifyUp();
    }

    getMax(): HeapObject {
        return this.heap[0];
    }

    size(): number {
        return this.heap.length;
    }

    remove(): HeapObject | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown();
        return root;
    }

    private heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[this.getParentIndex(index)].distance < this.heap[index].distance) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    private heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) < this.heap.length &&
                this.heap[this.getRightChildIndex(index)].distance > this.heap[largerChildIndex].distance) {
                largerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index].distance >= this.heap[largerChildIndex].distance) break;
            this.swap(index, largerChildIndex);
            index = largerChildIndex;
        }
    }
}


const getClosestStars = (k: number, stars: Position[]): Position[] => {
    const heapObjects = generateHeapObjectArray(stars);

    const maxHeap: MaxHeap = new MaxHeap();

    // O(n*log(k))
    for (const heapObject of heapObjects) {
        maxHeap.add(heapObject);

        if (maxHeap.size() > k) {
            maxHeap.remove();
        }
    }

    return generatePositionArray(maxHeap);
};

console.log(
    getClosestStars(3, [
        { x: 4, y: 3, z: 0 },
        { x: 6, y: 8, z: 0 },
        { x: 4, y: 0, z: 3 },
        { x: 3, y: 4, z: 0 },
    ]),
);
