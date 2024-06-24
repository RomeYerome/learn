`SETTING UP YOUR EXPRESS SERVER`;
// After installing Express, node, and initializing npm. There are really three lines of code that you need to get a basic server up and running. The first line is to require the express module, the second line is to create an instance of the express module, and the third line is to listen on a port. Here is an example of how to set up your server:

// require the express module
const express = require('express');

// create an instance of express
const app = express();

// define the port
const port = 5000;



// Your get, put, patch, delete requests and middleware will go here. For example, you can create a simple get request that sends a response to the client when they navigate to the root URL of your server. Here is an example of how to create a simple get request:

app.get('/', (req, res) => {
  res.send('Hello World');
});



// listen on the port. The listen method takes a port and an optional callback function as arguments. The callback function is executed once the server is running.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// This is the basic setup for an express server. You can run this code by typing node server.js in your terminal. You should see the message "Server is running on port 5000" in your terminal. You can then navigate to http://localhost:5000 in your browser to see your server running.