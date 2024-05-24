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