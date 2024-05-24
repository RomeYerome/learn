`LINKED LISTS`;
// Linked lists are a data structure that consists of a sequence of elements called nodes, each node has a value and a pointer that points to the next element in the sequence.

// The first node is called the head and the last node is called the tail. The tail node points to null.

// Linked lists are not native to JavaScript, but can be implemented using classes. We are going to implement a singly linked list.

// The desired methods are: insertFirst, insertLast, insertAt, indexOf, getAt, removeAt, isEmpty, size, printList, clear

// The Node class is a helper class that will be used to create the nodes of the linked list.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertFirst(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    insertLast(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size()) {
            return null;
        }
        if (index === 0) {
            this.insertFirst(value);
            return;
        }
        if (index === this.size()) {
            this.insertLast(value);
            return;
        }
        const newNode = new Node(value);
        let current = this.head;
        let previous = null;
        let i = 0;
        while (i < index) {
            previous = current;
            current = current.next;
            i++;
        }
        previous.next = newNode;
        newNode.next = current;
    }

    indexOf(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    getAt(index) {
        if (index < 0 || index >= this.size()) {
            return null;
        }
        let current = this.head;
        let i = 0;
        while (i < index) {
            current = current.next;
            i++;
        }
        return current.value;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            return null;
        }
        let current = this.head;
        let previous = null;
        let i = 0;
        if (index === 0) {
            this.head = current.next;
            return;
        }
        while (i < index) {
            previous = current;
            current = current.next;
            i++;
        }
        previous.next = current.next;
    }

    isEmpty() {
        return this.head === null;
    }

    size() {
        let current = this.head;
        let count = 0;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
    }
}





// ANOTHER IMPLEMENTATION IS

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this._length = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this._length++;
    }

    insertLast(data) {
        let node = new Node(data);
        let current;

        // if there is no head, make this node the head
        // else traverse the list and insert the node at the end

        if (!this.head)
            this.head = node;
        else
            current = this.head;

        while (current.next)
            current = current.next;

        current.next = node;
        this._length++;
    }

    insertAt(data, index) {
        // if index is out of range, return undefined
        if (index < 0 || index > this._length)
            return undefined;

        // if index is 0, insert at the beginning of the list
        if (index === 0)
            this.insertFirst(data);

        // if index is the last item, insert at the end of the list
        if (index === this._length)
            this.insertLast(data);

        // else traverse the list and insert the node at the given index
        let node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;
        this._length++;
    }

    getAt(index) {
        // if index is out of range, return undefined
        if (index < 0 || index > this._length)
            return 'Index out of range';

        // else traverse the list and return the node at the given index
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index)
                return current.data;

            count++;
            current = current.next;
        }
    }

    removeAt(index) {
        // if index is out of range, return undefined
        if (index < 0 || index > this._length)
            return 'Index out of range';

        // if index is 0, remove the first item in the list
        if (index === 0)
            this.head = this.head.next;

        // else traverse the list and remove the node at the given index
        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        previous.next = current.next;
        this._length--;
    }

    clearList() {
        this.head = null;
        this._length = 0;
    }

    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
            count++;
        }
    }
}

const list = new LinkedList();

console.log(list)   // returns LinkedList {_length: 0, head: null}

list.insertFirst(100);

console.log(list)   // returns LinkedList {_length: 1, head: Node {data: 100, next: null}}

list.insertFirst(200);

console.log(list)   // returns LinkedList {_length: 2, head: Node {data: 200, next: Node {data: 100, next: null}}}

list.insertAt(300, 1);
list.insertLast(400);

console.log(list)   // returns LinkedList {_length: 4, head: Node {data: 200, next: Node {data: 300, next: Node {data: 100, next: Node {data: 400, next: null}}}}}

list.printListData();   // returns 200 300 100 400

list.removeAt(2);

list.printListData();   // returns 200 300 400