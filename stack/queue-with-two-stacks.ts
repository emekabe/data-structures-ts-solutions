import {Stack} from "./stack-impl";

class Queue {

    private stackA: Stack = new Stack();
    private stackB: Stack = new Stack();

    enqueue(item: number) {

    }

    deque(): number {

        return null;
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