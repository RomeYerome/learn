`HASH TABLES`;

// Hash tables are used to store key-value pairs. They are like arrays but the keys are not ordered. They are fast for finding, adding and removing values. They are used in databases, caches, etc.

// HASH TABLE METHODS
// set() - adds a key-value pair to the hash table
// get() - returns the value of a key-value pair
// keys() - returns an array of keys in the hash table
// values() - returns an array of values in the hash table
// has() - returns true if a key exists in the hash table and false if it does not
// remove() - removes a key-value pair from the hash table
// clear() - clears the hash table
// size() - returns the number of key-value pairs in the hash table


class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        let index = this._hash(key);

        if (!this.keyMap[index])
            this.keyMap[index] = [];

        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);

        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key)
                    return this.keyMap[index][i][1];
            }
        }

        return undefined;
    }

    keys() {
        let keysArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++)
                    keysArr.push(this.keyMap[i][j][0]);
            }
        }

        return keysArr;
    }

    values() {
        let valuesArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++)
                    valuesArr.push(this.keyMap[i][j][1]);
            }
        }

        return valuesArr;
    }

    has(key) {
        let index = this._hash(key);

        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key)
                    return true;
            }
        }

        return false;
    }

    remove(key) {
        let index = this._hash(key);

        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key)
                    this.keyMap[index].splice(i, 1);
            }
        }
    }

    clear() {
        this.keyMap = new Array(this.keyMap.length);
    }

    size() {
        let count = 0;

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i])
                count++;
        }

        return count;
    }
}

const ht = new HashTable();

ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');

console.log(ht);    // returns HashTable {keyMap: Array(53)}
console.log(ht.get('yellow'));  // returns #FFFF00
console.log(ht.keys()); // returns ["maroon", "yellow", "olive", "salmon", "lightcoral", "mediumvioletred", "plum"]
console.log(ht.values());   // returns ["#800000", "#FFFF00", "#808000", "#FA8072", "#F08080", "#C71585", "#DDA0DD"]
console.log(ht.has('yellow'));  // returns true
console.log(ht.has('cyan'));    // returns false
ht.remove('yellow');
console.log(ht);    // returns HashTable {keyMap: Array(53)}
console.log(ht.size()); // returns 6
ht.clear();
console.log(ht);    // returns HashTable {keyMap: Array(53)}


