`SASS & CSS LOADER`;
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



