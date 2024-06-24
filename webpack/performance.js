`PERFORMANCE CONFIGURATION`
// Webpack issues a file size warning when the size of a file exceeds 244 KiB. This warning can be disabled by setting the performance.maxAssetSize property to a higher value. The performance.maxEntrypointSize property can also be set to a higher value to disable the warning for entry points.

// The performance.hints property can be set to false to disable the warning altogether. This property can also be set to "error" to turn the warning into an error.

// The performance property can be set to an object with the following properties:

// maxAssetSize: The maximum size of an asset before a warning is issued. The default value is 244 KiB.
// maxEntrypointSize: The maximum size of an entry point before a warning is issued. The default value is 244 KiB.
// hints: The type of hint to emit for assets that exceed the maximum size. The default value is "warning". The value can be set to "error" to turn the warning into an error, or false to disable the warning.
// The following example sets the maximum asset size to 500 KiB and disables the warning for entry points:

module.exports = {
    performance: {
        maxAssetSize: 500000,
        maxEntrypointSize: 500000,
    },
};
// The following example disables the warning altogether:

module.exports = {
    performance: false,
};
// The following example turns the warning into an error:

module.exports = {
    performance: {
        hints: "error",
    },
};


`ASSET FILTER`;
// The performance.assetFilter property can be set to a function that filters the assets for which the performance warning is issued. The function receives the filename of the asset as an argument and should return true if the warning should be issued for the asset, and false otherwise.

// The following example sets the asset filter to issue the warning only for JavaScript files:

module.exports = {
    performance: {
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js');
        },
    },
};




