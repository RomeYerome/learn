`STRINGS`;
// Strings are a sequence of characters. They are used to represent text and are wrapped in quotes. They can be single or double quotes. They can also be wrapped in backticks `` which are used for template literals in ES6. 

// Strings can be created using the String() constructor or by simply wrapping the text in quotes. The String() constructor is rarely used because it's more complex and slower than the simple quotes method.



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
























