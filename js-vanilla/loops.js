`LOOPS`;
// A loop is a function that repeats until a certain condition is reached. There are different types of loops



`For Loops`;
// This is the standard loop and most commonly used. It's basic structure is as follows. It takes 3 arguments, the first is to initialize the variable, the second is the continuation condition, the third is the iterator

// for (initial value; continuation condition; iterator) { execution statements }


for (let i = 0; i < 10; i++) {

    if (i === 2)
        continue; // the continue statement lets you skip to the next step in an iteration
    else if (i === 7)
        break; // the break statement breaks you out of a loop

    console.log(i);
}

`Nested For Loop`;
// You can nest loops within loops

for (let i = 0; i < 5; i++) {
    console.log(`Number: ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// This will give you a multiplication table from 0 to 4


`For Loop for Arrays`;
// You can use a For Loop to loop through arrays> However there are now better ways to do this like forEach, map, forIn etc

cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}


`While Loops`;
// For loops are similar to while loops just with a different structure. With while loops, the initializer is declared outside the while loop, the condition is the defined alone and the iterator is declared within the instruction block

let i = 10;

while (i < 15) {
    console.log(i);
    i++;
}


// Nesting a While Loop

while (1 < 5) {
    console.log(`Number: ${i}`);

    let j = 0;
    while (j < 10) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
}



`Do While Loops`;
// The do while loop is unique. Unlike the For and While Loops, the instructions are written first and run at least once before any the condition is tested

i = 15;

do {
    console.log(i);
    i++;
} while (i < 20);









`LOOPING THROUGH ARRAYS`;
// While you can still use standard loops with arrays, arrays have special loop functions like foreach, forIn....

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];


`For Loops with Arrays`;
for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}



`For Of Loops`;
// The For Of loop is a newer way to loop through iterable objects like arrays, strings, maps, sets etc. It's similar to the For In loop but For In is better suited to objects

// The structure is as shown below

for (let arrayItem of array) {
    //     do these to the unit 
}

for (let car of cars) {
    console.log(car);
}


// For Of Loops with Strings

str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}

// For of Loop w/ Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
    console.log(`${key} = ${value}`);
}




`For In Loops`;
// the for in loop is used to loop through the keys of an object. It's structure is as follows

for (let key in object) {
    'do these to the key';
    'do these to the object[key]'; // this is how you get the value of the key
}

colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'green'
}

for (let key in colorObj) {
    console.log(key); // returns the keys
    console.log(colorObj[key]); // returns the values
}


// You can still use the For In loop to loop through arrays but it's not recommended as it's not as efficient as the For Of loop







`array.forEach Loops`;
// The forEach method loops through an entire array and is written like below. It takes a callback function with 3 possible arguments, element, [index] and [array]... the last 2 are optional). 

// the structure is as follows

`arrayForEach.forEach((element, index, array) => {Instructions to carry out on each item}`;

cars.forEach((car, index, array) => {
    console.log(`${index} : ${car}`);
    console.log(array);
});


// To check the inbuilt methods and properties of any variable/data-type, you can use console.log(variableName.__proto__) 






'array.Map Loops';
// The map method creates a new array populated with the results of performing a function on each value of the old array. Basically mapping

const mapUsers = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Ehita' },
]

const ids = mapUsers.map((user) => {
    return user.id; //the map function creates a sub array from an array
});

console.log(ids);







`forIn Loops (used on objects)`;
// the for in loop is different from all the others. It iterates through the keys in an object. In the example below, x represents each key. You can get the values by bracket notation object[key]
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35
}

for (let x in user) {
    console.log(x, ` : ${user[x]}`);
}