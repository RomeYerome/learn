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












`SWITCH STATEMENTS`;
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



