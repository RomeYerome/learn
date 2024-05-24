`OBJECT ORIENTED PROGRAMMING`;

// definition = `Object oriented programming is a programming paradigm (style) based on the concept of objects. It is a style of programming where you create objects that contain both data and methods. It is more organized, easier to read, easier to maintain and easier to reuse. It mimics real life objects and is more modular, scalable, secure, efficient, flexible and extensible.


// There are other paradigms such as procedural, logical, functional, event driven, etc. Object oriented programming is the most popular paradigm and is used in most modern programming languages. It is used in javascript, python, java, c++, c#, php, ruby, swift, kotlin, etc. It is not used in older languages like c and fortran.`


// WHAT WE'LL COVER
//  1.  OOP & Its principles
//  2.  Object literals
//  3.  Constructor functions and this
//  4.  Prototypes
//  5.  Prototype chain and inheritance
//  6.  Object.create()
//  7.  call(), apply() and bind()
//  8.  ES6 classes
//  9.  Inheritance and sub classes
//  10. Static methods
//  11. Getters and setters
//  12. Private Properties and methods
//  13. Flags and descriptors
//  14. Sealing and freezing objects




`An object is a self-contained piece of code that is a collection of properties and methods. Objects are used as building blocks and can interact with one another. There are many ways to create an object in JS such as object literals, constructor functions, classes, factories and more`;


// Examples of objects
//  user
//  car
//  person
//  customer
//  product
//  employee

`Why Use OOP?`;
// can make your code easier to read, understand and maintain. It is great for building complex applications and is superflous for small projects. It is also great for building reusable code and for team collaboration










`BASIC PRINCIPLES OF OOP`;
// 1. Encapsulation - the idea of wrapping properties and methods including private ones in a complete unit (such as a class), so they are not accessible outside the class. Some languages have public and private methods and properties. Javascript did not have this feature but now does

// 2. Abstraction - the idea of hiding the complexity of the underlying code. We can hide properties and methods and only show the essentials. We can also use setter and getter methods to control access to properties. Think of this like a car you own, you don't really need to know the details of how a combustion engine works, you just want to drive the car. The engine is abstracted away from you. We've already seen abstraction with methods like fetch, we don't know what happens under the hood but we can use it to make http requests

// 3. Inheritance - the idea of creating new classes from existing classes. The new classes inherit all the properties and methods of the existing class and can add new ones. This is great for code reusability. We'll see this in action when we look at prototypes and classes

// 4. Polymorphism - the idea of the same thing having many forms i.e one method doing different things in different classes. This is done by using a child class to override a method in the parent class. We'll see this in action when we look at prototypes and classes. Basically a child class having the same named method as the parent class but with different functionality. This is also called method overriding







`Components of OOP`
// Constructor Functions - Creates the blueprint for the object

// Prototypes - Methods and properties that are shared among all instances of the object

// Classes - Modern alternative (syntactic sugar) to constructor functions. They are blueprints for creating objects with pre-defined properties and methods. 

// Instances - copies of the object created from the blueprint and stored in a variable. This is also called an instance of the object. Done using the new keyword


// Example of Object and Instance
// Blueprint  of user
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    createProfile() {

    }

    logout() {

    }
}

// user instances

const user1 = new User('John', 'john@gmail.com');
user1.createProfile();

const user2 = new User('Brad', 'brad@gmail.com');
user2.createProfile();




`OBJECT LITERALS ADVANCED + THE THIS KEYWORD`

// Object literals are a way to create a single object in javascript. An object is a collection of key value pairs seperated by commas. The key is a string (without quotes) and the value can be any data type. If the value is a function, it is called a method. If not, it is called a property. 

// The 'This' keyword refers to the current instance of an object. In the case of an object literal, it is the only instance so the this keyword refers to the object itself. It is used to access properties and methods of the object from within the object 

// If you use the this keyword outside of the object, it refers to the window object

// Example of an object literal

const rectangle = {
    name: 'Rectangle 1',
    width: 10,
    height: 20,
    area: function () {
        return this.width * this.height;
    }
};





`CONSTRUCTOR FUNCTIONS`;

// Object literals are fine when you want to create a single object, but if you need to create multiple objects, like users, you'll need a constructor function so you don't keep duplicating code. A constructor function is one that returns an object. It is used to create multiple objects of the same type. It is a blueprint for creating objects 

// You initialize instances of the object using the new keyword. 



// Example

new date(); // creates a new date object

function Rectangle() {
    // this is the constructor function, the convention is to capitalize the first letter of the function name for constructor functions

    return this; // this is implicitly returned when you use the new keyword, you don't have to type it out, but it's basically what happens under the hood when you use the new keyword
}

const rect1 = new Rectangle(); // creates a new EMPTY rectangle object because there is nothing in the Rectangle class. if you take out the new keyword, you're basically assigning a function to the variable and it will return undefined since the function doesn't return anything

// When you use the new keyword, 4 things happen

// 1. A new empty object is created
// 2. The this keyword is set to the new object
// 3. The constructor function is called with any arguments that are passed in
// 4. The new object is returned from the constructor function




// ASSIGNING PROPERTIES AND METHODS TO OBJECTS
function Square(name, length) {    // this is the constructor function with variables passed in
    this.name = name;   //You can assign properties and methods to objects using the this keyword
    this.length = length;

    this.area = function () {
        return this.length * this.length;   // here the method calls the properties of the object using the this keyword
    }
}


// You can also hard code values into the constructor function and every child object will have those values, for instance in the example above, you can hard code the name to be square and the lenght to be 10 and every child object will have those values. You can also pass in values when you create the child object and those values will override the hard coded values. See example below

function Square(name, lenght) {    // this is the constructor function with variables passed in
    this.name = 'Square';   //You can assign properties and methods to objects using the this keyword
    this.lenght = 10;

    this.area = function () {
        return this.lenght * this.lenght;   // here the method calls the properties of the object using the this keyword
    }
}

const square1 = new Square('Square 1', 20); // here the name is set to Square 1 and the lenght is set to 20. The area will be 400   

const square2 = new Square(); // here the name is set to Square and the lenght is set to 10. The area will be 100



`Adding Properties Outside the Constructor Fn`;
function Square(name, lenght) {    // this is the constructor function with variables passed in
    this.name = name;   //You can assign properties and methods to objects using the this keyword
    this.lenght = lenght;
}

Square.prototype.area = function () {
    return this.lenght * this.lenght;   // here the method calls the properties of the object using the this keyword
}

const square3 = new Square('Square 3', 20); // here the name is set to Square 1 and the lenght is set to 20. The area will be 400

console.log(rect2.area()); // here we call the area method of the object and it returns 400




`Inspecting the constructor fn with the constructor property`

// You can inspect the constructor function of an object using the constructor property. See example below

console.log(rect1.constructor); // returns the constructor function of the object

console.log(rect2 instanceof Rectangle); // returns true if the object is an instance of the constructor function and false if it is not









`LITERALS VS BUILT IN CONSTRUCTORS`

// There are 2 ways to create a string in javascript, you can use a string literal or a string constructor. The same goes for numbers, booleans, arrays, objects, dates, regular expressions, etc. 

const strLit = 'Hello'; // string literal
const srtObj = new String('Hello'); // string object from constructor

console.log(strLit, typeof strLit); // returns string as type
console.log(srtObj, typeof srtObj); // returns object as type with each letter as a value in key/value pairs. It aslo has a length property and prototype just like any object would



`BOXING`;
// When you use a method or try to access a property on a string literal, javascript temporarily converts it to a string object behind the scenes. This is called boxing. The same goes for numbers, booleans, arrays, objects, dates, regular expressions, etc.

// This allows you use properties and methods and dot notation on a string literal. See example below

strLit.toUpperCase(); // returns HELLO as a string object
console.log(strLit.constructor); // returns the constructor function of the object even though it is a literal



`UNBOXING`;
// Unboxing is the reverse. some methods temporarily convert the string object back to a string literal. See example below

console.log(strObj.valueOf()); // returns the string literal

console.log(strObj.toString()); // returns the string literal



`NOTE: If you use the instanceof operator on a string literal to check if it's an instance of the STRING object, it returns false because it is not an instance of the string constructor function. If you use the instanceof operator on a string object, it returns true because it is an instance of the string constructor function`

console.log(strLit instanceof String); // returns false
console.log(strObj instanceof String); // returns true





`OTHER TYPES OF CONSTRUCTOR FUNCTIONS`

const numLit = 20;  // creates a primitive number
const numObj = new Number(20);  // creates a number object

const boolLit = true;   // returns a boolean literal
const boolObj = new Boolean(true);  // creates a boolean object

const arrLit = [1, 2, 3];   // arrays are objects by default so you get the same thing using the literal or the constructor
const arrObj = new Array(1, 2, 3);


const funcLit = function (x) { return x * x }; // returns a function object with the function as the value of typeof

const funcObj = new Function('x', 'return x * x'); // returns a function object with the function as the value of typeof    // this is not used often

const objLit = { name: 'John' };  // returns an object, js does the new Object behind the scenes
const obj = new Object({ name: 'John' }); // returns an object same as above










`WORKING WITH OBJECT PROPERTIES`
// You can access properties of an object using dot notation or bracket notation. You can also add properties and methods to the instance of an object, or to the prototype itself using dot notation or bracket notation. You can also delete properties from an object using the delete keyword. See example below


function Circle(name, radius) {
    this.name = name;
    this.radius = radius;

    this.area = function () {
        return Math.PI * this.radius * this.radius;
    }
}

const circle1 = new Circle('Circle 1', 10);



`ACCESSING PROPERTIES AND METHODS`
console.log(circle1.name, circle1.radius); // returns Circle 1 10

// You can also access properties using bracket notation. See example below
circle1['name']; // returns Circle 1, however the dot notation is more common



`ADDING PROPERTIES AND METHODS`
// You can also add properties and methods to the instance of an object, or to the class itself using dot notation or bracket notation. See example below

circle1.color = 'red'; // adds a color property to the instance of the object

Circle.prototype.perimeter = function () {
    return 2 * Math.PI * this.radius;
} // adds a perimeter method to the class itself

console.log(circle1.color); // returns red

console.log(circle1.perimeter()); // returns 62.83185307179586




`DELETING PROPERTIES AND METHODS`
// You can also delete properties from an object using the delete keyword. See example below

delete circle1.color; // deletes the color property from the instance of the object

delete Circle.prototype.perimeter; // deletes the perimeter method from the class itself



`CHECKING IF A PROPERTY OR METHOD EXISTS`
// You can check if a property or method exists in an object using the in operator OR the hasOwnProperty. See example below

console.log('color' in circle1); // returns true

console.log('perimeter' in circle1); // returns true

console.log('perimeter' in Circle.prototype); // returns true



console.log(circle1.hasOwnProperty('color')); // returns true

console.log(circle1.hasOwnProperty('perimeter')); // returns false. It's stricter than 'in'

console.log(Circle.prototype.hasOwnProperty('perimeter')); // returns true






`GETTING KEYS AND VALUES OF AN OBJECT`
// You can get the keys and values of an object using the Object.keys() and Object.values() methods. See example below

console.log(Object.keys(circle1)); // returns an array of the keys of the object

console.log(Object.values(circle1)); // returns an array of the values of the object



`GETTING ENTRIES OF AN OBJECT`
// You can get the entries of an object using the Object.entries() method. See example below

console.log(Object.entries(circle1)); // returns an array of arrays of the key/value pairs of the object














`PROTOTYPES`
// a prototype is a special object within every object that is shared to all instances of the object. It is used to add properties and methods to all instances of the object or to the object itself. 

// When you instantiate an object, the prototype is automatically created and attached to the object. You can access the prototype using the __proto__ property. Also the constructor function is attached to the prototype. See example below 

function Cylinder(name, radius, height) {
    this.name = name;
    this.radius = radius;
    this.height = height;
}

const cyl1 = new Cylinder('Cylinder 1', 10, 20);

console.log(cyl1.__proto__); // returns the prototype of the object

console.log(cyl1.__proto__.constructor); // returns the constructor function of the object


console.log(Object.getPrototypeOf(cyl1));   // returns the prototype of the object


console.log(Object.getPrototypeOf(cyl1) === cyl1.__proto__); // returns true







`Prototype Chaining`
// The prototype of an object is an object so it also has a prototype within it. The prototype of the prototype is the object prototype which is the origin. This scenario is called prototype chaining. See example below

console.log(cyl1.__proto__.__proto__); // returns the prototype of the prototype of the object

console.log(cyl1.__proto__.__proto__.__proto__); // returns the object prototype which is the origin

// The object prototype has a prototype of null. This origin prototype is the end of the chain and contains the default object methods and properties such as toString(), hasOwnProperty(), etc. See example below

console.log(cyl1.__proto__.__proto__.__proto__.__proto__); // returns null

// You can also access the prototype of an object using the getPrototypeOf() method. See example below

console.log(Object.getPrototypeOf(cyl1)); // returns the prototype of the object

console.log(Object.getPrototypeOf(cyl1) === cyl1.__proto__); // returns true

console.log(Object.getPrototypeOf(cyl1) === Cylinder.prototype); // returns true

console.log(Object.getPrototypeOf(cyl1) === cyl1.constructor.prototype); // returns true



// You can also set the prototype of an object using the setPrototypeOf() method. See example below

const proto = {
    sayHello: function () {
        return 'Hello';
    }
}

Object.setPrototypeOf(cyl1, proto); // sets the prototype of the object to the proto object

console.log(cyl1.sayHello()); // returns Hello



`NOTE: Even arrays have prototypes too because they are objects. The prototype of an array is the array prototype. The array prototype has the object prototype as its origin which has a prototype of null.

The same with strings and numbers constructed with the string object constructor and number object constructor. They have prototypes too. The prototype of a string object is the string prototype. The prototype of a number object is the number prototype. The string prototype and number prototype have the object prototype as their origin which has a prototype of null.

In the case of an object literal, it's prototype is the object prototype which has a prototype of null. See example below`;





`ADDING METHODS AND PROPERTIES TO PROTOTYPE`;

// The prototype is great for storing properties and methods to be shared among all instances of an object. It also stores them privately so they are not in the object itself. You add methods and properties to the prototype by assignment or using the Object.defineProperty() method. See example below

function Triangle(name, base, height) {
    this.name = name;
    this.base = base;
    this.height = height;
}

Triangle.prototype.area = function () {
    return 0.5 * this.base * this.height;
}

const tri1 = new Triangle('Triangle 1', 10, 20);

console.log(tri1.area()); // returns 100



`OBJECT.DEFINEPROPERTY()`;

// You can alternatively add properties to the prototype using the Object.defineProperty() method. See example below

Object.defineProperty(Triangle.prototype, 'perimeter', {
    get: function () {
        return 3 * this.base;
    }
});





`OBJECT.CREATE()`
// Object.create() is a method that allows you create an object and set the prototype of the object at the same time. It is a static method of the Object class. It takes in 2 parameters, the first is the prototype of the object and the second (optional) is an object containing the properties and methods of the object. See example below

const prototype = {
    sayHello: function () {
        return 'Hello';
    }
}

function createObject(name, age) {
    Object.create(prototype, {
        name: { value: 'John' },
        age: { value: 30 }
    })
}

const newObject = createObject('John', 39);

newObject.name = 'Mary';


// Objects created this way won't have a constructor function because they were not created with one. The only constructor function will be in the origin object prototype.









`PROTOTYPICAL INHERITANCE + CALL(), APPLY() AND BIND()`;

// So far, we've seen how objects inherit prototypes from their parent prototypes all the way up to the origin object prototype. This is called prototypal inheritance. It is the idea that an object inherits properties and methods from its parent prototype. It is the basis of OOP in javascript. 

// However , we can also inherit properties and methods from another object using the call(), apply() and bind() methods. These methods are used to call functions and set the this keyword to the current object. See example below


`CALL()`;

// So far, we've looked at prototypical inheritance from the prism of inheriting from built in objects. The call() method is used when you want to inherit from your own objects. The issue it fixes is that when you inherit from your own objects, the this keyword in the child object will refer to the parent object or the window object. The call() method fixes this by setting the this keyword to the child object. See example below

function Shape(name) {
    this.name = name;
}

function Recta(name, height, width) {
    // Shape(name);    // this won't work. It will set the this keyword to the window object instead of the Recta object
    Shape.call(this, name);
    this.height = height;
    this.width = width;
}


function Circa(name, radius) {

    Shape.call(this, name);
    this.radius;
}

const recta1 = new Recta('Recta 1', 20, 20);

// The real benefit to prototypical inheritance is being able to share prototypes and all their methods
Shape.prototype.logName = console.log(this.name);

Shape.prototype.draw = function () {
    return `Drawing ${this.name}`;
}

// To share it, you have to use the Object.Create method to pass the prototype into the child object

Recta.prototype = Object.create(Shape.prototype);

// Now the Recta object has the shape prototype and can now call it's methods

recta1.logName;


// At this point, the constructor function of child elements is still the parent element's constructor function. To change it you have to do something like this

Recta.prototype.constructor = Recta;
Circa.prototype.constructor = Circa;


//OTHER EXAMPLES
const persn = {
    name: 'John',
    age: 30,
    sayHello: function () {
        return `Hello ${this.name}`;
    }
}

const persn2 = {
    name: 'Brad',
    age: 40
}

console.log(persn.sayHello()); // returns Hello John


console.log(persn.sayHello.call(persn2)); // returns Hello Brad

console.log(persn.sayHello.apply(persn2)); // returns Hello Brad

const sayHey = persn.sayHello.bind(persn2); // returns Hello Brad

console.log(sayHello()); // returns Hello Brad





`APPLY()`;

// The apply() method is similar to the call() method but it takes in an array of arguments instead of individual arguments. See example below

function sayHello(greeting1, greeting2) {
    return `${greeting1} ${this.name}. ${greeting2}`;
};

const person = {
    name: 'John'
};

console.log(sayHello.apply(person, ['Hello', 'How are you?'])); // returns Hello John. How are you?



`BIND()`;

// The bind() method is similar to the call() method but it returns a new function instead of calling the function immediately. The bind method is used to create a new function with a specified this value and optional preset arguments. This new function, often referred to as a "bound function," retains the same code body as the original function but operates with the predefined context and arguments.

// The primary purposes of the bind method are:

// 1. Preserving Context: It allows you to ensure that a function always executes in a specific context, regardless of how it’s called.
// 2. Partial Function Application: bind enables you to create new functions by pre - filling some of the function's arguments. This is particularly useful when you need to reuse a function with certain arguments fixed.

// Syntas is as follows
const newFunc = func.bind(thisArg, arg1, arg2, ...argN);



`Example of bind method for preserving context`;

const sayHello = function () {
    return `Hello ${this.name}`;
}

const persn3 = {
    name: 'John'
};

const sayHelloJohn = sayHello.bind(persn3);

console.log(sayHelloJohn()); // returns Hello John





`Example of bind method for partial function application`;

const multiply = function (number, factor) {
    return number * factor;
}

const multiplyByTwo = multiply.bind(this, 2); // returns a new function that multiplies by 2

console.log(multiplyByTwo(5)); // returns 10    


