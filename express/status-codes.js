`STATUS CODES`;
// Status codes are issued by a server in response to a client's request made to the server. They are part of the HTTP protocol and are used to indicate the success or failure of an action. The status codes are divided into five categories:

// 1xx Informational
// 2xx Success
// 3xx Redirection
// 4xx Client Error
// 5xx Server Error

`1xx Informational`;
// The 1xx series status codes indicate that the server has received the request and is continuing the process. They are informational and are used to inform the client that the server is still working on the request.

// 100 Continue - The server has received the request headers and the client should proceed to send the request body.
// 101 Switching Protocols - The server is switching protocols according to the client's request.
// 102 Processing - The server has received and is processing the request, but no response is available yet.
// 103 Early Hints - This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response or preconnect to an origin from which the page will need resources.


`2xx Success`;
// The 2xx series status codes indicate that the request was successful and the server was able to process the request without any issues. These status codes are used to indicate that the client's request was received, understood, and accepted.

// 200 OK - The request was successful.
// 201 Created - The request has been fulfilled and a new resource has been created.
// 202 Accepted - The request has been accepted for processing, but the processing has not been completed.
// 203 Non-Authoritative Information - The server is a proxy and the response is from another source.
// 204 No Content - The server successfully processed the request but there is no content to send back.
// 205 Reset Content - The server successfully processed the request but requires the client to reset the document view.
// 206 Partial Content - The server is delivering only part of the resource due to a range header sent by the client.
// 207 Multi-Status - The message body that follows is an XML message and can contain a number of separate response codes.
// 208 Already Reported - The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.
// 226 IM Used - The server has fulfilled a GET request for the resource and the response is a representation of the result of one


`3xx Redirection`;
// The 3xx series status codes indicate that the client must take additional action to complete the request. These status codes are used for redirection purposes.

// 300 Multiple Choices - Indicates multiple options for the resource that the client may follow.
// 301 Moved Permanently - The resource has been moved permanently to a new location.
// 302 Found - The resource has been found at a different location, but the client should continue to use the original URL.
// 303 See Other - The resource can be found under a different URL and should be retrieved using a GET method.
// 304 Not Modified - Indicates that the resource has not been modified since the last request.
// 307 Temporary Redirect - The request should be repeated with another URL, but the same method should be used.
// 308 Permanent Redirect - The request and all future requests should be repeated using another URL.


`4xx Client Error`;
// The 4xx series status codes indicate that the client has made an error in the request. These status codes are used to indicate that the client's request cannot be fulfilled due to an error on the client's part.

// 400 Bad Request - The request could not be understood by the server due to malformed syntax.
// 401 Unauthorized - The request requires user authentication.
// 402 Payment Required - Reserved for future use.
// 403 Forbidden - The server understood the request but refuses to authorize it.
// 404 Not Found - The server has not found anything matching the requested URL.
// 405 Method Not Allowed - The method specified in the request is not allowed for the resource.
// 406 Not Acceptable - The server cannot generate a response that the client will accept.
// 407 Proxy Authentication Required - The client must authenticate itself with the proxy.
// 408 Request Timeout - The client did not produce a request within the time that the server was prepared to wait.
// 409 Conflict - The request could not be completed due to a conflict with the current state of the resource.
// 410 Gone - The requested resource is no longer available and will not be available again.
// 411 Length Required - The request did not specify the length of its content, which is required by the requested resource.
// 412 Precondition Failed - The server does not meet one of the preconditions specified by the client.
// 413 Payload Too Large - The request is larger than the server is willing or able to process.
// 414 URI Too Long - The URI provided was too long for the server to process.
// 415 Unsupported Media Type - The server does not support the media type of the request.
// 416 Range Not Satisfiable - The client has asked for a portion of the file, but the server cannot supply that portion.
// 417 Expectation Failed - The server cannot meet the requirements of the Expect request-header field.
// 418 I'm a teapot - The server refuses the attempt to brew coffee with a teapot.
// 421 Misdirected Request - The request was directed at a server that is not able to produce a response.
// 422 Unprocessable Entity - The request was well-formed but was unable to be followed due to semantic errors.
// 423 Locked - The resource that is being accessed is locked.
// 424 Failed Dependency - The request failed due to a failure of a previous request.
// 425 Too Early - Indicates that the server is unwilling to risk processing a request that might be replayed.
// 426 Upgrade Required - The client should switch to a different protocol.
// 428 Precondition Required - The origin server requires the request to be conditional.
// 429 Too Many Requests - The user has sent too many requests in a given amount of time.
// 431 Request Header Fields Too Large - The server is unwilling to process the request because its header fields are too large.
// 451 Unavailable For Legal Reasons - The server is denying access to the resource as a consequence of a legal demand.


`5xx Server Error`;
// The 5xx series status codes indicate that the server has encountered an error while processing the client's request. These status codes are used to indicate that the server is unable to fulfill the request due to an error on the server's part.

// 500 Internal Server Error - A generic error message indicating that the server has encountered an error.
// 501 Not Implemented - The server does not support the functionality required to fulfill the request.
// 502 Bad Gateway - The server received an invalid response from the upstream server.
// 503 Service Unavailable - The server is currently unavailable (overloaded or down).
// 504 Gateway Timeout - The server did not receive a timely response from the upstream server.
// 505 HTTP Version Not Supported - The server does not support the HTTP protocol version used in the request.
// 506 Variant Also Negotiates - Transparent content negotiation for the request results in a circular reference.
// 507 Insufficient Storage - The server is unable to store the representation needed to complete the request.
// 508 Loop Detected - The server detected an infinite loop while processing the request.
// 510 Not Extended - Further extensions to the request are required for the server to fulfill it.
// 511 Network Authentication Required - The client needs to authenticate to gain network access.




`Setting Status Codes in Express`;
// In Express, you can set the status code of the response using the `status()` method. This method sets the HTTP status code of the response and returns the response object. Here's an example:

app.get('/example', (req, res) => {
    res.status(404).send('Not Found');
}
);

// In this example, the status code of the response is set to 404 using the `status()` method. The `send()` method is then used to send the response body with the message 'Not Found'.

// You can also use the `sendStatus()` method to set the status code and send an empty response body. Here's an example:

app.get('/example', (req, res) => {

    const post = posts.find(post => post.id === req.params.id);
    !post && res.sendStatus(404);
    res.sendStatus(200);
}
);

// In this example, the status code of the response is set to 404 using the `sendStatus()` method. The response body is empty.


`Setting Custom Status Codes in Express`;
// In Express, you can set custom status codes by using the `status()` method with the `send()` method. Here's an example:

app.get('/example', (req, res) => {
    res.status(600).send('Custom Status Code');
}
);

// In this example, a custom status code of 600 is set using the `status()` method. The response body is then sent with the message 'Custom Status Code'.

// It's important to note that custom status codes are not part of the HTTP standard and should be used with caution. They may not be recognized by all clients and servers, and could lead to unexpected behavior.


`Setting Status Codes with Express Middleware`;
// You can also set the status code of the response using Express middleware. Middleware functions have access to the request and response objects, and can modify the response object to set the status code. Here's an example:

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

// In this example, a middleware function is used to set the status code of the response to 404. The response body is then sent with the message 'Not Found'.

// Middleware functions can be used to set status codes for specific routes or for all routes in the application. They can also be used to handle errors and other conditions that require setting a status code.


