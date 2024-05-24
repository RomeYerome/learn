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



`NUMBER CONVERSIONS`;

// CONVERT TO NUMBERS
`To convert a boolean or string to a number, you use one of these functions`;

Number(variable); // converts the variable to a number if possible else returns NaN

parseInt(variable); // converts the variable to an integer if possible else returns NaN

parseFloat(variable); // converts the variable to a float if possible else returns NaN

num = '5';
console.log(num); // logs the string 5

num = Number(num); // converts num to the number 5