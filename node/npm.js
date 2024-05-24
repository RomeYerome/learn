`NPM`;
// NPM is the package manager for NodeJS. It is used to install 3rd party packages. It is also used to run scripts. It is installed when you install NodeJS. You can check the version of NPM you have installed by running npm -v in the terminal. You can also check the version of NodeJS you have installed by running node -v in the terminal.






`Initializing NPM in a project`;
// To initialize NPM in a project, you run the following command in the terminal:

`npm init`;

// This will create a package.json file in your project directory. The package.json file contains metadata about your project and the dependencies that your project uses. You can edit the package.json file to add or remove dependencies. You can now install NPM packages in your project.




`Installing a package`;
// To install a package using NPM, you run the following command in the terminal:

`npm install package-name`;

// When you install a package/module, it is added to the node_modules folder (one is created with your first install) in your application. You can then import the package into your application using the require() function. This folder is full of not just modules you install but their dependencies and the dependencies of those dependencies. 


`npm install package1 package2 package3`; // installs multiple packages at once

`npm install package@version`; // installs a specific version of a package

`npm install package@latest`; // installs the latest version of a package


// NPM is a powerful tool for managing dependencies and running scripts in your NodeJS projects. It is widely used in the industry and has a large ecosystem of packages that you can use to add functionality to your applications.




`Installing a package globally`;
// To install a package globally, you add the -g flag to the npm install command:

`npm install -g package-name`;

// This will install the package globally on your system. You can then use the package from the command line.





`Installing a package as a dev dependency`;
// To install a package as a dev dependency, you add the --save-dev or -D flag to the npm install command:

`npm install package-name --save-dev`;

// This will install the package as a dev dependency in the package.json file. Dev dependencies are dependencies that are only needed for development and testing. They are not needed in production.






`Running a script`;

// To run a script using NPM, you add the script to the scripts object in the package.json file. You can then run the script using the npm run command followed by the script name:

// Sample package.json file

// {
//     "name": "nodejs",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//         "start": "node index.js",
//         "dev": "nodemon index.js"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//         "express": "^4.17.1"
//     },
//     "devDependencies": {
//         "nodemon": "^2.0.12"
//     }
// }

`"scripts": {
    "start": "node index.js"
    "dev": "nodemon index.js"
}`;

// To run the start script, you run the following command in the terminal:

`npm start`;    // for start script, you don't need to add run. you can run it with npm start

// To run the dev script, you run the following command in the terminal:

`npm run dev`;

// You can run multiple scripts in the same command by separating them with a space:

`npm run start dev`;

// This will run the script and output the result in the terminal. You can add as many scripts as you want to the scripts object in the package.json file. NPM is a powerful tool for running scripts in your NodeJS projects.






`Uninstalling a package`;
// To uninstall a package, you run the following command in the terminal:

`npm uninstall package-name`;

// This will remove the package from the node_modules folder in your project directory.



// You can find all the packages  on the npm website (npmjs.com). You can search for packages by name or keyword. You can also see the most popular packages and trending packages on the website. You can also publish your own packages to the npm registry and share them with the community.





`Updating a package`;
// To update a package, you run the following command in the terminal:

`npm update package-name`;

// This will update the package to the latest version. You can also update all packages in your project by running the following command:

`npm update`;

// This will update all packages in your project to the latest versions.





`Using a package`;
// To use a package in your code, you import the package using the require() function:

`const packageName = require('package-name');`;

// You can then use the package in your code by calling its functions or using its properties.




`Publishing a package`;
// To publish a package to the npm registry, you run the following command in the terminal:

`npm publish`;

// This will publish the package to the npm registry. You can then install the package in other projects using the npm install command.

