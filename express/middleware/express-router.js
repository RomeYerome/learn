`EXPRESS ROUTER`;
// The Express Router is a middleware that allows you to group route handlers together. It provides a way to organize your routes and make your code more modular and maintainable. You can create multiple routers and mount them at different paths in your application.

// To create a router, you can use the express.Router() method. This method returns a new router object that you can define routes on. You can then use the router object to define route handlers for different paths.

// Routes are sections of Express code that define how the server should respond to requests. They consist of a route path, an HTTP method, and a route handler function. Routes are defined using the app object, which is an instance of Express.

// It is common for an Express application to have multiple resources like users, posts etc with each of them having multiple routes and become messy. To avoid this, it it standard practice to create a routes folder and separate the routes into different files. This makes the code more organized and easier to maintain. The routes can then be imported into the main app.js file using

// Here is an example of how to create a route in a separate file:

// routes/data.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { // You don't need to specify the full path here, just the relative path. So no need to write '/api/data' here.
    res.send('Data Route');
});

router.get('/:id', (req, res) => {
    res.send('Data Route');
});

module.exports = router;

// app.js
const express = require('express');
const dataRoute = require('./routes/data');

const app = express();

app.use('api/data', dataRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



// Here, we have created a new router in the data.js file that defines a route handler for the path '/'. We then import the router into the main app.js file and mount it at the path '/data'. This means that any requests to the '/data' path will be handled by the router defined in the data.js file.