`MODULES & TOOLING`;

// Modules are JS files that you can import into other JS files. Modules let you organize code in seperate files instead of aving one unending js file that is impossible to make sense. With modules, you can split your code into multiple files and import them into your main file. This makes your code more organized and easier to maintain.

// The two most popular module systems are CommonJS and ES6 modules. CommonJS is used in Node.js and ES6 modules are used in the browser. The key difference between the two is in their syntax and also that CommonJS is synchronous while ES6 modules are asynchronous.

// The syntax for importing and exporting modules is different in both systems. In CommonJS, you use the require() function to import modules and the module.exports object to export modules. In ES6 modules, you use the import and export keywords to import and export modules.

// To take advantage of ES6 modules and NPM in the browser, you need to use a module bundler like Webpack or Rollup. These tools bundle all your modules into a single file that can be loaded by the browser. They also handle other tasks like minification, code splitting, and tree shaking.

// Webpack is the most popular module bundler and is widely used in the industry. It has a large ecosystem of plugins and loaders that extend its functionality. Rollup is another module bundler that is known for its simplicity and performance.


`WHY USE MODULES & TOOLING`;

// Makes your code more organized and easier to maintain by breaking it up into separate files

// Reusability - You can reuse code from one file in another file

// NPM Packages - You can use 3rd party packages from npm to add functionality to your code

// Optimization - You can use tools to optimize your code for production. e.g minification, uglification, etc

// Customized Environment - You can use tools to customize your environment to your needs. e.g you can use babel to convert your code to ES5 for older browsers



`TYPES OF MODULES`;

// There are 2 common types of modules. They are CommonJS and ES6 Modules. CommonJS is the module system used in NodeJS. ES6 Modules is the module system used in the browser.

// modules are not supported by older browsers. Newer browsers support ES modules but it is still recommended to use a bundler like webpack to bundle your modules into one file for older browsers.

// You're going to use Common JS most of the time but when you build front-end vanilla js applications like with react, you'll use ES6 modules. You can use ES6 modules in NodeJS but you'll



`WHAT IS NODE JS`;
// Node JS is a Javascript runtime environment. It allows JS to run on the server, much like other languages e.g Python, Ruby, Java etc. 
// Node uses the V8 engine which is the same engine used by Chrome to run JS in the browser. The inner workings are similar to the browser. It has a call stack, event loop, callback queue, etc. but obviously there is no DOM, no Window or Document in Node. It's own global object is called GLOBAL





`Common JS (Node) Syntax`;
// CommonJS is the module system used in NodeJS. It uses the require() function to import modules and the module.exports object to export modules. See example below

`Exporting an object`;
// File 1: person.js

const person = {
  name: 'John',
  age: 30
};

module.exports = person;

// File 2: Importing a module - app.js
const person = require('./person.js');

`Exporting a function`;
// File 1: utils.js
function capitalizeWords(str) {
  return str.toUpperCase();
}

module.exports = capitalizeWords;

// File 2: app.js
const capitalizeWords = require('./utils.js');

`Exporting multiple values`;
// File 1: math.js
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

module.exports = { add, subtract };

// File 2: app.js
const { add, subtract } = require('./math.js');







`ES6 Modules (Browser) Syntax`;
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








`Module Bundlers`;

// Module bundlers are tools that bundle all your modules into a single file that can be loaded by the browser. They also handle other tasks like minification, code splitting, and tree shaking. The two most popular module bundlers are Webpack and Rollup.

// Webpack is the most popular module bundler and is widely used in the industry. It has a large ecosystem of plugins and loaders that extend its functionality. Rollup is another module bundler that is known for its simplicity and performance.


`Webpack`;

// Webpack is a module bundler that takes your modules and generates static assets representing those modules. It can take your JS, CSS, images, and other assets and bundle them into one or more files. Webpack is highly configurable and has a large ecosystem of plugins and loaders that extend its functionality.