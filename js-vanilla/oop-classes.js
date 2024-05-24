`OBJECT ORIENTED PROGRAMMING WITH CLASSES`;

// definition = `Classes are synthetic sugar for Object Oriented Programming. Under the hood, they are still constructor functions and prototypes. The class contains a constructor function and every time you instantiate an object, it calls the constructor function. The constructor function initializes the properties and methods of the object and returns the object. The new keyword also sets the this keyword to the new object.`

// Classes were introduced in ES6. They simplify the process of creating objects and dealing with inheritance.

// The class keyword creates a constant, so you can't redefine it. Watch out for this common pitfall.

// The syntax for creating a class is as follows:

class Alien {
    #birthday;  // You can define private properties and methods in classes by first declaring the variable using the # prefix

    constructor(firstName, lastName, dob) {
        // The constructor function is a special method within classes that is called automatically every time a new instance of the class is created. It is used to initialize the object's properties.
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthday = new Date(dob);
    }

    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`
    }
}

const alien1 = new Alien('Zog', 'Zog', '01-01-2000');

`NOTE: The constructor function is the only method that is called automatically when you instantiate an object. All other methods have to be called manually. you don't use the function keyword when declaring methods within classes. 

You can also add static methods to classes. Static methods are methods that can be called without instantiating an object. See example below`;


// The constructor method is a special method within classes for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.





`PRIVATE PROPERTIES`;
// JS classes introduce proper private properties. These are properties that are only accessible within the class. They are defined using the # prefix and are initialized within the class but outside the constructor function as shown with #birthday in the example above.


`METHODS`;
// Methods within classes are defined without the function keyword and are always put in the object's prototype. The greeting method in the example above is defined within the class and can be called from an instance of the object.





`INHERITANCE`;

// Before classes, inheritance in OOP was done with the call method. With classes, you can inherit properties and methods from another class using the extends keyword. See example below

// Classes can inherit from other classes using the extends keyword. The super keyword is used to call the constructor of the parent class (this is the equivalent of using call on parent objects in ES5). The example below demonstrates inheritance in classes.


// Parent class
class Human {
    #birthday;
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthday = new Date(dob);
    }

    greeting() {
        return `Hello, I'm ${this.firstName} ${this.lastName}`
    }

    getAge() {
        const diff = Date.now() - this.#birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// Sub class
class Client extends Human {
    constructor(firstName, lastName, dob, phone) {
        super(firstName, lastName, dob);
        this.phone = phone;
    }

    // Overriding the greeting method - Polymorphism
    greeting() {
        return `Hello, I'm ${this.firstName} ${this.lastName} and I'm a client`
    }
}

const julian = new Client('Julian', 'Rhy', '02-03-1987', '123-456-7890');

console.log(julian.greeting());

// `The super keyword is similar to the call keyword. It calls the constructor function of the parent class and sets the this keyword to the current object. It also allows you to access the parent class properties and methods. See example below`

// Unlike ES5, where you have to manually set the prototype to that of the parent object, ES6 classes handle this for you and also sets the constructor to the child object.



console.log(julian instanceof Client); // true
console.log(julian instanceof Human); // true

`child objects are instances of both the parent and child classes`;




`STATIC METHODS`;
// Static methods are called on the class itself rather than on an instance of the class. They are defined using the static keyword. Static methods can not use properties of the object as those properties are created with instantiation. The example below demonstrates the use of static methods in classes.

class Math {
    static add(x, y) {
        return x + y;
    }

    static subtract(x, y) {
        return x - y;
    }
}



`BIND() & DEFINING THIS`;

// The this keyword in JavaScript is dynamic and refers to the object it belongs to. It has different values depending on where it is used: In a method (within a class or constructor function), this refers to the owner object. Alone, this refers to the global object. In a function, this refers to the global object. In a function, in strict mode, this is undefined. In an event, this refers to the element that received the event.

// Because of this dynamism, JS gives us three methods to explicitly define what this refers to in a function: call(), apply(), and bind().

// The bind() method lets you set this manually and returns a new function that, when called, has its this keyword set to the provided value. It allows you to set the value of this to a specific object when a function is invoked. The bind() method returns a new function, allowing you to pass in arguments as well.

// The example below demonstrates the use of bind() to set the value of this in a function.

class App {
    constructor() {
        this.serverName = 'localhost';

        // document.querySelector('button').addEventListener('click', this.logServerName);
        document.querySelector('button').addEventListener('click', this.logServerName.bind(this));

    }

    logServerName() {
        console.log(this.serverName);
    }
}


const app = new App();

// When you instantiate a new class, the constructor fn runs automatically. By attaching a click event to fire off the logServerName method when a button is clicked, you'll notice that the value is undefined. 

// This is because 'this' is contextual and in an event listener, this pertains to the element triggering the event, i.e the button (which doesn't have a logServerName method). To fix this, you can use the bind() method to set the value of this to the instance of the App class.

// The constructor is called and the logServerName method is bound to the button element. When the button is clicked, the logServerName method is called and the value of this is set to the instance of the App class. This is because the bind() method is used to set the value of this to the instance of the App class.

app.logServerName(); // logs 'localhost'







`GETTERS AND SETTERS`

// Getters and setters are methods that are used to get and set the properties of an object. They are used to control access to properties of an object. They are also used to validate data before setting a property or to do something to the property before accessing it. 

// You can use this with constructor functions or classes or even object literals. See example below

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        // We had to add an underscore to the firstname property in the constructor function to avoid an infinite loop. If we didn't, the getter method would call itself over and over again because it has the same name as the property it is getting.
        return this.capitalizeFirst(this._firstName);
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    set fullName(value) {
        const parts = value.split(' ');
        this._firstName = parts[0];
        this._lastName = parts[1];
    }

    capitalizeFirst(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}

const personFour = new Person('John', 'Doe');

console.log(personFour.fullName); // returns John Doe

personFour.fullName = 'Mary Jane'; // sets the firstName to Mary and the lastName to Jane. It is able to differentiate between the getter and setter methods because of assignment of values

// As seen above, the getter and setter methods are called like properties, not like methods.  

// DO NOT GIVE YOUR GETTER/SETTER FUNCTION THE SAME NAME AS THE PROPERTY YOU ARE GETTING/SETTING. e.g get firstName() { return this.firstName; } This will cause an infinite loop because the getter function will call itself over and over again. 



`The Underscore convention`;
// For differenciating between private properties and methods, it is a convention to use an underscore before the name of the property. e.g _firstName. This is not a rule, it is just a convention. It was used by devs to signify private properties. However, prior to ES2022, JS didn't truly have private properties and you could still access the property from outside the object even with the underscore. 




`GETTERS AND SETTERS WITH CONSTRUCTOR FUNCTIONS USING DEFINEPROPERTY()`;

function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;

    Object.defineProperty(this, 'firstName', {
        get: function () {
            return this.capitalizeFirst(this._firstName);
        },
        set: function (value) {
            this._firstName = value;
        }
    })
    Object.defineProperty(this, 'lastName', {
        get: function () {
            return this.capitalizeFirst(this._lastName);
        },
        set: function (value) {
            this._lastName = value;
        }
    })
    Object.defineProperty(this, 'fullName', {
        get: function () {
            return this.firstName + ' ' + this.lastName;    // You get the capitalized names cos this calls the getters from the other two
        },
    })

}

Person.prototype.capitalizeFirst = function (value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

const personFive = new Person('John', 'Doe');

console.log(personFive.firstName); // returns John




`GETTERS AND SETTERS WITH OBJECT LITERALS`;
const PersonObj = {
    _firstName: 'John',
    _lastName: 'Doe',

    get firstName() {
        return this.capitalizeFirst(this._firstName);
    },

    set firstName(value) {
        this._firstName = value;
    },

    get lastName() {
        return this.capitalizeFirst(this._lastName);
    },

    set lastName(value) {
        this._lastName = value;
    },

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },

    capitalizeFirst: function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

};






`PRIVATE PROPERTIES AND METHODS - CONVENTIONS`;

// Javascript didn't have private properties and methods till ES2022 class fields were released. However, there were ways to signify privacy. One way was to use the underscore convention. This is not a rule, it is just a convention. and it was used by devs to signify private properties.  You could still access the _ property from outside the class. 

// Another pre ES 2022 convention was to use symbols. Symbols are unique identifiers created using the Symbol() function. 


class Wallet {
    constructor() {
        this._balance = 0;
        this._transactions = [];
    }

    deposit(amount) {
        this._balance += amount;
        this._processDeposit(amount);
    }

    withdraw(amount) {
        amount > this._balance ?
            console.log('Insufficient Funds') :
            this._processWithdrawal, this._balance -= amount;
    }

    _processDeposit(amount) {
        console.log(`Depositing ${amount}`);
        this._transactions.push({
            type: 'deposit',
            amount: amount
        });
    }

    _processWithdrawal(amount) {
        console.log(`Withdrawing ${amount}`);
        this._transactions.push({
            type: 'withdrawal',
            amount: amount
        });
    }

    get balance() {
        return this._balance;
    }

    get transactions() {
        return this._transactions;
    }

}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(100);
console.log(wallet._balance); // returns 200 because the balance property is not private. It can be accessed from outside the class. However you want to avoid using the 'private property' from outside the class. You should use the getter and setter methods instead. See example below

console.log(wallet.balance); // returns 200. This is the proper way to access the balance property from outside the class. You should use the getter and setter methods instead of accessing the property directly. See example below












`ES 2022 CLASS FIELDS / PRIVATE PROPERTIES AND METHODS`

// ES 2022 introduces class fields. Class fields are properties and methods that are private by default. They are not accessible from outside the class. They are declared using the # symbol. See example below

class Wallet {
    #balance = 0;
    #transactions = [];

    deposit(amount) {
        this.#balance += amount;
        this.#processDeposit(amount);
    }

    withdraw(amount) {
        amount > this.#balance ?
            console.log('Insufficient Funds') :
            this.#processWithdrawal, this.#balance -= amount;
    }

    #processDeposit(amount) {
        console.log(`Depositing ${amount}`);
        this.#transactions.push({
            type: 'deposit',
            amount: amount
        });
    }

    #processWithdrawal(amount) {
        console.log(`Withdrawing ${amount}`);
        this.#transactions.push({
            type: 'withdrawal',
            amount: amount
        });
    }

    get balance() {
        return this.#balance;
    }

    get transactions() {
        return this.#transactions;
    }
}

const wallet1 = new Wallet();

wallet1.#balance; // returns a syntax error because the balance property is private. It cannot be accessed from outside the class

wallet1.balance; // returns 0. This is the proper way to access the balance property from outside the class. You should use the getter and setter methods instead of accessing the property directly. See example below










`PROPERTY FLAGS AND DESCRIPTORS - CONFIGURABLE, ENUMERABLE, WRITABLE`;

// Javascript has 3 property flags. They are configurable, enumerable and writable. They are used to control the behavior of properties. They are set to true by default.



`[configurable]`;
// This flag determines if a property can be deleted or added to. It is set to true by default. See example below

const personSix = {
    name: 'John',
    age: 30
}

delete personSix.name; // deletes the name property from the object because configurable is set to true 
personSix.weight = 33; // adds a new property to the object because configurable is set to true

Object.defineProperty(personSix, 'name', {
    writable: true,
    enumerable: true,
    configurable: false
});

delete personSix.name; // nothing happens because the configurable flag is set to false
personSix.weight = 33; // nothing happens because the configurable flag is set to false
personSix.name = 'Mary'; // changes the value of the name property because the writable flag is set to true


`[enumerable]`;
// This flag determines if a property can be looped over. It is set to true by default. See example below

Object.defineProperty(personSix, 'name', {
    writable: true,
    enumerable: false,
    configurable: true
});

for (let [key, value] in personSix) {
    console.log(key);   // You get every property except the name property because the enumerable flag was set to false
};


`[writable]`;
// This flag determines if a property can be changed (edited). It is set to true by default. See example below

Object.defineProperty(personSix, 'name', {
    writable: false,
    enumerable: true,
    configurable: true
});

personSix.name = 'Mary'; // nothing happens because the writable flag is set to false





// One example where these flags are set to false by default is with Math.PI. It's value can't be changed

Math.PI = 4; // nothing happens cos it's flag values are false






`GETTING PROPERTY DESCRIPTORS`;

// You can get the property descriptors of an object using the Object.getOwnPropertyDescriptor() method or Object.getOwnPropertyDescriptors() method for multiple properties. See example below

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(descriptor); // logs an object with the value of the property, the status of configurable as false, enumerable as false and writable as false  



const ownObj = {
    name: 'John',
    age: 10,
    weight: 33
}

descriptor = Object.getOwnPropertyDescriptors(ownObj);

console.log(descriptor); // logs an object with the value of the property, the status of configurable as true, enumerable as true and writable as true for each property in the object



`SETTING PROPERTY DESCRIPTORS`;

// You can also set the property descriptors of an object using the Object.defineProperty() method or Object.defineProperties() method for multiple properties. See example below


Object.defineProperty(ownObj, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
});

descriptor = Object.getOwnPropertyDescriptor(ownObj, 'name');

console.log(descriptor);    // returns the descriptor object with the value of the property and all flags set to false 

ownObj.name = 'Mary';   // nothing happens because the writable flag is set to false

delete ownObj.name; // nothing happens because the configurable flag is set to false

for (let [key, value] in ownObj) {
    console.log(key);   // You get every property except the name property because the enumerable flag was set to false
}







`SEALING AND FREEZING OBJECTS PROPERTIES`;

// You can seal and freeze objects to prevent them from being changed

`SEALING OBJECTS`;
// When you seal an object, you can't add or delete properties from the object. You can only change the values of the already existing properties. It does this by setting the configurable flag to false

const personSeven = {
    name: 'John',
    age: 30
}

Object.seal(personSeven);

personSeven.name = 'Mary';  // You can change the value of the property

personSeven.weight = 33;    // You can't add a new property

delete personSeven.age; // You can't delete a property

console.log(personSeven);  // returns {name: "Mary", age: 30} because the name property was changed and the age property was not deleted


// A check on the property descriptors of the object shows that all the flags are set to true except the configurable flag which is set to false

descriptor = Object.getOwnPropertyDescriptors(personSeven);

console.log(descriptor); // returns an object with the value of the property, the status of configurable as false, enumerable as true and writable as true for each property in the object





`Object.isSealed(objectName)`;
// returns true if the object is sealed and false if it is not





`FREEZING OBJECTS`; 
//When you freeze an object, you can't add, delete or change the values of the properties of the object. It sets the configurable AND writable flags of the object to false

const personEight = {
    name: 'John',
    age: 30
}

Object.freeze(personEight);

personEight.name = 'Mary';  // You can't change the value of the property

personEight.weight = 33;    // You can't add a new property

delete personEight.age; // You can't delete a property

console.log(personEight);  // returns {name: "John", age: 30} because the name property was not changed and the age property was not deleted


// A check on the property descriptors of the object shows that all the flags are set to true except the configurable flag which is set to false and the writable flag which is set to false


descriptor = Object.getOwnPropertyDescriptors(personEight);

console.log(descriptor); // returns an object with the value of the property, the status of configurable as false, enumerable as true and writable as false for each property in the object



`Object.isFrozen(objectName)`;
// returns true if the object is frozen and false if it is not. If an object is frozen, it is also sealed because both writable and configurable flags are set to false

