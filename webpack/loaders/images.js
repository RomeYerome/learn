`IMAGE ASSETS`;
// To compile images with webpack, you need to use the asset/resource loader which is native to webpack (so you don't have to install it) and add the appropriate settings in your webpack configuration file. 

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};

// The test property is a regular expression that matches the file extensions of the image files you want to compile. In this example, the regular expression matches .png, .svg, .jpg, .jpeg, and .gif files.


// Next you need to import the image file into you main JavaScript file. The webpack compiler will process it and return the public url to that image.

// Next find and assign the src to the desired image from your html file and webpack will compile it into the output directory. Here is an example of how to import an image file in JavaScript:



`Importing the Image into your main JavaScript file`;
// Entry Javascript file

// import image from './image.png';

// const img = document.createElement('img'); || new Image(); || document.getElementById('image');

// img.src = image;

// the image will be compiled into the output directory and the public URL will be returned to the image variable when you import it. This is how you can use the image variable to set the src attribute of an img element in your HTML file.




`Asset FileName`;
// By default, the asset/resource loader emits the file with a hash in the filename. If you want to keep the original filename, you can use the [name] placeholder in the output filename. Here is an example of how to keep the original filename of the image file:

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
        ],
    },
};


// OR you add an AssetModuleFilename to the output object in your webpack configuration file. Here is an example of how to keep the original filename of the image file:

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    output: {
        assetModuleFilename: 'images/[name][ext]',  // keeps the original filename of the image file
    },
};
