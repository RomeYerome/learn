`OBJECT LITERALS`;
// Objects are special containers that holds multiple defining properties and methods (functions). for example you can have a person object with properties like name, age, location etc and methods like greeting

// Object literals are used in creating a single object as shown below

`WARNING! you can't use arrow functions to create methods in objects, you'll get errors`;

const person4 = {
    firstName: 'Rome',
    lastName: 'Yerome',
    age: 35,
    email: 'rome.yerome@gmail.com',
    hobbies: ['music', 'movies', 'games'],
    address: {
        city: 'Lagos',
        country: 'Nigeria'
    },
    getBirthYear: function () { return 2022 - this.age }
}



// You can also create an object using the object constructor as shown

const person5 = new Object();

person5.firstName = 'John';




`Accessing Object Properties & Methods`;
// there are 2 ways to access an objects properties and methods. First is the dot notation and the other is using square brackets []

person.firstName; // using the dot notation

person['lastName']; // using square brackets like arrays

person.hobbies[1]; // accesses the 1st item of the hobbies array in the object

person.address.city; // accesses the city property in the address object of the person object

person.getBirthYear(); // accesses the getBirthYear method






`Mutating objects`;
// You can set/change the values of object properties just like you would with arrays or variables

person.firstName = 'Mary';

person['lastName'] = 'Oyeniyi';

person.hobbies[1] = 'fucking';

person.address.city = 'Abuja';

person.getBirthYear = function () {
    console.log("I'm not doin anything");
};


`THIS KEYWORD`;
// To access or edit a property of an object from within a method in the object, you have to use the 'this' keyword

let child = {
    firstName: 'John',
    lastName: 'Mayer',
    fullName: function () { return this.firstName + ' ' + this.lastName }
};


`NESTING`;
// Like arrays, you can nest objects too

person = {
    firstName: 'John',
    address: {
        city: 'Portharcourt',
        state: 'Rivers'
    }
};





`SPREAD OPERATOR WITH OBJECTS ...`
// Like we saw with arrays, you can unwrap an object to get to it's component parts, using the spread operator. using the two objects below, we'll demonstrate how this works

obj1 = { a: 1, b: 2 };
obj2 = { c: 3, d: 4 };

// If you combine without spreading, you get an obj with 2 nested objects

obj3 = { obj1, obj2 }; // this results in an object like this {obj1: {a:1, b:2}, obj2: {c:3, d:4}}

// using the spread operator, you unwrap the objects and get their components only

obj4 = { ...obj1, ...obj2 }; // this results in the following object {a:1, b:2, c:3, d:4}





`STATIC OBJECT METHODS`;
//  Just like arrays, objects have their own static methods too

`Object.keys([object])`;
// this static method takes an object variable as an argument and returns an array of the keys in that object variable

Object.keys(person); // would return an array such as ['name', 'number', 'address'] if those are the keys in the person object


// you can't find the length of an object but by using Object.keys you get an array of the keys and you can get the length of that array
Object.keys(person).length;



`Object.values(object)`;
// the opposite of Object.keys, it returns an array of the values
Object.values(person);


`Object.entries(object)`;
// a combination of both, returns an array containing arrays of key:value pairs

Object.entries(person); // returns an array like this [ ['name', 'John'], ['age', 34]]









`object.hasOwnProperty('property')`;
// not a static method but just like the includes method for arrays, it returns a boolean telling you if that property is in the object

person.hasOwnProperty('hobbies'); // returns true if it exists and false if it doesn't












`DESTRUCTURING AND NAMING`;

// If you are creating an object literal and assigning the values from variables that are the same name as the key, you don't need to write both

firstName = 'John';
lastName = 'Buck';

// You can create an object as follows without writing key: value, because both the key and the value are the same name
person = {
    firstName,
    lastName,
    address1: {
        city1: 'Benin',
        state: 'Edo'
    }
}


// DESTRUCTURING on the other hand is an easy way to pull out values from an object. If you know the key names in an object, you can pull them into same name variables like this

// {keyname1, keyname2, keyname3} = objectName as long as keyname1, keyname2 and keyname3 are actual keys in the object
let { title1, status } = person;

let { title, address1 } = person; //assigns the address1 which is a nested object to the variable address1 
let { address1: { city1 } } = person; //assigns the city1 property within the address1 nested object to the variable city1 




`DESTRUCTURING & RENAMING ON THE FLY`
// You can rename variables on the fly while destructuring objects as shown below
let { title: title2 } = person;

// the value of title from the person object, gets stored in the variable title2














`JSON - JAVASCRIPT OBJECT NOTATION`
// It is a lightweight data interchange format, essentially a way of storing and transfering data in a lightweight human readable format. The syntax is very similar to JS literal object syntax, main difference is the keys and values are in double quotes unlike literal objects where only the values are in quotes (if they are string) 

// a json file will have the .json extension and will typically hold an array of JSON as shown below

[
    {
        "id": 1,
        "title": "Post One",
        "body": "This is the body"
    },
    {
        "id": 2,
        "title": "Post Two",
        "body": "This is the body"
    }
]


    `CONVERTING BETWEEN JSON & OBJECT LITERALS WITH JSON.stringify and JSON.parse`
// You can convert literal objects to json using the JSON.stringify(object) method and vice-versa using the JSON.parse(JSON) methods

const jsonString = JSON.stringify(objectName) // converts the given object to a JSON string

const literalObject = JSON.parse(jsonString) // converts the given JSON into an object literal