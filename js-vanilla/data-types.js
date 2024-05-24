`DATA TYPES`;
// There are 2 main data types, PRIMITIVE and REFERENCE data types. The difference between them is how they are stored in memory. The primitive data types are stored directly in the location in memory the variable accesses. They are stored on the STACK. Reference data types store a pointer in memory that references the actual location of the data. i.e they reference another location in memory. Reference data types are stored in the HEAP.



`PRIMITIVE DATE TYPES`;
// PRIMITIVE data types are stored directly in the location in memory the variable accesses. They are stored on the STACK`;

// PRIMITIVE data types are: String, Boolean, Symbol, Number, NULL, Undefined





`REFERENCE DATA TYPES`;
// REFERENCE data types store a pointer in memory that references the actual location of the data. i.e they reference another location in memory. Reference data types are stored in the HEAP

// REFERENCE data types are: Arrays, Object Literals, Functions, Dates, Anything Else





`DYNAMICALLY TYPED LANGUAGE`;
// javascript is a dynamically typed language, i.e the data types are associated with the values not the variables themselves. So we don't have to specify types when creating variable and the same variable can hold a number, then hold a string without throwing any errors

// This is unlike statically typed languages like C++ that the data type must be declared on the variable and it can only hold that type of data

// There are technologies like Typescript which is a superset of JS that can turn JS to a statically typed language




// PRIMITIVE DATA EXAMPLES

let name3 = 'John Doe';
console.log(typeof name3); // returns String

let num = 5;
console.log(typeof num); // returns Number

const hasKids = false;
console.log(typeof hasKids); // returns Boolean

const car = null;
console.log(typeof car); // should return Null but returns Object (it's a bug)

let test;
console.log(typeof test); // returns Undefined

let sym = Symbol();
console.log(typeof sym); // returns Symbol





// REFERENCE DATA EXAMPLES --- all return Objects as typeof