export class Stack {

    private stack: string[] = [];

    push(item: string) {
        this.stack.push(item);
    }

    pop(): string {
        if (this.size() == 0) {
            return undefined;
        }
        return this.stack.pop();
    }

    size(): number {
        return this.stack.length;
    }

    peek(): string {
        if (this.size() == 0) {
            return undefined;
        }
        return this.stack[this.size() - 1];
    }
    isEmpty(): boolean {
        return this.size() === 0;
    }

}

export function removeAdjacentDuplicates(str: string): string {
    const stack = new Stack();

    for (let char of str) {
        if(!stack.isEmpty() && stack.peek() === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    let result = '';
    while (!stack.isEmpty()) {
        result = stack.pop() + result;
    }
    return result;
}
removeAdjacentDuplicates("abbaca");