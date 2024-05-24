`MAPS`;

// Maps are a collection of key-value pairs. They are similar to objects but the keys can be any data type even an array, function or object and must be unique. They are iterable. See example below



`Creating a map`;
const myMap = new Map();



`Adding to a map`;
myMap.set('name', 'John');
myMap.set(100, 'This is a number');
myMap.set(true, 'This is a boolean');



`Getting a value from a map`;
console.log(myMap.get('name')); // returns John



`Getting the size of a map`;
console.log(myMap.size); // returns 3



`Checking if a key is in a map`;
console.log(myMap.has('name')); // returns true
console.log(myMap.has('age')); // returns false



`Deleting from a map`;
myMap.delete('name');
console.log(myMap); // returns {100 => "This is a number", true => "This is a boolean"}



`Clearing a map`
myMap.clear();



`Iterating through a map`;
for (let [key, value] of myMap) {
    console.log(`${key} = ${value}`); // returns 100 = This is a number true = This is a boolean
}



`Iterating through keys only`;
for (let key of myMap.keys()) {
    console.log(key); // returns 100 true
}



`Iterating through values only`;
for (let value of myMap.values()) {
    console.log(value); // returns This is a number This is a boolean
}



`Creating a map with an array of arrays`;
const peopleMap = new Map([
    [1, 'John'],
    [2, 'Mary'],
    [3, 'Karen'],
    [4, 'Bob']
]);


peopleMap.set('brad', { phone: '555-555-5555', email: 'brad@gmail.com' })



`Iterating through a map with forEach`;
peopleMap.forEach(function (value, key) {
    console.log(`${key} = ${value}`); // returns 1 = John 2 = Mary 3 = Karen 4 = Bob
});


`Getting an iterator of keys, values and key-value pairs`;
peopleMap.values(); // returns an iterator of values so you can use the .next() method on it
peopleMap.keys(); // returns an iterator of keys so you can use the .next() method on it
peopleMap.entries(); // returns an iterator of key-value pairs so you can use the .next() method on it

const peopleIterator = peopleMap.values();

console.log(peopleIterator.next()); // returns {value: "John", done: false}



`Converting a map to an array`
const mapToArray = Array.from(myMap);
console.log(mapToArray); // returns [["name", "John"], [100, "This is a number"], [true, "This is a boolean"]]



`Converting an array to a map`
const arrayToMap = new Map([['name', 'John'], [100, 'This is a number'], [true, 'This is a boolean']]);
console.log(arrayToMap); // returns {"name" => "John", 100 => "This is a number", true => "This is a boolean"}




`Cloning a map`
const originalMap = new Map([['name', 'John'], [100, 'This is a number'], [true, 'This is a boolean']]);

const cloneMap = new Map(originalMap);

console.log(cloneMap); // returns {"name" => "John", 100 => "This is a number", true => "This is a boolean"}

console.log(cloneMap === originalMap); // returns false because they are two different maps



`Merging maps`;
// when you merge two maps with the same key, the last map overwrites the first map. See example below

const firstMap = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
const secondMap = new Map([[1, 'uno'], [2, 'dos'], [3, 'tres']]);

const mergedMap = new Map([...firstMap, ...secondMap, [4, 'four']]); // You can also merge maps with arrays 

console.log(mergedMap); // returns {1 => "uno", 2 => "dos", 3 => "tres", 4 => "four"}



`PARSING AND STRINGIFYING MAPS TO JSON`;

// One of the limitations of JSON is that it doesn't support maps. To convert a map to JSON, you have to convert it to an array first. Both JSON.stringify() and JSON.parse() methods take a replacer function as a second argument. The replacer function takes two arguments: key and value. See example below

const mapToJSON = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);

const mapToJSONArray = JSON.stringify([...mapToJSON]);

console.log(mapToJSONArray); // returns ["one","two","three"]

const mapToJSON2 = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);

// This is only half the solution as you have to drop out the keys and only keep the values. To get the keys back, you have to use the replacer function. See example below

`Stringifying Map with replacer function`;
const mapToJSONArray2 = JSON.stringify([...mapToJSON2], replacer);

function replacer(key, value) {
    if (value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
        };
    } else {
        return value;
    }
}

console.log(mapToJSONArray2); // returns [{"dataType":"Map","value":[[1,"one"],[2,"two"],[3,"three"]]}]


`Parsing JSON to Map with reviver function`;

function reviver(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}

const arrayToMap2 = JSON.parse(mapToJSONArray2, reviver);   // returns Map(3) {1 => "one", 2 => "two", 3 => "three"}





















