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

export function reverseString(str: string): string {
    const stack = new Stack();
    
    for (let char of str) {
        stack.push(char);
    }
    let reversedStr = '';
    while (stack.size() > 0) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}

reverseString("hello world");

