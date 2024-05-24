`SYMBOLS`;

// Symbols are unique and immutable values in JS. They are primitives, like strings or numbers. Symbols can have descriptions, but even if two symbols have the same descriptions, they are different.

// Symbols are created using the `Symbol()` function. The `Symbol()` function returns a unique symbol object every time it is called. The `Symbol()` function can take an optional string argument that is used as its description. This description is used for debugging purposes and does not affect the uniqueness of the symbol.

// Symbols are often used as object property keys to avoid naming conflicts and to create private properties and methods in objects. They are not enumerable, so they are not included in `for...in` loops or `Object.keys()`.

// The syntax for creating a symbol is `Symbol([description])`, where `description` is an optional string that describes the symbol.

// Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object`


const symbol1 = Symbol('symbol1');  // a symbol with a description
const symbol2 = Symbol();

console.log(symbol1, symbol2);  // Symbol(symbol1) Symbol()

console.log(symbol1.description);  // symbol1

console.log(symbol2.description);  // undefined

console.log(typeof symbol1);  // symbol

console.log(symbol1 === symbol2);  // false



`USING SYMBOLS AS OBJECT PROPERTY KEYS`;

// Symbols can be used as object property keys by wrapping them in square brackets (just like you do with variables). This lets you create properties and methods that are not accessible from outside the object.

// To create a property or method with a symbol key, you wrap it with square brackets. This allows you access the property or method using the symbol as the key.

const symbol4 = Symbol('symbol4');
const symbol5 = Symbol('symbol5');

const obj = {
    [symbol4]: 'value1',
    [symbol5]: 'value2',
    method: function () {
        return 'method';
    },
    [Symbol('symbol3')]: 'value3'
};

// This creates an immutable property or method, because you can't access it directly. In the example above, obj[Symbol('symbol3')] returns undefined because the 'symbol3' is a new symbol, different from the one in the object. 

// You can only access symbol4 and symbol5 because they are stored in variables. 

console.log(obj[symbol4]);  // value1   -   this was stored in a variable so i can access it
console.log(obj[symbol5]);  // value2   -   this was stored in a variable so i can access it
console.log(obj.method());  // method
console.log(obj[Symbol('symbol3')]);  // undefined  -   this wasn't stored in a variable so symbol3 is a new symbol different from the one in the object





`SYMBOLS ARE NOT ENUMERABLE`;
// Symbols are not enumerable, so they are not included in `for...in` loops or `Object.keys()`. This makes them useful for creating private properties and methods that are not accessible from outside the object.

for (const key in obj) {
    console.log(key);  // method  -   only the method property is returned because the rest are symbols
}







`SYMBOLS AS STATIC PROPERTIES`;
// Many well known symbols are available as static properties on the `Symbol` object. These symbols are used to define the behavior of objects in JavaScript.

`Symbol.iterator`;
// is a well known symbol that represents the default iterator for an object. It is the protocol behind the for...of loop, the spread operator, and the yield keyword. It is used to define the default iterator for an object, which is used to iterate over the object's values.


const arr = [1, 2, 3];

const iterator = arr[Symbol.iterator]();    // returns an iterator object

console.log(iterator.next());  // returns {value: 1, done: false}

console.log(iterator.next());  // returns {value: 2, done: false}

console.log(iterator.next());  // returns {value: 3, done: false}

console.log(iterator.next());  // returns {value: undefined, done: true}




`Symbol.toStringTag`;
// `Symbol.toStringTag` is a well known symbol that is used to define the string representation of an object. It is used by JavaScript to determine the default description of an object when it is converted to a string. It is the protocol in the `Object.prototype.toString()` method.

const user = {
    [Symbol.toStringTag]: 'User'
};

console.log(user.toString());  // [object User]   -   the default description of the object is User


'OTHER WELL KNOWN SYMBOLS';

Symbol.toPrimitive; // Used in the ToPrimitive abstract operation

Symbol.replace; // Used in the String.prototype.replace() method

Symbol.search; // Used in the String.prototype.search() method

Symbol.split; // Used in the String.prototype.split() method

Symbol.hasInstance; // Used in the instanceof operator

Symbol.isConcatSpreadable; // Used in the Array.prototype.concat() method



`STATIC METHODS`;
// Symbols have static methods that can be used to create and retrieve symbols. These methods are available on the `Symbol` object.

`Symbol.for()`;
// `Symbol.for()` creates a global symbol that can be accessed from anywhere in your application. It takes in an identifier and returns a symbol. If the symbol already exists, it returns the symbol.

const sym1 = Symbol.for('id');  // creates a global symbol with the identifier id

const sym2 = Symbol.for('id');  // returns the symbol with the identifier id

console.log(sym1 === sym2);  // true   -   because they are the same symbol

console.log(Symbol.keyFor(sym1));  // id   -   because it is a global symbol

const sym3 = Symbol('id');  // creates a symbol with the identifier id

console.log(Symbol.keyFor(sym3));  // undefined   -   because it is not a global symbol



`Symbol.keyFor()`;
// `Symbol.keyFor()` returns the key of a global symbol. If the symbol is not global, it returns undefined.

const sym4 = Symbol.for('id');  // creates a global symbol with the identifier id

console.log(Symbol.keyFor(sym4));  // id   -   because it is a global symbol

const sym5 = Symbol('id');  // creates a symbol with the identifier id

console.log(Symbol.keyFor(sym5));  // undefined   -   because it is not a global symbol




`INSTANCE PROPERTIES`;

`Symbol.prototype.description`;
// The `Symbol.prototype.description` property returns the description of a symbol. If the symbol was created with a description, the description is returned. If the symbol was created without a description, undefined is returned.

const sym10 = Symbol('id');

console.log(sym10.description);  // id

const sym11 = Symbol();

console.log(sym11.description);  // undefined



`Symbol.prototype.constructor`;
// The `Symbol.prototype.constructor` property returns the constructor function that created the symbol object.

const sym12 = Symbol('id');

console.log(sym12.constructor);  // function Symbol() { [native code] }





`INSTANCE METHODS`;

`Symbol.prototype.toString()`;
// The `Symbol.prototype.toString()` method returns the string representation of a symbol. It is used internally by JavaScript to convert a symbol to a string.

const sym13 = Symbol('id');

console.log(sym13.toString());  // Symbol(id)


`Symbol.prototype.valueOf()`;
// The `Symbol.prototype.valueOf()` method returns the primitive value of a symbol. It is used internally by JavaScript to convert a symbol to a primitive value.

const sym14 = Symbol('id');

console.log(sym14.valueOf());  // Symbol(id)









`SYMBOL PROPERTIES & METHODS`;


`Object.getOwnPropertySymbols()`;
console.log(Object.getOwnPropertySymbols(user10)); // returns an array with the symbol property of the object


`Symbols are not enumerable - you can't loop through them`;
for (let i in user10) {
    console.log(i); // returns name and email but not id because id is a symbol property
}

`Symbols are ignored by JSON.stringify()`;
console.log(JSON.stringify({ key: 'prop' })); // returns {"key":"prop"}
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' })); // returns {}


`Symbols are ignored by Object.assign()`;
console.log(Object.assign({ key: 'prop' })); // returns {key: "prop"}
console.log(Object.assign({ [Symbol('sym1')]: 'prop' })); // returns {}


`Symbols are ignored by Object.keys()`;
console.log(Object.keys({ key: 'prop' })); // returns ["key"]
console.log(Object.keys({ [Symbol('sym1')]: 'prop' })); // returns []


`Symbols are ignored by Object.values()`
console.log(Object.values({ key: 'prop' })); // returns ["prop"]
console.log(Object.values({ [Symbol('sym1')]: 'prop' })); // returns []


`Symbols are ignored by Object.entries()`
console.log(Object.entries({ key: 'prop' })); // returns [["key", "prop"]]
console.log(Object.entries({ [Symbol('sym1')]: 'prop' })); // returns []


`Symbols are ignored by for...in loop`
for (let i in { key: 'prop' }) {
    console.log(i); // returns key
}

for (let i in { [Symbol('sym1')]: 'prop' }) {
    console.log(i); // returns nothing
}


`Symbols are ignored by Object.getOwnPropertyNames()`
console.log(Object.getOwnPropertyNames({ key: 'prop' })); // returns ["key"]
console.log(Object.getOwnPropertyNames({ [Symbol('sym1')]: 'prop' })); // returns []


`Symbols are FOUND by Object.getOwnPropertySymbols()`
console.log(Object.getOwnPropertySymbols({ key: 'prop' })); // returns []
console.log(Object.getOwnPropertySymbols({ [Symbol('sym1')]: 'prop' })); // returns [Symbol(sym1)]


`Symbols are ignored by Reflect.ownKeys()`
console.log(Reflect.ownKeys({ key: 'prop' })); // returns ["key"]
console.log(Reflect.ownKeys({ [Symbol('sym1')]: 'prop' })); // returns []







`Symbol.for() & Symbol.keyFor()`;

// Symbol.for() creates a global symbol that can be accessed from anywhere in your application. It takes in an identifier and returns a symbol. If the symbol already exists, it returns the symbol. See example below

const sym6 = Symbol.for('id');  // creates a global symbol with the identifier id
const sym7 = Symbol.for('id');  // returns the symbol with the identifier id

console.log(sym6 === sym7); // returns true because they are the same symbol

console.log(Symbol.keyFor(sym6)); // returns id because it is a global symbol

const sym8 = Symbol('id');  // creates a symbol with the identifier id

console.log(Symbol.keyFor(sym8)); // returns undefined because it is not a global symbol






`Symbol.toString() & Symbol.valueOf()`;

// Symbol.toString() returns the string representation of a symbol. Symbol.valueOf() returns the primitive value of a symbol. See example below

const sym9 = Symbol('id');

console.log(sym9.toString()); // returns Symbol(id)

console.log(sym9.valueOf()); // returns Symbol(id)

console.log(typeof sym9.valueOf()); // returns symbol



`Full list of symbols`;

console.log(Object.getOwnPropertySymbols(window)); // returns an array of all the symbols in the window object

console.log(Object.getOwnPropertyNames(Symbol)); // returns an array of all the symbols in the Symbol object
