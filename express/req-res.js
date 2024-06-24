`REQUEST OBJECT`;
// The request object is an instance of http.IncomingMessage. It is created when a new HTTP request is made to the server and is passed as the first argument to the request handler function. The request object contains information about the HTTP request, such as the URL, headers, and method. You can access this information using the properties and methods of the request object.

// Here are some of the properties and methods of the request object:

`req.params`;
// This property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /api/ideas/:id, then the “id” property is available as req.params.id. This object defaults to {}.

`req.query`;
// This property is an object containing a property for each query string parameter in the route. For example, if you have the route /api/ideas?tag=Technology, then the “tag” property is available as req.query.tag. If there is no query string, it is an empty object: {}.

`req.body`;
// This property is an object containing data submitted to the server. This is typically used in POST requests to send data to the server. For example, if you have a form with a text field, the value of the text field will be available as req.body.text. This object defaults to {}.

`req.headers`;
// This property is an object containing the HTTP headers that were sent to the server. For example, if you have a request with the header “Content-Type: application/json”, you can access it as req.headers['content-type']. This object defaults to {}.

`req.method`;   // The HTTP method of the request.

`req.url`;      // The URL of the request.

`req.cookies`;  // An object containing the request cookies.

`req.ip`;       // The IP address of the client making the request.

`req.path`;     // The path of the request URL.

`req.hostname`; // The hostname of the request URL.

`req.protocol`; // The protocol of the request URL.

`req.secure`;   // A boolean value that indicates whether the request is secure (HTTPS).

`req.xhr`;      // A boolean value that indicates whether the request was made with XMLHttpRequest.

`req.get(header)`; // A method to get the value of a request header.

`req.accepts(types)`; // A method to check if the request accepts a certain content type.

`req.is(type)`; // A method to check if the request content type is a certain type.

`req.param(name)`; // A method to get the value of a route parameter.

`req.route`; // The route object representing the current route.

`req.originalUrl`; // The original URL of the request.





`RESPONSE OBJECT`;
// The response object is an instance of http.ServerResponse. It is created when a new HTTP request is made to the server and is passed as the second argument to the request handler function. The response object contains methods and properties that allow you to send a response back to the client.

// Here are some of the methods and properties of the response object:

`res.send(body)`; // Sends a response with the specified body. The body can be a string, buffer, object, or an array. Express will automatically set the Content-Type header based on the type of the body.

`res.json(body)`; // Sends a JSON response. The body can be any JSON-serializable data.

`res.status(code)`; // Sets the status code of the response.

`res.cookie(name, value, [options])`; // Sets a cookie in the response. The options parameter is an object that can contain properties like maxAge, expires, path, domain, secure, httpOnly, and sameSite.

`res.clearCookie(name, [options])`; // Clears a cookie in the response. The options parameter is an object that can contain properties like path, domain, and secure.

`res.redirect([status,] path)`; // Redirects the request to a different URL. The status parameter is optional and defaults to 302 (Found).

`res.sendFile(path, [options], [callback])`; // Sends a file as an attachment. The options parameter is an object that can contain properties like headers, root, dotfiles, and lastModified. The callback parameter is a function that will be called when the file is sent. If the file does not exist, it will set the status to 404 and call the next middleware.

`res.download(path, [filename], [callback])`; // Sends a file as an attachment with the filename. The callback parameter is a function that will be called when the file is sent. If the file does not exist, it will set the status to 404 and call the next middleware.

`res.type(type)`; // Sets the Content-Type header of the response.

`res.format(object)`; // Sets the Content-Type header of the response based on the Accept header of the request. The object parameter is an object that maps content types to callback functions.

`res.set(field, [value])`; // Sets a response header.

`res.get(field)`; // Gets the value of a response header.

`res.append(field, [value])`; // Appends a value to a response header.

`res.locals`; // An object that contains response local variables scoped to the request.

`res.render(view, [locals], [callback])`; // Renders a view template. The locals parameter is an object that contains local variables that will be passed to the view template. The callback parameter is a function that will be called when the view is rendered.

