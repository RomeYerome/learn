`REST API`;
// REST API stands for Representational State Transfer Application Programming Interface. It is a set of rules that developers follow when they create their API. One of the rules is that you should be able to get a piece of data (called a resource) when you link to a specific URL. Each URL is called an endpoint. The most common operations are GET, POST, PUT, DELETE. GET is used to retrieve data, POST is used to add data, PUT is used to update data, and DELETE is used to delete data. 

// REST APIs are stateless, meaning that each request is independent of the previous one. This makes them very scalable and easy to maintain. REST APIs are also very flexible and can be used with any programming language. They are the most common type of API used today.

// REST APIs are typically used to build web services that are lightweight, maintainable, and scalable. They are commonly used in web development to allow clients to interact with a server through a set of predefined operations. REST APIs are also used in mobile app development to allow mobile apps to interact with a server.

// Here are the basic functions of a REST API:

`Create`;
// This function is used to add new data to the server. It is typically done using the POST method.

app.post('/api/data', (req, res) => {
    // Add new data to the server

})



`Read`;
// The read function is used to retrieve data from the server. It is typically done using the GET method. You can either retrieve all the data or a specific piece of data.

// Get all data
app.get('/api/data', (req, res) => {
    // Retrieve all data from the server
    res.json(data);
});

// Get a specific piece of data
app.get('/api/data/:id', (req, res) => {
    // Retrieve a specific piece of data from the server
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);

    if (!item) {
        return res
            .status(404)
            .json({ message: 'Item not found' });
    }
    res.json(item);
});



`Update`;
// The update function is used to modify existing data on the server. It is typically done using the PUT method. You can update all the data or a specific piece of data.

app.put('/api/data/:id', (req, res) => {
    // Update a specific piece of data on the server
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);

    if (!item) {
        return res
            .status(404)
            .json({ message: 'Item not found' });
    }

    // Update the item
    item.name = req.body.name;
    item.description = req.body.description;

    res.json(item);
});



`Delete`;
// The delete function is used to remove data from the server. It is typically done using the DELETE method. You can delete all the data or a specific piece of data.

app.delete('/api/data/:id', (req, res) => {
    // Delete a specific piece of data from the server
    const id = parseInt(req.params.id);
    const index = items.findIndex(item => item.id === id);

    if (index === -1) {
        return res
            .status(404)
            .json({ message: 'Item not found' });
    }

    items.splice(index, 1);
    res.json({ message: 'Item deleted' });
});