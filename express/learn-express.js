`WHAT IS EXPRESS?`;
// Express is a minimal and flexible server-side Node.js web application framework that provides a robust set of features for web and mobile applications. it is used for routing, middleware, and rendering views and is a significant upgrade from the built-in Node.js http server.



`INSTALLING EXPRESS`;
// After installing Node.js, and initializing npm, you can install Express by running the following command in your terminal:

`npm install express`; // OR `npm i express`




`USING EXPRESS`;
// To use Express in your app, you need to require it on your js page and then create an instance of it. Here's how you can do that:

const express = require('express'); // require the express module
const port = process.env.PORT || 5000; // set the port number to listen on

const app = express();           // create an instance of the express module


app.listen(5000, () => {
    console.log('Server is listening on port 5000');    // start the server on the specified port
});





`API METHODS`;
// Express has methods for all the HTTP request types. Here are some of the most commonly used ones:

`get() method`;
// This method is used to request data from a specified resource.
app.get('/endpoint', (req, res) => {
    res.send('Hello World');
});

`post() method`;
// This method is used to send data to a server to create a resource.
app.post('/endpoint', (req, res) => {
    res.send('Got a POST request');
});

`put() method`;
// The PUT method is used to modify a resource. PUT updates the entire resource with data that is passed in the body payload. If there is no resource that matches the request, it will create a new resource
app.put('/endpoint', (req, res) => {
    res.send('Got a PUT request');
});

`delete() method`;
// The DELETE method is used to delete a resource from the server. If the resource is successfully deleted, the server should return a 204 status code with no body.
app.delete('/endpoint', (req, res) => {
    res.send('Got a DELETE request');
});

`patch() method`;
// The PATCH method is used to update a resource. It is used to apply partial modifications to a resource.
app.patch('/endpoint', (req, res) => {
    res.send('Got a PATCH request');
});

`all() method`;
// The all() method is used to load middleware functions at a path for all HTTP request methods. The following example demonstrates the use of app.all() method to load the middleware function at the path /secret.

app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
});



`REQUEST OBJECT`;
// The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. Here are some of the most commonly used properties of the request object:

`req.params`;
// This property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /api/ideas/:id, then the “id” property is available as req.params.id. This object defaults to {}.

`req.query`;
// This property is an object containing a property for each query string parameter in the route. For example, if you have the route /api/ideas?tag=Technology, then the “tag” property is available as req.query.tag. If there is no query string, it is an empty object: {}.

`req.body`;
// This property is an object containing data submitted to the server. This is typically used in POST requests to send data to the server. For example, if you have a form with a text field, the value of the text field will be available as req.body.text. This object defaults to {}.

`req.headers`;
// This property is an object containing the HTTP headers that were sent to the server. For example, if you have a request with the header “Content-Type: application/json”, you can access it as req.headers['content-type']. This object defaults to {}.






`RESPONSE OBJECT`;
// The response object represents the HTTP response that an Express app sends when it gets an HTTP request. Here are some of the most commonly used methods of the response object:

`res.send()`;
// This method sends a response to the client. The response could be a string, an object, an array, or a buffer. The method automatically sets the Content-Type response header based on the data type.

`res.json()`;
// This method sends a JSON response to the client. The response could be an object, an array, or a string.

`res.status()`;
// This method sets the HTTP status for the response. It is useful for setting the status before sending the response.

`res.redirect()`;
// This method redirects the request to a specified URL.

`res.render()`;
// This method renders a view and sends the rendered HTML string to the client.

`res.sendFile()`;
// This method sends a file as an octet stream. It is useful for sending static files like images, PDFs, and so on.

`res.download()`;
// This method prompts the user to download a file. It is useful for sending files to the client.






`ROUTE PATHS`;
// Route paths, in combination with a request method, define the endpoints at which requests can be made. They can be strings, string patterns, or regular expressions. Here are some examples of route paths:

`/`;    // This route path will match requests to the root URL.

`/api/ideas`;    // This route path will match requests to the /api/ideas URL.

`/api/ideas/:id`;    // This route path will match requests to the /api/ideas/1, /api/ideas/2, and so on URLs.

`/api/ideas/:id/comments`;    // This route path will match requests to the /api/ideas/1/comments, /api/ideas/2/comments, and so on URLs.

`/api/ideas/:id/comments/:commentId`;    // This route path will match requests to the /api/ideas/1/comments/1, /api/ideas/1/comments/2, and so on URLs.

// You can also use regular expressions to define route paths. Here's an example of a route path that uses a regular expression:

app.get(/a/, (req, res) => {
    res.send('This route path will match requests to /app, /apple, /application, and so on');
});

// Other common regular expressions include:
// ? - This matches zero or one of the preceding character.
// * - This matches zero or more of the preceding character.
// + - This matches one or more of the preceding character.
// (x|y) - This matches either x or y.
// () - This creates a capturing group.
// The dot (.) and the hyphen (-) are treated literally in string based paths.
// \ This escapes the following character.






`ROUTING PARAMETERS`;
// You can define routes with parameters. Parameters are named segments of the URL, marked with a colon. The values of the parameters are captured and can be used in the request object. Here's an example of a route with a parameter: 

app.get('/api/ideas/:id', (req, res) => {
    res.send({ message: `You requested the idea with id ${req.params.id}` });
});



`MIDDLEWARE`;
// Middleware functions are functions that have access to the request object (req), the response object (res), and the next() middleware function in the application’s request-response cycle. The next() function passes control to the next middleware function. Middleware functions can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.


// Here's an example of a simple middleware function that logs the request URL to the console:

app.use((req, res, next) => {
    console.log('Time:', Date.now());
    console.log('Request URL:', req.originalUrl);
    next(); // passes control to the next middleware function
})


// Middleware functions can also be mounted at a specific route using the app.use() method. Here's an example of a middleware function that logs the request URL to the console when the app receives a request to the /api/ideas URL:

app.use('/api/ideas', (req, res, next) => {
    console.log('Time:', Date.now());
    next();
});








`ROUTE HANDLERS`;
// Route handlers are middleware functions that are specific to a particular route. They are used to handle requests to a specific route. Here's an example of a route handler that sends a response to the client when the app receives a request to the /api/ideas URL:

app.get('/api/ideas', (req, res) => {
    res.send({ message: 'You requested the ideas' });
});

// You can also use multiple route handlers for a single route. Here's an example of a route handler that uses multiple middleware functions to handle requests to the /api/ideas URL:

app.get('/api/ideas',
    (req, res, next) => {
        console.log('Request URL:', req.originalUrl);
        next();
    },
    (req, res, next) => {
        console.log('Request Type:', req.method);
        next();
    },
    (req, res) => {
        res.send({ message: 'You requested the ideas' });
    }
);










`ROUTER OBJECT`;
// The express.Router class can be used to create modular, mountable route handlers. A Router instance is a complete middleware and routing system. Here's an example of how to use the Router class:

// On Main Server File
const express = require('express');
const appp = express();


const router = require('./modular/route');
appp.use('/endpoint/route', router);

appp.listen(5000, () => {
    console.log('Server is listening on port 5000');
});


// On modular Router file
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Random Ideas App');
});

module.exports = router;


// In this example, the router instance is used to handle requests to the /api URL. The router instance is mounted at the /api URL, so the route handler will be executed when the app receives a request to the /api URL. The router instance can also be used to define more complex routes and route handlers.








`SERVING STATIC FILES`;
// You can use the express.static() middleware function to serve static files such as images, CSS files, and JavaScript files. You have to require the path module and use the express.static() middleware function to serve static files.Here's an example of how to use the express.static() middleware function to serve static files:

const express = require('express');
const path = require('path');
const apppp = express();

apppp.use(express.static(path.join(__dirname, 'public')));

apppp.listen(5000, () => {
    console.log('Server is listening on port 5000');
});

// In this example, the express.static() middleware function is used to serve static files from the public directory. The public directory is the root directory for serving static files. You can also use the path module to specify the absolute path of the directory that contains the static files. Here's an example of how to use the path module to specify the absolute path of the directory that contains the static files:

apppp.use(express.static(path.join(__dirname, 'public')));

// In this example, the path.join() method is used to join the __dirname and public directory paths. The __dirname variable is a global object that represents the directory name of the current module. The path.join() method is used to join the __dirname and public directory paths to create the absolute path of the public directory. The absolute path of the public directory is then passed to the express.static() middleware function to serve static files.


// Once this is done, the server will automatically serve up pages from your static folder. For example, if you have an index.html file in your public folder, you can access it by going to http://localhost:5000/index.html.






`REST API`;
// REST (Representational State Transfer) is an architectural style for building web services. It is a set of constraints that are used to create web services that are scalable, reliable, and easy to maintain. RESTful APIs are web services that adhere to the REST architectural style. They are designed to be simple, lightweight, and fast. Here are some of the key principles of RESTful APIs:

// Client-Server Architecture: RESTful APIs are based on the client-server architecture. The client and the server are separate entities that communicate with each other over the network. The client sends requests to the server, and the server sends responses to the client.

// Stateless: RESTful APIs are stateless, which means that each request from the client to the server must contain all the information that the server needs to fulfill the request. The server does not store any information about the client's state between requests.

// Uniform Interface: RESTful APIs have a uniform interface that is used to access and manipulate resources. The uniform interface is made up of four key components: resource identification, resource manipulation through representations, self-descriptive messages, and hypermedia as the engine of application state (HATEOAS).

// Cacheable: RESTful APIs are designed to be cacheable, which means that responses from the server can be cached by the client to improve performance.

// Layered System: RESTful APIs are based on a layered system architecture, which means that the client does not need to know about the internal workings of the server. The server can be composed of multiple layers, and the client interacts with the top layer of the server.

// Code on Demand (Optional): RESTful APIs can support code on demand, which means that the server can send executable code to the client to be executed within the client's runtime environment.

// RESTful APIs use standard HTTP methods such as GET, POST, PUT, DELETE, and PATCH to perform CRUD (Create, Read, Update, Delete) operations on resources. Here's an example of how to use the standard HTTP methods to perform CRUD operations on resources using RESTful APIs:

// Get all ideas
router.get('/ideas', (req, res) => {
    res.send({ success: true, data: ideas });
});

// Get single idea
router.get('/ideas/:id', (req, res) => {
    const idea = ideas.find(idea => idea.id === parseInt(req.params.id));
    if (!idea)
        res.status(404).send({ success: false, message: 'Resource not found' });
    else
        res.send({ success: true, data: idea });
});


// Add new idea
router.post('/ideas', (req, res) => {
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().split('T')[0]
    }
    ideas.push(idea);
    res.send({ success: true, data: ideas });
});


// Update an idea
router.put('/ideas/:id', (req, res) => {
    const idea = ideas.find(idea => idea.id === parseInt(req.params.id));
    if (!idea)
        res.status(404).send({ success: false, message: 'Resource not found' });
    else {
        idea.text = req.body.text || idea.text;
        idea.tag = req.body.tag || idea.tag;
        res.send({ success: true, data: idea });
    }
});


// Delete an idea
router.delete('/ideas/:id', (req, res) => {
    const idea = ideas.find(idea => idea.id === parseInt(req.params.id));


    if (!idea)
        res.status(404).send({ success: false, message: 'Resource not found' });

    const deleted = ideas.splice(ideas.indexOf(idea), 1);
    res.send({ success: true, data: deleted });

});

// In this example, the standard HTTP methods are used to perform CRUD operations on the ideas resource. The GET method is used to retrieve all ideas and a single idea, the POST method is used to add a new idea, the PUT method is used to update an idea, and the DELETE method is used to delete an idea. The standard HTTP methods are used to perform CRUD operations on the ideas resource in a RESTful manner.






`MIDDLEWARE FUNCTIONS`;
// Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. They can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.

// If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging, and the response will not be sent to the client. Here's an example of a simple middleware function that logs the request URL to the console:


`Body Parser`;
// You no longer need to install body-parser separately. It is now included in the express package. You can use it by requiring express and using the express.json() middleware. Here's an example:

const express = require('express');
const app2 = express();

app2.use(express.json());
app2.use(express.urlencoded({ extended: true }));   // for parsing application/x-www-form-urlencoded. This is used to parse form data sent in the body of a POST request. When set to true, the extended option allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. When set to false, the URL-encoded data is parsed with the querystring library.
