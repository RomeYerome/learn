`JAVASCRIPT LOADER`;
// Babel is a JavaScript compiler that converts your Javascript to an older version of JavaScript that is compatible with all browsers.

// To use Babel with Webpack, you need to install the babel-loader, @babel/core, and @babel/preset-env modules.

// install babel-loader with npm
`npm install babel-loader @babel/core @babel/preset-env -D`;

// The babel-loader is a loader for Webpack that allows you to use Babel with Webpack. 
// The @babel/core module is the core of Babel, and the @babel/preset-env module is a preset that allows you use the latest JavaScript features in your code by compiling it down to an older version of JavaScript that is compatible with all browsers.

// Add the following rule to your Webpack configuration file to use babel-loader with Webpack:
`
{
    test: /\.js$/,
    exclude: '/node_modules/',
    use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
};
`;
