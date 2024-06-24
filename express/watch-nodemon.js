`NODEMON & THE WATCH FLAG`;
// Everytime you edit your server code, you have to stop the server and restart it to see the changes. This can be time-consuming. Nodemon is a tool that helps develop Node.js applications by automatically restarting the node application when file changes in the directory are detected. This saves you time and increases productivity.

// To install nodemon, run the following command in your terminal:

`npm install -g nodemon`; // OR `npm i -g nodemon`

// The -g flag installs nodemon globally on your system. This allows you to use nodemon in any project without having to install it locally in each project.

// To run your server with nodemon, you can use the following command:

`nodemon server.js`;

// The server will start and you will see the message "Server is running on port 5000" in your terminal. You can then navigate to http://localhost:5000 in your browser to see your server running.

// You can also write a script in your package.json file to run nodemon. To do this, open your package.json file and add the following line to the scripts object:

`"dev": "nodemon server.js"`; // This will allow you to run nodemon by typing npm run dev in your terminal.



`USING THE WATCH FLAG`;
// Recently, node has added a watch flag that replaces the need for nodemon. The watch flag will watch for changes in your files and automatically restart your server. To use the watch flag, you can run the following command:

`node server.js --watch`;

// The server will start and you will see the message "Server is running on port 5000" in your terminal. You can then navigate to http://localhost:5000 in your browser to see your server running.

// Again you can write a script in your package.json file to run the watch flag. To do this, open your package.json file and add the following line to the scripts object:

`"dev": "node server.js --watch"`; // This will allow you to run the watch flag by typing npm run dev in your terminal.

