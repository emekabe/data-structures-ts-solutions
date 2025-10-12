export class Stack {

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

}

function testStack(){
    const myStack = new Stack();

    myStack.push(4);
    myStack.push(2);
    myStack.push(7);
    myStack.push(6);

    console.log(myStack.peek());
}

