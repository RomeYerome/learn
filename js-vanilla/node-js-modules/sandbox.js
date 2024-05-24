const { URL } = require('url');       // require the URL object

const myUrl = new URL('https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37197136#overview');      // create a new URL object

console.log(myUrl);


const params = new URLSearchParams('name=john&age=30');      // create a new URLSearchParams object

console.log(params.get('name'));      // returns john