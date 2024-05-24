`GENERATORS`;

// Generators are functions that can be paused and resumed. They are created using a function* declaration. When called, they return a iteratpr object. 

// Generators are useful for creating iterators, which are objects that can be iterated over using the for...of loop. They can also be used to implement asynchronous programming using the yield keyword.

// The yeild keyword pauses the execution of the generator function and returns a value to the caller. The next() method of the Generator object can be used to resume the execution of the generator function and pass a value back to it.

// Generators can be used to create infinite sequences, as they can be paused and resumed indefinitely.

// Example of a generator function that generates an infinite sequence of numbers:

function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const iterator = infiniteSequence();
for (let i = 0; i < 5; i++) {
    console.log(iterator.next().value);
}
// Output: 0, 1, 2, 3, 4


function* createTeamIterator(teams) {
    for (let i = 0; i < teams.length; i++) {
        yield teams[i];
    }
}

const teams = ['Red Sox', 'Yankees', 'Rays', 'Blue Jays'];

const teamIterator = createTeamIterator(teams);

console.log(teamIterator.next()); // returns {value: "Red Sox", done: false}
console.log(teamIterator.next()); // returns {value: "Yankees", done: false}
console.log(teamIterator.next()); // returns {value: "Rays", done: false}
console.log(teamIterator.next()); // returns {value: "Blue Jays", done: false}
console.log(teamIterator.next()); // returns {value: undefined, done: true}



`SPREAD OPERATOR WITH GENERATORS`;
// You can use the spread operator to get the entire array of values from a generator function.

console.log([...teamIterator]); // returns ["Red Sox", "Yankees", "Rays", "Blue Jays"]



`DESTRUCTURING WITH GENERATORS`;
// You can use destructuring to get each value`

const [first, second, third, fourth] = teamIterator;    // assigns each value to the corresponding variable

console.log(first); // returns "Red Sox"




// Sample project - modern_js/projects/profile-scroller