`GETTING JSON DATA`;
// More often than not, you will be getting JSON data from an API. This is a simple example of how to get JSON data from an API using Express. The convention is that the endpoint will be formated as /api/xxxxx

const express = require('express');

const app = express();
const port = 5000;

app.get('/api/data', (req, res) => {
    const data = {
        name: 'John Doe',
        age: 25,
        email: 'johndoe@mail.com',
    };

    res.json(data);

    // res.send(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// In this example, the get method is used to create an endpoint at /api/data. When the client navigates to this endpoint, the server sends a JSON response to the client. The json method is used to send JSON data to the client. The send method can also be used to send JSON data to the client.

// You can run this code by typing node server.js in your terminal. You should see the message "Server is running on port 5000" in your terminal. You can then navigate to http://localhost:5000/api/data in your browser to see the JSON data being sent to the client.