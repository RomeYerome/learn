`Custom Middleware`;
// You can create custom middleware functions in Express to perform specific tasks. Custom middleware functions are defined in the same way as built-in middleware functions, using the app.use() method. It is customary to create a folder for your middleware with separate files for custom middleware functions and then import them into your main application file.

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};

export default logger;


// In this example, a custom middleware function named logger is defined that logs the request method and URL to the console. The function takes three arguments: req (the request object), res (the response object), and next (the next middleware function in the stack). The function logs the request method and URL to the console and then calls the next middleware function in the stack using the next() function.


`Using Custom Middleware`;
// To use the custom middleware function in your Express application, you need to import it into your main application file and then call the app.use() method with the middleware function as an argument.

// Middleware can be used globally for all routes or for specific routes. Here is an example of how to use the custom logger middleware function globally for all routes:

app.use(logger);

// In this example, the logger middleware function is used globally for all routes in the Express application. When a request is made to any route, the logger middleware function will log the request method and URL to the console.

// You can also use the custom middleware function for specific routes by passing it as an argument to the app.use() method for that route. Here is an example of how to use the logger middleware function for a specific route:

app.use('/api/posts', logger);

// In this example, the logger middleware function is used for the /api/posts route in the Express application. When a request is made to the /api/posts route, the logger middleware function will log the request method and URL to the console.


// You can also use it with one route and one method like this:

app.get('/api/posts', logger, (req, res) => {
    res.json(posts);
});

// In this example, the logger middleware function is used for the /api/posts route with the GET method. When a GET request is made to the /api/posts route, the logger middleware function will log the request method and URL to the console, and then the route handler function will send the posts data as a JSON response.



`Chaining Middleware`;
// Middleware functions can also be chained together to create a sequence of middleware functions that are executed in order. Here is an example of how to chain multiple middleware functions together:

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// In this example, the logger middleware function is chained with the express.json() and express.urlencoded() middleware functions. When a request is made to any route, the logger middleware function will log the request method and URL to the console, and then the express.json() middleware function will parse the JSON payload, followed by the express.urlencoded() middleware function parsing the URL-encoded payload.


`Error Handling Middleware`;
// You can also create custom error handling middleware functions in Express to handle errors that occur during the processing of a request. Error handling middleware functions are defined in the same way as other middleware functions, but they take four arguments instead of three: err (the error object), req (the request object), res (the response object), and next (the next middleware function in the stack).

// Here is an example of how to create a custom error handling middleware function that logs errors to the console:

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}

// In this example, a custom error handling middleware function named errorHandler is defined that logs the error stack trace to the console and sends a 500 Internal Server Error response to the client. The function takes four arguments: err (the error object), req (the request object), res (the response object), and next (the next middleware function in the stack).


`Using Error Handling Middleware`;
// To use the custom error handling middleware function in your Express application, you need to import it into your main application file and then call the app.use() method with the middleware function as an argument. Error handling middleware functions should be defined after all other middleware functions in the stack.

// Here is an example of how to use the custom error handling middleware function in an Express application:

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

// In this example, the errorHandler middleware function is used to handle errors that occur during the processing of a request in the Express application. The errorHandler middleware function is defined after the logger, express.json(), and express.urlencoded() middleware functions in the stack. If an error occurs during the processing of a request, the errorHandler middleware function will log the error stack trace to the console and send a 500 Internal Server Error response to the client.


// Error handling middleware functions can also be used for specific routes or methods by passing them as arguments to the app.use() method for that route or method. Here is an example of how to use the errorHandler middleware function for a specific route:

app.use('/api/posts', errorHandler);

// In this example, the errorHandler middleware function is used for the /api/posts route in the Express application. If an error occurs during the processing of a request to the /api/posts route, the errorHandler middleware function will log the error stack trace to the console and send a 500 Internal Server Error response to the client.


// You can also use the errorHandler middleware function with a specific route and method like this:

app.get('/api/posts/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        const error = new Error('Post not found');
        error.status = 404;
        return next(error);
    }

    res.status(200).json(post);
});

