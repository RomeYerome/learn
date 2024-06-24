`STATIC MIDDLEWARE`;
// This middleware is used to serve static files from the public folder. It is a better way to serve static files than using the sendFile method. It is built-in to Express, and you can use it by calling the express.static method and passing the path to the public folder as an argument. Here is an example of how to use the static middleware:

// the syntax is app.use(express.static('static/files/path'));

app.use(express.static(__dirname + 'public'));

// In this example, the static middleware is used to serve static files from the public folder. The __dirname variable is a global variable that provides the path to the current directory. The public folder should be in the same directory as the server.js file. You can now access the files in the public folder by navigating to http://localhost:5000/filename. For example, if you have an image called logo.png in the public folder, you can access it by navigating to http://localhost:5000/logo.png.

// Apart from the index.html file which you can access at the home route, you will have to add the file extension to access other files in the public folder. For example, to access the about file, you will have to navigate to http://localhost:5000/about.html.