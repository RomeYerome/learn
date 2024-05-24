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