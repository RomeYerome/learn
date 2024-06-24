`ROUTING`;
// A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), a URL path, and a function that is called to handle that URL path. The function is called a route handler.

// Here is an example of a simple route in Express:

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// In this example, we are defining a route that listens for GET requests to the root URL ('/'). When a GET request is made to the root URL, the route handler function is called, and it sends the response 'Hello World!' back to the client.



`Route Methods`;
// Route methods are HTTP methods that are used to define the behavior of a route. The most common route methods are:

`GET`       // This method is used to retrieve data from the server.
`POST`      // This method is used to add data to the server.
`PUT`       // This method is used to update data on the server.
`DELETE`    // This method is used to delete data from the server.
`PATCH`     // This method is used to partially update data on the server.

// You can define a route method by calling the corresponding method on the app object. For example, to define a route that listens for GET requests, you would call app.get(). Here is an example of a route that listens for POST requests:

app.post('/api/data', (req, res) => {
    // Add new data to the server
});



`Route Paths`;
// Route paths are strings that define the URL path at which a route is matched. They can be simple strings or string patterns. Here are some examples of route paths:

`/`;             // This route path will match requests to the root URL.
`/api/data`;     // This route path will match requests to the /api/data URL.
`/users/:id`;    // This route path will match requests to the /users/123, /users/456, and so on URLs.
`/api/ab?cd`;    // The question mark (?) makes the preceding character optional, so this route path will match requests to /api/abcd and /api/acd URLs.
`/api/ab+cd`;    // The plus sign (+) makes the preceding character required, so this route path will match requests to /api/abcd and /api/abbcd URLs, but not /api/acd URLs.
`/api/ab*cd`;    // The asterisk (*) matches zero or more of any characters, so this route path will match requests to /api/abcd, /api/abRANDOMcd, /api/ab12345cd, and so on URLs.
`/api/(ab|cd)ef`;    // The pipe (|) matches either of the characters inside the parentheses, so this route path will match requests to /api/abef and /api/cdef URLs.
`/api/ab(cd)?ef`;    // The question mark (?) makes the preceding group optional, so this route path will match requests to /api/abef and /api/abcdef URLs.
`/api/ab[0-9]cd`;    // The square brackets ([]) match any one of the characters inside the brackets, so this route path will match requests to /api/ab0cd, /api/ab1cd, and so on URLs.
`/api/ab[^0-9]cd`;    // The caret (^) inside the square brackets negates the characters inside the brackets, so this route path will match requests to /api/abacd, /api/abbcd, and so on URLs, but not /api/ab0cd, /api/ab1cd, and so on URLs.

// You can also use regular expressions to define route paths. Here's an example of a route path that uses a regular expression:

app.get(/a/, (req, res) => {
    res.send('This route path will match requests to /app, /apple, /application, and so on');
});

// Other common regular expressions include:
// ? - This matches zero or one of the preceding character.
// * - This matches zero or more of any character(s).
// + - This matches one or more of the preceding character.
// (x|y) - This matches either x or y.
// () - This creates a capturing group.
// The dot (.) and the hyphen (-) are treated literally in string-based paths.
// \ This escapes the following character.
// [] This matches any one of the characters inside the square brackets.




`Route Parameters`;
// Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

// Route parameters are defined by placing a colon (:) before the parameter name in the URL path.

// You can access the values of route parameters in the route handler function using the req.params object. The req.params object is an object containing properties mapped to the named route parameters.

app.get('/users/:id', (req, res) => {

    const id = req.params.id;
    res.send(`User ID: ${id}`);
});

// In this example, we are defining a route that listens for GET requests to '/users/:id'. The ':id' part of the URL path is a route parameter that captures the value of the 'id' parameter in the URL. When a GET request is made to '/users/123', the route handler function is called, and it sends the response 'User ID: 123' back to the client.


`Since the hyphen(-) and the dot(.) are interpreted literally, they can be used along with route parameters for useful purposes.
`

app.get('/flights/:from-:to', (req, res) => {
    const from = req.params.from;
    const to = req.params.to;

    res.send(`Flight from ${from} to ${to}`);
});

// Request URL: http://localhost:3000/flights/LAX-SFO
// req.params: { "from": "LAX", "to": "SFO" }






`Query Parameters`;
// Query parameters are key-value pairs that are appended to the end of a URL. They are used to pass data to the server as part of a URL. Query parameters start after a question mark (?) and are separated by an ampersand (&). Here is an example of a URL with query parameters:

`http://example.com/api/data?name=John&age=25`;

// In this example, the query parameters are 'name=John' and 'age=25'. You can access query parameters in the route handler function using the req.query object. The req.query object is an object containing properties mapped to the query parameters.

app.get('/api/data', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`Name: ${name}, Age: ${age}`);
});

// When a GET request is made to '/api/data?name=John&age=25', the route handler function is called, and it sends the response 'Name: John, Age: 25' back to the client.




`Route Handlers`;
// Route handlers are functions that are called when a request matches a route. They take two arguments: req (the request object) and res (the response object). Route handlers are responsible for sending a response back to the client.

// Here is an example of a route handler function:

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

// In this example, we are defining a route that listens for GET requests to the root URL ('/'). When a GET request is made to the root URL, the route handler function is called, and it sends the response 'Hello World!' back to the client.




`Routes & The Express Router `;
// Routes are sections of Express code that define how the server should respond to requests. They consist of a route path, an HTTP method, and a route handler function. Routes are defined using the app object, which is an instance of Express.

// It is common for an Express application to have multiple resources like users, posts etc with each of them having multiple routes and become messy. To avoid this, it it standard practice to create a routes folder and separate the routes into different files. This makes the code more organized and easier to maintain. The routes can then be imported into the main app.js file using

// Here is an example of how to create a route in a separate file:

// routes/data.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Data Route');
});

module.exports = router;

// app.js
const express = require('express');
const dataRoute = require('./routes/data');

const app = express();

app.use('/data', dataRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});