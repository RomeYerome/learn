`CONFIG LOADERS`;
// Loaders are used in Webpack to transform files before they are included in the build. Loaders are specified in the module.rules array in the Webpack configuration file.

// Loaders are used to transform files from one format to another. For example, you can use a loader to convert ES6 JavaScript to ES5, or to convert SASS to CSS.

// Loaders are specified in the module.rules array in the Webpack configuration file. Each rule in the array is an object that specifies the file types to match and the loader to use.

// The syntax for a loader rule is as follows:

// module: {
//     rules: [
//         {
//             test: /\.js$/,
//             use: "babel-loader"
//         },
//         {
//             test: /\.scss$/,
//             use: ["style-loader", "css-loader", "sass-loader"]
//         }
//     ]

// }


// Loaders are installed using npm or yarn. For example, to install the Babel loader, you would run the following command:

`npm install babel-loader @babel/core @babel/preset-env --save-dev`;







`COMMON LOADERS`;
// Some common loaders used in Webpack builds include:



`babel-loader`; // A loader for using Babel with Webpack. Babel is a JavaScript compiler that allows you to use the latest JavaScript features in your code by compiling it down to an older version of JavaScript that is compatible with all browsers.

// install babel-loader with npm
`npm install babel-loader @babel/core @babel/preset-env -D`;

// Add the following rule to your Webpack configuration file to use babel-loader with Webpack:
`
{
    test: /\.js$/,
    exclude: /node_modules/
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    },
};
`;





`css and sass loader`;
// To compile your SASS and CSS files with webpack, you need to use the sass-loader, css-loader, and style-loader (or MiniCssExtractPlugin) modules. 

// The css-loader interprets @import and url() like import/require() and resolves them. The style-loader injects CSS into the DOM by adding a <style> tag to the <head> of the document, which can cause issues with CSS specificity and performance. It is good for development because it is fast but for your production build, use MiniCssExtractPlugin instead. MiniCssExtractPlugin.loader extracts the CSS into a separate file. 

// NOTE: The order of loaders is important. Loaders are applied from right to left, so the last loader specified is the first one applied. In the example above, the css-loader is applied first, followed by the style-loader. The order of loaders should be maintained: 'style-loader'/MiniCssExtractPlugin.loader comes first, followed by 'css-loader' then 'sass-loader'. If this convention is not followed, webpack is likely to throw errors.


// Module loaders can be chained. Each loader in the chain applies transformations to the processed resource. A chain is executed in reverse order. The first loader passes its result (resource with applied transformations) to the next one, and so forth. Finally, webpack expects JavaScript to be returned by the last loader in the chain.


// install css-loader and style-loader with npm
`npm install style-loader css-loader sass sass-loader mini-css-extract-plugin -D`;


// Next, add the following rule to your Webpack configuration file to use css-loader and style-loader with Webpack:

// require the MiniCssExtractPlugin at the top of the config file
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

`
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                mode === "production"
                ? MiniCssExtractPlugin.loader
                : "style-loader",
                "css-loader"
            ]
        },
        {
            test: /\.scss$/,
            use: [
                mode === "production"
                ? MiniCssExtractPlugin.loader
                : "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },

    ]
},

// Add the plugin to the plugins array

plugins: [
    new MiniCssExtractPlugin()
]
`;








`file-loader, url-loader`; // Loaders for handling file imports in JavaScript. The file-loader emits files into the output directory and returns the public URL. The url-loader works like the file-loader, but can return a Data URL if the file is smaller than a limit.

// install file-loader and url-loader with npm
`npm install file-loader url-loader -D`;

// Add the following rule to your Webpack configuration file to use file-loader and url-loader with Webpack:
`
{
    test: /\.(png|jpe?g|gif)$/i,
    use: [
        {
            loader: "url-loader",
            options: {
                limit: 8192
            }
        }
    ]
}
`;