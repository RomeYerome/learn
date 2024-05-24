`ASYNCHRONOUS JAVASCRIPT`;

// Asynchronous means happening at the same time i.e one block of code running without interfering with another block, unlike synchronous code that is linear

// At its core, JS is a synchronous language, meaning it does one thing at a time. 

// It is single threaded meaning it has one call stack and one memory heap. The CALL STACK is a data structure that keeps track of which function is running and what functions are called from within that function and so on. The MEMORY HEAP is where it stores variables and function calls. 

// JS works with the browser API's like the DOM API, AJAX, setTimeout etc... to perform asynchronous tasks. The browser API's are written in low level languages like C++ and are not part of the JS engine, but provide JS with extra functionality.

// JS passes callback functions or promises to these APIs. They run in the background and when they are done, they are pushed to the respective callback queues which are FIFO (first in first out) and monitored by the event loop with promises taking priority over callback functions. 

// The callback queue is a data structure that holds all the callback functions that are ready to be executed.

// The event loop is a process that checks the call stack and callback queue and pushes the callback functions to the call stack when the call stack is empty. The event loop makes asynchronous code possible in JS. 


// A few ways to work with Async code are with

`
- Callbacks
- Promises (ES6)
- Async/Await (ES6)
`;




`SET TIMEOUT & CLEAR TIMEOUT`;
// setTimeout is a browser API that takes a callback function and a time in milliseconds as arguments. It runs the callback function after the specified time has elapsed. It is one of the API's used by JS to run asynchronous tasks. It's syntax is as follows: 

setTimeout(callbackFunction, timeInMilliseconds);

// setTimeout returns an identifying number that can be used to stop the setTimeout function from running. 

const setTimeoutVariable = setTimeout(callbackFunction, timeInMilliseconds);


// clearTimeout is used to stop the setTimeout function from running. It's syntax is as follows:

clearTimeout(setTimeoutFunction || setTimeoutVariable);





`SET INTERVAL & CLEAR INTERVAL`
//  setInterval is a browser API that takes a callback function and a time in milliseconds as arguments. It runs the callback function after the specified time has elapsed and keeps running it at the specified interval. It is one of the API's used by JS to run asynchronous tasks. It's syntax is as follows:

setInterval(callbackFunction, timeInMilliseconds, [args]);

// the optional arguments can be passed into the callback function as shown above

// setInterval returns an identifying number that can be used to stop the setInterval function from running.

const setIntervalVariable = setInterval(callbackFunction, timeInMilliseconds);

// clearInterval is used to stop the setInterval function from running. It's syntax is as follows:

clearInterval(setIntervalFunction || setIntervalVariable);







`AJAX`;
//definition = `Asynchronous Javascript And XML

// It's a set of web technoloogies to send and receive data from a client and server asynchronously. It happens behind the scenes so the webpage doesn't need reloading and you can get data for a portion of the page or all of it without reloading... think twitter


// XML is rarely used in AJAX anymore, JSON has pretty much replaced it. AJAX can also work with just plain text






`HTTP REQUESTS`;

// definition = `HTTP stands for HYPERTEXT TRANSFER PROTOCOL. 

// It's a protocol that allows us to send and receive data over the internet. It's the foundation of data transfer on the world wide web. It's a request/response protocol. It is a client server protocol meaning the request is sent by the client and the response is sent by the server. The response can be anything from HTML, CSS, JS, JSON, XML, etc but typically these days you'll be getting JSON data

// HTTP is stateless meaning each request is independent of the previous one. It doesn't remember previous requests. It's a connectionless protocol meaning the client and server don't need to maintain an open connection. It's a media independent protocol meaning it can be used for more than just transferring hypertext. It's a layered protocol meaning it's built on top of other protocols. It's also a cacheable protocol meaning it can store data to improve performance

// AJAX/XMLHttpRequest object was the original way of making HTTPRequests, but these days these requests are more commonly made with the Fetch API, Axios, Superagent, Node HTTP, etc



`HTTP REQUEST METHODS`;

// GET: Retrieve data from a specified resource

// POST: Submit data to be processedd to a specified resource

// PUT: Update a specified resource

// DELETE: Delete a specified resource

// PATCH: Update partial resources

// HEAD: Same as GET but does not return a body



`HTTP RESPONSE STATUSES`;

// 100 Range: Informational responses || continue 

// 200 Range: Success codes e.g 200 OK, 201 Created, 202 Accepted, 204 No Content, 226 Partial Content

// 300 Range: Codes for redirects e.g 301 Moved Permanently, 302 Found, 304 Not Modified, 307 Temporary Redirect 

// 400 Range: Client error codes e.g 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 410 Gone

// 500 Range: Server error codes e.g 500 Internal Server Error, 501 Not Implemented, 503 Service Unavailable, 550 Permission Denied`




`DEV TOOLS NETWORK TAB`;

// The network tab on your browser console is a great tool for looking up all sorts of information regarding your HTTP Requests and Statuses

// You can see the request and response headers, the request and response payloads, the request and response cookies, the request and response timing, the request and response bodies, etc





`XmlHttpRequest (XHR) Object`;

// definition = `This is the core technology of AJAX, it is built into the browsers JS environment so all browsers have this api. It's methods transfer data between client and server. It can be used with other protocols besides HTTP and can work with JSON XML and plaintext 


// The XHR object is the old way of requesting data. You now have newer API's to make HTTP requests

-` Fetch API: new & is part of the browser
- Axios
- Superagent
- Node HTTP
`;


`USING XHR OBJECT TO MAKE HTTP REQUESTS`
document.getElementById('button').addEventListener('click', loadData);


function loadData() {
    // STEP 1: Create XHR object
    const xhr = new XMLHttpRequest();

    // STEP 2: Call the Open Method
    xhr.open('GET', 'data.txt', true);

    // Optional - Used for spinners/loaders
    xhr.onprogress = function () {

        console.log(xhr.readyState);
        // this shoud give you a ready state of 3: processing requests
    }

    // STEP 3: Call the onload method
    xhr.onload = function () {
        //this method goes straight to readyState 4 before acting on it's content
        if (this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    // the onerror method runs only when there is one
    xhr.onerror = function () {
        console.log('Request error...')
    }


    // the old way of doing things was
    // xhr.onreadystatechange = function() {
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText); // this method will go through all 5 ready states so you had to confirm it had gotten to 4 before doing anything
    //     }
    // }

    // STEP 4: Call the send method
    xhr.send();
}


`readyState Values`
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"


//EXAMPLE 2
document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
    // instantiate xhr
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            const customer = JSON.parse(this.responseText);

            const output = `<ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
            </ul>`

            document.getElementById('customer').innerHTML = output;

        }

    }

    xhr.send();
}




document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);

            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(customer => {

                output += `<ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
            </ul>`;
            });

            document.getElementById('customers').innerHTML = output;

        }
    }

    xhr.send();
}






// XMLHTTPREQUESTS FOR EXTERNAL API'S

// UI handles

document.querySelector('.get-jokes').addEventListener('click', getJokes);


function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);


    xhr.onload = function () {
        if (this.status === 200) {

            const response = JSON.parse(this.responseText);

            const jokes = response.value;

            let output = '';

            if (response.type === 'success') {
                jokes.forEach(joke => {
                    console.log(joke);
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += '<li>Something went wrong</li>';
            }


            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();


    e.preventDefault();
}








`REST API'S AND HTTP REQUESTS`;

//  definition = `API means APPLICATION PROGRAMMING INTERFACE. In the case of web api's it can be described as a contract between one piece of software to another.

// It is a structured requests and response


// REST means REPRESENTATIONAL STATE TRANSFER

// it is an architectural style for designing networked applications

// It relies on a stateless, client-server protocol, almost always HTTP

// Rest was made to treat sever-side objects as resources that can be created read updated and deleted eg a blog post or user usually stored in a database

// Since rest operates basically with HTTP requests and some standard like JSON, it can work with just about any programming language

// All API's have their own rules and structure. An API is the messenger and REST lets us use HTTP requests to format that message

// A REST API takes multiple types of HTTP requests
`
GET: Retrieve data from a specified resource

POST: Submit data to be processedd to a specified resource

PUT: Update a specified resource

Delete: Delete a specified resource

HEAD: Same as GET but does not return a body

OPTIONS: Returns the supported HTTP methods

PATCH: Update partial resources
`;


// ENDPOINTS: They are the URLs you access to do specific things

// eg: GET https://someurl.com/api/users`;



















`CALLBACK FUNCTIONS`;

// definition = `A callback is a function that's passed into another function as an argument and called within that function. Callbacks can be synchronous (stop everything else till it finishes running e.g in the case of forEach, Map etc) or asynchronous (run in the background while other things are running, e.g setTimeout)`;

posts = [
    { title: 'Post One', body: "This is post one" },
    { title: 'Post Two', body: 'This is post two' }
];


function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    let output = '';
    setTimeout(() => {
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);











`PROMISES`;

// definition = `a promise is an object representing a task that will be completed in the future. It's a placeholder for data that will be available at some point in the future. 

// It is a better altenative to callbacks especially when you're chaining multiple asynchronous operations. It's cleaner and easier to maintain.



`Creating A Promise`;

// You'll mostly deal with promises when working with API's, but as you get advanced, you'll be writing your own promises. The syntax for that is as follows:

const promiseVariable = new Promise((resolve, reject) => {
    // resolve is a function that is called when returning a successful response
    // reject is a function that is called when returning an error

    // do something async here: we'll use a setTimeout to simulate an API call

    setTimeout(() => {
        resolve('Success'); // this is what is returned when the promise is successful
        reject('Error'); // this is what is returned when the promise is unsuccessful
    }, 2000);
});



`SYNTAX`
// to use the promise, you use the .then() method to handle the resolve, the .catch() method to handle the reject and optionally the finally method that will run regardless of the outcome

promiseVariable
    .then((response) => { console.log(response) })
    .catch((err) => { console.log(err) })
    .finally(() => { });



`PROMISE CHAINING`
// you can also chain multiple promises together (.thens) by returning something from each .then to catch in the next one, and catch the error from any of the promises in one catch

promiseVariable.then((response) => {
    console.log(response);
    return 'Success 2';
}).then((response) => {
    console.log(response + ' Success 3');
}).catch((err) => {
    console.log(err);
});


`PROMISE.ALL()`
// you can also use the Promise.all() method to run multiple promises at the same time and catch the response from all of them at once in a array

// the logic is that you create an array of promises and pass it into the Promise.all() method and it resolves them all at once into an array of results

const promise1 = Promise.resolve('Hello World');

const promise2 = 10;

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});






const posts = [
    { title: 'Post One', body: "This is post one" },
    { title: 'Post Two', body: 'This is post two' }
];


function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            posts.push(post);

            const error = true;
            if (!error) {
                resolve();
            } else {
                reject(`Error: Something Went wrong`);
            }
        }, 500);
    });

}

function getPosts() {
    let output = '';
    setTimeout(() => {
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts).catch((err) => {
    console.log(err);
});














`FETCH API`
// The Fetch API is a newer and better way to make HTTP requests. It's a cleaner and easier alternative to XHR. It uses promises by default and is part of the browser (the window object) so no need for third party libraries. It's not supported by IE though so you'll need a polyfill to use it with IE

// It's syntax is as follows:

fetch('url')
    .then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });

// It's syntax for PUT and POST requests is as follows:

fetch('url', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({ title: 'Post Three', body: 'This is post three' })
})
    .then((res) => { return res.json() })
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) });




// The fetch method returns a promise so you can chain .then and .catch methods to it. The first .then method returns a response object that you can convert to .json() or .text() or blob or arraybuffer or formData using the respective methods. The second .then method returns the data from the first .then method. The catch method catches any errors that occur in the fetch method

// The fetch method takes in a url as it's first argument and an optional object as it's second argument. When you pass in just the url, it defaults to a GET request. If you want to make a POST OR PUT OR DELETE request, you have to pass in the second argument. The second argument is an object that contains the options for the request. The most common ones are the method, headers and body options




`FETCH METHOD OPTIONS`;
// The second argument of the fetch method can contain the following options

`METHOD: `; // GET || POST || PUT || DELETE || PATCH etc

`HEADERS: `; // An object containing the headers to be sent with the request. The most common one is the content-type header which is used to tell the server what type of data is being sent. It's value is usually application/json. Another common one is the authorization header which is used to send a token to the server for authentication

`BODY: `; // The data you want to send to the server. It has to be converted to JSON using the JSON.stringify() method




// EXAMPLE: GET LOCAL TEXT FILE DATA
document.getElementById('button1').addEventListener('click', getText);

function getText() {
    fetch('data.txt')
        .then((res) => {
            return (res.text());
        })
        .then((data) => {
            document.getElementById('output').innerHTML = `<h3>${data}</h3>`;
        })
        .catch((err) => {
            console.log(err);
        })
}




// EXAMPLE: Get Local Json Data
document.getElementById('button2').addEventListener('click', getJson);

function getJson() {
    fetch('posts.json')
        .then((res) => {
            return (res.json());
        })
        .then((data) => {
            let output = '';

            data.forEach(post => {
                output += `<h3>${post.title}</h3>`;
            });

            document.getElementById('output').innerHTML =
                output;
        })
        .catch((err) => {
            console.log(err);
        })
}



// EXAMPLE:  Get External Json Data with fetch
document.getElementById('button3').addEventListener('click', getExternal);


function getExternal() {
    fetch('https://api.github.com/users').then(res => {
        console.log(res);
        return res.json();
    }).then((data) => {
        // console.log(data);
        let output = '';

        data.forEach((user) => {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
}




`MANUALLY THROW ERROR WITH FETCH API`
// You can manually throw some errors with the fetch API. The fetch API only throws an error if the network request fails or if something prevents the request from completing. It does not throw an error if the request is successful but the response is not what you expected. To handle that, you have to manually throw an error. The syntax is as follows:

// the syntax is as follows:

fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(res => {
        if (!res.ok) {
            throw new Error(res.error);
        }
        return res;
    })
    .catch(err => console.log(err));


// ALTERNATIVELY
function handleErrors(res) {
    if (!res.ok) throw new Error(res.error);
    return res;
}

fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(handleErrors)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));







`CRUD WITH REST API'S`;
// REST is a transfer protocol that uses HTTP requests to get data from a server. It's a way to create, read, update and delete data from a server.

// The HTTP requests used are:

// GET: Retrieve data from a specified resource i.e READ

`CREATE`
// POST: Submit data to be processedd to a specified resource. 

// Example of post with fetch api

function createPost({ title, body }) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ title, body })
    }).then(res => res.json())
        .then(data => console.log(data));
}

createPost({ title: 'Post Three', body: 'This is post three' });


// Post statements return the post sent as well as the id of the post created



`UPDATE`
// PUT OR PATCH: Update a specified resource i.e UPDATE
function updatePost() {

}

// DELETE: Delete a specified resource i.e DELETE





















`ARROW FUNCTIONS`;
// Normal functions
sayHello = function () {
    console.log('Hello');
}

// Standard arrow function
sayHello = () => {
    console.log('Hello');
}

// One line functions don't need braces
sayHello = () => console.log('Hello');

// One line arrow functions don't need the return keyword
sayHello = () => 'Hello';


// One line arrow functions for object literals have to be wrapped in brackets
sayHello = () => ({ msg: 'Hello' });


// Single param arrow functions don't need brackets
sayHello = name => `Hello ${name}`;

// Multiple params need brackets
sayHello = (firstName, lastName) => `${firstName} ${lastName}`;


console.log(sayHello('John', 'Davis'));


// Arrow fns as callbacks

const users = ['Nathan', 'Ray', 'Charles'];

const nameLengths = users.map(name => name.length);

console.log(nameLengths);









`ASYNC, AWAIT`;

// definition = `Async and Await are ES7 (2016) keywords for implementing promises. The Async keyword turns ordinary functions into asynchronous functions causing them to return a promise

// Await on the other hand instructs the program to wait for that line or function to be resolved before using it. Await can only be used in an async function`


async function myFunc() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 1000);
    })

    const res = await promise;
    return res;
}


myFunc()
    .then(res => console.log(res));


async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    return data;
}

getUsers()
    .then(res => console.log(res));




`ASYNC/AWAIT WITH ARROW FUNCTIONS`

// the syntax with arrow functions is a little different. You write the async just before the parentheses.

const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    return data;
}





// HANDLING ERRORS WITH TRY/CATCH IN ASYNC/AWAIT & JS IN GENERAL


definition = `The try catch block prevents a program from stopping due to errors. the try block throws any errors into the catch block, allowing you handle it properly while the program keeps running`

// The syntax is as follows:

try {
    // code to try
    // throw new Error('Custom error');
} catch (err) {
    // code to run if there is an error
}





try {
    myFunct();   // ReferenceError: an undefined function will throw an err to the catch block
    null.myFunct(); // TypeError

    throw new Error('Custom error');
} catch (err) {
    console.log(err); // logs the full error
    console.log(err.name); // logs the name of the error
    console.log(err.message); // logs the description of the error
    console.log(err instanceof ReferenceError); // logs true/false if it is a referenceError
    console.log(err instanceof TypeError); // logs true/false if it is a TypeError
} finally {
    // the finally block runs regardless of previous results or errors
}














