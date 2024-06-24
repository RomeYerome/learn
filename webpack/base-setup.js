`WEBPACK SETUP`;
// To setup a webpack project, you'll need to initialize a new npm project by running `npm init -y` in your terminal. Next, install webpack and webpack-cli by running `npm install webpack webpack-cli --save-dev`

`npm init -y`;

`npm install webpack webpack-cli -D`;



`Folder Structure`;
// Next you'll need to setup the following file and folder structure:

// - src/
//   - index.html
//   - index.js
// - dist/
//   - index.html
//   - bundle.js
// - webpack.config.js

// The dist/ folder will contain the final output of your webpack build. The src/ folder will contain your source files. The webpack.config.js file will contain the configuration for your webpack build.




`Build Script`;
// Next, add a build script to your package.json file. This script will run webpack to build your project. You can add the following script to your package.json file

`
"scripts": {
  "build": "webpack"
}
`;

// Now you can run `npm run build` in your terminal to build your project.







// Later on we'll install a plugin called html-webpack-plugin that will help us generate the index.html file in the dist/ folder. This plugin will also inject the bundle.js file into the index.html file.

// With this plugin installed and setup, you won't need to manually create the index.html file in the dist/ folder. The plugin will generate it for you.


