`MIDDLEWARE`;
// Middleware in express are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next. 


// Middlewares can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.
// If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.



`app.use()`;
// The syntax for using middleware in Express is app.use(). The app.use() method takes a middleware function as an argument. The middleware function can perform any tasks, such as logging, parsing the request body, or sending a response to the client.

// Here is an example of how to use middleware in Express:

app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

// In this example, the app.use() method is used to call a middleware function that logs the request URL to the console and then calls the next middleware function in the stack.


`Built-in Middleware`;
// Express comes with several built-in middleware functions that can be used to perform common tasks. Some of the most commonly used built-in middleware functions include:

`express.static()`; // This middleware function serves static files, such as images, CSS files, and JavaScript files, from a specified directory. To use this middleware function, you need to provide the path to the directory where the static files are located.

// Here is an example of how to use the express.static() middleware function to serve static files from a directory named public:

app.use(express.static('public'));

// In this example, the express.static() middleware function is used to serve static files from the public directory. When a request is made for a static file, Express will look for the file in the public directory and serve it if it exists.


`express.json()`; // This middleware function parses incoming requests with JSON payloads. It adds a body object to the request object with the parsed data. To use this middleware function, you need to call app.use(express.json()).
// Here is an example of how to use the express.json() middleware function to parse JSON payloads in incoming requests:

app.use(express.json());

// In this example, the express.json() middleware function is used to parse JSON payloads in incoming requests. When a request with a JSON payload is received, Express will parse the JSON data and add it to the body object of the request object.


`express.urlencoded()`; // This middleware function parses incoming requests with URL-encoded payloads. It adds a body object to the request object with the parsed data. To use this middleware function, you need to call app.use(express.urlencoded({ extended: false })).
// Here is an example of how to use the express.urlencoded() middleware function to parse URL-encoded payloads in incoming requests:

app.use(express.urlencoded({ extended: false }));

// In this example, the express.urlencoded() middleware function is used to parse URL-encoded payloads in incoming requests. When a request with a URL-encoded payload is received, Express will parse the data and add it to the body object of the request object.







`Custom Middleware`;
// You can also create custom middleware functions in Express to perform specific tasks. Custom middleware functions are defined in the same way as built-in middleware functions, using the app.use() method.

// Here is an example of how to create a custom middleware function that logs the request URL to the console:

app.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
});


// In this example, a custom middleware function is defined that logs the request URL to the console. The function takes three arguments: req (the request object), res (the response object), and next (the next middleware function in the stack). The function logs the request URL to the console and then calls the next middleware function in the stack using the next() function.


// It is common practice to create a middleware folder and define custom middleware functions in a separate file and then import them into your Express application. This helps keep your code organized and makes it easier to manage your middleware functions.