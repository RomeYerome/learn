`STACKS`;
// Stacks are not built into JavaScript, but they can be implemented using arrays. Stacks are a type of data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed.

// WE are going to implement it using a class and the desired methods are: push, pop, peek, size, isEmpty, print, clear

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return 'Underflow';
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        return this.items.join(' ');
    }

    clear() {
        this.items = [];
    }
}