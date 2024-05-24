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


// Put a plus sign before a string to convert it to a number
console.log(+ '5');      // returns the number 5
