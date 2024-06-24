`ERROR HANDLING MIDDLEWARE`;
// Error handling middleware in Express is used to handle errors that occur during the request-response cycle. Error handling middleware functions take four arguments: err, req, res, and next. The err argument is an Error object that contains information about the error that occurred. The req and res arguments are the request and response objects, respectively. The next argument is a reference to the next middleware function in the stack.


`Creating Error Handling Middleware`;
// Error handling middleware functions are defined in the same way as other middleware functions, but they take four arguments instead of three. Here is an example of how to define an error handling middleware function in Express:

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.status)
        return res.status(err.status).json({ msg: err.message });

    res.status(500).json({ msg: err.message });
}

// Just by passing four arguments to the middleware function, Express recognizes it as an error handling middleware function. The err argument contains the error object that was thrown during the request-response cycle. 

// Your error handling middleware function will run whenever you call new Error() in your code. 


`Defining Error Handling Middleware For Specific Routes`;
// You can define error handling middleware for specific routes by passing the error handling middleware function as an argument to the app.use() method for that route. Here is an example of how to define error handling middleware for a specific route in Express:

app.use('/api/posts', errorHandler);

// Alternatively, you can bake it into a specific route method like this:
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

`Using Error Handling Middleware`;
// To use the custom error handling middleware function in your Express application, you need to import it into your main application file and then call the app.use() method with the middleware function as an argument. Error handling middleware functions should be defined after all other middleware functions in the stack.

// Server.js
import express from 'express';
import errorHandler from './middleware/error-handler.js';

// const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

// The error handling middleware function errorHandler is defined and then added to the middleware stack using app.use(). This ensures that the errorHandler function is called whenever an error occurs during the request-response cycle.



`Catch-All Error Handling Middleware`;
// You can also create a catch-all error handling middleware function that will handle any errors that occur in your Express application. This is useful for handling errors that are not caught by other error handling middleware functions such as a 404 page not found error. Here is an example of how to create a catch-all error handling middleware function in Express:

app.use((err, req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});