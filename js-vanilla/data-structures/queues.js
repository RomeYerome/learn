`QUEUES`;
// Queues are not native to JavaScript, but can be implemented using arrays. They follow the First In, First Out (FIFO) principle. This means that the first element added to the queue is the first one to be removed.

// We are going to implement it using a class and the desired methods are: enqueue, dequeue, front, size, isEmpty, print, clear

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);   // add element to the end of the queue
    }

    dequeue() {
        if (this.items.length === 0) {
            return 'Underflow';
        }
        return this.items.shift();  // remove element from the front of the queue
    }

    peek() {
        return this.items[0];
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