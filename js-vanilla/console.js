`CONSOLE`

    // Log to console
    `You can log just about anything to the console. It is a great tool for testing or viewing what's happening`;

console.log('Hello World');
console.log(123);
console.log(true);
let greeting = 'Hello';
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });



// console.error
console.error('an error'); // prints out the message with an orange error color. You can use it to debug



console.clear();

// console.warn
console.warn('a warning'); // prints out the message with a red warning color


// console.assert()
console.assert(5 === 5); // throws an error if the assertion is false or else it does nothing



// TIME FUNCTION
`The Time function is used to calculate how long it takes all the code wrapped between it to run`;

console.time('Hello');
console.log('Hello World');
console.log(123);
console.log(true);
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 }); // prints out a table
console.timeEnd('Hello');