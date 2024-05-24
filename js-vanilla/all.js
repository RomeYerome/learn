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


`SINGLE LINE COMMENTS`;
// single line comments are created with


`MULTI-LINE COMMENTS`;
/*
    multi-line
    comments
*/










// VAR, LET & CONST
`VAR and LET are used to declare variables. They are similar on the global scope but differ in local scope with LET conforming to local / block level scope while var does not. 

They can be initialized without assigning a value. In this case it's value is undefined. 

Let is a new ES6 standard and is better than var cos it conforms to block level scope while var can show up outside it's block and cause unplanned issues.



CONST is used to declare constants and once created it's value can't be changed... a pseudo exception are arrays/objects where the values inside can be changed. 

You also can't create a const and not assign a value as you do with VAR and LET

names of variables/constants can contain letters, numbers, underscores and the $ sign but it can't start with numbers
`;


// DATA TYPES
`There are 2 main data types, PRIMITIVE and REFERENCE`;


// Primitive Data Types
`PRIMITIVE data types are stored directly in the location in memory the variable accesses. They are stored on the STACK`;

// Reference Data Types
`REFERENCE data types store a pointer in memory that references the actual location of the data. i.e they reference another location in memory. Reference data types are stored in the HEAP`;

let primitiveDataTypes = ['String', 'Boolean', 'Symbol', 'Number', 'NULL', 'Undefined'];

let referenceDataTypes = ['Arrays', 'Object Literals', 'Functions', 'Dates', 'Anything Else'];


// DYNAMICALLY TYPED LANGUAGE
`javascript is a dynamically typed language, i.e the data types are associated with the values not the variables themselves. So we don't have to specify types when creating variable and the same variable can hold a number, then hold a string without throwing any errors

This is unlike statically typed languages like C++ that the data type must be declared on the variable and it can only hold that type of data

There are technologies like Typescript which is a superset of JS that can turn JS to a statically typed language`;




// PRIMITIVE DATA EXAMPLES

let name3 = 'John Doe';
console.log(typeof name3); // returns String

let num = 5;
console.log(typeof num); // returns Number

const hasKids = false;
console.log(typeof hasKids); // returns Boolean

const car = null;
console.log(typeof car); // should return Null but returns Object (it's a bug)

let test;
console.log(typeof test); // returns Undefined

let sym = Symbol();
console.log(typeof sym); // returns Symbol





// REFERENCE DATA EXAMPLES --- all return Objects as typeof




// Array
const hobbies = ['movies', 'swimming'];
console.log(typeof hobbies); // returns Objects

// Object Literal
const address = {
    city: 'Boston',
    state: 'MA'
};
console.log(typeof hobbies); // returns Objects

// Date 
const today2 = new Date();    // console.log(typeof today) returns Objects





// DATA TYPE CONVERSION
`You can convert data from one type to another, mostly number to string or to boolean and vice versa`;


`STRING CONVERSIONS`;

num = 5;

// CONVERT TO STRING
`There are 2 main methods for converting to string. They are the `;

// 1. String(variable)
num = String(num); // returns the string '5' because num = 5 

// 2. variable.toString()
`the toString() method`; num.toString();

console.log(typeof num.toString());      // returns String '5'
console.log(typeof (5).toString());      // returns String '5'


//string.length
`strings and arrays have a length property, you can check if a variable is a string by checking the length. if it throws an err, it's not a string or array`;

console.log(num.length);   // the length function won't work on a number, only things like strings, arrays etc




// CONVERT BOOLEAN TO STRING
console.log(String(true));      // returns the string 'true' 
(true).toString(); //returns the string 'true'



// CONVERT DATE TO STRING
console.log(String(new Date()));      // returns the date as a string


// CONVERT AN ARRAY TO A STRING
console.log(String([1, 2, 3, 4]));      // returns 1,2,3,4 as a string




`NUMBER CONVERSIONS`;

// CONVERT TO NUMBERS
`To convert a boolean or string to a number, you use one of these functions`;

Number(variable); // converts the variable to a number if possible else returns NaN

parseInt(variable); // converts the variable to an integer if possible else returns NaN

parseFloat(variable); // converts the variable to a float if possible else returns NaN

num = '5';
console.log(num); // logs the string 5

num = Number(num); // converts num to the number 5


// Convert Boolean to Number
console.log(Number(true));    // Returns 1
console.log(parseInt(false));    // Returns 0


// Convert String to Number
console.log(Number('hello'));    // Returns NaN (not a number)


// Convert Null to Number
console.log(Number(null));    // Returns 0


// Convert undefined to Number
console.log(Number(undefined));    // Returns NaN


// variable.toFixed();
console.log(num.toFixed(3)); // Returns 5.000 with 3 decimal places




console.log(typeof String(5));  // Returns String
console.log(typeof parseFloat('60.3')); // Returns Number: if you need to convert to decimals then use parseFloat



`TYPE COERSION`;
// ADD A STRING AND NUM
`converts the number to string and concatenates them, this is called type coersion`;

console.log(5 + 'num');      // returns the string '5num' 






// NUMBERS AND THE MATH OBJECT
`You can perform basic calculations with the math operators listed below. The math object gives you methods and properties for more complex calculations `;

num1 + num2; // the add '+' operator
num1 - num2; // the subtract '-' operator
num1 * num2; // the multiplication '*' operator
num1 / num2; // the division '/' operator
num1 % num2; // the modulo '%' operator which gives the remainder of a division




// MATH OBJECT
`The Math object has properties and functions for making complex calculations. Some of these methods and properties are listed below`;

let val = Math.PI; // returns the value of pi

Math.E; // returns the mathematical constant 'E' a.k.a eulers number

Math.round(val); // rounds a value to the nearest integer

Math.ceil(val); // rounds up a value to the nearest integer

Math.floor(val); // rounds down a float to the nearest integer

Math.sqrt(val); // finds the square root of a number

Math.abs(val); // returns the positive value of the number

Math.pow(val, 2); // returns the result of a value raised to power 2 or whatever number is specified

Math.min(6, 5, 3, 7, 8); // returns the min number in an array

Math.max(6, 5, 3, 7, 8); // returns the max number in an array

Math.random(); // returns a random float between 0 and 1

Math.trunc(6.35); // returns the integer part of the number

console.log(val);






`STRING METHODS & CONCATENATION`;
`Strings have unique properties like length and unique methods as well`;

let firstName = "Rome";
let lastName = 'King';
let stri = 'hello there my name is Rome';


`CONCATENATION`;
// Concatenation lets you join strings using + as shown below
val = firstName + ' ' + lastName; // the plus sign joins strings together

`APPEND`;
// Sometimes you want to add to the value of a string instead of replacing it. you do this by appending with +=
val += ' is my name.';


`ESCAPING`;
// In the case where strings have quotes or apostrophes or any special characters that are part of the coding language like <> in them, we use the back-slash '\' to escape these characters 
val = 'That\'s awesome, I can\'t wait!';


`LENGTH`;
// All strings have the length property and it returns the letter count of the string. since lenght is a property and not a method, we don't need parentheses
firstName.length;


`PARSE`;
// you can parse through strings like an array... the example below returns the 4th character (0 based index) of the string
firstname[3];




`STRING METHODS`;

`Concat()`;
// Concatenates strings just like the + 
firstName.concat(' ', lastName); // concatenates strings


`toUpperCase()`;
// This string method converts the entire string to uppercase xters
firstName.toUpperCase(); // returns uppercase version of string


`toLowerCase()`;
// This string method converts the entire string to lowercase xters
lastName.toLowerCase(); // returns lowercase version of string


`indexOf(characters)`;

//the indexOf function returns the 0-based position of the first occurence of the query character/string in the actual string from left to right. If its not there, it returns -1;

firstName.indexOf('o');


`lastIndexOf('characters')`
// similar to indexOf('characters') function but searches from right to left'

val = firstName.lastIndexOf('o');


`charAt(position)`;
// You can check what character is at any 0-index position using this function

val = firstName.charAt(2);  // returns the xter at the 3rd index of the array
val = firstName.charAt(firstName.length - 1); // gets last xter of the array


`substring(start, [finish])`;
// You can use this function to get a portion of a string. If you don't specify the end, it'll stop at the end of the string. It is zero-index, and when the [finish] index is specified, it stops just before it

firstName.substring(0, 4); // returns xters from 0 to 3 


`slice(start, [finish])`;
// Slice is like substring but it also works with arrays. Another difference is you can also count from the back by putting a negative number

firstName.slice(0, 4); // slice is like substring but is also used with Arrays
firstName.slice(-3); // with slice, you can put a negative number and it'll start from the end and return the last 3 in this case


`split(delimiter)`;
// the split function splits a string into an array at every occurrence of the delimiter. e.g "The lazy dog jumped over the fence" becomes ["the", "lazy", "dog", "jumped", "over", "the", "fence"] if split with spaces

str.split(''); // splits the string into an array at the delimiter (spaces)


`replace(word, replacement)`;
// The replace function replaces a word/words with the specified replacement

str.replace('Brad', 'Jack');    // replaces Brad with Jack



`repeat(number)`;
// The repeat function repeats the string the specified number of times

str.repeat(5); // repeats the string 5 times


`includes(search-string)`;
// The string includes function searches a string and returns true or false if it contains the specified word

str.includes('Brad');   // returns true if search string is found in string







`TEMPLATE STRINGS/LITERALS ES6`;

name = 'John';
age = 30;
let job = 'web developer';
city = 'San Francisco';

//  before ES6 and template literals
`Template literals allow you include code in strings organically by wrapping the strings in back ticks `` instead of quotes ''. Before template literals, you had to break out of the string and concatenate them as shown below`;

//  single line
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// OR multi line before es6
html = '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li>' +
    '</ul>';


// WITH TEMPLATE STRINGS using back ticks ``

function hello() {
    return 'hello';
}
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Test: ${6 % 4}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'over 30' : '30 or below'}</li>
    </ul>
`;

document.body.innerHTML = html;




























`ARRAYS`;

`An array in JS is used to store a collection of values in one place. These values are most times related. 

There are two ways to create arrays, the literal way or using the array constructor object`

    // Literal Method
    ``
const numbers = [45, 56, 33, 23, 44, 36, 5];    // literal


// Constructor Method
const numbers2 = new Array(22, 45, 33, 76, 54);     // array constructor



`An array can host homogeneous content like all strings, or it can be mixed`;

const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];

const mixed = [22, 'hello', true, undefined, null, { a: 1, b: 2 }, new Date()];


`ARRAY PROPERTIES & METHODS`;

`Get Value At Given Index`;
// You can get what is stored at a specific index in an array using the bracket notation

val = numbers[3]; // gets what is stored in the 4th box of the array


`Insert Into Array At specific Index`;
// You can assign or change a value at a specific index of an array

numbers[3] = 49; // assigns 49 to the 4th box of the numbers array


`length`;
// Get the length of an array. i.e how many boxes it has (not 0 based)

numbers.length; // returns the length of the numbers array






// STATIC ARRAY METHODS
`Array.isArray(variable)`;
// Using the Array Object, you can check if a variable is an array with it's isArray method

Array.isArray(numbers); // check if 'numbers' is an array


`Array.from`;
// Converts array-like objects such as node-lists and html-collections to arrays
Array.from(nodelist);


`Array.of`;
// you can make an array of the values of multiple variables as shown below

a = 1;
b = 2;
c = 3;

Array.of(a, b, c); // will return an array [1, 2, 3]




`indexOf(value)`;
// You can check what the index of a given value is in an array using the indexOf method

numbers.indexOf(5); // returns the index of 5 if found in the numbers array or -1 if not found


`includes(value)`
// checks if a value is in an array and returns true or false
numbers.includes(5)




    `MUTATING ARRAYS`;

`push(val)`;
// the push method adds new values to the rear of an array

numbers.push(69); // adds 69 to the end of the numbers array

`pop()`;
// the pop method removes the value at the end of the array

numbers.pop(); //  removes the last value from end of array


`unshift(val)`;
// the unshift method adds new values at the beginning of an array

numbers.unshift(29); // inserts 29 at the beginning of the numbers array


`shift()`;
// the shift method removes the 1st value of an array

numbers.shift(); // removes the 1st item in the numbers array





`slice(start, [finish])`
// slice just as with strings returns a subset of the array from the start index to the item just before the finish index. It does not delete these items from the array, only copies them into a new variable... In this way it is different from splice.

// the finish index is optional and if not given, it selects everything from the start index to the last item in the array

// if you enter a negative number, it counts from the end of the array i.e -4 will return the last 4 elements of the array

numbers.slice(1, 4) // It is zero based so it returns the 2nd to the 4th element of the numbers array

numbers.slice(1) // returns the 2nd all the way to the last element in the array

numbers.slice(-2) // returns the last 2 elements of the array






    `splice(startIndex, deleteCount, [newItems])`;

// the splice method lets you delete a given number of items (deleteCount) from an array, starting from a specified startIndex, and optionally add newItems from the startIndex. 

// It returns an array with the deleted items

// Unlike Slice, Splice actually mutates the array. It deletes the items from the old array and saves them in the new one

`startIndex
- if startIndex < 0, startIndex + array.length becomes the startIndex
- if startIndex is < -array.length or omitted, 0 is used
- if startIndex > array.length, no item is deleted but newItems will be added if available`;


`deleteCount
- if deleteCount 'y' is omitted, or >= items left from startIndex, all items from start index are deleted. 
- if deleteCount is 0 or negative, no item will be deleted.

newItems
- is optional and it's the items you want added to the array at start index`

numbers.splice(x, y, [z]); // removes y elements starting at index x and returns an array with the deleted elements. if z elements are specified, it adds them at index x


`reverse()`;
// the reverse method reverses the given array

numbers.reverse(); // reverses the numbers Array





`NESTING, CONCATENATION AND THE SPREAD OPERATOR`

// You can put an array inside another array i.e [0, 1, 2, [3,4,5], 6]. This is called nesting. To access the nested array, you just need the index of it in the first array

numbers = [1, 2, 3, [4, 5, 6], 7, 8]

numbers[3] // will give you the nested array


    `FLATTEN`
// You can flatten nested arrays using the flat method

numbers.flat() // will flatten the above nested array and give you [1,2,3,4,5,6,7,8]



    `CONCATENATION`;
// the concat method joins 2 arrays and returns the new array

numbers.concat(numbers2); // joins the numbers and numbers 2 arrays and returns the new array



`SPREAD OPERATOR (...)`

// The spread operator is represented with 3 dots and is used on arrays and objects. Just like the name, it spreads out the array or object, basically listing its components. i.e like unwrapping the array.

fruits = ['apple', 'mango', 'berries'];

cars = ['bentley', 'ferrari', 'mercedes']

arr3 = [...fruits, cars] // will create a new array that is ['apple', 'mango', 'berries', ['bentley', 'ferrari', 'mercedes']]

arr4 = [...fruits, ...cars] // will create a new array that is ['apple', 'mango', 'berries', 'bentley', 'ferrari', 'mercedes']


    // as seen above, it spreads out the array to it's component parts






    `DESTRUCTURING ARRAYS`
// You can destructure arrays (pull out values into variables) just like you would with objects

let [x, y, ...rest] = [36, 15, 18, 19, 30] // x = 36, y = 15, rest = [18, 19, 30]

    // the first variable x will hold the first value in the array, second variable y will hold the second value in the array and the rest operator which is like a reverse of the spread operator will hold the remaining values in an array. 

    `THE REST OPERATOR`
    // it doesn't have to be called rest as used above, it is denoted by 3 dots before a variable name







    `SORTING ARRAYS`;

`The sort method converts elements in an array to their Unicode UTF-16 values and sorts them by values. 

This is fine for strings but with numbers, 200 is less than 9 as it only takes account of the first digit. To fix this, you have to use a compare function. 

The basis of the compare function is that it takes 2 values (a, b) and subtracts b from a. If the answer is a negative number, it returns -1 which means a is larger than b, this tells the sort method to swap both values. 

If the answer is 0, then it keeps the order and if the answer is positive, it keeps the order also cos a is less than b`;


fruits.sort(); // an array of strings sorts alphabetically

numbers.sort(); // without a compare callback function, the sort function only sorts numbers in arrays by the 1st digit i.e 9 > 17

numbers.sort((x, y) => { return x - y }); // by adding a compare function, it sorts properly. you can also reverse sort by returning y - x

//Reverse Sort
numbers.sort((x, y) => { return y - x }); // by subtracting x from y instead of the other way round you get a descending sort



`ARRAY FIND METHOD`;

`The find method takes a callback function with the condition you want to search the array with and it returns the first element that matches that condition`

numbers.find(element => element > 50); // searches the numbers array and returns the 1st value > 50




`HIGH LEVEL ARRAY METHODS`;

// MAP - Double Money FN
`The map method is a high level array method that alters every element of the array it is called on with the conditions/commands given and returns a new array containing the results. The original array is unchanged

it takes a callback function that can have 3 parameters, the arrayItem, the index of the arrayItem and the array itself

The syntax is 
newArray = oldArray.map(function(item, [index], [arrayItself]) {things to do to array item})`


function doubleMoney() {
    data = users.map(user => {
        return { ...user, money: user.money * 2 }
    });

    populateUI(data);
}

const companies = [
    { name: 'Company One', category: 'Finance', start: 1982, end: 1999 },
    { name: 'Company Two', category: 'Tech', start: 1982, end: 2006 },
    { name: 'Company Three', category: 'Retail', start: 2001, end: 2023 },
    { name: 'Company Four', category: 'Tech', start: 2007, end: 2020 },
    { name: 'Company Five', category: 'Tech', start: 1995, end: 2020 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2015 },
    { name: 'Company Seven', category: 'Fashion', start: 1994, end: 2012 },
    { name: 'Company Eight', category: 'Retail', start: 1988, end: 2009 }
]


const companiesInfo = companies.map(company => {
    return {
        name: company.name,
        category: company.category,
        lifespan: company.end - company.start + 'Years'
    };
});



// Sort FN - SORT
`Sort is a high level array method that rearranges the elements of an array in ascending/descending order and IN PLACE i.e. it alters the existing array, it DOES NOT create a new one

It does this by converting the values to strings and comparing their UTF-16 code unit values. As a result, you get expected results when you sort strings but wild results when you sort numbers as 100000 will be less than 2 because it starts with 1 (which is lower as a string on the scale)

To get desired results when sorting numbers you need to use a compare callback function

The syntax is
array.sort()
array.sort((a, b) => {a - b})` // if a is greater than b you get +1 and a is placed after b. If a is equal to b, you get 0 and both elements are left in place

function sortWealth() {
    data.sort((a, b) => b.money - a.money);

    console.log(data);
    populateUI(data);
}


//  FILTER
`The filter method is a high level array method that returns a new array containing the elements that meet a filter criteria in the call back function. As the name depicts, it is used to filter an array

the syntax is as follows
newArray = oldArray.filter(function(item) {filter condition to check item})`

function showMils() {
    let millionaires = users.filter(user => user.money > 999999);

    populateUI(millionaires);
}


// REDUCE
`The reduce method is a high level array method that returns a single value from an array after performing a user supplied reducer callback function on each element of the array. For example, the sum of the array

it takes a callback function that can have 4 parameters, the accumulator, the currentValue, the currentIndex and the array itself

the syntax is shown below:

value = array.reduce((accumulator, currentValue, [current Index], [array]) => accumulator + currentValue, initialValue);



The Accumulator - is the total value at the last call of the callback fn. At the start the accumulator is the value at array[0] or it is the initialValue if one is given

The CurrentValue - the value of the current element. At the start i.e array[1] if no initialValue is given, or array[0] if one is

initialValue [optional] - the value the accumulator is initialized for the first callback. If no initial value is given then the CurrentValue is array[1]`

function calculateWealth() {
    let totalWealth = data.reduce((accumulator, user) => accumulator += user.money, 0);

    // console.log(formatToMoney(totalWealth));
    const wealthEl = document.createElement('div');

    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatToMoney(totalWealth)}</strong></h3>`;

    main.appendChild(wealthEl);
}



// FOR EACH
`The forEach method is a high level array method that loops through all the items of an array and applys your commands to them

it takes a callback function that can have 3 parameters, the arrayItem, the index of the arrayItem and the array itself

The syntax is 
array.forEach(function(arrayItem, [index], [arrayItself]) { things to do to arrayItem})
`

function populateUI(data) {
    // reset UI
    main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;

    // iterate through user data and create divs forEach
    data.forEach(user => {
        const userElement = document.createElement('div');
        // add user style
        userElement.classList.add('person');
        userElement.innerHTML = `<strong>${user.name}</strong> ${formatToMoney(user.money)}`;
        // append in main
        main.appendChild(userElement);
    });

}



// SOME
`The some method is a high level array method that checks if at least one element in an array meets a condition and returns true or false

it takes a callback function that can have 3 parameters, the arrayItem, the index of the arrayItem and the array itself

The syntax is
array.some(function(arrayItem, [index], [arrayItself]) {condition to check arrayItem})`

function checkMillionaires() {
    let isMillionaire = data.some(user => user.money > 999999);

    console.log(isMillionaire);
}



// EVERY
`The every method is a high level array method that checks if all elements in an array meet a condition and returns true or false

it takes a callback function that can have 3 parameters, the arrayItem, the index of the arrayItem and the array itself

The syntax is
array.every(function(arrayItem, [index], [arrayItself]) {condition to check arrayItem})`

function checkAllMillionaires() {
    let isAllMillionaire = data.every(user => user.money > 999999);

    console.log(isAllMillionaire);
}



// FINDINDEX
`The findIndex method is a high level array method that returns the index of the first element in an array that meets a condition and returns true or false

it takes a callback function that can have 3 parameters, the arrayItem, the index of the arrayItem and the array itself

The syntax is
array.findIndex(function(arrayItem, [index], [arrayItself]) {condition to check arrayItem})`

function findIndex() {
    let index = data.findIndex(user => user.name === 'Rome');

    console.log(index);
}



// FIND
`The find method is a high level array method that returns the first element in an array that meets a condition and returns true or false

it takes a callback function that can have 3 parameters, the arrayItem, the index of the arrayItem and the array itself

The syntax is
array.find(function(arrayItem, [index], [arrayItself]) {condition to check arrayItem})`

function find() {
    let user = data.find(user => user.name === 'Rome');

}



// FLATMAP
`The flatMap method is a high level array method that returns a new array with the results of calling a provided function on every element in the array and then flattening the results into a single level array. It is the equivalent of calling the map method on an array and then the flat method on the resulting array, but it is more efficient than calling both methods separately

it takes a callback function that can have 3 parameters, the arrayItem, the index of the arrayItem and the array itself

The syntax is
array.flatMap(function(arrayItem, [index], [arrayItself]) {condition to check arrayItem})`

arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); // returns [[2], [4], [6], [8]] - map returns an array of arrays

arr1.flatMap(x => [x * 2]); // returns [2, 4, 6, 8] - flatMap returns a single array




// KEYS
`The keys method is a high level array method that returns a new array iterator object that contains the keys for each index in the array

it takes no callback function

The syntax is
array.keys()`

arr1 = [1, 2, 3, 4];

arr1.keys(); // returns an array iterator object that contains the keys for each index in the array




// VALUES
`The values method is a high level array method that returns a new array iterator object that contains the values for each index in the array

it takes no callback function

The syntax is
array.values()`

arr1 = [1, 2, 3, 4];

arr1.values(); // returns an array iterator object that contains the values for each index in the array




// ENTRIES
`The entries method is a high level array method that returns a new array iterator object that contains the key/value pairs for each index in the array

it takes no callback function

The syntax is
array.entries()`

arr1 = [1, 2, 3, 4];

arr1.entries(); // returns an array iterator object that contains the key/value pairs for each index in the array































`OBJECT LITERALS`;
// Objects are special containers that holds multiple defining properties and methods (functions). for example you can have a person object with properties like name, age, location etc and methods like greeting

// Object literals are used in creating a single object as shown below

`WARNING! you can't use arrow functions to create methods in objects, you'll get errors`;

const person4 = {
    firstName: 'Rome',
    lastName: 'Yerome',
    age: 35,
    email: 'rome.yerome@gmail.com',
    hobbies: ['music', 'movies', 'games'],
    address: {
        city: 'Lagos',
        country: 'Nigeria'
    },
    getBirthYear: function () { return 2022 - this.age }
}



// You can also create an object using the object constructor as shown

const person5 = new Object();

person5.firstName = 'John';




`Accessing Object Properties & Methods`;
// there are 2 ways to access an objects properties and methods. First is the dot notation and the other is using square brackets []

person.firstName; // using the dot notation

person['lastName']; // using square brackets like arrays

person.hobbies[1]; // accesses the 1st item of the hobbies array in the object

person.address.city; // accesses the city property in the address object of the person object

person.getBirthYear(); // accesses the getBirthYear method






`Mutating objects`;
// You can set/change the values of object properties just like you would with arrays or variables

person.firstName = 'Mary';

person['lastName'] = 'Oyeniyi';

person.hobbies[1] = 'fucking';

person.address.city = 'Abuja';

person.getBirthYear = function () {
    console.log("I'm not doin anything");
};


`THIS KEYWORD`;
// To access or edit a property of an object from within a method in the object, you have to use the 'this' keyword

let child = {
    firstName: 'John',
    lastName: 'Mayer',
    fullName: function () { return this.firstName + ' ' + this.lastName }
};


`NESTING`;
// Like arrays, you can nest objects too

person = {
    firstName: 'John',
    address: {
        city: 'Portharcourt',
        state: 'Rivers'
    }
};





`SPREAD OPERATOR WITH OBJECTS ...`
// Like we saw with arrays, you can unwrap an object to get to it's component parts, using the spread operator. using the two objects below, we'll demonstrate how this works

obj1 = { a: 1, b: 2 };
obj2 = { c: 3, d: 4 };

// If you combine without spreading, you get an obj with 2 nested objects

obj3 = { obj1, obj2 }; // this results in an object like this {obj1: {a:1, b:2}, obj2: {c:3, d:4}}

// using the spread operator, you unwrap the objects and get their components only

obj4 = { ...obj1, ...obj2 }; // this results in the following object {a:1, b:2, c:3, d:4}





`STATIC OBJECT METHODS`;
//  Just like arrays, objects have their own static methods too

`Object.keys([object])`;
// this static method takes an object variable as an argument and returns an array of the keys in that object variable

Object.keys(person); // would return an array such as ['name', 'number', 'address'] if those are the keys in the person object


// you can't find the length of an object but by using Object.keys you get an array of the keys and you can get the length of that array
Object.keys(person).length;



`Object.values(object)`;
// the opposite of Object.keys, it returns an array of the values
Object.values(person);


`Object.entries(object)`;
// a combination of both, returns an array containing arrays of key:value pairs

Object.entries(person); // returns an array like this [ ['name', 'John'], ['age', 34]]









`object.hasOwnProperty('property')`;
// not a static method but just like the includes method for arrays, it returns a boolean telling you if that property is in the object

person.hasOwnProperty('hobbies'); // returns true if it exists and false if it doesn't












`DESTRUCTURING AND NAMING`;

// If you are creating an object literal and assigning the values from variables that are the same name as the key, you don't need to write both

firstName = 'John';
lastName = 'Buck';

// You can create an object as follows without writing key: value, because both the key and the value are the same name
person = {
    firstName,
    lastName,
    address1: {
        city1: 'Benin',
        state: 'Edo'
    }
}


// DESTRUCTURING on the other hand is an easy way to pull out values from an object. If you know the key names in an object, you can pull them into same name variables like this

// {keyname1, keyname2, keyname3} = objectName as long as keyname1, keyname2 and keyname3 are actual keys in the object
let { title1, status } = person;

let { title, address1 } = person; //assigns the address1 which is a nested object to the variable address1 
let { address1: { city1 } } = person; //assigns the city1 property within the address1 nested object to the variable city1 




`DESTRUCTURING & RENAMING ON THE FLY`
// You can rename variables on the fly while destructuring objects as shown below
let { title: title2 } = person;

// the value of title from the person object, gets stored in the variable title2














`JSON - JAVASCRIPT OBJECT NOTATION`
// It is a lightweight data interchange format, essentially a way of storing and transfering data in a lightweight human readable format. The syntax is very similar to JS literal object syntax, main difference is the keys and values are in double quotes unlike literal objects where only the values are in quotes (if they are string) 

// a json file will have the .json extension and will typically hold an array of JSON as shown below

[
    {
        "id": 1,
        "title": "Post One",
        "body": "This is the body"
    },
    {
        "id": 2,
        "title": "Post Two",
        "body": "This is the body"
    }
];


`CONVERTING BETWEEN JSON & OBJECT LITERALS WITH JSON.stringify and JSON.parse`;
// You can convert literal objects to json using the JSON.stringify(object) method and vice-versa using the JSON.parse(JSON) methods

const jsonString = JSON.stringify(objectName); // converts the given object to a JSON string

const literalObject = JSON.parse(jsonString); // converts the given JSON into an object literal





























`DATES & TIMES`;

// the date constructor in javascript creates a date object.

`Today's Date`;
// If you create a new date object without arguments, you get a date object with today's date

const today = new Date(); // returns a date object with today's date for example 2022-02-03T14:00:00.000Z


`Specific Date`;
// To create a date argument with a specific date, pass in the date as an argument

const birthday = new Date('2/3/1987'); // returns a date object with February 3rd 1987


`Now: Time in Milli Seconds`;
// the Date.now() method is a static method that gives you the no of milliseconds since 00:00 on January 1st 1970 till now

Date.now(); // returns no of milli seconds since 1st jan 1970 till now


`Parse: Time in Milli Seconds for Specific Date`;
// The Date.parse(date string) method gives you the no of milliseconds between the given date-time and 00:00 on January 1st 1970

Date.parse('04 Dec 1995 00:12:00 GMT'); // returns the number of milliseconds btw the given date-time and jan 1st 1970


`getFullYear() - 4 Digit year`;
today.getFullYear(); // returns the 4 digit year eg 2022
today.setFullYear(2023); // sets the year of the today date object

`getMonth() - Current Month: 0 - 11`;
today.getMonth(); // returns current month btw 0 (jan) to 11 (dec)
today.setMonth(11); // sets the month of the 'today' date object to December

`getDate() - Day of the Month: 1 - 31`;
today.getDate(); // returns day of the month from 1 to 31
today.setDate(13); // sets the day of the month to the 13th

`getDay() - Day of the week: 0-6`;
today.getDay(); // returns day of the week from 0 to 6
// you can't set day of the week, once you set the day of the month (setDate) it already corresponds to a day of the week

`getHours() - Current Hour: 0 - 23`;
today.getHours(); // returns the current hour btw 0 to 23
today.setHours(22); // sets the hour to 11pm


`getMinutes() - Current Minute: 0 - 59`;
today.getMinutes(); // returns current minute btw 0 to 59
today.setMinutes(55); // sets the minute to 55

`getSeconds() - Current Second: 0 - 59`;
today.getSeconds(); // returns current sec btw 0 to 59
today.setSeconds(30); // sets the seconds to 30


`getTime() - Seconds since Jan 1st 1970`;
today.getTime(); // returns no of milliseconds since 00:00 jan 1, 1970
today.setTime(); // sets the no of milliseconds since Jan 1, 1970


`getTimezoneOffset() - Time Diff btw UTC and Current timezone`;
today.getTimezoneOffset(); // returns timezone offset in minutes to UTC time


`toDateString() - Date as String in local timezone `;
today.toDateString(); // returns the date as a string and in the local timezone


`toISOString() - Date as String in ISO format and UTC timezone`;
today.toISOString(); // returns the full date as a string in standard iso format with zero offset from utc eg. 2011-11-22T05:44:56.000Z


`toLocaleDateString()`;
today.toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }); // returns string of the date portion in language local to the user agent. takes modifying option object as argument


`toLocaleString()`;
today.toLocaleString('en-GB', { timeZone: 'UTC', month: 'short' }); //Converts a date and time to a string by using the current or specified locale.


// If you add timeZone: 'UTC' you'll get the equivalent UTC value

// If you use set instead of get, you can alter the values of a stored date

console.log(today.getUTCDate());
































`CONTROL FLOW: LOGIC & CONDITIONALS`;

`conditionals like if statements let you do different things depending on a condition. To achieve this you use comparism operators`;

// The general theme of an if statement is as follows

if (true) {
    // do everything in this execution block
} else if (false) {
    // do everything in this execution block
}

// basically if everything in the condition parentheses evaluates to true, do what's in the execution block. And if it evaluates to false, do what's in the corresponding block


let id = 200;


`If Exists or Is Set`;
// The first of 2 ways to check if a variable exists is as follows
if (id) {
    //do something
}
// The problem with the above code is, if the variable 'id' has not been created, you'll get a reference error

// The 2nd and better way to check if a variable exists is to test if variable is undefined
if (typeof id !== 'undefined')
    console.log(id);
else
    console.log('undefined');





`LOGICAL OPERATORS`;


`Less Than: < `;
if (id < 10) {
    //do something
}


`Greater Than: > `;
if (id > 10) {
    // do something
}


`Equal To: == OR === `;
// the == tests only the value while the === tests both the value & the type. i.e with == the string '100' is equal to the number 100 but with === it is not

if (id === 10) {
    // do something
}


`Not Equal To: !== `;
// just like Equal to, != tests value alone, while !== tests value and type
if (id !== 5) {
    // do something
}


`Greater Than or Equal To: >= `;
if (id >= 10) {
    // do something
}


`Less Than or Equal To: <= `;
if (id <= 10) {
    // do something
}



`Logical AND: && `;
if (id < 10 && id > 5) {
    // do something if id is less than 10 but greater than 5
}


`Logical OR: || `;
if (id === 10 || id === 50) {
    // do something if id is equal to 10 or 50
}




`SHORTHAND IF`
// Just as with arrow functions, if the execution block of an if statement has only one line, you don't need the curly braces. see below

if (x < 10) x * 2; // this is perfectly valid javascript

// If you have multiple lines of commands in the execution block, you can seperate them with commas and not need the curly braces but it's clumsy and not recommended

if (x > 10)
    x * 2,
        console.log(x);
else
    false;



`IF, ELSE-IF, ELSE`;
// You can chain many conditions together using if, else-if and else blocks

if (id < 200) // less than
    console.log(id);
else if (id > 200 && id < 300) // less than, greater than, and
    console.log(id);
else if (id >= 400 && id <= 500) // greater than or equal to, less than or equal to
    console.log(id);
else if (id == 600 || id === '700') // equal to, OR, exactly equal to
    console.log(id);
else if (id != 800 && id !== 900) // NOT equal to, AND, NOT exactly equal to
    console.log(id);
else {
    console.log('i kid');
}




`TERNARY OPERATOR`;

// The Ternary operator is a simplified conditional statement used when you have only one condition and require a simple response e.g return true or false

let ter = 100 === 100 ? true : false; // if 100 is equal to 100, return true, else return false: assigns true to ter


// Use Case

let auth = true;

auth
    ? (console.log('You are logged in'), redirect = '/dashboard')
    : (console.log('You are not logged in'), redirect = '/login')
// if auth is true, log 'You are logged in' and redirect to dashboard, else log 'You are not logged in' and redirect to login page


auth ? console.log('Welcome to the dashboard') : null; // if auth is true, log 'Welcome to the dashboard', else log null


// You can also only test for TRUE by using the double ampersand (&&) instead of the question mark ?

ter = 100 > 5 && true; // assigns true to ter






`&& Advanced`

console.log(10 > 5 && 20 > 10); // returns true cos both items are true;
console.log(10 < 5 && 20 > 10); // returns false cos one item is false;


`The double ampersand will return the first falsy value, or the last value`

a = 10 && 20 && 30; // returns the last value, since there is no falsy value
a = 10 && 0 && 30; // returns 0, since it's a falsy value


// Use Case
posts = ['Post One', 'Post Two'];

posts.length > 0 && console.log(posts[0]); // if the posts array is empty and you don't do this length check, you'll get undefined. with the check you'll only get the commands if the condition is true






`&&= assigns the right side value only if the left is a truthy value`

a = 10;

if (a) a = 20; // assigns 20 to a cos a is truthy i.e a in this case is not a falsy value so it's truthy

a = a && 20; // same as above: assigns 20 to a cos a is truthy: remember, && returns the first falsy value or the last value

a &&= 20; // assigns 20 to a cos a is truthy and it's a shorthand way of writing the above if statement







`|| Advanced`

console.log(10 > 5 || 20 < 10); // returns true cos one item is true;
console.log(10 < 5 || 20 < 10); // returns false cos no item is true;

`Will return the first truthsy value or the last value`

b;

b = 10 || 20; // returns 10 
b = 0 || 20; // returns 20
b = 0 || null || '' || undefined; // returns undefined since none of the values are truthsy and it is the last value





`||= assigns the right side value only if the left is a falsy value`

a = false;

if (!a) a = 10; // assigns 10 to a cos a is false

a = a || 10; // assigns 10 to a cos a is falsy: remember, || assigns the first true value or the last value

a ||= 10; // assigns 10 to a cos a is false and it's a shorthand way of writing the above if statement






` ?? Advanced

Returns the right side operand when the left is null or undefined. It is important to note that it will only pass when the values are null or undefined, not just any falsy value`


null ?? 20; // returns  the right operand - 20, because the left operand is null;
10 || 20; // returns 10 because the left operand is not null or undefined;


`??= assigns the right side value only if the left is null or undefined`

a = null;

if (a === null || a === undefined) a = 10; // assigns 10 to a cos a is null

a = a ?? 10; // assigns 10 to a cos a is null: remember, ?? assigns the first null or undefined value or the last value

a ??= 10; // assigns 10 to a cos a is null and it's a shorthand way of writing the above if statement












`SWITCH STATEMENTS`
// The switch statement is another shorthand special purpose vehicle for conditionals. If you need to compare one value against a number of values... The switch statement is perfect. 

// get current day  

let day;

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
    default:
        break;
}

console.log(`the day is ${day}`);



let color = 'yellow';

switch (color) {
    case 'blue':
        console.log(`${color} is the right color`);
        break;
    case 'red':
        console.log(`${color} is the right color`);
        break;
    default:
        console.log(`${color} is not the right color`);
        break;

}



`Falsy Values`;
// These values will equate to false in a Boolean test

// false
// 0
// '' OR "" i.e an empty string
// null
// undefined
// NaN




`Truthy Values`;
// Everything else that is not falsy
// true
// '0' OR 'zero' (the string zero)
// ' ' (space in a string)
// 'false' (false as a string)
// [] an empty array
// {} an empty object
// function(){} - an empty function





























`FUNCTIONS`;
// functions are reusable blocks of code that let you carry out predefined instructions. They accept arguments so the outcomes can be dynamic.

`Arguments, Parameters and Invoking`;
// The placeholders/variables when declaring a function are called ARGUMENTS and they are local to the function i.e you can't call those variables outside the function. When you pass in the value while INVOKING the function, they are called PARAMETERS. If you don't assign parameters to an argument, it's value will be 'undefined' within the function

`Return`;
// the return keyword in a function is used to send out a value from the function so we can use it. It also terminates the function so any code written after the return statement is not attended to or executed




`Types of functions`;
// There are various kinds of functions

`Named Functions: Function Declaration`;
// named functions can be called any time by using the name followed by parentheses

function greet(firstName = 'Rome', lastName = 'Yerome') {
    return `Hello ${firstName} ${lastName}`;
}

`Annonymous/nameless functions / Function Expressions`;
// annonymous functions can be assigned to a variable and called with the variable name later

const square = function (x = 3) {
    return x * x;
};

console.log(square(8));


`Hoisting`;
// This is a concept where all your functions and variables are moved to the top of the code before the page is executed so they are available at the top. This allows you call a function before it is declared. 

// This only happens with Declared functions (named functions)  and not with Function Expressions (nameless functions)






`Immediately Invoked fn expressions - IIFEs`;

// As the name suggests, these are functions that run immediately they are declared. They are created by wrapping an annonymous function (or a named function if you're going for recursion) in parentheses, immediately followed by parenthesis [with arguments] to call it at once

(function (year) {
    console.log(year);
})(new Date().getFullYear());



`Arrow Functions`
// Arrow functions are part of the new standard ES6 standard and offer an easier way to write functions. the syntax is as follows

// Standard Arrow Function
const add = (a, b) => { return a + b }; // this will give you the same result as a function declaration

// Implicit Return Arrow Function
const minus = (a, b) => a - b; // Here the 'return' keyword is Implicit. You can only do this when you have a straightforward, one line return statement

// Single parameter functions 
const double = a => a * 2; // When you have a single parameter, you don't need to enclose it in a bracket when writing arrow functions

// Returning Objects with Arrow Functions
`Wrong Way:`
const createObj = () => { name: 'Brad' }; // If you try to return an object with an arrow function, you'll get an error/undefined. You have to wrap the object in parentheses. The confusion is because you will normally wrap the execution part of a function in curly brackets, so it doesn't know it's an object

`Right Way:`
const createObject = () => ({ name: 'Brad' });








`Rest parameters (...)`;
// As with arrays, you can have rest parameters. if you declare a function with arguments/an argument with the rest format (3 dots before it), the corresponding parameters are put in an array as shown below

function rest(num1, ...rest) {
    console.log(num1); // returns the first parameter when the function is called
    return rest;    // returns all other parameters in an array
}


`Objects as params`;
// You can pass in objects as parameters too

function loginUser(user) {
    return `The user ${user.name} with id ${user.id} is logged in`;
}

loginUser({
    id: 1,
    name: 'Henry'
});


`Arrays as params`
// You can also pass in arrays as params
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

getRandom([7, 8, 9, 10, 11, 12, 13, 14, 15]);


`Object Methods`;
// When a function is inside an object it's called a method.

const todo = {
    add: function () {
        console.log('Add todo...');
    },
    edit: function (id) {
        console.log(`Edit todo ${id}...`);
    }
}

// You can also add methods to an object using  function expressions
todo.delete = function () {
    console.log('Delete todo...');
};

todo.add();
todo.edit(11);
todo.delete();



`SCOPE: GLOBAL, BLOCK AND FUNCTION`;

`Global scope:`;
// As the name goes, these are accessible through out the program/page. When you declare a function or variable at the top level of a page, i.e. not inside a function or loop or any block, it is global. You can access it anywhere on that page even within functions or blocks. JS also has some default global variables, objects and methods. eg. the window object and it's methods such as alert('Hello World')

`Function scope`;
// If the variable is created within a function, it has function scope. i.e you can't access it outside of the function, you'll get an error saying the variable is not defined if you call it. All 3, var, let and const are function scoped and won't be accessible outside the function


`Local scope`
// variables created within a block (loops and conditionals for example) are local to those blocks and can only be called within those blocks. One exeption is when you create them using the var keyword as var is not block scope and can be accessed and mutated outside the block. This leads to unwanted experiences and var should be avoided for this reason except it's what you want

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

console.log(a); // returns an error saying a is not defined as it is only accessible within that block
console.log(b); // returns an error saying b is not defined as it is only accessible within that block
console.log(a); // returns c as var is not block scope



`IMPORTANT: when you create a variable with var, it gets added to the window object, hence why it is accessible anywhere`;




`Nested Scope`;
// When you nest functions or blocks like loops and conditionals, you can access parent variables from the child block but you can't access child elements from the parent blocks

function parent() {
    let x = 100;

    function child() {
        let y = 200;
        console.log(x + y); // here we're reaching out to grab x from the parent function block to use within the child block
    }

    console.log(y); `THIS WILL GIVE AN ERROR COS WE'RE REACHING INTO THE CHILD FROM THE PARENT`

    child();
}

parent(); // 



`Execution Context`;
// When you run any JavaScript, a special environment is created to handle the transformation & execution of code. This is called the execution context. It contains the currently running code and everything that aids in its execution.

// There is a global execution context as well as a function execution context for every function invoked.

`When a script is loaded, there are 2 phases in the execution context, the MEMORY CREATION PHASE and the EXECUTION PHASE

Memory Creation Phase:
1. The global object is created (browser = window, Node.js = global)
2. The 'this' object is created and bound to the global object. That's why if you type this in the browser console, you get the window object
3. Sets up memory heap for storing variables and function references
4. Sets values of variables to undefined and stores functions to global memory without running it

Execution Phase:
1.Executes code line by line
2. Creates a new execution context for each function call`;


`THE HEAP`;
// The heap is a region of a computer's memory where dynamic memory allocation occurs at runtime. It sets aside memory for data (variables, objects, arrays ) that is not known at compile time and needs to be allocated and deallocated dynamically during execution

// The heap is typically managed by the operating system or a memory management system, which tracks allocated and deallocated memory to prevent memory leaks and ensure efficient memory usage.

// Memory in the heap persists beyond the scope of individual function calls and can be accessed and modified from different parts of the program. However, managing memory in the heap is the responsibility of the programmer, and failing to deallocate memory when it's no longer needed can lead to memory leaks.



`THE CALL STACK`;
// When we run a function, it creates a local execution context for that function. The call stack is a data structure in memory that keeps track of function calls and their respective contexts during program execution. When a function is called a new stack frame (local context) is created on the call stack to store information about the functions parameters, local variables and return address. This allows the program return to the calling function when the called function completes.

// As functions are called, their stack frames are pushed onto the call stack and popped off when executed (when the function returns)

// The call stack follows a Last-In-First-Out(LIFO) order, meaning the most recently called function is at the top of the stack and gets executed first. The call stack is essential for maintaining the order of function execution and ensuring that function calls return to the correct location in the code.








































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

































`THE WINDOW OBJECT`;

`In Node JS which is a Javascript runtime environment, your computer is your environment, while in client side JS, your browser window is your global environment. Node JS and Chrome both use the same JS engine called V8

The window object has a lot to it, things that JS devs use all the time like local storage, fetch api, the navigator object etc

if you type 'window' in the console, you'll see the entire window object`;


`WINDOW OBJECT, METHODS & PROPERTIES`;
// The window object is extensive with so many useful properties, methods and apis. The console is part of the window object so technically you can write window.console.log(), but you don't need to include window since it's the root 

`Alert, Prompt, Confirm`
alert("Hello World"); // the alert method displays your message in a pop up on the screen

prompt("What's your name?"); // the prompt api pops up with a request for user input which you can store for future use. was very useful in the 90s

if (confirm("Are you sure?")) {
    console.log('Yes');
};



`Outer/Inner height & width`;
// The window object has inner and outer height and width properties, these can be used for varied reasons such as media queries

val = window.outerHeight;   // returns the outer height of the window i.e the entire browser window
val = window.innerHeight;   // returns the inner height of the window i.e the height of the viewport

val = window.outerWidth;    // returns the outer width of the window i.e the entire browser window
val = window.innerWidth;    // returns the inner width of the window i.e the width of the viewport


`Scroll points`;
// Vertical and Horizontal scroll points in the window object can be used to trigger animations at different points.

val = window.scrollY;   // returns the vertical scroll point i.e how far down the page you've scrolled
val = window.scrollX;   // returns the horizontal scroll point i.e how far across the page you've scrolled


`Location Object`;
// The Location Object is a massive resource with information about the location of the document. It has various useful methods and properties

// some of it's most useful properties are
val = location; // OR window.location assigns the location object
val = window.location.hostname; // assigns the hostname eg: "localhost"
val = window.location.port; // assigns the port eg: "54681"
val = window.location.href; // assigns the href value "http://localhost:54681/modern%20js/sandbox/swipe.html"

val = window.location.search; // returns the query part of the url including the ? e.g "?foo=bar"

// You can also set these values and one cool way is to do a redirect by setting the href
window.location.href = "http://google.com"; // this will redirect you to google.com

window.location.reload(); // reloads the page




`History Object`;
// The history api helps you navigate your browsing history
history.forward(); // goes forward one page
window.history.back(); // goes back one page
window.history.length; // returns the length of the history
window.history.go(-1); // used to go back over your history




`Navigator Object`;
//  The Navigator Object is very robust and tells you all about the users browser. Things like which browser the user is using, their geolocation etc
val = window.navigator; // assigns the navigator object
val = window.navigator.appName; // assigns the name of the browser
val = window.navigator.appVersion; // assigns the version of the browser
val = window.navigator.userAgent; // assigns the user agent string
val = window.navigator.platform; // assigns the platform of the browser
val = window.navigator.vendor; // assigns the vendor of the browser
val = window.navigator.language; // assigns the language of the browser



console.log(val);





`SCOPE`;

`If you define 3 different variables with var, let and const in the global scope, they are all global.

if you define the same variable names with var let and const but within a function. These 3 new variables are different and don't affect the values of their counterparts in the global scope

However, if you define 3 new variables with the same names using var let and const like before but within BLOCK SCOPE ELEMENTS like IF statements or LOOPs and you give them different values, the variable set with var changes the value of it's global counterpart`;

// var, let and const have function scope but only let and const have block scope... use let instead of var


// GLOBAL SCOPE
var a1 = 1;
let b1 = 2;
const c1 = 3;

// FUNCTION SCOPE
function test() {
    var a1 = 4;     // doesn't alter global a1
    let b1 = 5;     // doesn't alter global b1
    const c1 = 6;   // doesn't alter global c1
}

// BLOCK SCOPE
if (true) {
    var a1 = 7;     // alters global a1 (var doesn't have block scope)
    let b1 = 8;     // doesn't alter global b1 (let has block scope)
    const c1 = 9;   // doesn't alter global c1 (const has block scope)
}

console.log(`Global Scope: a: ${a}, b: ${b}, c: ${c}`);




































`THE DOCUMENT OBJECT MODEL - DOM`;

// The Document Object Model is basically a structured representation of a HTML Page. It can be thought of as a tree of nodes or elements created by the browser. These nodes/elements are the paragraphs and spans and basically every element that constitutes your html page. You can read, write and manipulate the DOM and its nodes with Javascript. 

// The DOM is object oriented, meaning each node has its own set of properties and methods



`ACCESSING ELEMENTS USING DOCUMENT OBJECT`;
// You can access elements in the DOM using the document object. The document object is the root of the DOM tree and is the entry point to the DOM. It has various properties and methods that can be used to access and manipulate the DOM. By simply using dot notation, you can access any element in the DOM. For example

val = document; // returns the entire document containing the html tag (page)
val = document.documentElement; // returns the entire html element
val = documetn.head; // returns the head element and its content
val = document.body;    // returns the body of the doc and its content

val = document.forms; // returns an html collection of all the forms on the page. html collections look like arrays but are not. You can't loop through them or
val = document.forms[0].id; // returns the id oF the first form
val = document.forms[0].action; // returns the action property
val = document.head;    // returns the head of the doc
val = document.doctype; // returns the doctype of the doc
val = document.domain;  // DEPRECATED gets the domain of the doc
val = document.URL; // gets the URL of the doc
val = document.links; // returns a HTML collection of all links on the document
val = document.characterSet;    // gets the character set of the doc
val = document.links[0].classList; // gets the classList of the 1st link
val = document.images; // gets an html collection of all the images
val = document.scripts; // gets a collection of all scripts
val = document.scripts[2].getAttribute('src'); // gets the src attribute of the 2nd script
val = document.contentType; // gets the content type of the doc i.e text/html

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

console.log(val);


`HTMLcollections vs Arrays`
    // HTMLcollections look like arrays but are not. The only similarity is that you can index a HTMLcollection... i.e. HTMLcollectionName[3]. You can't loop through them or use array methods on them. You can however convert them to arrays and use array methods on them using the Array.from() method






    `SELECTING ELEMENTS - DOM SELECTORS`;


`DOM SELECTORS for single elements`;
// There are 2 main single element selectors. getElementById and querySelector


`getElementById`;
// Just as the name says, it is used for selecting elements with IDs by their ID

const taskTitle = document.getElementById('task-title');

// Once selected, you can manipulate it anyway you want. some examples below




`querySelector`;
// querySelector is an even more powerful single element selector. It is not limited to IDs, you can select just like you would any typical css selector from classes to elements. In cases where multiple elements meet the search criteria, querySelector only selects the 1st one

document.querySelector('#task-title'); // selects element with id 'task-title'
document.querySelector('.card-title'); // selects element with class 'card-title'
document.querySelector('ul li'); // select li element nested in ul
document.querySelector('li:last-child'); // selects last-child li element
document.querySelector('li:nth-child(3)'); // selects 3rd child li element
document.querySelector('li:nth-child(odd)'); // selects first odd li element






`DOM SELECTORS for Multiple Elements `;
// You have 3 main  multiple elements selectors in JS. getElementsByClassName, getElementsByTagName and querySelectorAll


`document.getElementsByClassName`;
// getElementsByClassName selects all elements with the specified className and returns them in a HTML collection. You can easily convert this to an array to work with. 


let items = document.getElementsByClassName('collection-item'); // returns a HTML collection of items with the className .collection-item

console.log(items);
items[0].style.color = 'red';   // changes the color of the first item to red
items[3].textContent = 'Hello'; // changes the text content of the 3rd item to Hello


const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); //selects all elements with className .collection-item within a local scope 'ul'




`document.getElementsByTagName`;
// This is similar to getElementsByClassName only it selects elements by their tags... so p, div, ul, li, a...etc. It returns a HTML collection so you'll have to convert it to an array to use array methods


let listA = document.getElementsByTagName('li'); // returns a HTML collection of all li elements in the doc

listA[0]; // returns the first list item in the selected collection

listA = Array.from(listA); // converts the listA HTMLcollection to an array




`document.querySelectorAll`;
// querySelectorAll is the most powerful multiple element selector and the only one you really need. it takes in any css selector and returns evey item that matches in a NODELIST. A nodelist is closer to an array than a html collection but it is not an array. a nodelist takes account of text nodes as well.

// You can use array methods such as forEach, length, bracket notation and more on a nodelist unlike HTML collections 

items = document.querySelectorAll('ul.collection li');

items.forEach((item, index) => {
    item.textContent = `${index}: Hello`;

    item.style.color = red;
})





    `MANIPULATING CONTENT`;

// Once you've selected an element, there are various ways to manipulate it. You can change it's styling, content, classes, attributes etc


`Getting and Setting Attributes`;

// You can get and set attributes of elements using the getAttribute('attributeName') and setAttribute('attributeName', 'value') methods

selectedElement.getAttribute('href'); // gets the href attribute of the selected element if it has one, else it returns null
selectedElement.getAttribute('class'); // gets the class attribute of the selected element if it has one, else it returns null


selectedElement.setAttribute('href', 'http://google.com'); // sets the href attribute of the selected element to http://google.com
selectedElement.setAttribute('class', 'btn'); // sets the class attribute of the selected element to btn



`Get Things from Element`
taskTitle.id;   // gets the element's ID
taskTitle.className;    // gets the element's classes


`Alter Element Styling`
// for compound words, like background-color, or margin-bottom, JS uses camel case instead. i.e backgroundColor

taskTitle.style.color = '#fff'; // changes the elements color to #fff
taskTitle.style.paddingRight = '5px';    // sets the elements right padding to 5px


`Change Content`
taskTitle.textContent = 'My tasks'; // sets the elements textContent
taskTitle.innerText = 'Task List';  // sets the elements innerText
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

















`TRAVERSING THE DOM`;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');




`Accessing Children of Elements`;
// There are various ways to get to the children of elements


`Children`;
// .children returns a HTML COLLECTION with child elements. It is a property of the element and not a method

list.children; //returns just child elements

list.children[1].textContent = 'Hello';



`Children of Children`;
list.children[1].children; // returns a HTML collection of the children of the 2nd child of list

list.children[3].children[0].id = 'test-link'; // assigns an id to the first child of the 4th child of list
list.children[0].nodeName;    // returns the name of the node e.g LI, DIV, A, etc
list.children[0].nodeType; // returns a number that represents the type of the node




`childNodes`
// childNodes return child elements, its text nodes and other clutter in a NODELIST. Use children instead

list.childNodes; // returns nodelist with children of list element and unexpected clutter like linebreaks and textnodes
list.childNodes[0].nodeName;    // returns the name of the node
list.childNodes[0].nodeType; // returns a number that represents the type of the node

`nodeType reference
1 - Element
2 - Attribute (deprecated)
3 - Text Node
8 - Comment
9 - Document itself
10 - Doctype`;




`firstElementChild`;
// .firstElementChild returns the first child or null if non. alternatively, there is firstChild but it returns the first child including clutter
list.firstElementChild; //returns the first element child



`lastElementChild`;
// like firstElementChild, it returns the last element child (no clutter) or null if none. alternatively, there is lastChild but it returns the last child with clutter like line breaks, etc.
list.lastElementChild;



`childElementCount`;
// Counts the number of child elements (no clutter)
list.childElementCount; //returns the child count of list






`PARENTS OF ELEMENTS`;
// To get to parents of elements, you can use parentNode or parentElement. They both return the same thing


`parentElement`;
listItem.parentElement; // returns parent of element
listItem.parentElement.parentElement; //returns grandparent of element
// alternatively, there is parentNode that does the same thing




`SIBLINGS OF ELEMENTS`;
//You can move between sibling elements using nextSibling, previousSibling, nextElementSibling and previousElementSibling

`.nextElementSibling`;
listItem.nextElementSibling // returns actual next sibling , no clutter. alternatively there is nextSibling that includes clutter

    `.previousElementSibling`;
listItem.previousElementSibling; // returns actual previous sibling, no clutter or null if there's none. alternatively there is previousSibling that includes clutter




`GET CLOSEST ELEMENT`
// you can find the element with a specific attribute that is close to a specified element as follows

h1.closest('.card');    // returns the closest element with a class of card to the h1 element
























`CREATING ELEMENTS`;
// You can create new HTML elements in your document using the document.createElement('element-name') method as shown below. Once created, you can add classes using .className or id using.id or attributes using .setAttribute('attributeName', 'value') and text using .createTextNode('text') and then append it to the DOM using .appendChild(element)

// You can either use innerHTML or appendChild. innerHTML is the quicker way but it's not as good as appendChild as it can cause security issues and it's not as performant. appendChild is the better way to go. innerHTML could also have unintended consequences like removing event listeners

`Create New Element`;
const li = document.createElement('li');

`Add Class`;
li.className = 'collection-item';

`Add id`;
li.id = 'first-item';

`Add Attribute`;
li.setAttribute('title', 'New Item');

`Create TextNode and Append`;
li.appendChild(document.createTextNode('Hello World'));

`Create Link Element`;
const link = document.createElement('a');

`Add classes`;
link.className = 'delete-item secondary-content';

`Add Icon`;
let icon = document.createElement('i');
icon.className = 'fa fa-remove';
link.appendChild(icon);

`Append Link as Child of li`;
li.appendChild(link);

`Append Element As Child`
// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);











`Insert Before an Element`;
// The syntax for inserting before an element is as follows: parentElement.insertBefore(elementToInsert, elementToInsertBefore)
parent.insertBefore(child, elementToInsertBefore)






    `REPLACE ELEMENTS`;
// There are several ways to replace elements but the most common are, replaceWith and replaceChild. You can also replace directly using innerHTML and OuterHTML. However, these are not recommended as they can cause security issues and unintended consequences like removing event listeners

// Create New Element;
const newHeading = document.createElement('h2');

// Add ID
newHeading.id = 'task-title';

// Add Text Node
newHeading.appendChild(document.createTextNode('Task List'));

// Get Old Element to be Replaced
const oldHeading = document.getElementById('task-title');

// Get Parent Element
const cardAction = oldHeading.parentElement;



`using replaceChild()`
// replaceChild syntax is as follows - parentElement.replaceChild(newElement, oldElement)
cardAction.replaceChild(newHeading, oldHeading);

`using replaceWith()`
// replaceWith syntax is as follows - elementToBeReplaced.replaceWith(elementToReplaceWith)
oldHeading.replaceWith(newHeading);

`using innerHTML`
// innerHTML syntax is as follows - element.innerHTML = 'HTML to be inserted'

oldHeading.innerHTML = 'Task List';

`using outerHTML`
// outerHTML syntax is as follows - element.outerHTML = 'HTML to be inserted'

cardAction.outerHTML = '<h2>Task List</h2>';








`HOW TO REMOVE ELEMENTS`;
//There are 2 main ways of removing elements from a document. The 1st is element.remove() method and the 2nd is parent.removeChild(child);

const lis = document.querySelectorAll('li'); // children
const list = document.querySelector('ul');  // parent


`element.remove() - Remove item`;
// this is called on the element itself
lis[0].remove();


`Remove Child`;
// this is called on the parent element and takes the child element to be removed as an argument
list.removeChild(lis[3]);









`INSERTING ELEMENTS`;
// there are four (4) main ways to insert elements into the DOM. They are insertAdjacentElement, insertAdjacentHTML, insertAdjacentText and insertBefore. When inserting adjacent elements or html or text, you have four (4) position options

// beforebegin - before the element itself
// afterbegin - just inside the element, before its first child
// beforeend - just inside the element, after its last child
// afterend - after the element itself


`insertAdjacentElement`
function insertElement() {
    // select adjacent element
    const filter = document.querySelector('#filter');

    // create element to be inserted
    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    // insert element. syntax is adjacentElement.insertAdjacentElement(position, elementToInsert)
    filter.insertAdjacentElement('beforebegin', h1);
}


`insertAdjacentHTML`
function insertHTML() {
    // select adjacent element
    const filter = document.querySelector('#filter');

    // insert element. syntax is adjacentElement.insertAdjacentHTML(position, HTMLToInsert)
    filter.insertAdjacentHTML('afterbegin', '<h1>insertAdjacentHTML</h1>');
}



`insertAdjacentText`
function insertText() {
    // select adjacent element
    const filter = document.querySelector('#filter');

    // insert element. syntax is adjacentElement.insertAdjacentText(position, textToInsert)
    filter.insertAdjacentText('afterend', 'Text to be inserted');
}



`insertBefore`
// insertBefore is called on the parent element and takes the element to be inserted and the element to be inserted before as arguments

function insertBefore() {
    // select parent element
    const filter = document.querySelector('#filter');

    // create element to be inserted
    const h1 = document.createElement('h1');
    h1.textContent = 'insertBefore';

    // select element to be inserted before
    const ul = document.querySelector('ul');

    // insert element. syntax is parentElement.insertBefore(elementToInsert, elementToInsertBefore)
    filter.insertBefore(h1, ul);
}


/* beforebegin - before the element itself
<p id ='filter'>
    afterbegin - just inside the element, before its first child

    foo

    beforeend - just inside the element, after its last child
</p>
afterend - after the element itself
*/






` CUSTOM INSERTAFTER CHALLENGE`

// create element to be inserted
const h1 = document.createElement('h1');
h1.textContent = 'insertAfter';


function insertAfter(newElement, targetElement) {
    // select parent element
    targetElement.parentElement.insertBefore(newElement, targetElement.nextElementSibling);
}

















`CLASSES & ATTRIBUTES`;

// You can add, remove and modify classes and attributes of html element using JS.
// The code below is used to select the first child of a list item that is like this <li>Link <a>icon</a></li>

const firstLi = document.querySelector('li:first-child'); // selects the first li item
const link = firstLi.children[0]; // selects the first child of that li which is the link



`CLASSES`;
`There are 2 ways to get or set the classes of an element 
1: .className - returns a string of all the classes)

2: .classList - returns a DOMTokenList (similar to an array) of all the classes of that element. As it is like an array, you can access individual classes using bracket notation and use high order array methods like forEach... just like an array.

.classList also has methods like .add(new class name) and .remove(class name)`;


val = link.className; // returns a string of all the classes of the element
val = link.classList; // returns a DOMTokenList of classes
val = link.classList[0];

link.classList.add('test'); // adds the given class
link.classList.remove('test'); // removes the given class 
link.classList.toggle('test'); // switches between adding and removing the class everytime the method is called























`EVENTS`;
// Events are actions that happen in the browser. They can be triggered by the user (eg. a mouse click or window resize) or by the browser (a page load). Examples of events are mouse clicks, mouse movements, key presses, page loading, typing into a text field, hovering above an element etc. You can use JS to listen for these events and respond to them with a callback function.

// Events can also be triggered programmatically using the event constructor. This is useful for testing and debugging. Examples are click, mouseover, mouseout, keydown, keyup, resize, scroll, submit, focus, blur, change, etc



`EVENT LISTENERS`;

// Event listeners are triggers you set on DOM elements. JS lets you listen for these events such as a mouse click or a button press, and executes a given callback function anytime it happens. This callback function can be an anonymous function or a named one;


// In the example below, we're selecting an element with a class of .clear-tasks and adding a 'click' eventListener 

document.querySelector('.clear-tasks').addEventListener('click', function () {
    console.log('Hello World');
});

// Event listeners can be created with the addEventListener() function or by using the onEventName property of the element e.g. onclick(). The addEventListener() function is the preferred method as it allows you to add multiple event listeners to the same element. The onEventName property can only have one event listener at a time.

// the syntax for both is as shown

`element.addEventListener(event, callbackFunction)`; // preferred method

`element.onEventName = callbackFunction`;




'removeEventListener()';
// There is a remove event listener method. You don't have to remove event listeners but it's good practice to do so. 

// It takes the same arguments as the addEventListener() method. 

// A good time to use it is when you remove elements with event listeners from the DOM. If you don't remove the event listener, it will still be in memory and can cause problems like memory leaks and performance issues so first remove the event listener, then remove the element.


setTimeout(() => btn.removeEventListener('click', onClearFn), 3000);

// This function will disable the event listener after 3 seconds. Can be a neat trick for when you want an event listener to only work once or for a limited time. You can also use the once option in the addEventListener() method to do the same thing. The once option is a boolean that defaults to false. When set to true, it will remove the event listener after it's first use. It's syntax is as follows: 

element.addEventListener('event', callbackFunction, { once: true });









`EVENT LISTENERS WITH ANONYMOUS CALLBACK FN`
// adding event listeners to elements takes the following format: element.addEventListener('event', callback funtion);


document.querySelector('.clear-tasks').addEventListener('click', (e) => {
    console.log(e);

    e.preventDefault();
});


`EVENT LISTENERS WITH NAMED CALLBACK FN`;
// The event object has many useful methods and properties and one of them is the target property, that returns the target element
document.querySelector('.clear-tasks').addEventListener('click', onClick);











`The EVENT OBJECT`;

// contains methods and properties common to all events. It can be passed as an argument in the callback function of an eventListener and used to call any of it's methods


element.addEventListener('eventName', callbackFunction(e)); // the event option is usually represented by e or event and passed into the callback fn as an argument like this


// The most popular properties and methods of the event object are

e.target; // returns the target element, the element that triggered the event
e.target.id; // returns the id of the target element
e.target.className; // returns the class of the target element
e.target.classList; // returns a nodeList of all classes on the target element
e.target.innerText; // returns the text content of the target element


e.currentTarget; // returns the element that the event listener is attached to (same as above in most cases). It's useful when you have nested elements and you want to target the parent element
e.type;   // returns the type of event
e.timeStamp;   // returns the time the event was triggered

// Position Coodinates of the event origin relative to 
e.clientX;   // returns the x coordinate of the event relative to the window
e.clientY;   // returns the y coordinate of the event relative to the window
e.screenX;   // returns the x coordinate of the event relative to the screen (entire monitor (beyond the window))
e.screenY;   // returns the y coordinate of the event relative to the screen
e.offsetX;   // returns the x coordinate of the event relative to the element
e.offsetY;   // returns the y coordinate of the event relative to the element


e.altKey;    // returns true if the alt key was pressed when the event was triggered
e.ctrlKey;    // returns true if the ctrl key was pressed when the event was triggered
e.shiftKey;    // returns true if the shift key was pressed when the event was triggered

e.key;  // returns the key that was pressed when the event was triggered eg. a, b, c, 1, 2, 3, etc
e.keyCode;  // returns the keyCode of the key that was pressed when the event was triggered eg. 65, 66, 67, 49, 50, 51, etc
e.code;  // returns the code of the key that was pressed when the event was triggered eg. KeyA, KeyB, KeyC, Digit1, Digit2, Digit3, etc
e.repeat;  // returns true if the key was held down and the event was triggered repeatedly


// Methods
e.preventDefault(); // prevents the default behaviour of the event. e.g. prevents a link from opening when clicked
e.stopPropagation(); // prevents the event from bubbling up to parent elements. It's useful when you have nested elements and you want to target the parent element





function onClick(e) {
    console.log('Clicked');

    let val = e;
    val = e.target.id;   // returns the id of the target element
    val = e.target.className;   // returns a string of all classes on the target element
    val = e.target.ClassList;   // returns a nodeList of all classes on target element

    e.target.innerText = 'Clicked';

    val = e.timestamp;   // returns time of event
    val = e.type;   // returns type of event

    e.clientY; // y coordinate relative to window
    e.clientX; // x coordinate relative to window

    e.offsetY; // y coordinate relative to element
    e.offsetX; // x coordinate relative to element
}
// console.log(val);









`MOUSE EVENTS`;
// using a selected button element we have called clearBtn 

let clearBtn = document.querySelector('.clear-tasks');
let card = document.querySelector('.card');


function runEvent(e) {
    console.log(`Event Type: ${e.type}`)
}


// Click
clearBtn.addEventListener('click', runEvent); // click event

// Double Click
clearBtn.addEventListener('dblclick', runEvent); // double click event

// Mouse Down
clearBtn.addEventListener('mousedown', runEvent); // mouse pressed down

// Mouse Up
clearBtn.addEventListener('mouseup', runEvent); // mouse released after press down

// Mouse Enter
card.addEventListener('mouseenter', runEvent); // mouse enters the region of the element (hover event)

// Mouse Leave
card.addEventListener('mouseleave', runEvent); // mouse leaves the region of the element (exithover event)

// Mouse Over
card.addEventListener('mouseover', runEvent); // Like mouse enter but triggers with nested elements (hover event)

// Mouse Out
card.addEventListener('mouseout', runEvent); // like mouse leave but triggers with nested elements 

// Mouse Move
card.addEventListener('mousemove', runEvent); // triggers when mouse moves within the element

// Wheel
card.addEventListener('wheel', runEvent);   // triggers when mouse wheel is used over target element (card)

// Drag Event
card.addEventListener('drag', runEvent);    // triggers when/while element is dragged

// Drag Start
card.addEventListener('dragstart', runEvent);   // triggers at the start of target element being dragged

// Drag End
card.addEventListener('dragend', runEvent); // triggers at the end of target element being dragged when it is let go












`KEYBOARD EVENTS`

// keydown
taskInput.addEventListener('keydown', runEvent);    // triggers when any key is pressed. It repeats while the key is held down unlike keypress

// keyup
taskInput.addEventListener('keyup', runEvent);  // triggers when a pressed key is released

// keypress
taskInput.addEventListener('keypress', runEvent);   // triggers when any key is pressed/tapped, doesn't continuously trigger event if key is held down. triggers once


// some event properties associated with keyboard events are: key, keyCode, code, which, etc

// key
runEvent = (e) => e.key;    // returns the key that was pressed eg. a, b, c, 1, 2, 3, etc key is not supported by older browsers

// keyCode
runEvent = (e) => e.keyCode;    // returns the ASCI keyCode of the key that was pressed eg. 65, 66, 67, 49, 50, 51, etc

// code
runEvent = (e) => e.code;   // returns the code of the key that was pressed eg. KeyA, KeyB, KeyC, Digit1, Digit2, Digit3, etc










`INPUT EVENTS`
    // This segment, we'll look at events specific to inputs (forms, text fields, etc)


    `Input`;
// the input event fires anytime the value of an input field changes. When the input is a form field, the input event is similar to the keypress/keydown event, but it is better to use input with forms as it is more robust. It emcompasses the change event which is used with dropdown selectors... if the input field is a dropdown selector or a checkbox, input still fires off while keydown won't. It's useful for live search features and other similar features

taskInput.addEventListener('input', runEvent);

function runEvent(e) {
    console.log(e.target.value)
}

// focus
taskInput.addEventListener('focus', runEvent);  // triggers when you click on an input field

// blur
taskInput.addEventListener('blur', runEvent);   // triggers when you click away from a focused input field

// cut
taskInput.addEventListener('cut', runEvent);    // triggers when you cut text from an input field

// paste
taskInput.addEventListener('paste', runEvent);  // triggers when you paste text into an input field



// Change
select.addEventListener('change', runEvent);    // triggers when you change the value of a dropdown selector


// Submit
form.addEventListener('submit', runEvent);  // triggers when you submit a form







`Window Events`
// The window object has its own events that you can listen for. Some of them are:

// DOM Load Event
window.addEventListener('DOMContentLoaded', runEvent); // triggers when the DOM is loaded, it doesn't wait for all resources such as images to finish loading

// Load
window.addEventListener('load', runEvent);    // triggers when the entire page is loaded


`the load event was very common in the 2000s when devs put their scripts in the head tag causing errors as the scripts would run before the DOM was loaded. The load event was used to fix this. Now, it's better to put your scripts at the bottom of the body tag or use the DOMContentLoaded event. The load event is still useful for things like images and other resources that take a while to load

Alternatively, you can now put your scripts in the head tag by adding the defer attribute to it`

// Resize
window.addEventListener('resize', runEvent);  // triggers when the window is resized, can be combined with innerWidth and innerHeight to make responsive designs

// Scroll
window.addEventListener('scroll', runEvent);  // triggers when you scroll the page. Can be combined with scrollY and scrollX to make sticky navbars and other similar features

// Location Change
window.addEventListener('locationchange', runEvent); // triggers when the location of the page changes

// Focus
window.addEventListener('focus', runEvent);  // triggers when the window is in focus (tab is active)

// Blur
window.addEventListener('blur', runEvent);   // triggers when the window is out of focus (tab is inactive)






'EVENT BUBBLING';

// If you have event listeners on a parent element and it's child (eg a click event listener), clicking on the child will also trigger the event listener of the parent like you clicked on it too. So it can be said that the event is bubbling from the child to parents and grandparents;


`you can stop this behaviour by using the stopPropagation() method on the event object. It's syntax is as follows: e.stopPropagation()`



'EVENT DELEGATION';
// It's the reverse of bubbling. It's when you put an event listener on multiple elements or the parent element and use a conditional statement eg. if statement, to restrict the action to just the specific children you want";


const delItem = document.querySelector('.delete-item');
const collection = document.querySelector('.collection');

collection.addEventListener('click', deleteItem);

function deleteItem(e) {
    console.log('delete item', e.target);
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}




// Event Handler
function runEvent(e) {
    console.log(`Event Type: ${e.type} | ${e.target.value}`);

    // heading.innerText = e.target.value;
    // e.preventDefault();
}

























`LOCAL STORAGE & SESSION STORAGE`

// Local storage is a way to store data in the browser that persists even after the browser is closed. It's useful for things like user preferences, themes, etc. It's stored as key:value pairs of arrays containing strings and can be converted to other data types using JSON.parse() and JSON.stringify() methods. Session storage is similar to local storage but it clears when the browser is closed. It's useful for things like shopping carts, etc

// They both have the same API, just change the word local to session and it's the same commands. The big difference is local storage persists while session storage clears at the end of a session eg. closing the browser


// DO NOT STORE SENSITIVE DATA IN LOCAL OR SESSION STORAGE AS IT IS NOT SECURE. IT CAN BE ACCESSED BY JAVASCRIPT AND MALICIOUS CODE. USE COOKIES OR SERVER SIDE SESSIONS INSTEAD


// Set local storage: Create/Update
sessionStorage.setItem('name', 'Beth');
localStorage.setItem('name', 'John');
localStorage.setItem('name', 'Mary');

// get from storage: Read
let myName = localStorage.getItem('name');
myName = sessionStorage.getItem('name');
console.log(myName);

// Remove from storage
localStorage.removeItem('name');
sessionStorage.removeItem('name');

// Clear entire local or session storage
localStorage.clear();
sessionStorage.clear();

// Event Handler
function runEvent(e) {
    console.log(`Event Type: ${e.type} | ${e.target.value}`);

    // heading.innerText = e.target.value;
    // e.preventDefault();
}


document.querySelector('form').addEventListener('submit', (e) => {
    // console.log(document.querySelector('#task').value);
    let task = document.querySelector('#task').value;

    let tasks;

    if (sessionStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(sessionStorage.getItem('tasks'));
    }

    tasks.push(task);

    sessionStorage.setItem('tasks', JSON.stringify(tasks));
    e.preventDefault();
})











// OBJECT LITERALS

const brad = {
    name: 'Brad',
    age: 35
}

// Constructor functions

function Person() {
    this.name = 'John';
}

const john = new Person();


// Constructor functions with parameters

function Human(firstName, lastName, age, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthday = new Date(dob);

    // this.getAge = () => {
    //     const diff = Date.now() - this.birthday.getTime(),
    //         ageDate = new Date(diff);
    //     console.log(ageDate, diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }

    console.log(this);
}

const angel = new Human('Angel', 22, '12-2-1999');

const ehita = new Human('Ehita', 30, '6/9/2000');


// Using this in the global scope refers to the windoow object

console.log(this); // is the same as console.log(window);





// BUILT IN CONSTRUCTORS
definition = `Primitive types like strings, numbers, booleans, objects, arrays and even functions can be created using their object constructors. It's very uncommon. In the case of primitive types like numbers and strings, if you compare one made the usual way and one created using a constructor function, they won't be exact matches as the latter is an object while the former's type is string or number etc`;

const bool1 = true;
const bool2 = new Boolean(true);

const num1 = 8;
const num2 = new Number(8);

const name1 = 'Jeff';
const name2 = new String('Jeff');

const function1 = function (x, y) {
    return x + y;
}
const function2 = new Function('x', 'y', 'return x + y');

const john1 = { name: 'John' };
const john2 = new Object({ name: 'John' });

const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

const re1 = /\w+/;
const re2 = new RegExp('\\w+')



// Prototypes

let explanation = `each object in JS has a prototype and the prototype is an object itself. 

When dealing with object literals, you're inheriting from a prototype called Object.prototype. 

When you're dealing with objects created through constructors e.g a Person object you created, then you get Person.prototype

Each 'class' is chained to a prototype object that is chained to the object itself. You can put functions in the prototype or in the object itself and it will be inherited by the 'class'`;

const andy = new Human('Andy', 'Griffin', 30, 'Sept 20 1992');

// Adding a method to the prototype or 
Human.prototype.getAge = function () {
    const diff = Date.now() - this.birthday.getTime();// you have to use the full 'function' declaration
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Human.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Adding methods that alter the data
Human.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
}

console.log(andy.getAge(), andy.getFullName(), andy.getsMarried('White'), andy.getFullName());


console.log(andy.isPrototypeOf('Human'));
console.log(andy.propertyIsEnumerable('firstName'));
console.log(andy.hasOwnProperty('firstName'));


// PROTOTYPICAL INHERITANCE

explanation = 'You can have one object inherit from another '

// Man constructor
function Man(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// add a greeting method to the prototype
Man.prototype.greeting = function () {
    return `Hello ${this.firstName} ${this.lastName};`
}

const james = new Man('James', 'Wright');

console.log(james.greeting());

// Create custormer constructor from man object
function Customer(firstName, lastName, phone, membership) {
    Man.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}


// So far, we have successfully drawn first name and last name from the man object into the Customer object, but we can't access the greeting method method that Man has from the customer object because it was stored in the Man prototype

//Inherit Man prototype methods
Customer.prototype = Object.create(Man.prototype);

// at this point, Customer references Man as it's constructor . To change this so it's constructor is Customer

Customer.prototype.constructor = Customer;


const newCustomer = new Customer('Ehita', 'Omoike', '0802 988 7574', 'Standard');

console.log(newCustomer);

// You are able to overwrite the greeting function inherited from Man to suit Customer

Customer.prototype.greeting = function () {
    return `Hello ${this.firstName} ${this.lastName}, Welcome to Sprout`;
}
console.log(newCustomer.greeting());





// Another way to create objects is using the create method below

const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.firstName}`;
    },

    getsMarried: function (newLastName) {
        $this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);

mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 29;

console.log(mary.greeting());


// another shorthand way to create objects

const rome = Object.create(personPrototypes, {
    firstName: { value: 'Rome' },
    lastName: { value: 'Yerome' },
    age: { value: 35 }
});

console.log(rome.greeting());







// CREATING OBJECTS IN ES6

class Alien {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`
    }

    getAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    // static methods are tied to the object not the individual classes. to call one you don't need to instantiate a class

    static addNumbers(x, y) {
        return x + y;
    }
}

const julian = new Alien('Julian', 'Rhy', '02-03-1987');

console.log(julian, julian.getAge());

// example of calling a static methood straight from the object
console.log(Alien.addNumbers(1, 2));



// ES6 Subclasses

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName};`
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName)

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const abby = new Customer('Abby', 'Ebewele', '234-806-039-7555', 'Standard');

console.log(abby, abby.greeting());
console.log(Customer.getMembershipCost());














































`ASYNCHRONOUS JAVASCRIPT`;

// Asynchronous means happening at the same time i.e one block of code running without interfering with another block, unlike synchronous code that is linear

// At its core, JS is a synchronous language, meaning it does one thing at a time. 

// It is single threaded meaning it has one call stack and one memory heap. The CALL STACK is a data structure that keeps track of which function is running and what functions are called from within that function and so on. The MEMORY HEAP is where it stores variables and function calls. 

// JS works with the browser API's like the DOM API, AJAX, setTimeout etc... to perform asynchronous tasks. The browser API's are written in low level languages like C++ and are not part of the JS engine, but provide JS with extra functionality.

// JS passes callback functions or promises to these APIs. They run in the background and when they are done, they are pushed to the respective callback queues which are FIFO (first in first out) and monitored by the event loop with promises taking priority over callback functions. 

// The callback queue is a data structure that holds all the callback functions that are ready to be executed.

// The event loop is a process that checks the call stack and callback queue and pushes the callback functions to the call stack when the call stack is empty. The event loop makes asynchronous code possible in JS. 


// A few ways to work with Async code are with

`
- Callbacks
- Promises (ES6)
- Async/Await (ES6)
`;




`SET TIMEOUT & CLEAR TIMEOUT`;
// setTimeout is a browser API that takes a callback function and a time in milliseconds as arguments. It runs the callback function after the specified time has elapsed. It is one of the API's used by JS to run asynchronous tasks. It's syntax is as follows: 

setTimeout(callbackFunction, timeInMilliseconds);

// setTimeout returns an identifying number that can be used to stop the setTimeout function from running. 

const setTimeoutVariable = setTimeout(callbackFunction, timeInMilliseconds);


// clearTimeout is used to stop the setTimeout function from running. It's syntax is as follows:

clearTimeout(setTimeoutFunction || setTimeoutVariable);





`SET INTERVAL & CLEAR INTERVAL`
//  setInterval is a browser API that takes a callback function and a time in milliseconds as arguments. It runs the callback function after the specified time has elapsed and keeps running it at the specified interval. It is one of the API's used by JS to run asynchronous tasks. It's syntax is as follows:

setInterval(callbackFunction, timeInMilliseconds, [args]);

// the optional arguments can be passed into the callback function as shown above

// setInterval returns an identifying number that can be used to stop the setInterval function from running.

const setIntervalVariable = setInterval(callbackFunction, timeInMilliseconds);

// clearInterval is used to stop the setInterval function from running. It's syntax is as follows:

clearInterval(setIntervalFunction || setIntervalVariable);







`AJAX`;
//definition = `Asynchronous Javascript And XML

// It's a set of web technoloogies to send and receive data from a client and server asynchronously. It happens behind the scenes so the webpage doesn't need reloading and you can get data for a portion of the page or all of it without reloading... think twitter


// XML is rarely used in AJAX anymore, JSON has pretty much replaced it. AJAX can also work with just plain text






`HTTP REQUESTS`;

// definition = `HTTP stands for HYPERTEXT TRANSFER PROTOCOL. 

// It's a protocol that allows us to send and receive data over the internet. It's the foundation of data transfer on the world wide web. It's a request/response protocol. It is a client server protocol meaning the request is sent by the client and the response is sent by the server. The response can be anything from HTML, CSS, JS, JSON, XML, etc but typically these days you'll be getting JSON data

// HTTP is stateless meaning each request is independent of the previous one. It doesn't remember previous requests. It's a connectionless protocol meaning the client and server don't need to maintain an open connection. It's a media independent protocol meaning it can be used for more than just transferring hypertext. It's a layered protocol meaning it's built on top of other protocols. It's also a cacheable protocol meaning it can store data to improve performance

// AJAX/XMLHttpRequest object was the original way of making HTTPRequests, but these days these requests are more commonly made with the Fetch API, Axios, Superagent, Node HTTP, etc



`HTTP REQUEST METHODS`;

// GET: Retrieve data from a specified resource

// POST: Submit data to be processedd to a specified resource

// PUT: Update a specified resource

// DELETE: Delete a specified resource

// PATCH: Update partial resources

// HEAD: Same as GET but does not return a body



`HTTP RESPONSE STATUSES`;

// 100 Range: Informational responses || continue 

// 200 Range: Success codes e.g 200 OK, 201 Created, 202 Accepted, 204 No Content, 226 Partial Content

// 300 Range: Codes for redirects e.g 301 Moved Permanently, 302 Found, 304 Not Modified, 307 Temporary Redirect 

// 400 Range: Client error codes e.g 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 410 Gone

// 500 Range: Server error codes e.g 500 Internal Server Error, 501 Not Implemented, 503 Service Unavailable, 550 Permission Denied`




`DEV TOOLS NETWORK TAB`;

// The network tab on your browser console is a great tool for looking up all sorts of information regarding your HTTP Requests and Statuses

// You can see the request and response headers, the request and response payloads, the request and response cookies, the request and response timing, the request and response bodies, etc







`XmlHttpRequest (XHR) Object`;

// definition = `This is the core technology of AJAX, it is built into the browsers JS environment so all browsers have this api. It's methods transfer data between client and server. It can be used with other protocols besides HTTP and can work with JSON XML and plaintext 


// The XHR object is the old way of requesting data. You now have newer API's to make HTTP requests

-` Fetch API: new & is part of the browser
- Axios
- Superagent
- Node HTTP
`;


`USING XHR OBJECT TO MAKE HTTP REQUESTS`
document.getElementById('button').addEventListener('click', loadData);


function loadData() {
    // STEP 1: Create XHR object
    const xhr = new XMLHttpRequest();

    // STEP 2: Call the Open Method
    xhr.open('GET', 'data.txt', true);

    // Optional - Used for spinners/loaders
    xhr.onprogress = function () {

        console.log(xhr.readyState);
        // this shoud give you a ready state of 3: processing requests
    }

    // STEP 3: Call the onload method
    xhr.onload = function () {
        //this method goes straight to readyState 4 before acting on it's content
        if (this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    // the onerror method runs only when there is one
    xhr.onerror = function () {
        console.log('Request error...')
    }


    // the old way of doing things was
    // xhr.onreadystatechange = function() {
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText); // this method will go through all 5 ready states so you had to confirm it had gotten to 4 before doing anything
    //     }
    // }

    // STEP 4: Call the send method
    xhr.send();
}


`readyState Values`
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"


//EXAMPLE 2
document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
    // instantiate xhr
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            const customer = JSON.parse(this.responseText);

            const output = `<ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
            </ul>`

            document.getElementById('customer').innerHTML = output;

        }

    }

    xhr.send();
}




document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);

            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(customer => {

                output += `<ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
            </ul>`;
            });

            document.getElementById('customers').innerHTML = output;

        }
    }

    xhr.send();
}






// XMLHTTPREQUESTS FOR EXTERNAL API'S

// UI handles

document.querySelector('.get-jokes').addEventListener('click', getJokes);


function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);


    xhr.onload = function () {
        if (this.status === 200) {

            const response = JSON.parse(this.responseText);

            const jokes = response.value;

            let output = '';

            if (response.type === 'success') {
                jokes.forEach(joke => {
                    console.log(joke);
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += '<li>Something went wrong</li>';
            }


            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();


    e.preventDefault();
}








`REST API'S AND HTTP REQUESTS`;

//  definition = `API means APPLICATION PROGRAMMING INTERFACE. In the case of web api's it can be described as a contract between one piece of software to another.

// It is a structured requests and response


// REST means REPRESENTATIONAL STATE TRANSFER

// it is an architectural style for designing networked applications

// It relies on a stateless, client-server protocol, almost always HTTP

// Rest was made to treat sever-side objects as resources that can be created read updated and deleted eg a blog post or user usually stored in a database

// Since rest operates basically with HTTP requests and some standard like JSON, it can work with just about any programming language

// All API's have their own rules and structure. An API is the messenger and REST lets us use HTTP requests to format that message

// A REST API takes multiple types of HTTP requests
`
GET: Retrieve data from a specified resource

POST: Submit data to be processedd to a specified resource

PUT: Update a specified resource

Delete: Delete a specified resource

HEAD: Same as GET but does not return a body

OPTIONS: Returns the supported HTTP methods

PATCH: Update partial resources
`;


// ENDPOINTS: They are the URLs you access to do specific things

// eg: GET https://someurl.com/api/users`;



















`CALLBACK FUNCTIONS`;

// definition = `A callback is a function that's passed into another function as an argument and called within that function. Callbacks can be synchronous (stop everything else till it finishes running e.g in the case of forEach, Map etc) or asynchronous (run in the background while other things are running, e.g setTimeout)`;

posts = [
    { title: 'Post One', body: "This is post one" },
    { title: 'Post Two', body: 'This is post two' }
];


function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    let output = '';
    setTimeout(() => {
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);











`PROMISES`;

// definition = `a promise is an object representing a task that will be completed in the future. It's a placeholder for data that will be available at some point in the future. 

// It is a better altenative to callbacks especially when you're chaining multiple asynchronous operations. It's cleaner and easier to maintain.



`Creating A Promise`;

// You'll mostly deal with promises when working with API's, but as you get advanced, you'll be writing your own promises. The syntax for that is as follows:

const promiseVariable = new Promise((resolve, reject) => {
    // resolve is a function that is called when returning a successful response
    // reject is a function that is called when returning an error

    // do something async here: we'll use a setTimeout to simulate an API call

    setTimeout(() => {
        resolve('Success'); // this is what is returned when the promise is successful
        reject('Error'); // this is what is returned when the promise is unsuccessful
    }, 2000);
});



`SYNTAX`
// to use the promise, you use the .then() method to handle the resolve, the .catch() method to handle the reject and optionally the finally method that will run regardless of the outcome

promiseVariable
    .then((response) => { console.log(response) })
    .catch((err) => { console.log(err) })
    .finally(() => { });



`PROMISE CHAINING`
// you can also chain multiple promises together (.thens) by returning something from each .then to catch in the next one, and catch the error from any of the promises in one catch

promiseVariable.then((response) => {
    console.log(response);
    return 'Success 2';
}).then((response) => {
    console.log(response + ' Success 3');
}).catch((err) => {
    console.log(err);
});


`PROMISE.ALL()`
// you can also use the Promise.all() method to run multiple promises at the same time and catch the response from all of them at once in a array

// the logic is that you create an array of promises and pass it into the Promise.all() method and it resolves them all at once into an array of results

const promise1 = Promise.resolve('Hello World');

const promise2 = 10;

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});






const posts = [
    { title: 'Post One', body: "This is post one" },
    { title: 'Post Two', body: 'This is post two' }
];


function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            posts.push(post);

            const error = true;
            if (!error) {
                resolve();
            } else {
                reject(`Error: Something Went wrong`);
            }
        }, 500);
    });

}

function getPosts() {
    let output = '';
    setTimeout(() => {
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts).catch((err) => {
    console.log(err);
});














`FETCH API`
// The Fetch API is a newer and better way to make HTTP requests. It's a cleaner and easier alternative to XHR. It uses promises by default and is part of the browser (the window object) so no need for third party libraries. It's not supported by IE though so you'll need a polyfill to use it with IE

// It's syntax is as follows:

fetch('url')
    .then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });

// It's syntax for PUT and POST requests is as follows:

fetch('url', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({ title: 'Post Three', body: 'This is post three' })
})
    .then((res) => { return res.json() })
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) });




// The fetch method returns a promise so you can chain .then and .catch methods to it. The first .then method returns a response object that you can convert to .json() or .text() or blob or arraybuffer or formData using the respective methods. The second .then method returns the data from the first .then method. The catch method catches any errors that occur in the fetch method

// The fetch method takes in a url as it's first argument and an optional object as it's second argument. When you pass in just the url, it defaults to a GET request. If you want to make a POST OR PUT OR DELETE request, you have to pass in the second argument. The second argument is an object that contains the options for the request. The most common ones are the method, headers and body options




`FETCH METHOD OPTIONS`;
// The second argument of the fetch method can contain the following options

`METHOD: `; // GET || POST || PUT || DELETE || PATCH etc

`HEADERS: `; // An object containing the headers to be sent with the request. The most common one is the content-type header which is used to tell the server what type of data is being sent. It's value is usually application/json. Another common one is the authorization header which is used to send a token to the server for authentication

`BODY: `; // The data you want to send to the server. It has to be converted to JSON using the JSON.stringify() method




// EXAMPLE: GET LOCAL TEXT FILE DATA
document.getElementById('button1').addEventListener('click', getText);

function getText() {
    fetch('data.txt')
        .then((res) => {
            return (res.text());
        })
        .then((data) => {
            document.getElementById('output').innerHTML = `<h3>${data}</h3>`;
        })
        .catch((err) => {
            console.log(err);
        })
}




// EXAMPLE: Get Local Json Data
document.getElementById('button2').addEventListener('click', getJson);

function getJson() {
    fetch('posts.json')
        .then((res) => {
            return (res.json());
        })
        .then((data) => {
            let output = '';

            data.forEach(post => {
                output += `<h3>${post.title}</h3>`;
            });

            document.getElementById('output').innerHTML =
                output;
        })
        .catch((err) => {
            console.log(err);
        })
}



// EXAMPLE:  Get External Json Data with fetch
document.getElementById('button3').addEventListener('click', getExternal);


function getExternal() {
    fetch('https://api.github.com/users').then(res => {
        console.log(res);
        return res.json();
    }).then((data) => {
        // console.log(data);
        let output = '';

        data.forEach((user) => {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
}




`MANUALLY THROW ERROR WITH FETCH API`
// You can manually throw some errors with the fetch API. The fetch API only throws an error if the network request fails or if something prevents the request from completing. It does not throw an error if the request is successful but the response is not what you expected. To handle that, you have to manually throw an error. The syntax is as follows:

// the syntax is as follows:

fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(res => {
        if (!res.ok) {
            throw new Error(res.error);
        }
        return res;
    })
    .catch(err => console.log(err));


// ALTERNATIVELY
function handleErrors(res) {
    if (!res.ok) throw new Error(res.error);
    return res;
}

fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(handleErrors)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));







`CRUD WITH REST API'S`;
// REST is a transfer protocol that uses HTTP requests to get data from a server. It's a way to create, read, update and delete data from a server.

// The HTTP requests used are:

// GET: Retrieve data from a specified resource i.e READ

`CREATE`
// POST: Submit data to be processedd to a specified resource. 

// Example of post with fetch api

function createPost({ title, body }) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ title, body })
    }).then(res => res.json())
        .then(data => console.log(data));
}

createPost({ title: 'Post Three', body: 'This is post three' });


// Post statements return the post sent as well as the id of the post created



`UPDATE`
// PUT OR PATCH: Update a specified resource i.e UPDATE
function updatePost() {

}

// DELETE: Delete a specified resource i.e DELETE





















`ARROW FUNCTIONS`
// Normal functions
sayHello = function () {
    console.log('Hello');
}

// Standard arrow function
sayHello = () => {
    console.log('Hello');
}

// One line functions don't need braces
sayHello = () => console.log('Hello');

// One line arrow functions don't need the return keyword
sayHello = () => 'Hello';


// One line arrow functions for object literals have to be wrapped in brackets
sayHello = () => ({ msg: 'Hello' });


// Single param arrow functions don't need brackets
sayHello = name => `Hello ${name}`;

// Multiple params need brackets
sayHello = (firstName, lastName) => `${firstName} ${lastName}`;


console.log(sayHello('John', 'Davis'));


// Arrow fns as callbacks

const users = ['Nathan', 'Ray', 'Charles'];

const nameLengths = users.map(name => name.length);

console.log(nameLengths);









// ASYNC, AWAIT

definition = `Async and Await are ES7 (2016) keywords for implementing promises. The Async keyword turns ordinary functions into asynchronous functions causing them to return a promise

Await on the other hand instructs the program to wait for that line or function to be resolved before using it. Await can only be used in an async function`


async function myFunc() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 1000);
    })

    const res = await promise;
    return res;
}


myFunc()
    .then(res => console.log(res));


async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    return data;
}

getUsers()
    .then(res => console.log(res));




`ASYNC/AWAIT WITH ARROW FUNCTIONS`

// the syntax with arrow functions is a little different. You write the async just before the parentheses.

const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    return data;
}





// HANDLING ERRORS WITH TRY/CATCH IN ASYNC/AWAIT & JS IN GENERAL


definition = `The try catch block prevents a program from stopping due to errors. the try block throws any errors into the catch block, allowing you handle it properly while the program keeps running`

// The syntax is as follows:

try {
    // code to try
    // throw new Error('Custom error');
} catch (err) {
    // code to run if there is an error
}





try {
    myFunct();   // ReferenceError: an undefined function will throw an err to the catch block
    null.myFunct(); // TypeError

    throw new Error('Custom error');
} catch (err) {
    console.log(err); // logs the full error
    console.log(err.name); // logs the name of the error
    console.log(err.message); // logs the description of the error
    console.log(err instanceof ReferenceError); // logs true/false if it is a referenceError
    console.log(err instanceof TypeError); // logs true/false if it is a TypeError
} finally {
    // the finally block runs regardless of previous results or errors
}


















`WEB & BROWSER API'S`;


`GeoLocation API`

// definition: `The Geolocation API allows the user to provide their location to web applications if they so desire. It's a browser API so it's part of the window object. It's not available in all browsers though. 

// It is a high level API that uses a combination of GPS, Wifi, Cellular and IP address to determine the users location. It's accuracy depends on the device and the browser. 

// It is contained in the navigator object which is a property of the window object.

// It's syntax is as follows:`

navigator.geolocation.getCurrentPosition(success, error, options);

// Check for geolocation support
if (navigator.geolocation)
    console.log('Geolocation is supported');
else
    console.log('Geolocation is not supported');


// It has 2 main methods

getCurrentPosition(); // gets the current position of the user

watchPosition(); // watches the position of the user and updates it as it changes. It does this by registering a handler function that will be called automatically each time the position of the device changes. It returns a watchID that can be used to unregister the handler function later


// Both methods take 3 arguments

`success`; // a callback function that is called when the position is successfully retrieved

`error`; // a callback function that is called when there is an error retrieving the position

`options`; // an optional object that contains options for the request. The most common one is the timeout option which is the maximum length of time in milliseconds that is allowed to pass from the call to getCurrentPosition() or watchPosition() until the corresponding successCallback is invoked. If the successCallback is not invoked within this time, the errorCallback is passed a PositionError.TIMEOUT error code. By default, there is no timeout. This option is not supported in Internet Explorer.




// EXAMPLE: GET CURRENT POSITION

navigator.geolocation.getCurrentPosition(success, error, options);

function success(position) {
    console.log(position);

    const coords = position.coords;

    console.log(coords);
    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Accuracy: ${coords.accuracy}`);
}

function error(err) {
    console.log(`Error: ${err.code}: ${err.message}`);
}

const options = {
    enableHighAccuracy: true,   // Use GPS if available
    timeout: 5000,  // Wait 5 seconds for a response before calling error function
    maximumAge: 0   // Do not use a cached position, get a fresh one
}



// EXAMPLE: WATCH POSITION

let watchID = navigator.geolocation.watchPosition(success, error, options);

const target = {
    latitude: 41.3477843,
    longitude: -72.1087736
}

function success(position) {
    const coords = position.coords;

    if (target.latitude === coords.latitude && target.longitude === coords.longitude)
        console.log('Congratulations, you reached the target');

}

function error(err) {
    console.log(`Error: ${err.code}: ${err.message}`);
}

const watchOptions = {
    enableHighAccuracy: true,   // Use GPS if available
    timeout: 5000,  // Wait 5 seconds for a response before calling error function
    maximumAge: 0   // Do not use a cached position, get a fresh one
};



`You can use the longitude, latitude and other values from the geolocation api with fantastic map API's like mapbox, leaflet, google maps, etc`;


















`THE CANVAS API`;

// definition = `The canvas API is a browser API that allows you to draw graphics in realtime with javascript on a web page. It's a low level API that gives you a lot of control over what you can do. It's part of the HTML5 spec and is supported in all modern browsers. It's not supported in IE8 and below though.

// The canvas mainly focuses on 2D graphics but it also has some 3D capabilities. The WEBGL API which also uses the canvas element, draws hardware accelerated 2D and 3D graphics.

// The canvas API is great for creating animations, games, data visualizations, photo manipulations, real-time video processing etc


// To use, you create a canvas element in your html file and give it an id
// <canvas id="myCanvas"></canvas>

// Then you select the canvas element in your javascript file and assign it to a variable
const canvas = document.getElementById('myCanvas');

// Then you create a context variable and assign it to the canvas context
const ctx = canvas.getContext('2d');

// The context variable is what you use to draw on the canvas

`NOTE: The canvas element has a width and height attribute that you can set in your html file or in your javascript file. If you set it in your html file, you can access it in your javascript file with the canvas.width and canvas.height properties. If you set it in your javascript file, you can access it with the canvas.width and canvas.height properties


YOU CAN NOT SET THE WIDTH AND HEIGHT OF THE CANVAS WITH CSS. YOU'LL HAVE ISSUES IF YOU DO THAT`


// the fillStyle property sets the color, gradient or pattern used to fill the drawing
ctx.fillStyle = 'red'; // sets the fill color
ctx.fillStyle = '#FF0000'; // sets the fill color
ctx.fillStyle = 'rgb(255, 0, 0)'; // sets the fill color
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // sets the fill color
// example of gradient fill
ctx.fillStyle = gradient; // sets the fill color to a gradient
ctx.fillStyle = pattern; // sets the fill color to a pattern


// Draw a rectangle
ctx.fillRect(x - origin, y - origin, width, height); // draws a rectangle with the origin corner at 20,20 and a width and height of 150,100

// Draw an arc or circle
ctx.arc(x - origin, y - origin, radius, startAngle, endAngle, anticlockwise); // draws an arc if you specify the end angle as 2*Math.PI or as 360deg and the start as 0deg



// Draw a circle
// ctx.beginPath();
ctx.arc(300, 300, 100, 0, Math.PI * 2, false);
ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;
ctx.stroke();
ctx.fill();


// Draw Lines
ctx.beginPath();
ctx.moveTo(50, 300);    // Moves the pen to the specified coordinates
ctx.lineTo(300, 100);  // Draws a line from the current position to the specified coordinates
ctx.lineTo(400, 300);   // Draws a line from the current position to the specified coordinates
ctx.strokeStyle = '#fa34a3'; // Sets the color used for strokes
ctx.lineWidth = 10; // Sets the current line width
ctx.stroke(); // Draws the path you have defined


// Text
ctx.font = '30px Arial';    // Sets the current font properties for text content
ctx.fillStyle = 'purple';   // Sets the color used inside shapes
ctx.fillText('Hello world', 400, 50); // Draws filled text on the canvas ('text', x, y, [maxWidth])
ctx.strokeStyle = 'black'; // Sets the color used for strokes
ctx.lineWidth = 1; // Sets the current line width
ctx.strokeText('Hello world', 400, 100); // Draws text on the canvas (without fill) ('text', x, y, [maxWidth])



// Pull images from the DOM into canvas
`To do this, you'll add an image tag to your html file and give it an id. Then you'll select the image tag in your javascript file and assign it to a variable. Then you'll add an event listener to the image variable that listens for the load event. When the image loads, you'll call a function that draws the image on the canvas`

// <img id="source" src="image.jpg" alt="image">

const image = document.getElementById('source');
image.style.display = 'none';

image.addEventListener('load', () => ctx.drawImage(image, 270, 270, 150, 150));     // Draws an image, canvas, or video onto the canvas ('image', x, y, width, height)










`Window.requestAnimationFrame()`
// definition = `The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint`

// The syntax is as follows:

window.requestAnimationFrame(callback); // the window is optional as it is the default object

// The callback method is passed a single argument, a DOMHighResTimeStamp, which indicates the current time (the time returned from performance.now()) for when requestAnimationFrame() starts to fire callback functions.


`NOTE: Your callback fn must itself call requestAnimationFrame() again if you want to animate another frame at the next repaint. It is common to call requestAnimationFrame() from within the callback function`

// The request animation frame defaults to 60fps i.e it refreshes every second. You can change that by using the setTimeout() or setInterval() methods



// Example: Animate a ball element

const div = document.querySelector('div');

let start;
let done = false;

const ball = document.querySelector('img');

function step(timestamp) {
    if (start === undefined)
        start = timestamp;

    const elapsed = timestamp - start;

    elapsed > 2000 && (done = true);

    if (done)
        return;

    ball.style.transform = `translateX(${elapsed / 20}px) rotate(${elapsed / 10}deg)`;

    requestAnimationFrame(step);
}

requestAnimationFrame(step);



`A more advanced example`
// const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

// let x = 0;
// let y = 0;
let width = 50;
let height = 50;
let dx = 5;
let dy = 5;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, width, height);

    if (x + width > canvas.width || x < 0)
        dx = -dx;

    if (y + height > canvas.height || y < 0)
        dy = -dy;

    x += dx;
    y += dy;

    requestAnimationFrame(draw);
}

draw();


















`THE AUDIO API`;

// definition = `The audio API is a browser API that allows you to play audio files in your browser. It's a high level API that is part of the HTML5 spec and is supported in all modern browsers. It's not supported in IE8 and below though.

// To use, you create an audio element in your html file and give it an id

// <audio id="myAudio" src="audio.mp3"></audio>

// Then you select the audio element in your javascript file and assign it to a variable

const audio = document.getElementById('myAudio');

// The audio element does not show a default player unless you add the controls attribute. You can create your own player with buttons and a slider to control the audio

`Some Common Properties and Methods of the audio api`
audio.play();   // plays the audio. You can attach this to a button click event to control it

audio.pause();  // pauses the audio. You can attach this to a button click event to control it

audio.currentTime = 10; // sets the current time of the audio to 10 seconds. Used to parse through the audio and can be attached to a slider to control it

audio.volume = 0.5; // sets the volume of the audio to 50%

audio.playbackRate = 0.5; // sets the playback rate of the audio to 50%

audio.loop = true; // sets the audio to loop

audio.muted = true; // mutes the audio

audio.defaultPlaybackRate = 0.5; // sets the default playback rate of the audio to 50%

audio.autoplay = true; // sets the audio to autoplay

audio.controls = true; // sets the audio to show controls

audio.preload = true; // sets the audio to preload

audio.src = 'audio.mp3'; // sets the source of the audio

audio.currentSrc = 'audio.mp3'; // gets the source of the audio

audio.duration = 10; // gets / sets the duration of the audio

audio.paused = true; // checks if the audio is paused

audio.ended = true; // checks if the audio has ended

audio.error = true; // checks if there is an error with the audio

audio.seeking = true; // checks if the audio is seeking

audio.seekable = true; // checks if the audio is seekable

audio.readyState = true; // checks if the audio is ready to play

audio.networkState = true; // checks the network state of the audio

audio.buffered = true; // checks if the audio is buffered

audio.canPlayType('audio/mp3'); // checks if the audio can play the specified type

audio.canPlayType('audio/mp3', 'maybe'); // checks if the audio can play the specified type and returns maybe

audio.canPlayType('audio/mp3', 'probably'); // checks if the audio can play the specified type and returns probably

audio.load(); // loads the audio


`Stop Audio`
// The audio api does not have a stop method. To stop the audio, you have to pause it and set the currentTime to 0
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});


























`VIDEO API`;

// definition = `The video API is a browser API that allows you to play video files in your browser. It's a high level API that is part of the HTML5 spec and is supported in all modern browsers. It's not supported in IE8 and below though.


// To use, you create a video element in your html file and give it an id

// <video id="myVideo" src="video.mp4"></video>

`you can attach attributes directly to the video element like width, autoplay, controls, loop, muted, poster etc OR with CSS`

// Then you select the video element in your javascript file and assign it to a variable

const video = document.getElementById('myVideo');

// The video element does not show a default player unless you add the controls attribute. You can create your own player with buttons and a slider to control the video


`Some Common Properties and Methods of the video api`
video.play();   // plays the video. You can attach this to a button click event to control it

video.pause();  // pauses the video. You can attach this to a button click event to control it

video.currentTime = 10; // sets (or gets if you don't assign a value) the current time of the video to 10 seconds. Used to parse through the video and can be attached to a slider to control it

video.volume = 0.5; // sets the volume of the video to 50%

video.playbackRate = 0.5; // sets the playback rate of the video to 50%

video.loop = true; // sets the video to loop

video.muted = true; // mutes the video

video.defaultPlaybackRate = 0.5; // sets the default playback rate of the video to 50%

video.autoplay = true; // sets the video to autoplay

video.controls = true; // sets the video to show controls

video.preload = true; // sets the video to preload

video.src = 'video.mp4'; // sets the source of the video

video.currentSrc = 'video.mp4'; // gets the source of the video

video.duration = 10; // gets / sets the duration of the video

video.paused = true; // checks if the video is paused

video.ended = true; // checks if the video has ended

video.error = true; // checks if there is an error with the video

video.seeking = true; // checks if the video is seeking

video.seekable = true; // checks if the video is seekable

video.readyState = true; // checks if the video is ready to play

video.networkState = true; // checks the network state of the video

video.buffered = true; // checks if the video is buffered

video.canPlayType('video/mp4'); // checks if the video can play the specified type

video.poster = 'poster.jpg'; // sets the poster image of the video

video.load(); // loads the video


















`WEB ANIMATIONS API`;

// definition = `The web animations API is a browser API that allows you to animate elements on your web page. You can animate the position, size, color, opacity, and other aspects of elements in your web page. It is similar to 'animate' in css but you have extended functionality. It's a high level API that is part of the HTML5 spec and is supported in all modern browsers. It's not supported in IE8 and below though.

// It's syntax is as follows:`

element.animate(keyframes, options);

// The element is the element you want to animate. It can be a div, a p, a span, an image, a video, a canvas etc

// The keyframes is an array of objects that define the animation. Each object is a keyframe that defines the styles of the element at a given time. The keyframes are defined as percentages of the animation's duration. The first keyframe is always 0% and the last keyframe is always 100%. You can have as many keyframes as you want in between. The keyframes are defined as follows:

const keyframes = [
    { transform: 'translateY(0px)', color: 'red' },
    { transform: 'translateY(100px)', color: 'blue' }
];

// The options is an object that defines the options for the animation. The most common ones are: duration, delay, easing, iterations, direction, fill, endDelay, composite, iterationStart, iterationComposite, and playbackRate. The options are defined as follows:

const animateOptions = {
    duration: 1000, // the duration of the animation in milliseconds
    delay: 1000, // the delay before the animation starts in milliseconds
    easing: 'ease-in-out', // the easing function to use for the animation
    iterations: 1, // the number of times the animation should repeat, can be infitity or a number
    direction: 'alternate', // the direction of the animation, can be normal, reverse, alternate, alternate-reverse
    fill: 'forwards', // the fill mode of the animation, can be none, forwards, backwards, both
    endDelay: 1000, // the delay before the animation ends in milliseconds
    composite: 'add', // the composite operation to use to combine the animations, can be add, accumulate, replace
    iterationStart: 0.5, // the iteration start time of the animation, can be a number between 0 and 1
    iterationComposite: 'replace', // the iteration composite operation to use to combine the animations, can be replace, accumulate
    playbackRate: 1 // the playback rate of the animation, can be a number
};

`The animation object returned by the animate method has the following properties and methods`

animation.playState; // returns the current state of the animation, can be idle, pending, running, paused, finished

animation.play(); // plays the animation

animation.pause(); // pauses the animation

animation.reverse(); // reverses the animation

animation.finish(); // finishes the animation

animation.cancel(); // cancels the animation

animation.startTime; // sets / returns the start time of the animation

animation.currentTime; // sets / returns the current time of the animation

animation.playbackRate; // returns the playback rate of the animation

animation.effect; // returns the effect of the animation

animation.onfinish; // returns the onfinish event handler of the animation

animation.oncancel; // returns the oncancel event handler of the animation

animation.ready; // returns a promise that resolves when the animation is ready to play

animation.finished; // returns a promise that resolves when the animation is finished playing

animation.cancelled; // returns a promise that resolves when the animation is cancelled

animation.pending; // returns a promise that resolves when the animation is pending

animation.startTime = 1000; // sets the start time of the animation

animation.currentTime = 1000; // sets the current time of the animation

animation.playbackRate = 0.5; // sets the playback rate of the animation

animation.onfinish = () => { }; // sets the onfinish event handler of the animation

animation.oncancel = () => { }; // sets the oncancel event handler of the animation

animation.ready.then(() => { }); // runs when the animation is ready to play

animation.finished.then(() => { }); // runs when the animation is finished playing

animation.cancelled.then(() => { }); // runs when the animation is cancelled

animation.pending.then(() => { }); // runs when the animation is pending



















`WEB SPEECH API`;

// definition = `The web speech API is a browser API that allows you to add speech recognition and speech synthesis to your web page. It's allows webpages handle voice data.




`SPEECH RECOGNITION`;

// speech recognition is accessed by the speech recognition interface which enables you recognize speech from an audio input (normally from a microphone). Generally, you'll create a SpeechRecognition object with it which has a number of event handlers for detecting and reacting to speech input. 

// The SpeechGrammar interface of the Web Speech API represents a set of words or patterns of words that your app should recognize. Grammar is defined using JSpeech Grammar Format (JSGF) .It is used with the SpeechRecognition interface. 

// The SpeechRecognitionResult interface of the Web Speech API represents a single recognition match, which may contain multiple SpeechRecognitionAlternative objects. It contains the words that were said by the user and a confidence score for each word. The SpeechRecognitionAlternative interface of the Web Speech API represents a single word that has been recognized by the speech recognition service. It contains a transcript of the recognized word along with a confidence score.





`SPEECH SYNTHESIS`;

// speech synthesis is accessed by the speech synthesis interface which allows web pages to control text-to-speech output. Generally, you'll create a SpeechSynthesis object with the SpeechSynthesis Interface which allows your app to read out text generally through the default speech synthesizer.

// Different voices are accessed through SpeechSynthesisVoice objects. Each SpeechSynthesisVoice has its own relative speech service including information about language, name and URI. You can get a list of available voices by calling SpeechSynthesis.getVoices().

// The SpeechSynthesisUtterance interface of the Web Speech API represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)



`SPEECH RECOGNITION EXAMPLE`;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // check for browser compatibility

// Create a new speech recognition object
const recognition = new SpeechRecognition();

// Set the properties
recognition.lang = 'en-US'; // sets the language of the recognition
recognition.continuous = false; // sets whether continuous results are returned for each recognition, or only a single result. Defaults to false

recognition.interimResults = false; // sets whether the speech recognition system should return interim results, or just final results. Interim results are results that are not yet final (e.g. the SpeechRecognitionResult.isFinal property is false), so they may change before the final results. If you set this to true, you'll get interim results while you speak and the final result when you stop speaking

recognition.maxAlternatives = 1; // sets the maximum number of SpeechRecognitionAlternatives provided per SpeechRecognitionResult. The default value is 1

// Add event listeners
recognition.onresult(e => {
    console.log(e); // logs the event object
    console.log(e.results); // logs the results array
    console.log(e.results[0]); // logs the first result object
    console.log(e.results[0][0]); // logs the first alternative containing the transcript


    // Get the transcript of the first alternative of the first result
    console.log(e.results[0][0].transcript);
});





`some common methods and properties of the speech recognition api`;


`Instance Properties`;

recognition.grammars // gets/sets the grammars that will be understood by the current SpeechRecognition

recognition.continuous; // gets/sets a Boolean indicating whether continuous results are returned for each recognition, or only a single result

recognition.interimResults; // returns a Boolean indicating whether interim results should be returned (true) or not (false.) Interim results are results that are not yet final (e.g. the SpeechRecognitionResult.isFinal property is false), so they may change before the final results. If you set this to true, you'll get interim results while you speak and the final result when you stop speaking

recognition.maxAlternatives; // returns an unsigned long representing the maximum number of SpeechRecognitionAlternatives provided per SpeechRecognitionResult. The default value is 1

recognition.lang; // returns a DOMString representing the language of the current SpeechRecognition. It is a BCP 47 language tag that identifies the language being recognized. If not specified, this defaults to the HTML lang attribute value, or the user agent's language setting if that isn't set either




`Instance Methods`

recognition.start(); // starts the speech recognition service listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition. This method returns void

recognition.stop(); // stops the speech recognition service from listening to incoming audio, and attempts to return a SpeechRecognitionResult using the audio captured so far. This method returns void

recognition.abort(); // stops the speech recognition service from listening to incoming audio, and doesn't attempt to return a SpeechRecognitionResult. This method returns void



`Instance Events`

recognition.onresult = () => {
    // what you want to happen when the result event fires
}; // sets the event handler for the result event of the SpeechRecognition object

recognition.onaudiostart; // returns the event handler for the audiostart event

recognition.onaudioend; // OR 'audioend' when using event listeners. Fires the event handler when the user agent has finished capturing audio

recognition.onend; // Fires when the speech recognition service has disconnected

recognition.onerror; // returns the event handler for the error event

recognition.onnomatch; // returns the event handler for the nomatch event

recognition.onresult; // returns the event handler for the result event

recognition.onsoundstart; // returns the event handler for the soundstart event

recognition.onsoundend; // returns the event handler when all sound including non-speech has stopped being detected

recognition.onspeechstart; // returns the event handler for the speechstart event

recognition.onspeechend; // returns the event handler when you stop speaking

recognition.onstart; // returns the event handler when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition


recognition.serviceURI; // returns a DOMString containing the name of the service used to provide speech recognition. This is specified in the constructor, using the serviceURI parameter. If this is not specified, the user agent's default speech service is used







`SPEECH SYNTHESIS`;

// speech synthesis is accessed by the speech synthesis interface which allows web pages to control text-to-speech output. Generally, you'll create a SpeechSynthesis object with the SpeechSynthesis Interface which allows your app to read out text generally through the default speech synthesizer.`

`SPEECH SYNTHESIS EXAMPLE`;

const synth = window.speechSynthesis; // check for browser compatibility

// Create a new speech synthesis object
const utterance = new SpeechSynthesisUtterance();

// Set the properties
utterance.text = 'Hello world'; // sets the text to be spoken

utterance.lang = 'en-US'; // sets the language of the speech

utterance.volume = 1; // sets the volume of the speech

utterance.rate = 1; // sets the rate of the speech

utterance.pitch = 1; // sets the pitch of the speech

utterance.voice = synth.getVoices()[0]; // sets the voice of the speech

utterance.onstart = () => { }; // fires the event handler when the speech starts

utterance.onend = () => { }; // fires the event handler when the speech ends

utterance.onerror = () => { }; // fires the event handler when there is an error

utterance.onpause = () => { }; // fires the event handler when the speech is paused

utterance.onresume = () => { }; // fires off the event handler when the speech resumes

utterance.onmark = () => { }; // fires off the event handler when the speech reaches a named SSML 'mark' tag

utterance.onboundary = () => { }; // fires off the event handler when the speech reaches a word or sentence boundary

utterance.onvoiceschanged = () => { }; // fires off the event handler when the list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed (when the voiceschanged event fires.)


`Instance Properties`

synth.paused; // returns a Boolean indicating whether the SpeechSynthesis object is in a paused state or not

synth.pending; // returns a Boolean indicating whether the utterance queue contains as-yet-unspoken utterances

synth.speaking; // returns a Boolean indicating whether the SpeechSynthesis object is currently in the process of speaking or not


`Instance Methods`

synth.speak(utterance); // adds an utterance to the utterance queue; it will be spoken when any other utterances queued before it have been spoken

synth.cancel(); // removes all utterances from the utterance queue

synth.getVoices(); // returns a list of SpeechSynthesisVoice objects representing all the available voices on the current device

synth.pause(); // puts the SpeechSynthesis object into a paused state

synth.resume(); // puts the SpeechSynthesis object into a non-paused state: resumes it if it was already paused


`Instance Events`

synth.onvoiceschanged; // returns the event handler for the voiceschanged event

synth.onvoiceschanged = () => { }; // fires off the event handler when the list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed (when the voiceschanged event fires.)





















`OBJECT ORIENTED PROGRAMMING`;

// definition = `Object oriented programming is a programming paradigm (style) based on the concept of objects. It is a style of programming where you create objects that contain both data and methods. It is more organized, easier to read, easier to maintain and easier to reuse. It mimics real life objects and is more modular, scalable, secure, efficient, flexible and extensible.


// There are other paradigms such as procedural, logical, functional, event driven, etc. Object oriented programming is the most popular paradigm and is used in most modern programming languages. It is used in javascript, python, java, c++, c#, php, ruby, swift, kotlin, etc. It is not used in older languages like c and fortran.`


// WHAT WE'LL COVER
//  1.  OOP & Its principles
//  2.  Object literals
//  3.  Constructor functions and this
//  4.  Prototypes
//  5.  Prototype chain and inheritance
//  6.  Object.create()
//  7.  call(), apply() and bind()
//  8.  ES6 classes
//  9.  Inheritance and sub classes
//  10. Static methods
//  11. Getters and setters
//  12. Private Properties and methods
//  13. Flags and descriptors
//  14. Sealing and freezing objects




`An object is a self-contained piece of code that is a collection of properties and methods. Objects are used as building blocks and can interact with one another. There are many ways to create an object in JS such as object literals, constructor functions, classes, factories and more`;


// Examples of objects
//  user
//  car
//  person
//  customer
//  product
//  employee

`Why Use OOP?`;
// can make your code easier to read, understand and maintain. It is great for building complex applications and is superflous for small projects. It is also great for building reusable code and for team collaboration




`BASIC PRINCIPLES OF OOP`;
// 1. Encapsulation - the idea of wrapping properties and methods and making them private using the # symbol in a complete unit (such as a class), so they are not accessible outside the class. Some languages have public and private methods and properties. Javascript did not have this feature but now does

// 2. Abstraction - the idea of hiding the complexity of the underlying code. We can hide properties and methods and only show the essentials. We can also use setter and getter methods to control access to properties. Think of this like a car you own, you don't really need to know the details of how a combustion engine works, you just want to drive the car. The engine is abstracted away from you. We've already seen abstraction with methods like fetch, we don't know what happens under the hood but we can use it to make http requests

// 3. Inheritance - the idea of creating new classes from existing classes. The new classes inherit all the properties and methods of the existing class and can add new ones. This is great for code reusability. We'll see this in action when we look at prototypes and classes

// 4. Polymorphism - the idea of using a single interface to represent multiple objects. This is done by using a child class to override a method in the parent class. We'll see this in action when we look at prototypes and classes. Basically a child class having the same named method as the parent class but with different functionality. This is also called method overriding




`Components of OOP`
// Constructor Functions - Creates the blueprint for the object

// Prototypes - Methods and properties that are shared among all instances of the object

// Classes - Modern alternative (syntactic sugar) to constructor functions. They are blueprints for creating objects with pre-defined properties and methods. 

// Instances - copies of the object created from the blueprint and stored in a variable. This is also called an instance of the object. Done using the new keyword


// Example of Object and Instance
// Blueprint  of user
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    createProfile() {

    }

    logout() {

    }
}

// user instances

const user1 = new User('John', 'john@gmail.com');
user1.createProfile();

const user2 = new User('Brad', 'brad@gmail.com');
user2.createProfile();




`OBJECT LITERALS ADVANCED + THE THIS KEYWORD`

// Object literals are a way to create a single object in javascript. An object is a collection of key value pairs seperated by commas. The key is a string (without quotes) and the value can be any data type. If the value is a function, it is called a method. If not, it is called a property. 

// The 'This' keyword refers to the current instance of an object. In the case of an object literal, it is the only instance so the this keyword refers to the object itself.

// It is used to access properties and methods of the object from within the object in a constructor function or a method. To create new properties and methods in a constructor function or a method. To access properties and methods of the parent object in a child object. To access properties and methods of the parent constructor function in a child constructor function. 

// Basically it is used to refer to the object/instance of the object itself as shown in the example below


// Example of an object literal

const rectangle = {
    name: 'Rectangle 1',
    width: 10,
    height: 20,
    area: function () {
        return this.width * this.height;
    }
};





`CONSTRUCTOR FUNCTIONS`;

// Object literals are fine when you want to create a single object, but if you need to create multiple objects, like users, you'll need a constructor function so you don't keep duplicating code. A constructor function is one that returns an object. It is used to create multiple objects of the same type. It is a blueprint for creating objects with

// You initialize instances of the object using the new keyword. The new keyword creates a new empty object and then calls the constructor function. The constructor function then initializes the properties and methods of the object and returns the object. The new keyword also sets the this keyword to the new object.


// Example

new date(); // creates a new date object

function Rectangle() {
    // this is the constructor function, the convention is to capitalize the first letter of the function name for constructor functions

    return this; // this is implicitly returned when you use the new keyword, you don't have to type it out, but it's basically what happens under the hood when you use the new keyword
}

const rect1 = new Rectangle(); // creates a new EMPTY rectangle object because there is nothing in the Rectangle class. if you take out the new keyword, you're basically assigning a function to the variable and it will return undefined since the function doesn't return anything

// When you use the new keyword, 4 things happen

// 1. A new empty object is created
// 2. The this keyword is set to the new object
// 3. The constructor function is called with any arguments that are passed in
// 4. The new object is returned from the constructor function




// ASSIGNING PROPERTIES AND METHODS TO OBJECTS
function Square(name, length) {    // this is the constructor function with variables passed in
    this.name = name;   //You can assign properties and methods to objects using the this keyword
    this.length = length;

    this.area = function () {
        return this.length * this.length;   // here the method calls the properties of the object using the this keyword
    }
}


// You can also hard code values into the constructor function and every child object will have those values, for instance in the example above, you can hard code the name to be square and the lenght to be 10 and every child object will have those values. You can also pass in values when you create the child object and those values will override the hard coded values. See example below

function Square(name, lenght) {    // this is the constructor function with variables passed in
    this.name = 'Square';   //You can assign properties and methods to objects using the this keyword
    this.lenght = 10;

    this.area = function () {
        return this.lenght * this.lenght;   // here the method calls the properties of the object using the this keyword
    }
}

const square1 = new Square('Square 1', 20); // here the name is set to Square 1 and the lenght is set to 20. The area will be 400   

const square2 = new Square(); // here the name is set to Square and the lenght is set to 10. The area will be 100

// You can also add properties and methods to objects outside the constructor function. See example below

function Square(name, lenght) {    // this is the constructor function with variables passed in
    this.name = name;   //You can assign properties and methods to objects using the this keyword
    this.lenght = lenght;
}

Square.prototype.area = function () {
    return this.lenght * this.lenght;   // here the method calls the properties of the object using the this keyword
}

const square3 = new Square('Square 3', 20); // here the name is set to Square 1 and the lenght is set to 20. The area will be 400

console.log(rect2.area()); // here we call the area method of the object and it returns 400





// You can inspect the constructor function of an object using the constructor property. See example below

console.log(rect1.constructor); // returns the constructor function of the object

console.log(rect2 instanceof Rectangle); // returns true if the object is an instance of the constructor function and false if it is not



`LITERALS VS BUILT IN CONSTRUCTORS`

// There are 2 ways to create a string in javascript, you can use a string literal or a string constructor. The same goes for numbers, booleans, arrays, objects, dates, regular expressions, etc. 

const strLit = 'Hello'; // string literal
const srtObj = new String('Hello'); // string object from constructor

console.log(strLit, typeof strLit); // returns string as type
console.log(srtObj, typeof srtObj); // returns object as type with each letter as a value in key/value pairs. It aslo has a length property and prototype just like any object would



`BOXING`;
// When you use a method or try to access a property on a string literal, javascript temporarily converts it to a string object behind the scenes. This is called boxing. The same goes for numbers, booleans, arrays, objects, dates, regular expressions, etc.

// This allows you use properties and methods and dot notation on a string literal. See example below

strLit.toUpperCase(); // returns HELLO as a string object
console.log(strLit.constructor); // returns the constructor function of the object even though it is a literal



`UNBOXING`;
// Unboxing is the reverse. some methods temporarily convert the string object back to a string literal. See example below

console.log(strObj.valueOf()); // returns the string literal

console.log(strObj.toString()); // returns the string literal


`NOTE: If you use the instanceof operator on a string literal, it returns false because it is not an instance of the string constructor function. If you use the instanceof operator on a string object, it returns true because it is an instance of the string constructor function`

console.log(strLit instanceof String); // returns false
console.log(strObj instanceof String); // returns true





`OTHER TYPES OF CONSTRUCTOR FUNCTIONS`

const numLit = 20;  // creates a primitive number
const numObj = new Number(20);  // creates a number object

const boolLit = true;   // returns a boolean literal
const boolObj = new Boolean(true);  // creates a boolean object

const arrLit = [1, 2, 3];   // arrays are objects by default so you get the same thing using the literal or the constructor
const arrObj = new Array(1, 2, 3);


const funcLit = function (x) { return x * x }; // returns a function object with the function as the value of typeof

const funcObj = new Function('x', 'return x * x'); // returns a function object with the function as the value of typeof    // this is not used often

const objLit = { name: 'John' };  // returns an object, js does the new Object behind the scenes
const obj = new Object({ name: 'John' }); // returns an object same as above







`WORKING WITH OBJECT PROPERTIES`
// You can access properties of an object using dot notation or bracket notation. You can also add properties and methods to the instance of an object, or to the prototype itself using dot notation or bracket notation. You can also delete properties from an object using the delete keyword. See example below


function Circle(name, radius) {
    this.name = name;
    this.radius = radius;

    this.area = function () {
        return Math.PI * this.radius * this.radius;
    }
}

const circle1 = new Circle('Circle 1', 10);



`ACCESSING PROPERTIES AND METHODS`
console.log(circle1.name, circle1.radius); // returns Circle 1 10

// You can also access properties using bracket notation. See example below
circle1['name']; // returns Circle 1, however the dot notation is more common



`ADDING PROPERTIES AND METHODS`
// You can also add properties and methods to the instance of an object, or to the class itself using dot notation or bracket notation. See example below

circle1.color = 'red'; // adds a color property to the instance of the object

Circle.prototype.perimeter = function () {
    return 2 * Math.PI * this.radius;
} // adds a perimeter method to the class itself

console.log(circle1.color); // returns red

console.log(circle1.perimeter()); // returns 62.83185307179586




`DELETING PROPERTIES AND METHODS`
// You can also delete properties from an object using the delete keyword. See example below

delete circle1.color; // deletes the color property from the instance of the object

delete Circle.prototype.perimeter; // deletes the perimeter method from the class itself



`CHECKING IF A PROPERTY OR METHOD EXISTS`
// You can check if a property or method exists in an object using the in operator OR the hasOwnProperty. See example below

console.log('color' in circle1); // returns true

console.log('perimeter' in circle1); // returns true

console.log('perimeter' in Circle.prototype); // returns true

console.log(circle1.hasOwnProperty('color')); // returns true

console.log(circle1.hasOwnProperty('perimeter')); // returns false. It's stricter than 'in'

console.log(Circle.prototype.hasOwnProperty('perimeter')); // returns true





`GETTING KEYS AND VALUES OF AN OBJECT`
// You can get the keys and values of an object using the Object.keys() and Object.values() methods. See example below

console.log(Object.keys(circle1)); // returns an array of the keys of the object

console.log(Object.values(circle1)); // returns an array of the values of the object



`GETTING ENTRIES OF AN OBJECT`
// You can get the entries of an object using the Object.entries() method. See example below

console.log(Object.entries(circle1)); // returns an array of arrays of the key/value pairs of the object














`PROTOTYPES`
// a prototype is a special object within every object that is shared to all instances of the object. It is used to add properties and methods to all instances of the object or to the object itself. 

// When you instantiate an object, the prototype is automatically created and attached to the object. You can access the prototype using the __proto__ property. Also the constructor function is attached to the prototype. See example below 

function Cylinder(name, radius, height) {
    this.name = name;
    this.radius = radius;
    this.height = height;
}

const cyl1 = new Cylinder('Cylinder 1', 10, 20);

console.log(cyl1.__proto__); // returns the prototype of the object

console.log(cyl1.__proto__.constructor); // returns the constructor function of the object




`Prototype Chaining`
// The prototype of an object is an object so it also has a prototype within it. The prototype of the prototype is the object prototype which is the origin. This scenario is called prototype chaining. See example below

console.log(cyl1.__proto__.__proto__); // returns the prototype of the prototype of the object

console.log(cyl1.__proto__.__proto__.__proto__); // returns the object prototype which is the origin

// The object prototype has a prototype of null. This origin prototype is the end of the chain and contains the default object methods and properties such as toString(), hasOwnProperty(), etc. See example below

console.log(cyl1.__proto__.__proto__.__proto__.__proto__); // returns null

// You can also access the prototype of an object using the getPrototypeOf() method. See example below

console.log(Object.getPrototypeOf(cyl1)); // returns the prototype of the object

console.log(Object.getPrototypeOf(cyl1) === cyl1.__proto__); // returns true

console.log(Object.getPrototypeOf(cyl1) === Cylinder.prototype); // returns true

console.log(Object.getPrototypeOf(cyl1) === cyl1.constructor.prototype); // returns true



// You can also set the prototype of an object using the setPrototypeOf() method. See example below

const proto = {
    sayHello: function () {
        return 'Hello';
    }
}

Object.setPrototypeOf(cyl1, proto); // sets the prototype of the object to the proto object

console.log(cyl1.sayHello()); // returns Hello



`NOTE: Even arrays have prototypes too because they are objects. The prototype of an array is the array prototype. The array prototype has the object prototype as its origin which has a prototype of null.

The same with strings and numbers constructed with the string object constructor and number object constructor. They have prototypes too. The prototype of a string object is the string prototype. The prototype of a number object is the number prototype. The string prototype and number prototype have the object prototype as their origin which has a prototype of null.

In the case of an object literal, it's prototype is the object prototype which has a prototype of null. See example below`;





`ADDING METHODS AND PROPERTIES TO PROTOTYPE`;

// The prototype is great for storing properties and methods to be shared among all instances of an object. It also stores them privately so they are not in the object itself. You add methods and properties to the prototype by assignment or using the Object.defineProperty() method. See example below

function Triangle(name, base, height) {
    this.name = name;
    this.base = base;
    this.height = height;
}

Triangle.prototype.area = function () {
    return 0.5 * this.base * this.height;
}

const tri1 = new Triangle('Triangle 1', 10, 20);

console.log(tri1.area()); // returns 100

// You can also add properties to the prototype using the Object.defineProperty() method. See example below

Object.defineProperty(Triangle.prototype, 'perimeter', {
    get: function () {
        return 3 * this.base;
    }
});





`OBJECT.CREATE()`
// Object.create() is a method that allows you create an object and set the prototype of the object at the same time. It is a static method of the Object class. It takes in 2 parameters, the first is the prototype of the object and the second (optional) is an object containing the properties and methods of the object. See example below

const prototype = {
    sayHello: function () {
        return 'Hello';
    }
}

function createObject(name, age) {
    Object.create(prototype, {
        name: { value: 'John' },
        age: { value: 30 }
    })
}

const newObject = createObject('John', 39);

newObject.name = 'Mary';


// Objects created this way won't have a constructor function because they were not created with one. The only constructor function will be in the origin object prototype.






`PROTOTYPICAL INHERITANCE + CALL(), APPLY() AND BIND()`;

// So far, we've seen how objects inherit prototypes from their parent prototypes all the way up to the origin object prototype. This is called prototypal inheritance. It is the idea that an object inherits properties and methods from its parent prototype. It is the basis of OOP in javascript. 

// However , we can also inherit properties and methods from another object using the call(), apply() and bind() methods. These methods are used to call functions and set the this keyword to the current object. See example below


`CALL()`

// The call() method is used to call a function and set the this keyword to the object passed in. Meaning

function Shape(name) {
    this.name = name;
}

function Recta(name, height, width) {

    Shape.call(this, name);
    this.height = height;
    this.width = width;
}
function Circa(name, radius) {

    Shape.call(this, name);
    this.radius;
}

const recta1 = new Recta('Recta 1', 20, 20);

// The real benefit to prototypical inheritance is being able to share prototypes and all their methods
Shape.prototype.logName = console.log(this.name);

Shape.prototype.draw = function () {
    return `Drawing ${this.name}`;
}

// To share it, you have to use the Object.Create method to pass the prototype into the child object

Recta.prototype = Object.create(Shape.prototype);

// Now the Recta object has the shape prototype and can now call it's methods

recta1.logName;


// At this point, the constructor function of child elements is still the parent element's constructor function. To change it you have to do something like this

Recta.prototype.constructor = Recta;
Circa.prototype.constructor = Circa;


//OTHER EXAMPLES
const persn = {
    name: 'John',
    age: 30,
    sayHello: function () {
        return `Hello ${this.name}`;
    }
}

const persn2 = {
    name: 'Brad',
    age: 40
}

console.log(persn.sayHello()); // returns Hello John


console.log(persn.sayHello.call(persn2)); // returns Hello Brad

console.log(person.sayHello.apply(persn2)); // returns Hello Brad

const sayHey = person.sayHello.bind(persn2); // returns Hello Brad

console.log(sayHello()); // returns Hello Brad






















`OOP - CLASSES`

// definition = `Classes are synthetic sugar for Object Oriented Programming. Under the hood, they are still constructor functions and prototypes. The class contains a constructor function and every time you instantiate an object, it calls the constructor function. The constructor function initializes the properties and methods of the object and returns the object. The new keyword also sets the this keyword to the new object.`

// The example below

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello = function () {
    return `Hello ${this.firstName} ${this.lastName}`;
}

const personOne = new Person('John', 'Doe');


// can be written as a class like this

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

`NOTE: The constructor function is the only method that is called automatically when you instantiate an object. All other methods have to be called manually. you don't use the function keyword when declaring methods within classes. 

You can also add static methods to classes. Static methods are methods that can be called without instantiating an object. See example below`;




`CLASS INHERITANCE`;
// Before classes, inheritance in OOP was done with the call method. With classes, you can inherit properties and methods from another class using the extends keyword. See example below

// Parent Class
class Shape {
    constructor(name) {
        this.name = name;
    }

    logName() {
        return `${this.name}`;
    }
}

// Child/Sub Class
class Rectangle extends Shape {
    constructor(name, height, width) {
        super(name);

        this.height = height;
        this.width = width;
    }
}

`The super keyword is similar to the call keyword. It calls the constructor function of the parent class and sets the this keyword to the current object. It also allows you to access the parent class properties and methods. See example below`

const RectangleOne = new Rectangle('Rectangle 1', 10, 20);

console.log(RectangleOne.logName()); // returns Rectangle 1


// You can override the parent class methods in the child class by creating a method with the same name within the child class.  




`STATIC METHODS`

// Static methods are methods that can be called without instantiating an object. They are called on the class itself. See example below

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const personThree = new Person('John', 'Doe');

// To call the sayHello method, you have to instantiate an object first and call it from the instance, but you can call the static method without instantiating an object. 

Person.addNumbers(1, 2); // returns 3







`BIND(), DEFINING THE THIS KEYWORD`
// The this keyword in JS is dynamic. It changes depending on how it is called. It is set to the global object by default. In strict mode, it is set to undefined by default. Within the global scope or a regular functions, it pertains to the Window object. Within a constructor function, it pertains to the instance of the object calling it. In an event listnener, 'this' pertains to the object the event was called on. In a callback function, it pertains to the object calling the callback function. In a method, it pertains to the object calling the method. In an arrow function, it pertains to the parent scope. See example below



// Javascript gives us the ability to manually set what this refers to using the call(), bind() and apply() methods. The bind() method returns a new function with the this keyword set to the object passed in. See example below

class App {
    constructor() {
        this.serverName = 'localhost';

        // document.querySelector('button').addEventListener('click', this.getServerName);

        // The above line wouldn't work because this in a callback function no longer refers to the object. It refers to the button object. To fix this, you have to bind the this keyword to the object. See example below

        document.querySelector('button').addEventListener('click', this.getServerName.bind(this));
    }

    getServerName() {
        return this.serverName;
    }
}

const app = new App();
app.getServerName(); // returns localhost


// So as seen above, bind is used to set the this keyword to the object passed in. It returns a new function with the this keyword set to the object passed in. It doesn't call the function, it just returns it. You have to call it manually. See example below

const getServerName = app.getServerName.bind(app);

getServerName(); // returns localhost










`GETTERS AND SETTERS`

// Getters and setters are methods that are used to get and set the properties of an object. They are used to control access to properties of an object. They are also used to validate data before setting a property or to do something to the property before accessing it. 

// You can use this with constructor functions or classes or even object literals. See example below

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        // We had to add an underscore to the firstname property in the constructor function to avoid an infinite loop. If we didn't, the getter method would call itself over and over again because it has the same name as the property it is getting.
        return this.capitalizeFirst(this._firstName);
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    set fullName(value) {
        const parts = value.split(' ');
        this._firstName = parts[0];
        this._lastName = parts[1];
    }

    capitalizeFirst(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}

const personFour = new Person('John', 'Doe');

console.log(personFour.fullName); // returns John Doe

personFour.fullName = 'Mary Jane'; // sets the firstName to Mary and the lastName to Jane. It is able to differentiate between the getter and setter methods because of assignment of values

// As seen above, the getter and setter methods are called like properties, not like methods.  

// DO NOT GIVE YOUR GETTER/SETTER FUNCTION THE SAME NAME AS THE PROPERTY YOU ARE GETTING/SETTING. e.g get firstName() { return this.firstName; } This will cause an infinite loop because the getter function will call itself over and over again. 



`The Underscore convention`;
// For differenciating between private properties and methods, it is a convention to use an underscore before the name of the property. e.g _firstName. This is not a rule, it is just a convention. It was used by devs to signify private properties. However, prior to ES2022, JS didn't truly have private properties and you could still access the property from outside the object even with the underscore. 







`GETTERS AND SETTERS WITH CONSTRUCTOR FUNCTIONS USING DEFINEPROPERTY()`;

function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;

    Object.defineProperty(this, 'firstName', {
        get: function () {
            return this.capitalizeFirst(this._firstName);
        },
        set: function (value) {
            this._firstName = value;
        }
    })
    Object.defineProperty(this, 'lastName', {
        get: function () {
            return this.capitalizeFirst(this._lastName);
        },
        set: function (value) {
            this._lastName = value;
        }
    })
    Object.defineProperty(this, 'fullName', {
        get: function () {
            return this.firstName + ' ' + this.lastName;    // You get the capitalized names cos this calls the getters from the other two
        },
    })

}

Person.prototype.capitalizeFirst = function (value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

const personFive = new Person('John', 'Doe');

console.log(personFive.firstName); // returns John




`GETTERS AND SETTERS WITH OBJECT LITERALS`;
const PersonObj = {
    _firstName: 'John',
    _lastName: 'Doe',

    get firstName() {
        return this.capitalizeFirst(this._firstName);
    },

    set firstName(value) {
        this._firstName = value;
    },

    get lastName() {
        return this.capitalizeFirst(this._lastName);
    },

    set lastName(value) {
        this._lastName = value;
    },

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },

    capitalizeFirst: function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

};













`PRIVATE PROPERTIES AND METHODS - CONVENTIONS`;

// Javascript didn't have private properties and methods till ES2022 class fields were released. However, there were ways to signify privacy. One way was to use the underscore convention. This is not a rule, it is just a convention. and it was used by devs to signify private properties.  You could still access the _ property from outside the class. 

// Another pre ES 2022 convention was to use symbols. Symbols are unique identifiers created using the Symbol() function. 


class Wallet {
    constructor() {
        this._balance = 0;
        this._transactions = [];
    }

    deposit(amount) {
        this._balance += amount;
        this._processDeposit(amount);
    }

    withdraw(amount) {
        amount > this._balance ?
            console.log('Insufficient Funds') :
            this._processWithdrawal, this._balance -= amount;
    }

    _processDeposit(amount) {
        console.log(`Depositing ${amount}`);
        this._transactions.push({
            type: 'deposit',
            amount: amount
        });
    }

    _processWithdrawal(amount) {
        console.log(`Withdrawing ${amount}`);
        this._transactions.push({
            type: 'withdrawal',
            amount: amount
        });
    }

    get balance() {
        return this._balance;
    }

    get transactions() {
        return this._transactions;
    }

}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(100);
console.log(wallet._balance); // returns 200 because the balance property is not private. It can be accessed from outside the class. However you want to avoid using the 'private property' from outside the class. You should use the getter and setter methods instead. See example below

console.log(wallet.balance); // returns 200. This is the proper way to access the balance property from outside the class. You should use the getter and setter methods instead of accessing the property directly. See example below












`ES 2022 CLASS FIELDS / PRIVATE PROPERTIES AND METHODS`

// ES 2022 introduces class fields. Class fields are properties and methods that are private by default. They are not accessible from outside the class. They are declared using the # symbol. See example below

class Wallet {
    #balance = 0;
    #transactions = [];

    deposit(amount) {
        this.#balance += amount;
        this.#processDeposit(amount);
    }

    withdraw(amount) {
        amount > this.#balance ?
            console.log('Insufficient Funds') :
            this.#processWithdrawal, this.#balance -= amount;
    }

    #processDeposit(amount) {
        console.log(`Depositing ${amount}`);
        this.#transactions.push({
            type: 'deposit',
            amount: amount
        });
    }

    #processWithdrawal(amount) {
        console.log(`Withdrawing ${amount}`);
        this.#transactions.push({
            type: 'withdrawal',
            amount: amount
        });
    }

    get balance() {
        return this.#balance;
    }

    get transactions() {
        return this.#transactions;
    }
}

const wallet1 = new Wallet();

wallet1.#balance; // returns a syntax error because the balance property is private. It cannot be accessed from outside the class

wallet1.balance; // returns 0. This is the proper way to access the balance property from outside the class. You should use the getter and setter methods instead of accessing the property directly. See example below












`PROPERTY FLAGS AND DESCRIPTORS - CONFIGURABLE, ENUMERABLE, WRITABLE`;

// Javascript has 3 property flags. They are configurable, enumerable and writable. They are used to control the behavior of properties. They are set to true by default.



`[configurable]`;
// This flag determines if a property can be deleted or changed (edited or added to). It is set to true by default. See example below

const personSix = {
    name: 'John',
    age: 30
}

delete personSix.name; // deletes the name property from the object because configurable is set to true 



`[enumerable]`;
// This flag determines if a property can be looped over. It is set to true by default. See example below



`[writable]`;
// This flag determines if a property can be changed (edited). It is set to true by default. See example below




// One example where these flags are set to false by default is with Math.PI. It's value can't be changed

Math.PI = 4; // nothing happens cos it's flag values are false



`GETTING PROPERTY DESCRIPTORS`;

// You can get the property descriptors of an object using the Object.getOwnPropertyDescriptor() method or Object.getOwnPropertyDescriptors() method for multiple properties. See example below

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(descriptor); // logs an object with the value of the property, the status of configurable as false, enumerable as false and writable as false  



const ownObj = {
    name: 'John',
    age: 10,
    weight: 33
}

descriptor = Object.getOwnPropertyDescriptors(ownObj);

console.log(descriptor); // logs an object with the value of the property, the status of configurable as true, enumerable as true and writable as true for each property in the object



`SETTING PROPERTY DESCRIPTORS`;

// You can also set the property descriptors of an object using the Object.defineProperty() method or Object.defineProperties() method for multiple properties. See example below


Object.defineProperty(ownObj, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
});

descriptor = Object.getOwnPropertyDescriptor(ownObj, 'name');

console.log(descriptor);    // returns the descriptor object with the value of the property and all flags set to false 

ownObj.name = 'Mary';   // nothing happens because the writable flag is set to false

delete ownObj.name; // nothing happens because the configurable flag is set to false

for (let [key, value] in ownObj) {
    console.log(key);   // You get every property except the name property because the enumerable flag was set to false
}







`SEALING AND FREEZING OBJECTS PROPERTIES`;

// You can seal and freeze objects to prevent them from being changed

// SEALING OBJECTS - When you seal an object, you can't add or delete properties from the object. You can only change the values of the already existing properties. It does this by setting the configurable flag to false

const personSeven = {
    name: 'John',
    age: 30
}

Object.seal(personSeven);

personSeven.name = 'Mary';  // You can change the value of the property

personSeven.weight = 33;    // You can't add a new property

delete personSeven.age; // You can't delete a property

console.log(personSeven);  // returns {name: "Mary", age: 30} because the name property was changed and the age property was not deleted


// A check on the property descriptors of the object shows that all the flags are set to true except the configurable flag which is set to false

descriptor = Object.getOwnPropertyDescriptors(personSeven);

console.log(descriptor); // returns an object with the value of the property, the status of configurable as false, enumerable as true and writable as true for each property in the object


`Object.isSealed(objectName)`;
// returns true if the object is sealed and false if it is not





// FREEZING OBJECTS - When you freeze an object, you can't add, delete or change the values of the properties of the object. It sets the configurable AND writable flags of the object to false

const personEight = {
    name: 'John',
    age: 30
}

Object.freeze(personEight);

personEight.name = 'Mary';  // You can't change the value of the property

personEight.weight = 33;    // You can't add a new property

delete personEight.age; // You can't delete a property

console.log(personEight);  // returns {name: "John", age: 30} because the name property was not changed and the age property was not deleted


// A check on the property descriptors of the object shows that all the flags are set to true except the configurable flag which is set to false and the writable flag which is set to false


descriptor = Object.getOwnPropertyDescriptors(personEight);

console.log(descriptor); // returns an object with the value of the property, the status of configurable as false, enumerable as true and writable as false for each property in the object



`Object.isFrozen(objectName)`;
// returns true if the object is frozen and false if it is not. If an object is frozen, it is also sealed because both writable and configurable flags are set to false











`MODULES & TOOLING`;


`MODULES`
// Modules are used to organize code into separate files. They are used to separate code into different files and import them into the main file. This makes the code more organized and easier to maintain.

// We can use the export keyword to export a variable, function or class from a file. We can also use the import keyword to import a variable, function or class from another file. 

// In the first file, we export the variable, function or class using the export keyword. See example below

// First File
export const name = 'John';

export function sayHello() {
    return `Hello ${name}`;
}

class Person {
    constructor(name) {
        this.name = name;
    }
}
// You can also export the class like this. NOTE that you can only have one default export per file
export default Person;




// In the second file, we import the variable, function or class using the import keyword. See example below

// Second File
import { name, sayHello, Person } from './file1.js';

console.log(name); // returns John

console.log(sayHello()); // returns Hello John

const person9 = new Person('Mary');




// We can also import everything from a file using the * symbol. See example below

// We can also import 3rd party modules/packages from npm.;




`WHY USE MODULES & TOOLING`;

// Makes your code more organized and easier to maintain by breaking it up into separate files

// Reusability - You can reuse code from one file in another file

// NPM Packages - You can use 3rd party packages from npm to add functionality to your code

// Optimization - You can use tools to optimize your code for production. e.g minification, uglification, etc

// Customized Environment - You can use tools to customize your environment to your needs. e.g you can use babel to convert your code to ES5 for older browsers



`TYPES OF MODULES`;

// There are 2 common types of modules. They are CommonJS and ES6 Modules. CommonJS is the module system used in NodeJS. ES6 Modules is the module system used in the browser.

// modules are not supported by older browsers. Newer browsers support ES modules but it is still recommended to use a bundler like webpack to bundle your modules into one file for older browsers.






`WHAT IS NODE JS`;
// Node JS is a Javascript runtime environment. It allows JS to run on the server, much like other languages e.g Python, Ruby, Java etc. 
// Node uses the V8 engine which is the same engine used by Chrome to run JS in the browser. The inner workings are similar to the browser. It has a call stack, event loop, callback queue, etc. but obviously there is no DOM, no Window or Document in Node. It's own global object is called GLOBAL




`COMMON JS MODULES`;

// CommonJS is the module system used in NodeJS. It uses the require() function to import modules and the module.exports object to export modules. See example below

// Export File

const namee = 'John';

function sayHello() {
    return `Hello ${name}`;
}

class Person {
    constructor(namee) {
        this.name = namee;
    }
}

module.exports = {
    name,
    sayHello,
    Person
}

// If it's just one variable or class you're exporting, you don't need an object: module.exports = name; or module.exports = Person;



// Import File

const { namee, sayHello, Person } = require('./file1.js');
const money = require('./file1.js');

// if it's just one function or variable you're importing, you don't need to destructure with the curly braces: const namee = require('./file1.js');

// You can also import multiple files with multiple requires statements as shown above

console.log(namee); // returns John

console.log(sayHello()); // returns Hello John

const person10 = new Person('Mary');






`NPM - NODE PACKAGE MANAGER`;

// In addition to importing your own modules, you can install 3rd party modules from npm. NPM is the node package manager. It is used to install 3rd party modules from npm or to publish your own modules to npm.

// You initialize npm in your application by running npm init in your terminal within your app folder. This creates a package.json file in your application. The package.json file contains information about your application and the dependencies of your application. It also contains scripts that you can run in your application. See example below

`npm init OR npm init -y`; // the -y flag skips all the questions and just creates the package.json file

`npm install package-name`; // installs the package and adds it to the dependencies in the package.json file

// if you add the -g flag to the install command, it installs the package globally on your computer. This means you can use the package in any application on your computer. e.g npm install -g nodemon

// if you add the -D OR --save-dev flag to the install command, it installs the package as a dev dependency. This means it is only used in development and not in production. e.g npm install --save-dev nodemon

// When you install a package/module, it is added to the node_modules folder (one is created with your first install) in your application. You can then import the package into your application using the require() function. This folder is full of not just modules you install but their dependencies and the dependencies of those dependencies. 


`npm install package1 package2 package3`; // installs multiple packages at once

`npm install package@version`; // installs a specific version of a package

`npm install package@latest`; // installs the latest version of a package



`npm uninstall package-name`; // uninstalls the package and removes it from the dependencies in the package.json file


`SCRIPTS IN PACKAGE.JSON`;

// You can add scripts to your package.json file. These scripts can be run using the npm run script-name command. See example below

// Sample package.json file

// {
//     "name": "nodejs",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//         "start": "node index.js",
//         "dev": "nodemon index.js"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//         "express": "^4.17.1"
//     },
//     "devDependencies": {
//         "nodemon": "^2.0.12"
//     }
// }

// To run the start script, you run npm run start in your terminal. To run the dev script, you run npm run dev in your terminal. You can also run the scripts without the run keyword. See example below

`npm start`; // runs the start script

`npm run dev`; // runs the dev script

// You can also run multiple scripts at once. See example below

`npm run start dev`; // runs the start and dev scripts at once

// You can also run scripts from 3rd party packages. See example below

`npm run package-name script-name`; // runs the script from the package












`ES MODULES`;
// ES Modules run in the browser, not in your terminal like CommonJS. They use the import keyword to import modules and the export keyword to export modules. See example below

// ES Modules only work on modern browsers so you have to use a bundler like webpack to bundle your modules into one file for older browsers. You can add type="module" to your script tag  in your html file to tell the browser that the JS file incorporates ES modules. See example below

`<script type="module" src="app.js" defer></script>`


// Export File

const nameee = 'John';

function sayHello(name) {
    return `Hello ${name}`;
}

class Person {
    constructor(name) {
        this.name = name;
    }
}

// export default Person; // if you want to export only one function. You can only have one export statement per file

export {
    nameee,
    sayHello,
    Person
}

// If it's just one variable or class you're exporting, you don't need an object: export name; OR export default Person;



// Import File

import { nameee, sayHello, Person } from './file1.js';







`MODULE BUNDLERS`;

// Module bundlers are used to bundle your modules into one file for older browsers. They are also used to optimize your code for production AND to customize your environment to your needs. e.g you can use babel to convert your code to ES5 for older browsers

// Some popular module bundlers are webpack, parcel, rollup, etc. Webpack is the most popular and most widely used. It is the most powerful and most customizable, but also the most difficult to configure. Parcel is the easiest to configure and the fastest but is also the least customizable. Rollup is fast and customizable but is the least popular.




`WEBPACK`;

// Webpack works as a plugin for your application. It is configured using a webpack.config.js file

`Source Files => Webpack (plugins and loaders) => Bundle => Output Files`;


// To install webpack, you run npm install webpack webpack-cli -D in your terminal while in your application folder. The webpack-cli is the command line interface for webpack. It allows you to run webpack commands in your terminal.

`npm init`;  // initializes npm in your application

`npm i webpack webpack cli`; // installs webpack and webpack cli

// To run webpack, you run npx webpack in your terminal while in your application folder. This creates a dist folder in your application with a main.js file. This is the bundled file. It contains all your modules bundled into one file. You can then import this file into your html file. 

`npx webpack --watch`; // runs webpack with the watch flag: It watches for changes in your file and automatically bundles and saves your files when you make changes

`npm webpack --mode [development OR production]`; // runs webpack in development mode (default) or production mode. The dev mode bundles your files but doesn't optimize them for production

// You can add a script to your package.json file to run webpack so you can run it with npm run script-name. 


`CONFIGURING WEBPACK`;
// To configure webpack, you create a webpack.config.js file in your application src folder. See example below

// webpack.config.js file

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};

// The mode property sets the mode to development or production. The entry property sets the entry point for your application. The output property sets the output file for your application. The path property sets the path for your output file. The filename property sets the name of your output file. The resolve method resolves the path to the output file. The __dirname variable is a global variable that gives you the absolute path to the current directory. The dist folder is the distribution folder. It contains the bundled file. It is the folder you deploy to production. The src folder is the source folder. It contains the source files. It is the folder you work in.







`CSS & STYLE LOADERS`;

// Webpack can also bundle your css files. To do this, you need to install the style-loader and css-loader packages. See example below

// first you install the packages

`npm i style-loader css-loader -D`;

// then you modify your webpack.config.js file to include the loaders in your module.exports object. See example below

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }

};


`HTMLWEBPACKPLUGIN`;

// The htmlwebpackplugin automatically creates a html template file and adds your bundled js file to it. To install it, you run npm i html-webpack-plugin -D in your terminal while in your application folder. To use it, you add it to your webpack.config.js file. See example below

`npm i -D html-webpack-plugin`; // installs the htmlwebpackplugin



// configuring webpack.config.js file to use the htmlwebpackplugin

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpage title',     // sets the title of your app/page
            filename: 'index.html',     // name of the html file that will be created
            template: './src/index.html'    // references a html template file you create in the source folder
        })
    ]
};

// The plugins property is an array of plugins. The HtmlWebpackPlugin is a constructor function. You pass in an object with a template property. The template property is the path to your html file. The HtmlWebpackPlugin automatically creates a html file and adds your bundled js file to it. It also adds the html file to your dist folder. You can also add a title property to the object. The title property is the title of your html file. 


// In your html template, you can use ES6 code snippets to put dynamic content such as the title of the page

`<%= htmlWebpackPlugin.options.title %>`;    // this snippet pulls the title from your webpack.config.js file and dynamically adds the title





`WEBPACK DEV SERVER`;

// The webpack dev server is a development server that allows you to run your application on a local server. It also watches for changes in your files and automatically bundles and saves your files when you make changes. To install it, you run npm i webpack-dev-server -D in your terminal while in your application folder. To use it, you add it to your webpack.config.js file. See example below

`npm i -D webpack-dev-server`; // installs the webpack dev server

// you can add a script to the package.json to run the server with

`"start": "webpack serve "`; // this script runs the webpack dev server with the default port of 8080


// configuring webpack.config.js file to use the webpack dev server

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 8080, // the port webpack-dev-server listens to
        open: true, // open the page in default browser
        open: {
            app: {
                name: 'Google Chrome' // or 'chrome' on windows OR 'google-chrome' on Linux. opens the page in chrome. 
            }
        },
        hot: true,   // enable HMR on the server. HMR is enabled by default for webpack-dev-server when using --inline flag. HMR means that when you change something in your code, it doesn't refresh the whole page, but just the part that was changed.
        compress: true, // enable gzip compression
        historyApiFallback: true, // This option enables support for serving HTML5 History API fallback responses.

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // Add the plugin to the plugins array
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]

};







`BABEL SETUP - CONVERTING ES6 TO ES5 FOR OLDER BROWSERS`;

// Babel is a tool that converts your ES6 code to ES5 code for older browsers. To install it, you run npm i @babel/core @babel/preset-env babel-loader -D in your terminal while in your application folder.

`npm i -D @babel/core @babel/preset-env babel-loader`; // installs babel

// Then you add it to your webpack.config.js file. See example below

// configuring webpack.config.js file to use babel

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // the path to the output file
        filename: 'bundle.js' // the name of the output file
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 8080, // the port webpack-dev-server listens to
        open: true, // open the page in default browser
        open: {
            app: {
                name: 'Google Chrome' // or 'chrome' on windows OR 'google-chrome' on Linux. opens the page in chrome. 
            }
        },
        hot: true,   // enable HMR on the server. HMR is enabled by default for webpack-dev-server when using --inline flag. HMR means that when you change something in your code, it doesn't refresh the whole page, but just the part that was changed.
        compress: true, // enable gzip compression
        historyApiFallback: true, // This option enables support for serving HTML5 History API fallback responses.

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            // Add the loader for .js files.
            // Exclude /node_modules directory from babel-loader.
            // This avoids transpiling dependencies like react-router-dom, etc.
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env'] }
                }
            }
        ]
    }
};





`WebPacks Mini-CSS-Extract-Plugin`;

// This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS and compiles a main.css file in your dist folder

`npm i -D mini-css-extract-plugin`; // installs the plugin

// Import the plugin in your webpack.config.js file
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // imports the plugin



// Then edit your webpack.config.js file to use the plugin. See example below

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 8080, // the port webpack-dev-server listens to
        open: {
            app: {
                name: 'Google Chrome'
            }
        }, // open the page in browser
        hot: true,   //  HMR means that when you change something in your code, it doesn't refresh the whole page, just the part that was changed.
        compress: true, // enable gzip compression
        historyApiFallback: true, // This option enables support for serving HTML5 History API fallback responses.

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    // Add the plugin to the plugins array
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin()
    ]

};














`ITERATORS, GENERATORS & DATA STRUCTURES`;

`SYMBOLS`;

// Symbols are unique identifiers created using the Symbol() function. They are primitive data types and mostly used to create unique ids in Iterators, objects etc. Symbols can have identifiers and even if two symbols have the same identifier, they are not equal. See example below;

const sym4 = Symbol();      // a symbol with no identifier
const sym5 = Symbol('foo');     // a symbol with an identifier - foo

console.log(sym4);  // returns Symbol()
console.log(sym5);  // returns Symbol(foo)
console.log(typeof sym5);   // returns symbol
console.log(sym4.description);   // returns undefined because sym4 has no identifier
console.log(sym5.description);   // returns the identifier of sym5 which is foo


`Two Symbols are never equal even if they have the same identifier`;
console.log(Symbol('foo') === Symbol('foo'));   // returns false because even though they have the same identifier, they are not equal


const user10 = {
    [Symbol('id')]: 1,
    name: 'John',
    email: 'john@gmail.com'
}
console.log(user10.id); // returns undefined because you can't access a symbol property like this. You have to use the Object.getOwnPropertySymbols() method. See example below







`Object.getOwnPropertySymbols()`;
console.log(Object.getOwnPropertySymbols(user10)); // returns an array with the symbol property of the object


`Symbols are not enumerable - you can't loop through them`;
for (let i in user10) {
    console.log(i); // returns name and email but not id because id is a symbol property
}

`Symbols are ignored by JSON.stringify()`;
console.log(JSON.stringify({ key: 'prop' })); // returns {"key":"prop"}
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' })); // returns {}


`Symbols are ignored by Object.assign()`;
console.log(Object.assign({ key: 'prop' })); // returns {key: "prop"}
console.log(Object.assign({ [Symbol('sym1')]: 'prop' })); // returns {}


`Symbols are ignored by Object.keys()`;
console.log(Object.keys({ key: 'prop' })); // returns ["key"]
console.log(Object.keys({ [Symbol('sym1')]: 'prop' })); // returns []


`Symbols are ignored by Object.values()`
console.log(Object.values({ key: 'prop' })); // returns ["prop"]
console.log(Object.values({ [Symbol('sym1')]: 'prop' })); // returns []


`Symbols are ignored by Object.entries()`
console.log(Object.entries({ key: 'prop' })); // returns [["key", "prop"]]
console.log(Object.entries({ [Symbol('sym1')]: 'prop' })); // returns []


`Symbols are ignored by for...in loop`
for (let i in { key: 'prop' }) {
    console.log(i); // returns key
}

for (let i in { [Symbol('sym1')]: 'prop' }) {
    console.log(i); // returns nothing
}


`Symbols are ignored by Object.getOwnPropertyNames()`
console.log(Object.getOwnPropertyNames({ key: 'prop' })); // returns ["key"]
console.log(Object.getOwnPropertyNames({ [Symbol('sym1')]: 'prop' })); // returns []


`Symbols are FOUND by Object.getOwnPropertySymbols()`
console.log(Object.getOwnPropertySymbols({ key: 'prop' })); // returns []
console.log(Object.getOwnPropertySymbols({ [Symbol('sym1')]: 'prop' })); // returns [Symbol(sym1)]


`Symbols are ignored by Reflect.ownKeys()`
console.log(Reflect.ownKeys({ key: 'prop' })); // returns ["key"]
console.log(Reflect.ownKeys({ [Symbol('sym1')]: 'prop' })); // returns []



`Symbol.for() & Symbol.keyFor()`;

// Symbol.for() creates a global symbol that can be accessed from anywhere in your application. It takes in an identifier and returns a symbol. If the symbol already exists, it returns the symbol. See example below

const sym6 = Symbol.for('id');  // creates a global symbol with the identifier id
const sym7 = Symbol.for('id');  // returns the symbol with the identifier id

console.log(sym6 === sym7); // returns true because they are the same symbol

console.log(Symbol.keyFor(sym6)); // returns id because it is a global symbol

const sym8 = Symbol('id');  // creates a symbol with the identifier id

console.log(Symbol.keyFor(sym8)); // returns undefined because it is not a global symbol




`Symbol.toString() & Symbol.valueOf()`;

// Symbol.toString() returns the string representation of a symbol. Symbol.valueOf() returns the primitive value of a symbol. See example below

const sym9 = Symbol('id');

console.log(sym9.toString()); // returns Symbol(id)

console.log(sym9.valueOf()); // returns Symbol(id)

console.log(typeof sym9.valueOf()); // returns symbol



`Full list of symbols`;

console.log(Object.getOwnPropertySymbols(window)); // returns an array of all the symbols in the window object

console.log(Object.getOwnPropertyNames(Symbol)); // returns an array of all the symbols in the Symbol object









`ITERATORS`;

// Iterators are objects that define a sequence and a return value upon completion. They contain a next() method. The next() method returns an object with two properties: value and done. The value property is the current value and the done property is a boolean that returns true if the iteration is complete and false if it is not. See example below

const arr = [1, 2, 3, 4, 5];

const it = arr[Symbol.iterator]();  // creates an iterator object

console.log(it.next()); // returns {value: 1, done: false}
console.log(it.next()); // returns {value: 2, done: false}
console.log(it.next()); // returns {value: 3, done: false}
console.log(it.next()); // returns {value: 4, done: false}
console.log(it.next()); // returns {value: 5, done: false}
console.log(it.next()); // returns {value: undefined, done: true}

// You can also create your own iterators. See example below

const person11 = {
    name: 'John',
    age: 30,
    city: 'Lagos',
    [Symbol.iterator]: function () {
        let i = 0;
        let self = this;
        let keys = Object.keys(this);
        return {
            next: function () {
                return {
                    value: self[keys[i++]],
                    done: i > keys.length
                }
            }
        }
    }
}

const it2 = person11[Symbol.iterator]();

console.log(it2.next()); // returns {value: "John", done: false}
console.log(it2.next()); // returns {value: 30, done: false}
console.log(it2.next()); // returns {value: "Lagos", done: false}
console.log(it2.next()); // returns {value: undefined, done: true}


// Another example of creating your own rudimentary iterator

const app5 = {
    nextIndex: 0,
    teams: ['Red Sox', 'Yankees', 'Rays', 'Blue Jays'],
    next: function () {
        if (this.nextIndex < this.teams.length) {
            return { value: this.teams[this.nextIndex++], done: false }
        } else {
            return { done: true }
        }
    }
}

console.log(app5.next()); // returns {value: "Red Sox", done: false}
console.log(app5.next()); // returns {value: "Yankees", done: false}
console.log(app5.next()); // returns {value: "Rays", done: false}
console.log(app5.next()); // returns {value: "Blue Jays", done: false}
console.log(app5.next()); // returns {done: true}

// The example above is not iterable, so you can't use the for...of loop on it. To make it iterable, you have to add the Symbol.iterator property to it. See example below

const app6 = {
    nextIndex: 0,
    teams: ['Red Sox', 'Yankees', 'Rays', 'Blue Jays'],
    next: function () {
        if (this.nextIndex < this.teams.length) {
            return { value: this.teams[this.nextIndex++], done: false }
        } else {
            return { done: true }
        }
    },
    [Symbol.iterator]: function () {
        return this;
    }
}

// OR
const app7 = {
    teams: ['Red Sox', 'Yankees', 'Rays', 'Blue Jays'],
    next: function () {
        let nextIndex = 0;
        return {
            next: function () {
                nextIndex < this.teams.length
                    ? { value: this.teams[nextIndex++], done: false }
                    : { done: true }
            }
        }
    }
}

for (team of app7) {
    console.log(team); // returns Red Sox Yankees Rays Blue Jays
}

// OR

const app8 = {
    teams: ['Red Sox', 'Yankees', 'Rays', 'Blue Jays'],
    [Symbol.iterator]: function* () {
        yield* this.teams;
    }
}

for (let team of app7) {
    console.log(team); // returns Red Sox Yankees Rays Blue Jays
}












`GENERATORS`;

// Generators are functions that can be paused and resumed. They are defined using the * symbol. They are used to create iterators. It has a keyword called yield that pauses the sequence. They are also used to create infinite sequences. See example below

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


`You can use the spread operator to get the entire array`

console.log([...teamIterator]); // returns ["Red Sox", "Yankees", "Rays", "Blue Jays"]

`You can use destructuring to get each value`
const [first, second, third, fourth] = teamIterator;    // assigns each value to the corresponding variable




// You can also create infinite sequences using generators. See example below

function* createId() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const idGenerator = createId();

console.log(idGenerator.next()); // returns {value: 1, done: false}
console.log(idGenerator.next()); // returns {value: 2, done: false}









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

const setIterator = set8.values();

console.log(setIterator.next()); // returns {value: 1, done: false}








`MAPS`;

// Maps are a collection of key-value pairs. They are similar to objects but the keys can be any data type even an array, function or object and must be unique. They are iterable. See example below

`Creating a map`
const myMap = new Map();

`Adding to a map`
myMap.set('name', 'John');
myMap.set(100, 'This is a number');
myMap.set(true, 'This is a boolean');

`Getting a value from a map`
console.log(myMap.get('name')); // returns John

`Getting the size of a map`
console.log(myMap.size); // returns 3

`Checking if a key is in a map`
console.log(myMap.has('name')); // returns true
console.log(myMap.has('age')); // returns false

`Deleting from a map`
myMap.delete('name');
console.log(myMap); // returns {100 => "This is a number", true => "This is a boolean"}


`Iterating through a map`
for (let [key, value] of myMap) {
    console.log(`${key} = ${value}`); // returns 100 = This is a number true = This is a boolean
}

`Iterating through keys only`
for (let key of myMap.keys()) {
    console.log(key); // returns 100 true
}

`Iterating through values only`
for (let value of myMap.values()) {
    console.log(value); // returns This is a number This is a boolean
}

const peopleMap = new Map([
    [1, 'John'],
    [2, 'Mary'],
    [3, 'Karen'],
    [4, 'Bob']
]);

peopleMap.set('brad', { phone: '555-555-5555', email: 'brad@gmail.com' })

peopleMap.forEach(function (value, key) {
    console.log(`${key} = ${value}`); // returns 1 = John 2 = Mary 3 = Karen 4 = Bob
});

peopleMap.values(); // returns an iterator of values so you can use the .next() method on it
peopleMap.keys(); // returns an iterator of keys so you can use the .next() method on it
peopleMap.entries(); // returns an iterator of key-value pairs so you can use the .next() method on it

const peopleIterator = peopleMap.values();

console.log(peopleIterator.next()); // returns {value: "John", done: false}



`Converting a map to an array`
const mapToArray = Array.from(myMap);
console.log(mapToArray); // returns [["name", "John"], [100, "This is a number"], [true, "This is a boolean"]]



`Converting an array to a map`
const arrayToMap = new Map([['name', 'John'], [100, 'This is a number'], [true, 'This is a boolean']]);
console.log(arrayToMap); // returns {"name" => "John", 100 => "This is a number", true => "This is a boolean"}


`Clearing a map`
myMap.clear();


`Cloning a map`
const originalMap = new Map([['name', 'John'], [100, 'This is a number'], [true, 'This is a boolean']]);

const cloneMap = new Map(originalMap);

console.log(cloneMap); // returns {"name" => "John", 100 => "This is a number", true => "This is a boolean"}

console.log(cloneMap === originalMap); // returns false because they are two different maps



`Merging maps`;
// when you merge two maps with the same key, the last map overwrites the first map. See example below

const firstMap = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
const secondMap = new Map([[1, 'uno'], [2, 'dos'], [3, 'tres']]);

const mergedMap = new Map([...firstMap, ...secondMap, [4, 'four']]); // You can also merge maps with arrays 

console.log(mergedMap); // returns {1 => "uno", 2 => "dos", 3 => "tres"}



`PARSING AND STRINGIFYING MAPS TO JSON`;

// One of the limitations of JSON is that it doesn't support maps. To convert a map to JSON, you have to convert it to an array first. Both JSON.stringify() and JSON.parse() methods take a replacer function as a second argument. The replacer function takes two arguments: key and value. See example below

const mapToJSON = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);

const mapToJSONArray = JSON.stringify([...mapToJSON]);

console.log(mapToJSONArray); // returns ["one","two","three"]

const mapToJSON2 = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);

// This is only half the solution as you have to drop out the keys and only keep the values. To get the keys back, you have to use the replacer function. See example below

`Stringifying Map with replacer function`;
const mapToJSONArray2 = JSON.stringify([...mapToJSON2], replacer);

function replacer(key, value) {
    if (value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
        };
    } else {
        return value;
    }
}

console.log(mapToJSONArray2); // returns [{"dataType":"Map","value":[[1,"one"],[2,"two"],[3,"three"]]}]


`Parsing JSON to Map with reviver function`;

function reviver(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}

const arrayToMap2 = JSON.parse(mapToJSONArray2, reviver);   // returns Map(3) {1 => "one", 2 => "two", 3 => "three"}
























// REGULAR EXPRESSIONS
definition = `RegEx are used for pattern matching or pattern searching, for filtering text`

re;

re = /hello/;
re = /hello/i; //the i here is a flag that means case insensitive
re = /hello/g; //the g flag means global and will search your entire write up for every instance of your re 

console.log(re);    // returns /hello/
console.log(re.source); // returns hello



// REGEX FUNCTIONS

// exec() - Returns result array or null

const result = re.exec('hello world');  // returns an array with the word hello and some other properties

console.log(result); // returns ["hello", index: 0, input: "hello world"]

console.log(result[0]); // returns hello
console.log(result.input); // returns the search string
console.log(result.index); // returns the index of the searched word


// test() returns true or false if matched
result = re.test('Hello');

console.log(result); // returns false because it is case sensitive. if the i flag is used on re. it returns true


// match() -- similar to exec, Returns result array or null. difference is it is called on the writeup not on the regEx

const str = 'Hello There';
result = str.match(re);
console.log(result); // you get an array just like exec()


// SEARCH() - returns index of 1st match or -1 if not found

str = 'Hello There';
result = str.search(re);
console.log(result);    // returns 0 because it found the word hello at index 0


// REPLACE() - returns new string with replacement
str = 'Hello There';
newStr = str.replace(re, 'Hi');
console.log(newStr);    // returns Hi There



// LITERAL characters
re = /hello/;
re = /hello/i;

// META Character Symbols
re = /^h/i; // ^ : MUST START WITH the given string
re = /od$/i; // $ MUST END WITH given string
re = /^hello$/i; // must START & END WITH
re = /h.llo/i; // . SINGLE PLACEHOLDER: the dot is a placeholder for any ONE character
re = /h*llo/i; // * WILDCARD: a placeholder for any number of characters including none
re = /gre?a?y/; // ? OPTIONAL: each character before a ? is optional...so grey, gray or greay will match

re = /gre?a?y\?/; // \ Escape Character: turns characters so they reads as a string -> gray?



// BRACKETS [] - Character Sets
re = /gr[ae]/i; // Must be a character in the bracket
re = /[^GF]ray/i; // the ^ in this case means EXCEPT OR NOT. so any character except G or F
re = /[A-Z]ray/i; // Any letter From A - Z
re = /A-Za-z/; // Any letter of any case



// BRACES {} - Quantifiers
re = /Hel{2}o/i; // {Multiplier} Expects a string with 2 ls
re = /Hel{2,4}o/i; // {Range} Expects a string with 2 to 4 ls
re = /Hel{2,}o/i;  // Expects a string with 2 or more ls
re = /[0-9]x{3}/i; // Expects a number followed by x 3 times



// PARENTHESES () -- Grouping
re = /([0-9]x){3}/i; // Just like maths it considers what's in the bracker then multiplies it. the result is eg 3x3x3x



// SHORTHAND CHARACTER CLASSES
re = /\w/;   // WORD XTER - finds the first alphanumeric or _ xter. returns a result array with the xter, it's index, the input etc
re = /\w+/;  // MULTIPLE WORD XTERS - the plus finds multiple alphanumeric or _ xters. returns the first word (group of characters)
re = /\W/;  // NON-WORD XTER. Using capital W finds the first non alphanumeric or _ xters e.g ?/>.<+
re = /\W/;  // NON-WORD XTERS. Using capital W+ finds the first group of uninterupted non alphanumeric or _ xters incl space. 
re = /\d/;  // DIGIT - finds first digit
re = /\d+/; // DIGITS - finds 0 or more digits
re = /\D/;  // NON DIGITS - matches jnon-digits
re = /\s/; // WHITESPACE - match whitespace xter
re = /\S/; // NON-WHITESPACE - match non-whitespace xter
re = /Hell\b/i; // WORD BOUNDARY - matches only with the last word in the string (boundary word) starting from the end xters. i.e you can not match the first 3 letters of the last word and leave the last letter for example


// ASSERTIONS
re = /x(?=y)/; // CONDITIONAL - matches  only if it finds an x followed by y 
re = /x(?!y)/; // CONDITIONAL - matches only if it finds an x NOT followed by y

// String to match
str = 'Hello World';

// Log Results
result = re.exec(str);
console.log(result);

// function to test regular expressions
function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}
























`CUSTOM DATA STRUCTURES - STACKS, QUEUES & LINKED LISTS`;


`STACKS - LIFO (Last In First Out)`;
// Stacks are a LIFO (Last In First Out) data structure. The last item added to the stack is the first item removed from the stack. They are used to manage function invocations, undo/redo, routing (the history object in the browser is a stack), etc. See example below

// An item added to the stack is pushed to the top of the stack and an item removed from the stack is popped from the top of the stack

`Stacks are vertical data structures. They are like a stack of books. The last book added to the stack is the first book removed from the stack`

// STACK CLASS METHODS
// push() - adds an item to the top of the stack
// pop() - removes an item from the top of the stack
// peek() - returns the item at the top of the stack
// isEmpty() - returns true if the stack is empty and false if it is not
// clear() - clears the stack
// length() - returns the number of items in the stack



class Stack {
    constructor() {
        this._items = [];
        this._count = 0;
    }

    push(item) {
        this._items[this._count] = item;
        this._count++;
    }

    pop() {
        if (this.isEmpty())
            return undefined;

        this._count--;
        return this._items.splice(this._count, 1);

    }

    peek() {
        if (this.isEmpty())
            return 'No items in stack';

        return this._items[this._count - 1];
    }

    isEmpty() {
        return this._count === 0;
    }

    lenght() {
        return this._count;
    }

    clear() {
        this._items = [];
        this._count = 0;
    }

}



const stack = new Stack();

console.log(stack); // returns Stack {_items: Array(0), _count: 0}
stack.push('item 1');
console.log(stack); // returns Stack {_items: Array(1), _count: 1}
stack.push('item 2');   // returns Stack {_items: Array(2), _count: 2}
stack.push('item 3');   // returns Stack {_items: Array(3), _count: 3}
stack.pop();    // returns ["item 3"]
console.log(stack); // returns Stack {_items: Array(2), _count: 2}





`QUEUES - FIFO (First In First Out)`;

// queues are a FIFO (First In First Out) data structure. The first item added to the queue is the first item removed from the queue. They are used in background tasks, uploading resources, printing/task processing, etc. 

`Queues are horizontal data structures. They are like a queue of people waiting to buy tickets. The first person in the queue is the first person to buy a ticket`


// QUEUE CLASS METHODS
// enqueue() - adds an item to the back of the queue
// dequeue() - removes an item from the front of the queue
// peek() - returns the item at the front of the queue
// isEmpty() - returns true if the queue is empty and false if it is not
// clear() - clears the queue
// length() - returns the number of items in the queue


class Queue {
    constructor() {
        this._items = [];
        this._count = 0;
    }

    enqueue(item) {
        this._items[this._count] = item;
        this._count++;
    }

    dequeue() {
        this.isEmpty() && undefined;

        this._items.shift(); // METHOD 1: removes the first item in the array

        // this._items.forEach((item, index) => {
        //     this._items[index] = this._items[index + 1];     // METHOD 2: shifts all items to the left by one
        // });

        // this._items = this._items.slice(1);     // METHOD 3: removes the first item in the array
        this._count--;

    }

    peek() {
        this.isEmpty() && 'No items in queue';

        return this._items[0];
    }

    lenght() {
        this._count === 0 ? this._count : this._count - 1;
    }

    clear() {
        this._items = [];
        this._count = 0;
    }

    isEmpty() {
        return this._count === 0;
    }
}



const q = new Queue();

q.enqueue('item 1');
q.enqueue('item 2');
q.enqueue('item 3');
q.dequeue();
console.log(q); // returns Queue {_items: Array(2), _count: 2}






`LINKED LISTS`;

// Linked lists are a linear data structure. They are made up of nodes that contain data and a pointer to the next node. They are used in hash tables, graphs, etc. The first node is called the head and the last node is called the tail. The tail points to null. See example below




// LINKED LIST METHODS
// insertFirst() - inserts a node at the beginning of the linked list
// insertLast() - inserts a node at the end of the linked list
// insertAt() - inserts a node at a given position in the linked list
// getAt() - returns the node at a given position in the linked list
// removeAt() - removes a node at a given position in the linked list
// clear() - clears the linked list
// size() - returns the number of nodes in the linked list
// PrintListData() - prints the linked list


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











`HASH TABLES`;

// Hash tables are used to store key-value pairs. They are like arrays but the keys are not ordered. They are fast for finding, adding and removing values. They are used in databases, caches, etc.

// HASH TABLE METHODS
// set() - adds a key-value pair to the hash table
// get() - returns the value of a key-value pair
// keys() - returns an array of keys in the hash table
// values() - returns an array of values in the hash table
// has() - returns true if a key exists in the hash table and false if it does not
// remove() - removes a key-value pair from the hash table
// clear() - clears the hash table
// size() - returns the number of key-value pairs in the hash table


class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        let index = this._hash(key);

        if (!this.keyMap[index])
            this.keyMap[index] = [];

        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);

        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key)
                    return this.keyMap[index][i][1];
            }
        }

        return undefined;
    }

    keys() {
        let keysArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++)
                    keysArr.push(this.keyMap[i][j][0]);
            }
        }

        return keysArr;
    }

    values() {
        let valuesArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++)
                    valuesArr.push(this.keyMap[i][j][1]);
            }
        }

        return valuesArr;
    }

    has(key) {
        let index = this._hash(key);

        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key)
                    return true;
            }
        }

        return false;
    }

    remove(key) {
        let index = this._hash(key);

        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key)
                    this.keyMap[index].splice(i, 1);
            }
        }
    }

    clear() {
        this.keyMap = new Array(this.keyMap.length);
    }

    size() {
        let count = 0;

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i])
                count++;
        }

        return count;
    }
}

const ht = new HashTable();

ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');

console.log(ht);    // returns HashTable {keyMap: Array(53)}
console.log(ht.get('yellow'));  // returns #FFFF00
console.log(ht.keys()); // returns ["maroon", "yellow", "olive", "salmon", "lightcoral", "mediumvioletred", "plum"]
console.log(ht.values());   // returns ["#800000", "#FFFF00", "#808000", "#FA8072", "#F08080", "#C71585", "#DDA0DD"]
console.log(ht.has('yellow'));  // returns true
console.log(ht.has('cyan'));    // returns false
ht.remove('yellow');
console.log(ht);    // returns HashTable {keyMap: Array(53)}
console.log(ht.size()); // returns 6
ht.clear();
console.log(ht);    // returns HashTable {keyMap: Array(53)}












`ALGORITHMS & UNIT TESTING`;

// Algorithms are a set of instructions for solving a problem or performing a task. They are used in search engines, sorting, compression, encryption, etc. They are made up of time and space complexity. Time complexity is how long an algorithm takes to run and space complexity is how much memory an algorithm uses. See example below

// Input => Rules => Output

// An algorithm is a set of rules to get an expected output from inputs. It is a step by step process to solve a problem. 

`Unit Testing`;
// Unit Testing is the process of testing a small unit of code. It is used to test functions, classes, etc. It is used to test if a function returns the expected output for a given input. There are other types of testing such as Acceptance testing, System Testing, Integration Testing etc. See example below

// There are many frameworks for unit testing. One popular one is Jest. You just install it with npm and you can run your tests. See example below

// First initialize npm on your project
`npm init -y`;

// Then install jest as a dev dependency
`npm install -D jest`;

// next add a script to your package.json file
`test: "jest"`

// then create a file to test eg. filename.test.js write the test function in the file or write it in another file and import it. for example

function sum(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {       // the first line is the test description that shows in the console
    expect(sum(1, 2)).toBe(3);              // the test: it takes the form expect(test).toBe(expected result)
});


// run the test with
`npm run test`;





`GROUPING TESTS WITH DESCRIBE`;

// You can group tests with the describe function instead of writing one at a time. See example below

const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzBuzz).toBe('function');
    });

    it('should return the number if not divisble by 3 or 5', () => {
        expect(fizzBuzz(1)).toBe(1);
        expect(fizzBuzz(2)).toBe(2);
        expect(fizzBuzz(4)).toBe(4);
    });

    it('should return Fizz if divisble by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(6)).toBe('Fizz');
        expect(fizzBuzz(21)).toBe('Fizz');
    });

    it('should return Buzz if divisble by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(20)).toBe('Buzz');
        expect(fizzBuzz(85)).toBe('Buzz');
    });

    it('should return FizzBuzz if divisble by 3 & 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(45)).toBe('FizzBuzz');
        expect(fizzBuzz(90)).toBe('FizzBuzz');
    });
});





'JS-DOM-ENVIRONMENT'
    // jsdom is a JavaScript implementation of the WHATWG DOM and HTML standards. It is used to test DOM related code in Node.js. It is used to test if a function manipulates the DOM as expected. See example below

    // First install jsdom as a dev dependency
    `npm install -D jsdom`;

// Next, configure jest to use jsdom by adding the following to your package.json file
`"jest": {
    "testEnvironment": "jsdom"
}`

// OR by creating a jest.config.js file and adding the following
const config = {
    testEnvironment: 'jsdom'
}

module.exports = config;
// OR
`module.exports = {
    testEnvironment: 'jsdom'
}`

// Then create a file to test eg. filename.test.js write the test function in the file or write it in another file and import it. for example

const { JSDOM } = require('jsdom');

let dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
let p = dom.window.document.querySelector('p');

test('p should contain Hello world', () => {
    expect(p.textContent).toBe('Hello world');
});

// run the test with
`npm run test`;



// JS DOM ENVIRONMENT will make your testing of dom elements easier and you can create dom elements and interact with them all from the command line without having to open a browser. It is also useful for testing if a function manipulates the DOM as expected. See example below






`BEFORE EACH AND AFTER EACH HOOKS`;

// You can use the beforeEach and afterEach hooks to run code before and after each test. See example below

const { JSDOM } = require('jsdom');

let dom1;
let p1;

beforeEach(() => {
    dom1 = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
    p1 = dom1.window.document.querySelector('p');
});

test('p should contain Hello world', () => {
    expect(p1.textContent).toBe('Hello world');
});

afterEach(() => {
    dom1 = null;
    p1 = null;
});


















`SYMBOLS`;
// definition = `Symbol is a built-in object whose constructor returns a symbol primitive that is guaranteed to be unique.

// Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object`


const sym1 = Symbol();
const sym2 = Symbol('sym2');

// No two symbols can ever be equal
console.log(Symbol() === Symbol()) //false
console.log(`Hello ${sym1.toString()}`) // symbol as a string


// Symbols as Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

//myObj.KEY1 = `Prop1`; // usint the dot notation sets the name KEY1 as the property instead of the value of the variable (the symbol)

myObj[KEY1] = 'prop1'; // using square brackets is the right way to use a variable as a property. It helps you reference the value of the variable

myObj[KEY2] = 'prop2';

myObj.key3 = 'prop3';

myObj.key4 = 'prop4';

console.log(myObj[KEY1], myObj[KEY2]);


// SYMBOLS are not enumerable in for in

for (let i in myObj) {
    console.log(`${i}: ${myObj[i]}`);
} // this will only return non symbol properties


// SYMBOLS are ignored by JSON.stringify

console.log(JSON.stringify(myObj)); // will ignore the symbol properties of the object





// DESTRUCTURING

explanation = `Destructuring was introduced in ES6 and gives us an easy way to assign and extract variables from arrays and objects`


// Destructioning Assignment

let a, b;
[a, b] = [100, 200]; //this assigns 100 to a and 200 to b

[a, b, ...rest] = [100, 200, 300, 400, 500]; // this assigns 100 to a, 200 to b and the ... pattern assigns [300, 400, 500] to the variable called rest


({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(rest);


// Array Destructuring

const people = ['John', 'Beth', 'Mike'];

let [person1, person2, person3] = people;

console.log(person2); // Beth

function getPeople() {
    return ['James', 'Eni', 'Michelle'];
}

[person1, person2, person3] = getPeople();

console.log(person3);


// Object Destructuring
const person = {
    name: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: () => {
        console.log('Hello');
    }
}

// OLD ES5 way of accessing object properties
// const name = person.name,
//     age = person.age,
//     city = person.city;

// NEW ES6 Destructured way

const { name, age, city, gender, sayHello } = person;

console.log(name, age, city, gender);

sayHello();









// PATTERNS
definition = `A reusable solution that can be applied to occurring problems in software design. It can also be use as templates`;


// MODULES

// Basic Structure

(function () {
    // Declare private vars and functions

    return {
        // Declare public var and functions
    }
})();


// STANDARD MODULE PATTERN
const UICtrl = (function () {
    // Private
    let text = 'Hello World';

    const changeText = function () {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    // Public
    return {
        callChangeText: function () {
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();




// REVEALING MODULE PATTERN
const ItemCtrl = (function () {
    // Private
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item Added');
    }

    function get(id) {
        return data.find(item => item.id === id);
    }

    return {
        add,
        get
    }
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Mary' });
console.log(ItemCtrl.get(2));





// SINGLETON PATTERN
// It's like the module pattern but it creates only one instance. Can be used when you only want one user at a time for example
const Singleton = (() => {
    let instance;

    function createInstance() {
        const object = new Object('Object Instance!!!');
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// the pattern keeps returning the same instance so it doesn't matter how many times you instantiate it

console.log(instanceA === instanceB);





// FACTORY PATTERN

function MemberFactory() {
    this.createMember = function (name, type) {
        let member;

        switch (type) {
            case 'simple':
                member = new SimpleMembership(name);
                break;
            case 'standard':
                member = new StandardMembership(name);
                break;
            case 'super':
                member = new SuperMembership(name);
                break;

            default:
                break;
        }

        member.type = type;

        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}



const SimpleMembership = function SimpleMembership(name) {
    this.name = name;
    this.cost = '$5'
}
const StandardMembership = function StandardMembership(name) {
    this.name = name;
    this.cost = '$15'
}
const SuperMembership = function SuperMembership(name) {
    this.name = name;
    this.cost = '$25'
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Mary Jane', 'standard'));
members.push(factory.createMember('Scooby Doo', 'super'));

console.log(members);

members.forEach((member) => { member.define() });









`NODE.JS`;

// Node.JS is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used to build backend web applications. Node.JS is non-blocking, meaning it can handle many requests at the same time. It is also event-driven, meaning it uses events to handle requests.

// Here we'll take a quick look at some of the core modules in Node.JS



`THE FILE SYSTEM MODULE (FS)`;
// The file system module is used to work with files and directories. It is used to read, write, create and delete files


`WRITING TO FILES`;

// You can either write to a file synchronously with the writeFileSync() method or asynchronously with the writeFile() method using callbacks or promises. 


`Writing Syncronously`;
// To write synchronously, You have to require the fs module and then you can call the writeFileSync() method. The method takes in the file name, the content to write and an options object. The options object can be used to specify the encoding, mode and flag. The default encoding is utf8, the default mode is 0o666 and the default flag is 'w'

const fs = require('fs');   // require the fs module

fs.writeFileSync('filename', 'content', '?{options object}');  // write to a file synchronously

`FLAGS`
    // flag: w opens file for writing. It creates the file if none exists, overwrites it if it does 

    // flag: wx opens file for writing. It creates the file if none exists, and fails if the file exists

    // flag a opens a file for writing(appending). If creates the file if none exists, and appends to it if it exists

    // flag ax opens a file for writing(appending). If creates the file if none exists, and fails if it exists

    // flag r+ is used to open the file for reading and writing. If the file does not exist, the operation fails

    // flag w+ is used to open the file for reading and writing. If the file does not exist, it will be created. If the file exists, it will be truncated/overwritten

    // flag a+ is used to open the file for reading and writing(appending). If the file does not exist, it will be created. If the file exists, it will be appended to

    // flag rs+ is used to open the file for reading in synchronous mode. Instructs the operating system to bypass the local file system cache. This is primarily used for opening files on network volumes. It is not recommended for general use


    `Writing Asynchronously`;;
// To write asynchronously, you can either use the callback method or promises. They both use the writeFile() method however, the callback method requires the fs module while the promises method requires the fs/promises module. 

// The writeFile() method takes in the file name, the content to write, an optional options object and an optional callback function as arguments. The options object can be used to specify the encoding, mode and flag. The default encoding is utf8, the default mode is 0o666 and the default flag is 'w'

`Callback Method`
// The callback function takes in an error parameter. If there is an error, the error parameter will contain the error, else it will be null

const fs = require('fs');   // require the fs module

fs.writeFile('filename', 'content', '?{options object}', (err) => {
    if (err) throw err;

    console.log('File written to...');
});

`Promises Method`
// The promises method requires the fs/promises module. It returns a promise that resolves when the file is written to. The promise resolves with no value. You can either use the .then() method or the async/await syntax to handle the promise

const fsPromises = require('fs/promises');   // require the fs/promises module

// .then() method
fsPromises.writeFile('filename', 'content', '?{options object}')
    .then(() => console.log('File written to...'))
    .catch((err) => console.log(err));


// async/await method
async function writeToFile(filename, content) {
    try {
        await fsPromises.writeFile(filename, content, '?{options object}');
        console.log('File written to...');
    } catch (err) {
        console.log(err);
    }
}

writeToFile('filename.txt', 'content');






`READING FROM FILES`;
// You can either read from a file synchronously with the readFileSync() method or asynchronously with the readFile() method using callbacks or promises.

`Reading Synchronously`
// To read synchronously, You have to require the fs module and then you can call the readFileSync() method. The method takes in the file name and the encoding which is 'utf-8' by default

const fs = require('fs');       // require the fs module

const data = fs.readFileSync('filename', 'utf-8');      // read from a file synchronously

console.log(data);

`Reading Asynchronously`;
// To read asynchronously, you can either use the callback method or promises. They both use the readFile() method however, the callback method requires the fs module while the promises method requires the fs/promises module.

// The readFile() method takes in the file name, an optional encoding and an optional callback function as arguments. The default encoding is utf8

`Callback Method`
// The callback function takes in an error parameter and a data parameter. If there is an error, the error parameter will contain the error, else it will be null. The data parameter will contain the data read from the file

const fs = require('fs');       // require the fs module

fs.readFile('filename', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
});

`Promises Method`
// The promises method requires the fs/promises module. It returns a promise that resolves when the file is read from. The promise resolves with the data read from the file. You can either use the .then() method or the async/await syntax to handle the promise

const fsPromises = require('fs/promises');       // require the fs/promises module

// .then() method
fsPromises.readFile('filename', 'utf-8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// async/await method
async function readFromFile(filename) {
    try {
        const data = await fsPromises.readFile(filename, 'utf-8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readFromFile('filename.txt');



`DELETING / REMOVING FILES`;
// You can either delete a file synchronously with the unlinkSync() method or asynchronously with the unlink() method using callbacks or promises.

`Deleting Synchronously`
// To delete synchronously, You have to require the fs module and then you can call the unlinkSync() method. The method takes in the file name as an argument

const fs = require('fs');       // require the fs module

fs.unlinkSync('filename');      // delete a file synchronously

`Deleting Asynchronously`;
// To delete asynchronously, you can either use the callback method or promises. They both use the unlink() method however, the callback method requires the fs module while the promises method requires the fs/promises module.

// The unlink() method takes in the file name and an optional callback function as arguments.

`Callback Method`
// The callback function takes in an error parameter. If there is an error, the error parameter will contain the error, else it will be null

const fs = require('fs');       // require the fs module

fs.unlink('filename', (err) => {
    if (err) throw err;

    console.log('File removed...');
});

`Promises Method`
// The promises method requires the fs/promises module. It returns a promise that resolves when the file is removed. The promise resolves with no value. You can either use the .then() method or the async/await syntax to handle the promise

const fsPromises = require('fs/promises');       // require the fs/promises module

// .then() method
fsPromises.unlink('filename')
    .then(() => console.log('File removed...'))
    .catch((err) => console.log(err));

// async/await method
async function removeFile(filename) {
    try {
        await fsPromises.unlink(filename);
        console.log('File removed...');
    } catch (err) {
        console.log(err);
    }
}





`CREATING DIRECTORIES`;
// You can either create a directory synchronously with the mkdirSync() method or asynchronously with the mkdir() method using callbacks or promises.

`Creating Synchronously`
// To create synchronously, You have to require the fs module and then you can call the mkdirSync() method. The method takes in the directory name and an optional options object as arguments. The options object can be used to specify the mode and recursive. The default mode is 0o777 and the default recursive is false

const fs = require('fs');       // require the fs module

fs.mkdirSync('dirname', '?{options object}');      // create a directory synchronously

`Creating Asynchronously`;
// To create asynchronously, you can either use the callback method or promises. They both use the mkdir() method however, the callback method requires the fs module while the promises method requires the fs/promises module.

// The mkdir() method takes in the directory name, an optional options object and an optional callback function as arguments. The options object can be used to specify the mode and recursive. The default mode is 0o777 and the default recursive is false

// Recursive is used to create the directory and any necessary subdirectories. If the directory already exists, it will not throw an error. 

// You create subdirectories by setting the recursive option to true and passing the directory path as the directory name

`Callback Method`;
// The callback function takes in an error parameter. If there is an error, the error parameter will contain the error, else it will be null

const fs = require('fs');       // require the fs module

fs.mkdir('dirname', '?{options object}', (err) => {
    if (err) throw err;

    console.log('Directory created...');

});

`Promises Method`;
// The promises method requires the fs/promises module. It returns a promise that resolves when the directory is created. The promise resolves with no value. You can either use the .then() method or the async/await syntax to handle the promise

const fsPromises = require('fs/promises');       // require the fs/promises module

// .then() method
fsPromises.mkdir('dirname', '?{options object}')
    .then(() => console.log('Directory created...'))
    .catch((err) => console.log(err));

// async/await method
async function createDirectory(dirname) {
    try {
        await fsPromises.mkdir(dirname, '?{options object}');
        console.log('Directory created...');
    } catch (err) {
        console.log(err);
    }
}

createDirectory('dirname');



`REMOVING DIRECTORIES`;
// You can either remove a directory synchronously with the rmdirSync() method or asynchronously with the rmdir() method using callbacks or promises.

`Removing Synchronously`;
// To remove synchronously, You have to require the fs module and then you can call the rmdirSync() method. The method takes in the directory name and an optional options object as arguments. The options object can be used to specify the recursive option. The default recursive is false

// Recursive is used to remove the directory and any necessary subdirectories. If the directory does not exist, it will throw an error.

const fs = require('fs');       // require the fs module

fs.rmdirSync('dirname', '?{options object}');      // remove a directory synchronously

`Removing Asynchronously`;
// To remove asynchronously, you can either use the callback method or promises. They both use the rmdir() method however, the callback method requires the fs module while the promises method requires the fs/promises module.


`Callback Method`;
// The callback function takes in an error parameter. If there is an error, the error parameter will contain the error, else it will be null

const fs = require('fs');       // require the fs module

fs.rmdir('dirname', '?{options object}', (err) => {
    if (err) throw err;

    console.log('Directory removed...');
});

`Promises Method`;
// The promises method requires the fs/promises module. It returns a promise that resolves when the directory is removed. The promise resolves with no value. You can either use the .then() method or the async/await syntax to handle the promise

const fsPromises = require('fs/promises');       // require the fs/promises module

// .then() method
fsPromises.rmdir('dirname', '?{options object}')
    .then(() => console.log('Directory removed...'))
    .catch((err) => console.log(err));

// async/await method
async function removeDirectory(dirname) {
    try {
        await
            fsPromises.rmdir(dirname, '?{options object}');
        console.log('Directory removed...');
    } catch (err) {
        console.log(err);
    }
}

removeDirectory('dirname');



`RENAME FILES OR DIRECTORIES`;
// You can either rename a file or directory synchronously with the renameSync() method or asynchronously with the rename() method using callbacks or promises.

`Renaming Synchronously`;
// To rename synchronously, You have to require the fs module and then you can call the renameSync() method. The method takes in the old file name, the new file name and an optional options object as arguments. The options object can be used to specify the encoding, mode and flag. The default encoding is utf8, the default mode is 0o666 and the default flag is 'w'

const fs = require('fs');       // require the fs module

fs.renameSync('oldname', 'newname', '?{options object}');      // rename a file synchronously

`Renaming Asynchronously`;
// To rename asynchronously, you can either use the callback method or promises. They both use the rename() method however, the callback method requires the fs module while the promises method requires the fs/promises module.


`Callback Method`;
// The callback function takes in an error parameter. If there is an error, the error parameter will contain the error, else it will be null

const fs = require('fs');       // require the fs module

fs.rename('oldname', 'newname', '?{options object}', (err) => {
    if (err) throw err;
    console.log('File renamed...');
});

`Promises Method`;
// The promises method requires the fs/promises module. It returns a promise that resolves when the file is renamed. The promise resolves with no value. You can either use the .then() method or the async/await syntax to handle the promise

const fsPromises = require('fs/promises');       // require the fs/promises module

// .then() method
fsPromises.rename('oldname', 'newname', '?{options object}')
    .then(() => console.log('File renamed...'))
    .catch((err) => console.log(err));

// async/await method
async function renameFile(oldname, newname) {
    try {
        await fsPromises.rename(oldname, newname, '?{options object}');
        console.log('File renamed...');
    } catch (err) {
        console.log(err);
    }
}

renameFile('oldname', 'newname');



`APPENDING TO FILES`;
// You can either append to a file synchronously with the appendFileSync() method or asynchronously with the appendFile() method using callbacks or promises.

`Appending Synchronously`;
// To append synchronously, You have to require the fs module and then you can call the appendFileSync() method. The method takes in the file name, the content to append and an optional options object as arguments. The options object can be used to specify the encoding, mode and flag. The default encoding is utf8, the default mode is 0o666 and the default flag is 'a'

const fs = require('fs');       // require the fs module

fs.appendFileSync('filename', 'content', '?{options object}');      // append to a file synchronously

`Appending Asynchronously`;
// To append asynchronously, you can either use the callback method or promises. They both use the appendFile() method however, the callback method requires the fs module while the promises method requires the fs/promises module.

// They are similar in operations to writing a file with the writeFile method but the flag is set to 'a' instead of 'w'

`Callback Method`;
// The callback function takes in an error parameter. If there is an error, the error parameter will contain the error, else it will be null

const fs = require('fs');       // require the fs module

fs.appendFile('filename', 'content', '?{options object}', (err) => {
    if (err) throw err;
    console.log('Data appended to file...');
});

`Promises Method`;
// The promises method requires the fs/promises module. It returns a promise that resolves when the file is appended to. The promise resolves with no value. You can either use the .then() method or the async/await syntax to handle the promise

const fsPromises = require('fs/promises');       // require the fs/promises module

// .then() method
fsPromises.appendFile('filename', 'content', '?{options object}')
    .then(() => console.log('Data appended to file...'))
    .catch((err) => console.log(err));

// async/await method
async function appendToFile(filename, content) {
    try {
        await fsPromises.appendFile(filename, content, '?{options object}');
        console.log('Data appended to file...');
    } catch (err) {
        console.log(err);
    }
}

appendToFile('filename.txt', 'content');



`WATCHING FILES AND DIRECTORIES`;
// You can watch for changes in files and directories with the watch() method. The watch() method returns an instance of fs.FSWatcher. The fs.FSWatcher object is an EventEmitter that emits the 'change' event when a file or directory is modified. It also emits the 'rename' event when a file or directory is renamed.





`Watching Files and Directories`;
// To watch for changes in both files and directories, you have to require the fs module and then you can call the watch() method. The method takes in the file or directory name and an optional options object as arguments. The options object can be used to specify the persistent option. The default persistent is true

const fs = require('fs');       // require the fs module

const watcher = fs.watch('filename or dirname', '?{options object}');      // watch a file or directory

watcher.on('change', (eventType, filename) => {
    console.log(`File ${filename} has been ${eventType}d`);
});

`Options Object`;
// The options object can be used to specify the persistent option. The default persistent is true

// persistent: true is used to continue watching the file or directory until the process is terminated. If set to false, the watcher will stop watching the file or directory after the first change event is emitted

// recursive: true is used to watch all files and directories in the specified directory. If set to false, the watcher will only watch the specified directory

// encoding: 'utf8' is used to specify the encoding of the file being watched. The default encoding is utf8


`Closing the Watcher`;
// To close the watcher, you can call the close() method on the watcher object

watcher.close();






`THE PATH MODULE`;
// The path module is used to work with file and directory paths. It is used to join, resolve, normalize, parse and format file paths. It is also used to get the directory name, base name, extension and file name of a file path. The path module is a core module and does not need to be installed. 

// File paths on windows use the backslash (\) while file paths on unix (Linux and Mac) use the forward slash (/). The path module is used to handle these differences so you don't have to type seperate paths for different OS. You use it as shown below

const path = require('path');       // require the path module

`Base Name`;
// The basename() method is used to get the base name of a file path i.e the name of the actual file. It takes in the file path and an optional extension as arguments. The default extension is an empty string. If you pass in the extension (file type), it will remove the extension from the file name

const baseName = path.basename('filepath', '?extension');      // get the base name of a file path

const baseName2 = path.basename('users/john/desktop/index.html');      // returns index.html

const baseName3 = path.basename('users/john/desktop/index.html', '.html');      // returns index



`Directory Name`;
// The dirname() method is used to get the directory name of a file path. It takes in the file path as an argument. It returns the directory name of the file path. It does not include the file name

const dirName = path.dirname('filepath');      // get the directory name of a file path

const dirName2 = path.dirname('users/john/desktop/index.html');      // returns users/john/desktop



`Extension`;
// The extname() method is used to get the extension of a file path. It takes in the file path as an argument. It returns the extension of the file itself. It does not include the dot (.)

const extName = path.extname('filepath');      // get the extension of a file path e.g js, html, css

const extName2 = path.extname('users/john/desktop/index.html');      // returns .html



`Parse`;
// The parse() method is used to parse a file path. It takes in the file path as an argument. It returns an object with the root, dir, base, ext and name properties. The root property is the root of the file path, the dir property is the directory name, the base property is the base name, the ext property is the extension and the name property is the file name

const parsedPath = path.parse('filepath');      // parse a file path

const parsedPath2 = path.parse('users/john/desktop/index.html');      // returns an object with the root, dir, base, ext and name properties. i.e. { root: '', dir: 'users/john/desktop', base: 'index.html', ext: '.html', name: 'index' }



`Format`;
// The format() method is used to format a file path. It takes in an object with the root, dir, base, ext and name properties as an argument. It returns a file path. The root property is the root of the file path, the dir property is the directory name, the base property is the base name, the ext property is the extension and the name property is the file name

const formattedPath = path.format({ root: '', dir: 'users/john/desktop', base: 'index.html', ext: '.html', name: 'index' });      // format a file path and returns users/john/desktop/index.html



`Normalize`;
// The normalize() method is used to normalize a file path. It takes in the file path as an argument. It returns the normalized file path. It removes any extra slashes and .. and resolves any relative paths

const normalizedPath = path.normalize('filepath');      // normalize a file path




`Joining Paths`;
// The join() method is used to join two or more paths together. It takes in the paths to join as arguments. It returns the joined path

const path1 = 'dir1';
const path2 = 'dir2';
const path3 = 'dir3';

const joinedPath = path.join(path1, path2, path3);      // join paths and returns dir1\dir2\dir3 on windows and dir1/dir2/dir3 on unix



`Resolving Paths`;
// The resolve() method is used to resolve a file path to an absolute path. It takes in the file path as an argument and returns the resolved file path

const resolvedPath = path.resolve('filepath');      // resolve a file path to an absolute path

const resolvedPath2 = path.resolve('users/john/desktop', 'index.html');      // returns the absolute path of the file i.e. C:\users\john\desktop\index.html on windows and /users/john/desktop/index.html on unix


`__dirname and __filename`;
// The __dirname and __filename are global objects in Node.JS. They are used to get the directory name and file name of the current module/file. The __dirname object is used to get the directory name of the current module. The __filename object is used to get the file name of the current module

console.log(__dirname);      // returns the directory name of the current file i.e. for this file it will return C:\Users\John\Desktop\ on windows and /Users/John/Desktop/ on unix for example

console.log(__filename);      // returns the file name of the current file i.e. for this file it will return C:\Users\John\Desktop\learn.js on windows and /Users/John/Desktop/learn.js on unix for example









`THE OS MODULE`;
// The os module is used to get information about the operating system. It is used to get the operating system platform, architecture, CPU, memory, uptime, user info and network interfaces. The os module is a core module and does not need to be installed.

const os = require('os');       // require the os module

`Architecture`;
// The arch() method is used to get the architecture of the operating system. It returns the architecture of the operating system i.e. x64, arm, x86

const architecture = os.arch();      // get the architecture of the operating system


`Platform`;
// The platform() method is used to get the platform of the operating system. It returns the platform of the operating system i.e. win32, linux, darwin (mac)

const platform = os.platform();      // get the platform of the operating system. i.e. win32, linux, darwin


`CPU Info`;
// The cpus() method is used to get the CPU information of the operating system. It returns an array of objects with the model, speed, times and cores properties. The model property is the model of the CPU, the speed property is the speed of the CPU, the times property is the time the CPU has spent in different modes and the cores property is the number of cores the CPU has

const cpuInfo = os.cpus();      // get the CPU information of the operating system


`Free Memory`;
// The freemem() method is used to get the free memory of the operating system. It returns the free memory of the operating system in bytes

const freeMemory = os.freemem();      // get the free memory of the operating system


`Total Memory`;
// The totalmem() method is used to get the total memory of the operating system. It returns the total memory of the operating system in bytes

const totalMemory = os.totalmem();      // get the total memory of the operating system


`Home Directory`;
// The homedir() method is used to get the home directory of the operating system. It returns the home directory of the operating system

const homeDirectory = os.homedir();      // get the home directory of the operating system e.g C:\Users\John on windows and /Users/John on unix


`Hostname`;
// The hostname() method is used to get the hostname of the operating system. It returns the hostname of the operating system i.e. John-PC, John-Mac

const hostName = os.hostname();      // get the hostname of the operating system


`Network Interfaces`;
// The networkInterfaces() method is used to get the network interfaces of the operating system. It returns an object with the network interfaces of the operating system. The object has the interface name as the key and an array of objects with the address, netmask, family, mac, internal and cidr properties as the value

const networkInterfaces = os.networkInterfaces();      // get the network interfaces of the operating system


`Operating System Info`;
// The release() method is used to get the release of the operating system. It returns the release of the operating system i.e. 10.0.19041, 20.4.0

const release = os.release();      // get the release of the operating system


`System Uptime`;
// The uptime() method is used to get the uptime of the operating system in seconds. Uptime is the time the operating system has been running since it was last booted

const uptime = os.uptime();      // get the uptime of the operating system in seconds


`User Info`;
// The userInfo() method is used to get the user info of the operating system. It returns an object with the username, uid, gid, shell, homedir and shell properties

const userInfo = os.userInfo();      // get the user info of the operating system








`URL MODULE`;
// The url module is used to parse, format, resolve and join URLs. It is used to work with URLs. The url module is a core module and does not need to be installed.

const url = require('url');       // require the url module

`Parsing URLs`;
// The parse() method is used to parse a URL. It takes in the URL as an argument. It returns an object with the protocol, host, hostname, port, path, query, hash, auth and href properties. The protocol property is the protocol of the URL e.g http, https, ftp, the host property is the host e.g localhost:3000, the hostname property is the hostname of the URL e.g localhost, the port property is the port of the URL e.g 3000, the path property is the path of the URL e.g /users/john, the query property is the query of the URL e.g ?name=john, the hash property is the hash of the URL e.g #section1, the auth property is the authentication of the URL e.g username:password and the href property is the href of the URL

const parsedUrl = url.parse('https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37197136#overview');      // parses the url and returns the following object { protocol: 'https:', host: 'www.udemy.com', hostname: 'www.udemy.com', port: null, path: '/course/modern-javascript-from-the-beginning/learn/lecture/37197136', query: null, hash: '#overview', auth: null, href: 'https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37197136#overview' }



`Formatting URLs`;
// The format() method is used to format a URL. It takes in an object with the protocol, host, hostname, port, path, query, hash, auth and href properties as an argument. It returns the formatted URL

const formattedUrl = url.format({
    protocol: 'https:',
    host: 'www.udemy.com',
    hostname: 'www.udemy.com',
    port: null,
    path: '/course/modern-javascript-from-the-beginning/learn/lecture/37197136',
    query: null,
    hash: '#overview',
    auth: null,
    href: 'https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37197136#overview'
});

// formats the url and returns https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37197136#overview



`Resolving URLs`;
// The resolve() method is used to resolve a URL. It takes in the base URL and the relative URL as arguments. It returns the resolved URL

// The base URL is the URL to resolve the relative URL against. The relative URL is the URL to resolve against the base URL. The resolved URL is the resolved URL. it takes the format of

// protocol://hostname:port/path?query#hash

url.resolve('from', 'to')

const resolvedUrl = url.resolve(
    'https://www.google.com/one/two',
    '/three/four'
);

// resolves the url and returns https://www.google.com/three/four. If you don't put a slash before the relative URL, it will append it to the base URL. If you put a slash before the relative URL, it will replace the path of the base URL with the path of the relative URL and append the query and hash of the relative URL to the base URL. i.e. https://www.google.com/one/two/three/four





`URL Object`;
// The URL object is used to parse, format, resolve and join URLs. It is used to work with URLs. It is similar to the url module but it is more modern and has more features. It is used as shown below

const { URL } = require('url');       // require the URL object

const myUrl = new URL('https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37197136#overview');      // create a new URL object

console.log(myUrl.href);      // returns https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37197136#overview

console.log(myUrl.host);      // returns www.udemy.com

console.log(myUrl.hostname);      // returns www.udemy.com

console.log(myUrl.pathname);      // returns /course/modern-javascript-from-the-beginning/learn/lecture/37197136

console.log(myUrl.search);      // returns null

console.log(myUrl.searchParams);      // returns an object with the search parameters

console.log(myUrl.hash);      // returns #overview

console.log(myUrl.toString());      // returns the URL as a string



`URLSearchParams Object`;
// The URLSearchParams object is used to work with the search parameters of a URL. It is used to parse, append, delete, get, set and sort the search parameters of a URL. It is used as shown below

const params = new URLSearchParams('name=john&age=30');      // create a new URLSearchParams object

console.log(params.get('name'));      // returns john

console.log(params.get('age'));      // returns 30

params.append('country', 'usa');      // appends the search parameter to the URL

console.log(params.toString());      // returns name=john&age=30&country=usa

params.delete('age');      // deletes the search parameter from the URL

console.log(params.toString());      // returns name=john&country=usa

params.set('name', 'jane');      // sets the search parameter of the URL

console.log(params.toString());      // returns name=jane&country=usa

params.sort();      // sorts the search parameters of the URL

console.log(params.toString());      // returns country=usa&name=jane





`QUERY STRING MODULE`;
// The query string module is used to parse, stringify and format query strings. It is used to work with query strings. The query string module is a core module and does not need to be installed.

const querystring = require('querystring');       // require the query string module

`Parsing Query Strings`;
// The parse() method is used to parse a query string. It takes in the query string as an argument. It returns an object with the query parameters

const parsedQuery = querystring.parse('name=john&age=30');      // parse a query string

console.log(parsedQuery);      // returns { name: 'john', age: '30' }


`Stringifying Query Strings`;
// The stringify() method is used to stringify an object. It takes in the object as an argument. It returns the query string

const stringifiedQuery = querystring.stringify({ name: 'john', age: 30 });      // stringify an object

console.log(stringifiedQuery);      // returns name=john&age=30








`HTTP MODULE`;
// The http module is used to create a server, make requests and handle responses. It is used to work with the HTTP protocol. The http module is a core module and does not need to be installed. It is not as good as the express module and lacks essential features so is not recommended. It is used as shown below

const http = require('http');       // require the http module

`Creating a Server`;
// The createServer() method is used to create a server. It takes in a request listener as an argument. The request listener is a function that takes in the request and response objects as arguments. It is used to handle requests and send responses

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        response.writeHead(200, { 'content-type': 'text/html' });

        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    } else if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
    }

    res.write('Hello World');
    res.end('optional message');    // end the response and send the optional message if any
});

server.listen(3000, () => console.log('Server running...'));      // listen for requests on port 3000 or any port number you specify

`Request Object`;






`CRYPTO MODULE`;
// The crypto module is used to create secure hashes, HMACs and cyphers. It is used to work with cryptographic functions. The crypto module is a core module and does not need to be installed.



















`STREAMS`;
// Streams are objects that let you read data from a source or write data to a destination in continuous fashion. They are used to read and write large amounts of data in Node.JS. There are four types of streams in Node.JS: Readable, Writable, Duplex and Transform. They are all instances of EventEmitter. They all have the same basic methods and properties. The main difference is how they are used. See example below

`Readable Streams`;
// Readable streams are used to read data from a source. They are instances of EventEmitter. They have the following basic methods and properties:

// .pipe() method is used to read the data from a readable stream and write it to a destination. It is used to connect the output of a readable stream to the input of a writable stream

// .readable property is used to check if the stream is readable. It is a boolean value

// .on() method is used to listen for the 'data' event. The 'data' event is emitted when the stream is ready to read data

// .once() method is used to listen for the 'end' event. The 'end' event is emitted when there is no more data to read

// .pause() method is used to pause the stream. It is used to stop the 'data' event from being emitted

// .resume() method is used to resume the stream. It is used to start the 'data' event from being emitted

// .destroy() method is used to stop the stream. It is used to stop the 'data' event from being emitted and free up resources

// .destroyed property is used to check if the stream is destroyed. It is a boolean value

// .setEncoding() method is used to set the encoding of the data read from the stream. It is used to convert the data from a buffer to a string

// .unpipe() method is used to stop the readable stream from being piped to a destination

// .unshift() method is used to push the data back into the stream. It is used to push the data back into the stream so that it can be read again

// .wrap() method is used to wrap the readable stream in a Readable stream. It is used to wrap the readable stream in a Readable stream so that it can be used as a readable stream

// .isPaused() method is used to check if the stream is paused. It is a boolean value

// .read() method is used to read the data from the stream. It is used to read the data from the stream. It takes in an optional size parameter. The default size is 64kb

// .push() method is used to push the data into the stream. It is used to push the data into the stream so that it can be read

// .readableLength property is used to check the length of the data in the stream. It is a number value

// .readableHighWaterMark property is used to check the high water mark of the stream. It is a number value

// .readableFlowing property is used to check if the stream is flowing. It is a boolean value

// .readableEnded property is used to check if the stream is ended. It is a boolean value

// .readableEncoding property is used to check the encoding of the data in the stream. It is a string value

// .readableBuffer property is used to check the buffer of the data in the stream. It is a buffer value

// .readableObjectMode property is used to check if the stream is in object mode. It is a boolean value

// .readableDefaultEncoding property is used to check the default encoding of the data in the stream. It is a string value

// .readableDestroyed property is used to check if the stream is destroyed. It is a boolean value

// .readableError property is used to check if the stream has an error. It is an error value

// .readableEnded property is used to check if the stream is ended. It is a boolean value








