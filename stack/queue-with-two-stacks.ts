import {Stack} from "./stack-impl";

class Queue {

    private stackA: Stack = new Stack();
    private stackB: Stack = new Stack();

    enqueue(item: number) {
        this.stackA.push(item);
    }

    deque(): number {
        if (this.stackB.size() === 0) {
            if (this.stackA.size() === 0) {
                return undefined;
            }
            while (this.stackA.size() > 0) {
                this.stackB.push(this.stackA.pop());
            }
        }
        return this.stackB.pop();
    }
}

const myQueue = new Queue();

myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(6);
myQueue.enqueue(1);
myQueue.enqueue(4);

if (myQueue.deque() === 3) {
    console.log("Queue is correct");
} else {
    console.log("Queue is wrong");
}