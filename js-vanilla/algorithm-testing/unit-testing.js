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





`JEST MATCHERS`;

// Jest has matchers that are used to test values. Some of the matchers are toBe, toEqual, toBeTruthy, toBeFalsy, toBeNull, toBeUndefined, toBeGreaterThan, toBeLessThan, toContain, toMatch, etc. See example below

// toBe - tests for exact equality
// toEqual - tests for value equality
// toBeTruthy - tests for truthiness
// toBeFalsy - tests for falsiness
// toBeNull - tests for null
// toBeUndefined - tests for undefined
// toBeGreaterThan - tests for greater than
// toBeLessThan - tests for less than
// toContain - tests for an item in an array
// toMatch - tests for a pattern in a string

// Example
function sum(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toEqual(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBeGreaterThan(2);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBeLessThan(4);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBeTruthy();
})

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).not.toBeFalsy();
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).not.toBeNull();
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).not.toBeUndefined();
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).not.toContain(4);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).not.toMatch(/4/);
});










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







`TESTING ASYNCHRONOUS CODE`;

// You can test asynchronous code with Jest. You can use the done callback, return a promise or use async/await. See example below

// Example 1: Using the done callback
function fetchData(callback) {
    setTimeout(() => {
        callback('peanut butter');
    }, 1000);
};

test('the data is peanut butter', done => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        done();
    }

    fetchData(callback);
});

// Example 2: Using a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 1000);
    });
};

test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

// Example 3: Using async/await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 1000);
    });
};

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

// You can also use the .resolves matcher to test if a promise resolves. See example below

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 1000);
    });
};

test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
});

// You can also use the .rejects matcher to test if a promise rejects. See example below

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error');
        }, 1000);
    });
};

test('the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error');
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
const { describe } = require('node:test');

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


