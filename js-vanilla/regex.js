// REGULAR EXPRESSIONS
let definition = `RegEx are used for pattern matching or pattern searching, for filtering text`;

let re;

re = /hello/;
re = /hello/i; //   the i here is a flag that means case insensitive
re = /hello/g; //   the g flag means global and will search your entire write up for every instance of your re 

console.log(re);    // returns /hello/
console.log(re.source); // returns hello
console.log(re.flags);  // returns i or g or ig or gi
console.log(re.unicode);    // returns false. unicode is a flag that can be used to search for unicode characters



`REGEX FUNCTIONS`;

`exec()`;
// The exec() function is a regex method that searches a string for a match, and returns the result as an Array object.

const result = re.exec('hello world');  // returns an array with the word hello and some other properties

console.log(result); // returns ["hello", index: 0, input: "hello world"]

console.log(result[0]); // returns hello
console.log(result.input); // returns the search string
console.log(result.index); // returns the index of the searched word




`test()`;
// The test() function is a regex method that returns true if it finds a match, otherwise it returns false.

result = re.test('Hello');

console.log(result); // returns false because it is case sensitive. if the i flag is used on re. it returns true




`match()`; 

// The match() function is a string method that searches a string for a match against a regular expression, and returns the matches, as an Array object. It is similar to exec, Returns result array or null. difference is it is called on the writeup not on the regEx

const str = 'Hello There';
result = str.match(re);
console.log(result); // you get an array just like exec()




`SEARCH()`;
// The search() function is a string method that searches a string for a specified value, and returns the position of the match. It returns -1 if no match is found. It is similar to indexOf, but it takes a regular expression as an argument. 

str = 'Hello There';
result = str.search(re);
console.log(result);    // returns 0 because it found the word hello at index 0




`REPLACE()`; 
// The replace() function is a string method that replaces a specified value with another value in a string. It takes two arguments, the value to be replaced and the value to replace it with. It can also take a regular expression as an argument. 

// If the value to be replaced is a string, only the first instance will be replaced. If the value to be replaced is a regular expression, all instances will be replaced. If the value is not found, the original string will be returned.

// - returns new string with replacement
str = 'Hello There';
newStr = str.replace(re, 'Hi');
console.log(newStr);    // returns Hi There



`LITERAL characters`;
// i - case insensitive;
// g - global search;

re = /hello/;
re = /hello/i;



`META Character Symbols`;

`^`; // Must start with
`$`; // Must end with
`.`; // Any single character
`*`; // Zero or more characters
`?`; // Optional character
'\\'; // Escape character - one backslash is used to escape a character
`[]`; // Character sets
`{}`; // Quantifiers
`()`; // Grouping`


re = /^h/i; // ^ : MUST START WITH the given string
re = /od$/i; // $ MUST END WITH given string
re = /^hello$/i; // must START & END WITH
re = /h.llo/i; // . SINGLE PLACEHOLDER: the dot is a placeholder for any ONE character
re = /h*llo/i; // * WILDCARD: a placeholder for any number of characters including none
re = /gre?a?y/; // ? OPTIONAL: each character before a ? is optional...so grey, gray or greay will match

re = /gre?a?y\"?/; // \ Escape Character: turns characters so they read as strings. The \ key escapes the double quote so it prints as a string -> gra"y?



`BRACKETS []` // Character Sets
re = /gr[ae]/i; // Must be a character in the bracket
re = /[^GF]ray/i; // the ^ in this case means EXCEPT OR NOT. so any character except G or F
re = /[A-Z]ray/; // Any letter From A - Z
re = /[a-z]ray/; // Any letter From a - z
re = /[A-Za-z]ray/; // Any letter From a - z or A - Z

re = /[0-9]ray/; // Any digit from 0 - 9


`BRACES {}`; // Quantifiers
re = /Hel{2}o/i; // {Multiplier} Expects a string with 2 ls
re = /Hel{2,4}o/i; // {Range} Expects a string with 2 to 4 ls
re = /Hel{2,}o/i;  // Expects a string with 2 or more ls
re = /[0-9]x{3}/i; // Expects a number followed by x 3 times



`PARENTHESE ()`; // Grouping
re = /([0-9]x){3}/i; // Just like maths it considers what's in the bracker then multiplies it. the result is eg 3x3x3x



`SHORTHAND CHARACTER CLASSES`;
re = /\w/;   // SNGLE XTER - finds the first alphanumeric or _ xter.
re = /\w+/;  // MULTIPLE XTERS - the plus finds multiple alphanumeric or _ xters. returns the first word (group of characters)
re = /\W/;  // NON-WORD XTER. Using capital W finds the first non alphanumeric or _ xters e.g ?/>.<+ space
re = /\W+/;  // NON-WORD XTERS. Using capital W+ finds the first group of uninterupted non alphanumeric or _ xters incl space. 
re = /\d/;  // DIGIT - finds first digit
re = /\d+/; // DIGITS - finds the first group of 0 or more digits
re = /\D/;  // NON DIGITS - matches non-digits
re = /\s/; // WHITESPACE - match whitespace xter
re = /\S/; // NON-WHITESPACE - match non-whitespace xter
re = /Hell\b/i; // WORD BOUNDARY - matches only with words that end with those characters. i.e you won't match with Hello but you'll match with oHell. the word has to end with the characters in the re


`ASSERTIONS`;
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






