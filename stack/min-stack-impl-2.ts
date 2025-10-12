class MinStack {

    private stack: number[] = [];
    private minStack: number[] = [];

    push(item: number) {
        this.stack.push(item);

        if (this.minStack.length == 0) {
            this.minStack.push(item);
        } else {
            let lastMinStackElement = this.minStack[this.minStack.length - 1];
            if (item < lastMinStackElement){
                this.minStack.push(item);
            } else {
                this.minStack.push(lastMinStackElement)
            }
        }
    }

    pop(): number {
        if (this.size() == 0) {
            return undefined;
        }
        this.minStack.pop();
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

    min(): number {
        if (this.size() == 0) {
            return undefined;
        }

        return this.minStack[this.minStack.length - 1];
    }

}

const minStack = new MinStack();

minStack.push(4);
minStack.push(2);
minStack.push(7);
minStack.push(6);

console.log("========");
console.log(minStack.peek());
console.log(minStack.min());

minStack.push(9);

console.log("========");
console.log(minStack.peek());
console.log(minStack.min());

minStack.push(1);

console.log("========");
console.log(minStack.peek());
console.log(minStack.min());


minStack.pop();

console.log("========");
console.log(minStack.peek());
console.log(minStack.min());