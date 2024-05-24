`WHAT IS CORS?`
// CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented in web browsers to restrict JavaScript code from making requests to a different domain than the one that served the original web page. This is a security feature to prevent cross-site request forgery attacks. 

'HOW TO ENABLE CORS IN EXPRESS?'

// To enable CORS in Express, you can use the cors package. First, install the package using npm:
`npm install cors`
// Then, require the package in your server file and use it as middleware:
const cors = require('cors');

// cors Middleware
app.use(cors({
    origin: ['http://localhost:5000', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// This will enable CORS for requests coming from the specified origins and allow the specified HTTP methods. The credentials option is set to true to allow cookies to be sent with the request.

// You can also use the cors package to enable CORS for all routes in your application:
app.use(cors()); // This will enable CORS for all routes in your application.

// You can also use the cors package to enable CORS for specific routes in your application:
app.use('/api/ideas', cors()); // This will enable CORS for the '/api/ideas' route in your application.

// You can also use the cors package to enable CORS for specific routes with specific options:
app.use('/api/ideas', cors({
    origin: ['http://localhost:5000', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
})); // This will enable CORS for the '/api/ideas' route with the specified options.

// Other options that can be used with the cors package include:
// - allowedHeaders: an array of headers that are allowed to be sent with the request e.g ['Content-Type', 'Authorization']
// - exposedHeaders: an array of headers that are exposed to the client e.g ['Content-Length', 'X-Content-Range'] or '*'
// - maxAge: the number of seconds the results of a preflight request can be cached e.g 600
// - preflightContinue: if set to true, the request will continue even if the preflight request fails e.g true
// - optionsSuccessStatus: the status code to send for successful OPTIONS requests e.g 204
// - origin: a string or an array of strings that represent the allowed origins e.g ['http://localhost:5000', 'http://localhost:3000']
// - methods: an array of HTTP methods that are allowed to be used with the request e.g ['GET', 'POST', 'PUT', 'DELETE']
// - credentials: if set to true, the server will include credentials in the response e.g true

`WHAT IS PREFLIGHT REQUEST?`
// A preflight request is a CORS mechanism to check if the actual request is safe to send. It is an HTTP OPTIONS request sent by the browser to the server to check if the server allows the actual request to be sent. 

`The preflight request includes the following headers:`
// - Access-Control-Request-Method: the HTTP method of the actual request
// - Access-Control-Request-Headers: the headers of the actual request

// The server then responds with the following headers:

// - Access-Control-Allow-Origin: the allowed origin for the actual request
// - Access-Control-Allow-Methods: the allowed HTTP methods for the actual request
// - Access-Control-Allow-Headers: the allowed headers for the actual request
// - Access-Control-Allow-Credentials: whether credentials are allowed to be sent with the actual request
// - Access-Control-Max-Age: the maximum time the results of the preflight request can be cached


// If the server responds with the appropriate headers, the actual request is then sent. If the server does not respond with the appropriate headers, the actual request is not sent.

// example of a preflight request:
// OPTIONS /api/ideas HTTP/1.1 
// Host: localhost:5000
// Access-Control-Request-Method: GET
// Origin: http://localhost:3000
// Access-Control-Request-Headers: authorization
// Accept: */*
// Accept-Encoding: gzip, deflate, br
// Connection: keep-alive
// Host: localhost:5000
// Origin: http://localhost:3000
// Referer: http://localhost:3000/
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36
// Sec-Fetch-Dest: empty
// Sec-Fetch-Mode: cors
// Sec-Fetch-Site: same-site
// Sec-Fetch-User: ?1


`WHAT IS CORS ERROR?`