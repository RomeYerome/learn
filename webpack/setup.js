`WEBPACK BASIC SETUP`;

// First, you'll need to create a root folder for your project and in that, create a src folder for your source files, and create a dist folder for your production files. In the src folder, create an index.js file and in the dist folder, create an index.html file and write boiler plate html in it. See file structure below

// Root Folder
//   src/
//     index.js
//   dist/
//     index.html


`Initialize npm and install webpack`;
// Next, you'll need to initialize npm (if you haven't already) and install webpack and webpack-cli as Dev Dependencies. Run the command below in your terminal to install them

`npm init -y`;    // This will create a package.json file in your project
`npm install webpack webpack-cli --save-dev`;

// This will install webpack and webpack-cli as Dev Dependencies in your project. You can now run webpack commands in your terminal. It will also create your package.json file if you don't have one already and add webpack and webpack-cli as Dev Dependencies. 

// Next, you'll need to add a build script in your package.json file. This script will run webpack to bundle your modules. See example below

`"scripts": {
    "build": "webpack --mode production"    // This will bundle your modules in production mode (the default mode is production), you can also bundle in development mode by changing production to development
}`;

// This script will run webpack to bundle your modules in production mode. You can also bundle in development mode by changing production to development. You can run this script in your terminal by running the command below

`npm run build`;

// This will run the build script in your package.json file and bundle your modules. It will create a dist folder in your project with a main.js file in it. This main.js file is the bundled file of your modules. You can now link this file in your index.html file. See example below

<script src="dist/main.js"></script>;







`WEBPACK CONFIGURATION`;
// In Webpack 5, they made it so you don't need a config file and just running the code above will produce your dist folder with the main.js file. However, you can create a webpack.config.js file to configure webpack. This file should be in the root of your project. You can specify the entry file, output file, and other configurations in this file. 

// Webpack runs with common JS syntax so you can use module.exports to export your configuration. See example below

// To configure webpack, Create a webpack.config.js file. This file should be in the root of your project. You can specify the entry file, output file, and other configurations in this file. See example below

const path = require('path');   // This is a Node.js module that provides utilities for working with file and directory paths

module.exports = {
    mode: 'production', // This is the mode you want to bundle your modules in. It can be production or development. The default mode is production
    entry: './src/index.js', // This is the entry file of your project
    output: {
        path: path.resolve(__dirname, 'dist'), // This is the output file of your project
        filename: 'main.js' // This is the name of the output file
    }
};


// You can run this configuration in your terminal by running the command below

`npm run build`;    // To run the script in your package.json file

`npm webpack --config webpack.config.js`;    // To run the configuration file directly



// This produces your main.js file in the dist folder. You can now link this file in your index.html file. However, everytime you make a change to your index.js file in your source folder, you'll have to build your production files again to receive the updates in your main.js file. This can be time consuming. To solve this, you can use Webpack Dev Server. 

// You also want to create a gitignore file in the root of your project and add the node_modules and the dist folder to it. This will prevent the dist folder from being pushed to your git repository. You can use a html plugin that will generate an index.html file which you can push to your git repository.



// DON'T USE THE CSS STYLE LOADER, USE MINI-CSS-EXTRACT-PLUGIN INSTEAD. SEE BELOW FOR MORE INFORMATION

`CSS STYLE LOADER`;
// To bundle CSS inside your javascript in your project, you'll need to install the style-loader and css-loader as Dev Dependencies. Run the command below in your terminal to install them

`npm install style-loader css-loader --save-dev`;

// This will install the style-loader and css-loader as Dev Dependencies in your project. You can now bundle CSS inside your javascript. 

// You should add the css-loader and style-loader to your webpack configuration file. See example below

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,    // This is a regex that tells webpack to use the css-loader and style-loader for all files that end with .css
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};

//  With that done, you can create a css folder with a style.css file in your src folder. You can write css in the style.css file. and then import the css file in your index.js file at the top of your index.js file. See example below

import './css/style.css';   // This will import the css file into your javascript file and when you build your project, the css will be bundled into your main.js file







`MINI-CSS-EXTRACT-PLUGIN`;
// There is an issue with the css style loader where it momentarily flashes unstyled content. You can use the mini-css-extract-plugin instead To extract your CSS into a separate file. you'll need to install the mini-css-extract-plugin as a Dev Dependency. Run the command below in your terminal to install it

`npm install mini-css-extract-plugin --save-dev`;

// This will install the mini-css-extract-plugin as a Dev Dependency in your project. You can now extract your CSS into a separate file.

// Next, you'll need to add the mini-css-extract-plugin to your webpack configuration file. See example below

const MiniCssExtractPlugin = require('mini-css-extract-plugin');   // This is a plugin that extracts CSS into separate files

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']    // This tells webpack to use the mini-css-extract-plugin to extract the css into a separate file
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'    // This is the name of the extracted css file
        })
    ]
};

// With that done, you can delete your dist folder and when you run the webpack build command, it will generate a dist folder with a style.css file in it and your js file attached. You can now push this style.css file to your git repository.





`HTML WEBPACK PLUGIN`;
// To generate your index.html file with webpack, you'll need to install the html-webpack-plugin as a Dev Dependency. Run the command below in your terminal to install it

`npm install html-webpack-plugin --save-dev`;

// This will install the html-webpack-plugin as a Dev Dependency in your project. You can now generate your index.html file with webpack.


// Next, add the html-webpack-plugin to your webpack configuration file. See example below

const HtmlWebpackPlugin = require('html-webpack-plugin');   // This is a plugin that simplifies the creation of HTML files to serve your webpack bundles

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',   // This is the template file that will be used to generate the index.html file
            filename: 'index.html',  // This is the name of the generated index.html file
            title: 'Webpack App'    // This is the title of the generated index.html file
        })
    ]
};


`Create template file`;
// With that done, create an index.html file in your src folder. You can write boiler plate html in it. But also you can pull values from the html-webpack-plugin in the template file using <%= %>. See example below

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title><%= htmlWebpackPlugin.options.title %></title>
// </head>
// <body>
//                     <h1><%= htmlWebpackPlugin.options.title %></h1>
//     <div id="app"></div>
// </body>
// </html>


// With that done, you can delete your dist folder and when you run the webpack build command, it will generate a dist folder with an index.html file in it and your js file attached. You can now push this index.html file to your git repository. 









`WEBPACK DEV SERVER`;

// Webpack Dev Server is a development server that provides live reloading. It watches your files for changes and automatically reloads your browser (similar to liveserver). To use Webpack Dev Server, you'll need to install it as a Dev Dependency. Run the command below in your terminal to install it

`npm install webpack-dev-server -D`;

// This will install webpack-dev-server as a Dev Dependency in your project. You can now use Webpack Dev Server in your project.

// Next, you'll need to add a start script in your package.json file. This script will run webpack-dev-server to start the development server. See example below

`"scripts": {
    "start": "webpack serve --mode development"    // This will start the development server in development mode
}`;

// This script will run webpack-dev-server to start the development server in development mode. You can run this script in your terminal by running the command below

`npm start`;

// This will start the development server and open your browser to localhost:8080. You can now make changes to your index.js file in your source folder and see the changes live in your browser. This is a faster way to see changes in your project. You can also add a watch script to your webpack configuration file to watch your files for changes. See example below

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            title: 'Webpack App'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')   // This is the directory that the dev server will serve
        },
        open: true,   // This tells the dev server to open the browser when the server starts
        // watchFiles: ['src/**/*.js', 'src/**/*.css'],   // This tells the dev server to watch these files for changes
        hot: true,   // This tells the dev server to enable hot module replacement meaning it will only reload the module that changed instead of the whole page
        compress: true,   // This tells the dev server to compress files
        historyApiFallback: true,   // This tells the dev server to fallback to index.html for all 404 pages
        // contentBase: path.join(__dirname, 'dist'),   // This is the directory that the dev server will serve
        // watchContentBase: true,   // This tells the dev server to watch the content base for changes
        port: 8080   // This is the port that the dev server will run on
    }
};












// OPTIONAL

`BABEL LOADER`;
// Babel is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. To use Babel in your project, you'll need to install babel-loader, @babel/core, and @babel/preset-env as Dev Dependencies. Run the command below in your terminal to install them

`npm install babel-loader @babel/core @babel/preset-env --save-dev`;

// This will install babel-loader, @babel/core, and @babel/preset-env as Dev Dependencies in your project. You can now use Babel in your project.

// Next, you'll need to add the babel-loader to your webpack configuration file. See example below

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,    // This is a regex that tells webpack to use the babel-loader for all files that end with .js
                exclude: /node_modules/,    // This tells webpack to exclude the node_modules folder
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']    // This is the preset that babel will use to convert your code
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            title: 'Webpack App'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        port: 8080
    }
};








`NOTE`;

// When using the webpack template, if your page uses font awesome or bootstrap, you can add the links to the cdn on your html template file, or you can install bootstrap and fontawesome with npm and import them in your app.js file. See example below


// To install bootstrap and fontawesome with npm, run the command below in your terminal
`npm install bootstrap @fortawesome/fontawesome-free`;


// To import bootstrap and fontawesome in your app.js file, add the code below to your app.js file

import '@fortawesome/fontawesome-free/js/all';
import { Modal, Collapse } from 'bootstrap';  // you can import the entire bootstrap or parts of it





'USING WEBPACK IN A FULL STACK APP';
// When using webpack in a full stack app, the front end is seperate from the back end. You put the webpack template in a client folder and the server in the root of the project. 

// Then you create a public folder in the root and have your webpack build the production files into the public folder (configure this in webpacks config file). Also declare the folder as your static folder in express so it serves them to the client