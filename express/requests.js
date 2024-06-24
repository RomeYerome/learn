`SENDING HTTP REQUESTS`;
// Express provides a number of methods to send HTTP requests to the client. Each method corresponds to a different HTTP status code. Here is how you send different requests

const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    res.send('Got a POST request');
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



`Sending HTML Pages`;
// You can send an HTML page to the client, by using the sendFile method. There is a better way but Here is an example of how to send an HTML page to the client:

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// In this example, the sendFile method is used to send the index.html file to the client when they navigate to the root URL of the server. The __dirname variable is a global variable that provides the path to the current directory.