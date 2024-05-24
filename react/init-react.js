`AFTER RUNNING NPM START`;
// The development server will start and open your React application in your default web browser. You can now start building your React application.

// The app will have two folders: public and src. The public folder contains the index.html file, which is the main HTML file for your React application. The src folder contains the source code for your React application(App.css, App.js, index.css, index.js, App.test.js, logo.svg, setupTests.js, reportWebVitals).


`public/Index.html`;
// The index.html file contains a template for your React application. It is the main HTML file that is served to the browser when a user visits your React application. The index.html file contains a div element with an id of root. This is where your React application will be rendered.

// Change the title to the name of your application. You can also add meta tags, links to stylesheets, and other resources that your application needs.



`src Folder`;
// The src folder contains the source code for your React application. It contains the following files:

// 1. App.css: This file contains the styles for your React application. You can add CSS styles to this file to style your components.
// 2. App.js: This file contains the main component for your React application. This is where you will define the structure of your application and the logic for your components.
// 3. index.css: This file contains global styles for your React application. You can add global styles to this file that will be applied to all components in your application.
// 4. index.js: This file is the entry point for your React application. It is where you will render your main component to the DOM.
// 5. App.test.js: This file contains tests for your React components. You can write tests for your components using Jest and run them using the npm test command.
// 6. logo.svg: This file contains the logo for your React application. You can replace this file with your own logo.
// 7. setupTests.js: This file contains setup code for your tests. You can configure Jest and other testing libraries in this file.
// 8. reportWebVitals: This file contains code to report web vitals to an analytics endpoint. You can use this file to track the performance of your React application.




// You can delete all of it and create them from scratch or modify them to suit your needs.






`INDEX.JS - Main Entry Point`;
// The index.js file is the entry point for your React application. It is where you will render your main component to the DOM. The index.js file contains the following code:

`import React from 'react';`;
`import ReactDOM from 'react-dom/client';`;
`import './index.css';`; // Import the global styles for your application (optional)
`import App from './App';`; // Import the main component for your application
`import reportWebVitals from './reportWebVitals';`; // Import the function to report web vitals(optional)


// react-dom/client is used to render the main component to the DOM. The ReactDOM.render() function takes two arguments: the main component to render and the root element in the index.html file where the component will be rendered.
`ReactDOM.render(`;
`<React.StrictMode>`;
`<App />`; // Render the main component to the DOM
`</React.StrictMode>,`;
`document.getElementById('root')`; // Render the main component to the root element in the index.html file
`);`;


// OR

// You can use ReactDOM.createRoot() to create a root and render the main component to it. This is a new feature in React 18.
`const root = ReactDOM.createRoot(document.getElementById('root'));`;
`root.render(`;
`<React.StrictMode>`;
`<App />`; // Render the main component to the root
`</React.StrictMode>`;
`);`;


// The React.StrictMode component is used to enable strict mode for your application. Strict mode helps you identify potential problems in your application and provides helpful warnings in the console.


// OPTIONAL
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






`APP.JS - Main Component`;
// The App.js file contains the main component for your React application. This is where you will define the structure of your application and the logic for your components. The App.js file can contain code like the following:

`import logo from './logo.svg';`; // Import the logo for your application
`import './App.css';`; // Import the styles for your component

`function App() {
    return ( 
        <div className="App"> 
            <header className="App-header"> 
                <img src={logo} className="App-logo" alt="logo" /> 
                <p> 
                    Edit <code>src/App.js</code> and save to reload. 
                </p>
                <a 
                    className="App-link" 
                    href="https://reactjs.org" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}`;

`export default App;`; // Export the main component for use in other files
