`HTML WEBPACK PLUGIN`;
// To fix the problem of having to manually update the script tag in the HTML file every time the bundle changes, you can use the html-webpack-plugin. This plugin will automatically generate an HTML file for you that includes all your webpack bundles in the body using script tags. This is especially usefulf or webpack bundles that include a hash in the filename which changes every compilation. The plugin will inject the correct bundle into the HTML file with the correct hash.

// It lets you define a template HTML file and inject the generated bundles into it. This way, you don't have to manually update the script tags in the HTML file every time the bundle changes.

// To use the html-webpack-plugin, you need to install it using npm or yarn:

`npm install html-webpack-plugin -D`;

// Then, add the plugin to your Webpack configuration file:

`const HtmlWebpackPlugin = require('html-webpack-plugin');`;

// Add the plugin to the plugins array in your Webpack configuration file:

`plugins: [
    new HtmlWebpackPlugin({
        title: 'Webpack App',
        filename: 'index.html',
        template: 'src/index.html'
    })
]`;


// The HtmlWebpackPlugin constructor takes an options object with the following properties:

// title: The title of the HTML document. This is used to generate the <title> tag in the <head> section of the HTML document. You can also use the title property in the template HTML file to set the title dynamically by using <%= htmlWebpackPlugin.options.title %> in the <title> tag of the template. 

// filename: The name of the output HTML file. By default, this is index.html.

// template: The path to the template HTML file. This file will be used as the base for the generated HTML file. You can use this file to define the structure of the HTML document and include placeholders for the generated bundles. The plugin will replace these placeholders with the actual bundle paths.

// For example, if you have a template file src/index.html with the following content:

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title><%= htmlWebpackPlugin.options.title %></title>
// </head>
// <body>
//     <div id="app"></div>
// </body>
// </html>


// The plugin will generate an output file with the following content:

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Webpack App</title>
// </head>