`WEBPACK CONFIG`;
// Since version 4, Webpack no longer requires a configuration file by default. However, unless your project is very simple, you'll likely need to create a configuration file to customize your build process.

// Webpack uses a configuration file to determine how to build your project. This file can contain options for your build such as entry points, output paths, loaders, and plugins.

// To create a configuration file, create a file named webpack.config.js in the root of your project. This file should export an object that contains the configuration options for your build.

`webpack.config.js`;
// The config file uses commonjs module syntax to export an object that contains the configuration options for your build. 

// The syntax for the config file is as follows:

module.exports = {
    // Configuration options
};


`Webpack Configuration Options`;
// The configuration object can contain a number of options that determine how Webpack builds your project. Some of the most common options include:

`mode: "development || production"`;   // The mode option specifies the mode for your build. This option can be set to "development", "production", or "none". The mode option determines how Webpack optimizes your build and sets default values for other options.

`entry: "path/to/entry/file.js"`;   // The entry point for your application. This is the file that Webpack will use to start building your project. You can specify a single file or an array of files.

`output: { path: "path/to/output/directory", filename: "bundle.js" }`;   // The output configuration for your build. This option specifies where Webpack should save the generated files and what they should be named.

`module: { rules: [ { test: /\.js$/, use: "babel-loader" } ] }`;   // The module configuration for your build. This option specifies how Webpack should handle different types of files. You can use loaders to transform files before they are included in the build.




// You can set the entry option to an object like the following and automatically pull the file name in your output configuration:

`entry: {
    bundle: "path/to/entry/file.js"
}`;

`output: {
    path: "path/to/output/directory",
    filename: "[name].js",
}
`;

// You can also add a hash to the output filename to ensure that the file name changes whenever the content changes. This is useful for cache busting which forces the browser to download the new file instead of using the cached version. To do this, you can use the [contenthash] placeholder in the filename:

`output: {
    path: "path/to/output/directory",
    filename: "[name][contenthash].js",
}`;



`BASE CONFIGURATION`;

// A basic Webpack configuration file might look like this:

const path = require('path');


module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "./src/index.js") // The entry point for your application. 
    },
    output: {
        path: path.resolve(__dirname, "dist"), // The output configuration for your build.
        filename: "[name][contenthash].js", // The output file. The [name] placeholder is replaced with the name of the entry point.
        clean: true, // This option tells Webpack to clean the output directory before building. This will remove all files from the output directory before building so you don't have multiple versions of the same file.

    },

}