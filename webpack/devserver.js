`DEV-SERVER`;
// DevServer is webpacks built-in development server which provides a web server for your project. It is used to quickly develop an application. It also provides live reloading, which means that when you make changes to your code, the browser will automatically refresh and display the changes. It is like a local server that runs your code and provides a URL to access it in the browser, just like vscode live server.

// To use the DevServer, you need install it with npm or yarn. You can install it globally or locally. To install it locally, run the following command in your project directory:

`npm i webpack-dev-server -D`;


// Next you need to add a script to your package.json file to start the DevServer. You can add a dev script like the following:

`
"scripts": {
    "build": "webpack",
    "dev": "webpack serve"
};
`;



// Lastly, you needt to add a devServer property to your Webpack configuration file. The devServer property is an object that contains configuration options for the development server. Some common options include:

`port: 3000`; // The port option specifies the port that the DevServer will listen on. The default port DevServer will listen on port 8080.

`static: { directory: path.resolve(__dirname, 'dist') }`; // The static option specifies the directory that the DevServer will serve files from. In this example, the DevServer will serve files from the dist directory.

`open: true`; // The open option specifies whether the DevServer should open the default browser when it starts. If set to true, the DevServer will open the default browser.

`hot: true`; // The hot option enables Hot Module Replacement (HMR) in the DevServer. HMR is a feature that allows modules to be updated without a full page reload. This can speed up development by preserving the state of the application.

`compress: true`; // The compress option enables gzip compression in the DevServer. This can reduce the size of files sent over the network, improving performance.

`historyApiFallback: true`; // The historyApiFallback option enables support for serving HTML5 History API fallback responses. This is useful for single-page applications that use client-side routing.

// Here is an example of a Webpack configuration file with a devServer property:

const path = require('path');

`
module.exports = {

    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
};

`;
        