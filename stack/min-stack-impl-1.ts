class MinStack {

    private stack: number[] = [];

    push(item: number) {
        this.stack.push(item);
    }

    pop(): number {
        if (this.size() == 0) {
            return undefined;
        }
        return this.stack.pop();
    }

    size(): number {
        return this.stack.length;
    }

    peek(): number {
        if (this.size() == 0) {
            return undefined;
        }
        return this.stack[this.size() - 1];
    }

    // O(n)
    min(): number {
        if (this.size() == 0) {
            return undefined;
        }

        return Math.min(...this.stack);
    }

}

const minStack = new MinStack();

minStack.push(4);
minStack.push(2);
minStack.push(7);
minStack.push(6);

console.log(minStack.peek());
console.log(minStack.min());