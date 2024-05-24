`SETS`;

// Sets are a collection of unique values. They are unordered and similar to arrays but they don't contain duplicates. They are not indexed and you can't access them using indexes. They are iterable. See example below

`Creating a set`
const set = new Set(1, 2, 2, 3, 4, 4, 4, 5, 5);

console.log(set); // returns {1, 2, 3, 4, 5} ... all duplicates are ignored and not added to the set

const set5 = new Set();

`Adding to a set`
set5.add(100);
set5.add('A string');
set5.add({ name: 'John' });
set5.add(true);
set5.add(100); // this is ignored because it is a duplicate

console.log(set5); // returns {100, "A string", {name: "John"}, true}


`Adding an array to a set`
const set6 = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5]);

console.log(set6); // returns {1, 2, 3, 4, 5} ... all duplicates are ignored and not added to the set


`Checking if a value is in a set`
console.log(set6.has(1)); // returns true
console.log(set6.has(6)); // returns false



`Getting the size of a set`
console.log(set6.size); // returns 5



`Deleting from a set`
set6.delete(1);



`Iterating through a set`
for (let item of set6) {
    console.log(item); // returns 2 3 4 5
}



`Converting a set to an array`
const setToArray = Array.from(set6);
console.log(setToArray); // returns [2, 3, 4, 5]



`Converting an array to a set`
const arrayToSet = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5]);
console.log(arrayToSet); // returns {1, 2, 3, 4, 5}



`Clearing a set`
set6.clear();
console.log(set6); // returns {}



`Sets are useful for removing duplicates from arrays`
const arrr = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5];
const set7 = new Set(arr);
console.log(set7); // returns {1, 2, 3, 4, 5}



`Making iterators from sets`
const set8 = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5]);

const setIterator = set8.values();  // returns an iterator object, same as set8.keys() and set8.entries(), they both return an iterator object

console.log(setIterator.next()); // returns {value: 1, done: false}