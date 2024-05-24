`URL MODULE`;

// The url module is used to parse, format, resolve and join URLs. It is used to work with URLs. The url module is a core module and does not need to be installed.

const url = require('url');       // require the url module

`Parsing URLs`;
// The parse() method takes in the URL as an argument and returns an object with the protocol, host, hostname, port, path, query, hash, auth and href properties. 

// The protocol property is the protocol of the URL e.g http, https, ftp, 
// the host property is the host e.g localhost:3000
// the hostname property is the hostname of the URL e.g localhost, 
// the port property is the port of the URL e.g 3000, 
// the path property is the path of the URL e.g /users/john, 
// the query property is the query of the URL e.g ?name=john, 
// the hash property is the hash of the URL e.g #section1, 
// the auth property is the authentication of the URL e.g username:password and 
// the href property is the href of the URL

const parsedUrl = url.parse('https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37197136#overview');      

// parses the url and returns the following object { protocol: 'https:', host: 'www.udemy.com', hostname: 'www.udemy.com', port: null, path: '/course/modern-javascript-from-the-beginning/learn/lecture/37197136', query: null, hash: '#overview', auth: null, href: 'https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37197136#overview' }



`Formatting URLs`;
// The format() method takes in an object with the protocol, host, hostname, port, path, query, hash, auth and href properties as an argument. It returns the formatted URL

const formattedUrl = url.format({
    protocol: 'https:',
    host: 'www.udemy.com',
    hostname: 'www.udemy.com',
    port: null,
    path: '/course/modern-javascript-from-the-beginning/learn/lecture/37197136',
    query: {
        id: 37197136,
        name: 'modern-javascript-from-the-beginning'
    },
    hash: '#overview',
    auth: null,
    href: 'https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37197136#overview'
});

// formats the url and returns https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37197136#overview







`Resolving URLs`;
// The resolve() method takes in the base URL and the relative URL as arguments. It returns the resolved URL

// The base URL is the URL to resolve the relative URL against. it takes the format of

// protocol://hostname:port/path?query#hash

url.resolve('from', 'to')

const resolvedUrl = url.resolve(
    'https://www.google.com/one/two/',
    '/three/four'
);

// resolves the url and returns https://www.google.com/three/four. 

// If you don't put a slash before the relative URL, it will append it to the last slash of the base URL. 

// If you put a slash before the relative URL, it will replace the path of the base URL from the slash after the hostname, with the path of the relative URL and append the query and hash of the relative URL to the base URL. i.e. https://www.google.com/one/two/three/four








`URL Object`;
// The URL object is used to parse, format, resolve and join URLs. It is similar to the url module but it is more modern and has more features. It is used as shown below

const { URL } = require('url');       // require the URL object

const myUrl = new URL('https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37197136#overview');      // create a new URL object

console.log(myUrl.href);      // returns https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37197136#overview

console.log(myUrl.host);      // returns www.udemy.com

console.log(myUrl.hostname);      // returns www.udemy.com

console.log(myUrl.pathname);      // returns /course/modern-javascript-from-the-beginning/learn/lecture/37197136

console.log(myUrl.search);      // returns null

console.log(myUrl.searchParams);      // returns an object with the search parameters

console.log(myUrl.hash);      // returns #overview

console.log(myUrl.toString());      // returns the URL as a string






`URLSearchParams Object`;
// The URLSearchParams object is used to work with the search parameters of a URL. It is used to parse, append, delete, get, set and sort the search parameters of a URL. It is used as shown below

const params = new URLSearchParams('name=john&age=30');      // create a new URLSearchParams object

console.log(params.get('name'));      // returns john

console.log(params.get('age'));      // returns 30

params.append('country', 'usa');      // appends the search parameter to the URL

console.log(params.toString());      // returns name=john&age=30&country=usa

params.delete('age');      // deletes the search parameter from the URL

console.log(params.toString());      // returns name=john&country=usa

params.set('name', 'jane');      // sets the search parameter of the URL

console.log(params.toString());      // returns name=jane&country=usa

params.sort();      // sorts the search parameters of the URL

console.log(params.toString());      // returns country=usa&name=jane
































`QUERY STRING MODULE`;
// The query string module is used to parse, stringify and format query strings. It is used to work with query strings. The query string module is a core module and does not need to be installed.

const querystring = require('querystring');       // require the query string module

`Parsing Query Strings`;
// The parse() method is used to parse a query string. It takes in the query string as an argument. It returns an object with the query parameters

const parsedQuery = querystring.parse('name=john&age=30');      // parse a query string

console.log(parsedQuery);      // returns { name: 'john', age: '30' }


`Stringifying Query Strings`;
// The stringify() method is used to stringify an object. It takes in the object as an argument. It returns the query string

const stringifiedQuery = querystring.stringify({ name: 'john', age: 30 });      // stringify an object

console.log(stringifiedQuery);      // returns name=john&age=30