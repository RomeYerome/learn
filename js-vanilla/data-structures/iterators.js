`ITERATORS`;
// Iterators are objects that define a sequence and a return value upon completion. They contain a next() method that returns an object with two properties: value and done. The value property is the current value and the done property is a boolean that returns true if the iteration is complete or false if it is not. See example below

// They are objects that implement the iterator protocol of symbol.iterator. 

// An iterator is said to consume itself because it is generally only possible to run once

const arr = [1, 2, 3, 4, 5];

const it = arr[Symbol.iterator]();  // creates an iterator object

console.log(it.next()); // returns {value: 1, done: false}
console.log(it.next()); // returns {value: 2, done: false}
console.log(it.next()); // returns {value: 3, done: false}
console.log(it.next()); // returns {value: 4, done: false}
console.log(it.next()); // returns {value: 5, done: false}
console.log(it.next()); // returns {value: undefined, done: true}

// The for...of loop uses the iterator protocol to iterate over the elements of an array.

for (let value of arr) {
    console.log(value);
}
// 1, 2, 3, 4, 5



// Custom Iterators (non iterable)
const app = {
    nextIndex: 0,
    teams: ['Chelsea', 'Arsenal', 'Man Utd', 'Liverpool'],
    next() {
        return this.nextIndex < this.teams.length
            ? { value: this.teams[this.nextIndex++], done: false }
            : { done: true };
    }
};


`ITERABLE ITERATORS`;
// Iterators are objects that implement the iterator protocol of symbol.iterator. They contain a [Symbol.iterator]() method that returns an iterator object.

const app2 = {
    nextIndex: 0,
    teams: ['Chelsea', 'Arsenal', 'Man Utd', 'Liverpool'],
    [Symbol.iterator]() {
        return {
            next: () => {
                return this.nextIndex < this.teams.length
                    ? { value: this.teams[this.nextIndex++], done: false }
                    : { done: true };
            }
        }
    }
}

console.log(app2[Symbol.iterator]().next()); // returns {value: 'Chelsea', done: false}

// The for...of loop uses the iterator protocol to iterate over the elements of an array.

for (let team of app2) {
    console.log(team);
}
