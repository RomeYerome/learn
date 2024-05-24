`ARRAYS`;

// An array in JS is used to store a collection of values in one place. These values are most times related. There are two ways to create arrays, the literal way or using the array constructor object


`Literal Method`;

const numbers = [45, 56, 33, 23, 44, 36, 5];    // literal


`Constructor Method`;
const numbers2 = new Array(22, 45, 33, 76, 54);     // array constructor




// An array can host homogeneous content like all strings, or it can be mixed like strings, numbers, booleans, objects, functions etc. It can also be nested i.e an array inside an array

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


`includes(value)`;
// checks if a value is in an array and returns true or false
numbers.includes(5); // returns true if 5 is in the numbers array or false if not found




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

numbers.slice(1, 4); // It is zero based so it returns the 2nd to the 4th element of the numbers array

numbers.slice(1); // returns the 2nd all the way to the last element in the array

numbers.slice(-2); // returns the last 2 elements of the array






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







`NESTING, CONCATENATION AND THE SPREAD OPERATOR`;

// You can put an array inside another array i.e [0, 1, 2, [3,4,5], 6]. This is called nesting. To access the nested array, you just need the index of it in the first array

numbers = [1, 2, 3, [4, 5, 6], 7, 8];

numbers[3]; // will give you the nested array


`FLATTEN`;
// You can flatten nested arrays using the flat method

numbers.flat(); // will flatten the above nested array and give you [1,2,3,4,5,6,7,8]



`CONCATENATION`;
// the concat method joins 2 arrays and returns the new array

numbers.concat(numbers2); // joins the numbers and numbers 2 arrays and returns the new array



`SPREAD OPERATOR (...)`;

// The spread operator is represented with 3 dots and is used on arrays and objects. Just like the name, it spreads out the array or object, basically listing its components. i.e like unwrapping the array.

fruits = ['apple', 'mango', 'berries'];

cars = ['bentley', 'ferrari', 'mercedes'];

arr3 = [...fruits, cars]; // will create a new array that is ['apple', 'mango', 'berries', ['bentley', 'ferrari', 'mercedes']]

arr4 = [...fruits, ...cars]; // will create a new array that is ['apple', 'mango', 'berries', 'bentley', 'ferrari', 'mercedes']


// as seen above, it spreads out the array to it's component parts






`DESTRUCTURING ARRAYS`;
// You can destructure arrays (pull out values into variables) just like you would with objects

let [x, y, ...rest] = [36, 15, 18, 19, 30]; // x = 36, y = 15, rest = [18, 19, 30]

// the first variable x will hold the first value in the array, second variable y will hold the second value in the array and the rest operator which is like a reverse of the spread operator will hold the remaining values in an array. 

`THE REST OPERATOR`;
// it doesn't have to be called rest as used above, it is denoted by 3 dots before a variable name










`SORTING ARRAYS`;






`ARRAY FIND METHOD`;

// The find method takes a callback function with the condition you want to search the array with and it returns the first element that matches that condition`

numbers.find(element => element > 50); // searches the numbers array and returns the 1st value > 50









`HIGH LEVEL ARRAY METHODS`;

// These are methods that are used to manipulate arrays and are more efficient than using loops


`MAP`;
// The map method is a high level array method that alters every element of the array it is called on with the conditions/commands given and returns a new array containing the results. The original array is unchanged

// It takes a callback function that can have 3 parameters, the arrayItem, the index of the arrayItem and the array itself

// The syntax is 
newArray = oldArray.map(function (item, [index], [arrayItself]) { 'instructions to alter item' });

let users = [
    {
        name: 'John',
        money: 100000
    },
    {
        name: 'Hannah',
        money: 123000
    },
    {
        name: 'David',
        money: 98344
    }
];

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



`Sort`;
// Sort is a high level array method that rearranges the elements of an array in ascending/descending order and IN PLACE i.e. it alters the existing array, it DOES NOT create a new one

// It does this by converting the values to strings and comparing their UTF-16 code unit values. As a result, you get expected results when you sort strings but wild results when you sort numbers because it uses only the first digit i.e 100 will be less than 9 because 1 is less than 9

// This is fine for strings but with numbers, 200 is less than 9 because it only takes account of the first digit. To fix this, you have to use a compare function. 

// The basis of the compare function is that it takes 2 values (a, b) and subtracts b from a. If the answer is a negative number, it returns -1 which means b is larger than a, this tells the sort method to keep both values as is. 

// If the answer is 0, then it keeps the order and if the answer is positive, it swaps both values cos b is less than a;

// The syntax is
array.sort()
array.sort((a, b) => { a - b })


fruits.sort(); // an array of strings sorts alphabetically

numbers.sort(); // without a compare callback function, the sort function only sorts numbers in arrays by the 1st digit i.e 9 > 17

numbers.sort((x, y) => { return x - y }); // by adding a compare function, it sorts properly. you can also reverse sort by returning y - x

//Reverse Sort
numbers.sort((x, y) => { return y - x }); // by subtracting x from y instead of the other way round you get a descending sort






`FILTER`;
// The filter method is a high level array method that RETURNS A NEW ARRAY containing the elements that meet a filter criteria in the call back function. As the name depicts, it is used to filter an array

// the syntax is as follows
newArray = oldArray.filter(function (item) { 'filter condition to check item' });

function showMils() {
    let millionaires = users.filter(user => user.money > 999999);

    populateUI(millionaires);
}





`REDUCE`
// The reduce method is a high level array method that RETURNS A SINGLE VALUE from an array after performing a user supplied reducer callback function on each element of the array. For example, the sum of the array

// it takes a callback function that can have 4 parameters, the accumulator, the currentValue, the currentIndex and the array itself

// the syntax is shown below:

array.reduce(function (accumulator, currentValue, [currentIndex], [arrayItself]) { 'instructions to alter accumulator' }, [initialValue]);

value = array.reduce((accumulator, currentValue, [currentIndex], [array]) => { accumulator + currentValue, initialValue });



// The Accumulator - is the total value at the last call of the callback fn. At the start the accumulator is the value at array[0] or it is the initialValue if one is given

// The CurrentValue - the value of the current element. At the start i.e array[1] if no initialValue is given, or array[0] if one is

// initialValue [optional] - the value the accumulator is initialized for the first callback. If no initial value is given then the CurrentValue is array[1]

function calculateWealth() {
    let totalWealth = users.reduce((accumulator, user) => accumulator += user.money, 0);

    // console.log(formatToMoney(totalWealth));
    const wealthEl = document.createElement('div');

    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatToMoney(totalWealth)}</strong></h3>`;

    main.appendChild(wealthEl);
}








`FOR EACH`;
// The forEach method is a high level array method that loops through all the items of an array and applys your commands to them

// it takes a callback function that can have 3 parameters, the arrayItem, the index of the arrayItem and the array itself

// The syntax is 
array.forEach(function (arrayItem, [index], [arrayItself]) { 'things to do to arrayItem' })


// iterate through user data and create divs forEach
data.forEach(user => {
    const userElement = document.createElement('div');
    // add user style
    userElement.classList.add('person');
    userElement.innerHTML = `<strong>${user.name}</strong> ${formatToMoney(user.money)}`;
    // append in main
    main.appendChild(userElement);
});




`SOME`;
// The some method is a high level array method that checks if at least one element in an array meets a condition and returns true or false

// it takes a callback function that can have 3 parameters, the arrayItem, the index of the arrayItem and the array itself

// The syntax is
array.some(function(arrayItem, [index], [arrayItself]) {'condition to check arrayItem'});

function checkMillionaires() {
    let isMillionaire = data.some(user => user.money > 999999);

    console.log(isMillionaire); // returns true or false
}



`EVERY`;
// The every method is a high level array method that checks if all elements in an array meet a condition and returns true or false

// it takes a callback function that can have 3 parameters, the arrayItem, the index of the arrayItem and the array itself

// The syntax is
array.every(function(arrayItem, [index], [arrayItself]) {'condition to check arrayItem'})

function checkAllMillionaires() {
    let isAllMillionaire = data.every(user => user.money > 999999);

    console.log(isAllMillionaire);  // returns true or false
}



`FINDINDEX`;
// The findIndex method is a high level array method that returns the index of the first element in an array that meets a condition 

// it takes a callback function that can have 3 parameters, the arrayItem, the index of the arrayItem and the array itself

// The syntax is
array.findIndex(function(arrayItem, [index], [arrayItself]) {'condition to check arrayItem'});

function findIndex() {
    let index = data.findIndex(user => user.name === 'Rome');

    console.log(index); // returns the index of the user with the name 'Rome'
}



`FIND`;
// The find method is a high level array method that returns the first element in an array that meets a condition and returns true or false

// it takes a callback function that can have 3 parameters, the arrayItem, the index of the arrayItem and the array itself

// The syntax is
array.find(function(arrayItem, [index], [arrayItself]) {`condition to check arrayItem`});

function find() {
    let user = data.find(user => user.name === 'Rome');
    return user; // returns the user with the name 'Rome'
}



`FLATMAP`;
// The flatMap method is a high level array method that returns a new array with the results of calling a provided function on every element in the array and then flattening the results into a single level array. It is the equivalent of calling the map method on an array and then the flat method on the resulting array, but it is more efficient than calling both methods separately

// it takes a callback function that can have 3 parameters, the arrayItem, the index of the arrayItem and the array itself

// The syntax is
array.flatMap(function(arrayItem, [index], [arrayItself]) {`condition to check arrayItem`})

arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]); // returns [[2], [4], [6], [8]] - map returns an array of arrays

arr1.flatMap(x => [x * 2]); // returns [2, 4, 6, 8] - flatMap returns a single array




`KEYS`;
// The keys method returns a new array iterator object that contains the keys for each index in the array

// it takes no callback function

// The syntax is
array.keys();

arr1 = [1, 2, 3, 4];

arr1.keys(); // returns an array iterator object that contains the keys for each index in the array




`VALUES`;
// The values method is a high level array method that returns a new array iterator object that contains the values for each index in the array

// it takes no callback function

// The syntax is
array.values();

arr1 = [1, 2, 3, 4];

arr1.values(); // returns an array iterator object that contains the values for each index in the array




`ENTRIES`;
// The entries method is a high level array method that returns a new array iterator object that contains the key/value pairs for each index in the array

// it takes no callback function

// The syntax is
array.entries();

arr1 = [1, 2, 3, 4];

arr1.entries(); // returns an array iterator object that contains the key/value pairs for each index in the array


































