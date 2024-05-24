`HTTP MODULE`;
// The http module is used to create a server, make requests and handle responses. It is used to work with the HTTP protocol. The http module is a core module and does not need to be installed. It is not as good as the express module and lacks essential features so is not recommended. It is used as shown below

const http = require('http');       // require the http module

`Creating a Server`;
// The createServer() method is used to create a server. It takes in a request listener as an argument. The request listener is a function that takes in the request and response objects as arguments. It is used to handle requests and send responses

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        response.writeHead(200, { 'content-type': 'text/html' });

        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    } else if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
    }

    res.write('Hello World');
    res.end('optional message');    // end the response and send the optional message if any
});

server.listen(3000, () => console.log('Server running...'));      // listen for requests on port 3000 or any port number you specify

`Request Object`;
// The request object is an instance of the IncomingMessage class. It is used to get information about the incoming request. It has the following properties

// req.url: contains the URL of the request
// req.method: contains the request method
// req.headers: contains the request headers
// req.body: contains the request body

`Response Object`;
// The response object is an instance of the ServerResponse class. It is used to send responses to the client. It has the following methods

// res.setHeader(): used to set the response headers
// res.write(): used to write the response body
// res.end(): used to end the response and send the response body

`Listening for Requests`;
// The listen() method is used to listen for requests on a specified port. It takes in a port number and an optional callback function as arguments. The callback function is called when the server starts listening for requests

server.listen(3000, () => console.log('Server running...'));      // listen for requests on port 3000 or any port number you specify

