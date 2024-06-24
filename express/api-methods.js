`API METHODS`;
// Express has methods for all the HTTP request types. Here are some of the most commonly used ones:

`get() method`;
// This method is used to request data from a specified resource. When you navigate to a website, you are making a GET request to the server. The GET request should only retrieve data from the server and should not have any other effect on the data. The endpoint references a collection of resources, and the request body is empty.
app.get('/endpoint', (req, res) => {
    res.send('Hello World');
});

`post() method`;
// This method is used to send data to a server to create a resource. The data sent to the server is stored in the request body of the HTTP request. The POST request should only contain the data that needs to be added to the server. The endpoint references a collection of resources, and the request body contains the data to be added to the collection.
app.post('/endpoint', (req, res) => {
    res.send('Got a POST request');
});

`put() method`;
// The PUT method is used to modify a resource. PUT updates the entire resource with data that is passed in the body payload. If there is no resource that matches the request, it will create a new resource
app.put('/endpoint', (req, res) => {
    res.send('Got a PUT request');
});

`delete() method`;
// The DELETE method is used to delete a resource from the server. If the resource is successfully deleted, the server should return a 204 status code with no body. If the resource does not exist, the server should return a 404 status code. The DELETE request should only contain the resource identifier in the request URL.
app.delete('/endpoint', (req, res) => {
    res.send('Got a DELETE request');
});

`patch() method`;
// The PATCH method is used to update a resource. It is used to apply partial modifications to a resource. If the resource does not exist, it will create a new resource. The PATCH request only needs to contain the changes to the resource, not the entire resource. The endpoint references a single resource, and the request body contains the changes to the resource.
app.patch('/endpoint', (req, res) => {
    res.send('Got a PATCH request');
});

`all() method`;
// The all() method is used to load middleware functions at a path for all HTTP request methods. The following example demonstrates the use of app.all() method to load the middleware function at the path /secret.

app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
});
