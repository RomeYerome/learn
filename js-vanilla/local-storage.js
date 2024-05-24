`LOCAL STORAGE & SESSION STORAGE`

// Local storage is a way to store data in the browser that persists even after the browser is closed. It's useful for things like user preferences, themes, etc. It's stored as key:value pairs of arrays containing strings and can be converted to other data types using JSON.parse() and JSON.stringify() methods. Session storage is similar to local storage but it clears when the browser is closed. It's useful for things like shopping carts, etc

// They both have the same API, just change the word local to session and it's the same commands. The big difference is local storage persists while session storage clears at the end of a session eg. closing the browser


// DO NOT STORE SENSITIVE DATA IN LOCAL OR SESSION STORAGE AS IT IS NOT SECURE. IT CAN BE ACCESSED BY JAVASCRIPT AND MALICIOUS CODE. USE COOKIES OR SERVER SIDE SESSIONS INSTEAD


// Set local storage: Create/Update
sessionStorage.setItem('name', 'Beth');
localStorage.setItem('name', 'John');
localStorage.setItem('name', 'Mary');

// get from storage: Read
let myName = localStorage.getItem('name');
myName = sessionStorage.getItem('name');
console.log(myName);

// Remove from storage
localStorage.removeItem('name');
sessionStorage.removeItem('name');

// Clear entire local or session storage
localStorage.clear();
sessionStorage.clear();



`JSON.PARSE() & JSON.STRINGIFY()`;

// When pulling out data from local storage, you use JSON.parse(storedItem) to convert it from json, alternatively when storing data, you use JSON.stringify(itemForStorage) to convert to json

document.querySelector('form').addEventListener('submit', (e) => {
    // console.log(document.querySelector('#task').value);
    let task = document.querySelector('#task').value;

    let tasks;

    if (sessionStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(sessionStorage.getItem('tasks'));
    }

    tasks.push(task);

    sessionStorage.setItem('tasks', JSON.stringify(tasks));
    e.preventDefault();
})

