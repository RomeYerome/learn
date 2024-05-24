`WHAT IS JSX`;
// JSX stands for JavaScript XML. It is a syntax extension (syntactic sugar) for JavaScript that allows you to write HTML-like code in your JavaScript files. JSX is used to describe what the UI should look like. JSX code is transformed into regular JavaScript code using a transpiler like Babel before it is rendered to the DOM. JSX is not a requirement for writing React applications, but it is a popular choice because it makes writing UI components more intuitive and readable.


`JSX Syntax`;
// JSX syntax is similar to HTML, but there are a few key differences. Here are some of the main differences between JSX and HTML:

// 1. JSX uses camelCase for attribute names, like className instead of class.
// 2. JSX uses JavaScript expressions inside curly braces {} to evaluate variables or expressions. For example, {name} will render the value of the name variable.
// 3. JSX elements can be nested inside each other, just like HTML elements.    
// 4. JSX elements can have event handlers and other attributes just like HTML elements. For example, onClick, onChange, etc.
// 5. JSX elements can be assigned to variables, passed as arguments to functions, and returned from functions.
// 6. JSX elements can be conditionally rendered using JavaScript expressions inside curly braces {}.
// 7. JSX elements can be used in loops to render a list of items.
// 8. JSX elements can be used to create custom components that can be reused throughout your application.
// 9. JSX elements can be used to create fragments, which allow you to return multiple elements from a component without adding extra nodes to the DOM.



`JSX RESERVED ATTRIBUTES SUBSTITUTIONS`;
// There are a few attributes that are reserved in JSX and cannot be used as attribute names. These attributes are used by React/JS for special purposes and should not be used for custom attributes. Here are some of the reserved attributes in JSX:

// 1. class -> className
// 2. for -> htmlFor




`NOTE`; 
// You can only return one element from a component. If you need to return multiple elements, you can wrap them in a parent element like a div or use a fragment <>...</> to return multiple elements without adding extra nodes to the DOM.


`JSX Example`;
// Here is an example of JSX code that renders a simple heading element:

`import React from 'react';`;

`function App() {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
}`;

// What's really happening under the hood is that the JSX code is transformed into the following JavaScript code:

`function App() {
    return React.createElement(
        'div',
        null,   // the null is an object of properties that can be passed to the element
        React.createElement('h1', null, 'Hello, World!')
    );
}`;


`export default App;`;
// In this example, we define a functional component called App that returns a div element containing an h1 element with the text "Hello, World!". The JSX code is transformed into the following JavaScript code





// In this example, we define a functional component called App that returns a div element containing an h1 element with the text "Hello, World!". The JSX code is transformed into the following JavaScript








`DYNAMIC VALUES & EXPRESSIONS IN JSX`;

// JSX allows you to embed JavaScript variables or expressions inside curly braces {} to be evaluated to their value. This allows you to create dynamic content in your UI components. Here are some examples of using dynamic values and expressions in JSX:

`function App() {
    const name = 'John Doe';
    const age = 30;
    const greeting = 'Hello, World!';

    return (
        <div>
            <h1>{greeting}</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Current Date: {new Date().toLocaleDateString()}</p>
            <p>Random Number: {Math.random()}</p>
        </div>
    );
}`;




`Creating Lists in JSX`;
// JSX allows you to create lists of elements by using JavaScript expressions inside curly braces {} to map over an array of data and return a list of elements. Here is an example of creating a list of items using JSX:

`function App() {
    const items = ['Apple', 'Banana', 'Orange', 'Mango'];

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}`;

// In this example, we define an array of items and use the map method to iterate over the items array and return a list item element for each item. We also provide a key attribute to each list item element to help React identify each item in the list.

// The key attribute is important and is used by React to keep track of the elements in the list and optimize the rendering process. It should be a unique identifier for each item in the list.




`Conditional Rendering in JSX`;
// JSX allows you to conditionally render elements based on JavaScript expressions inside curly braces {}. This allows you to show or hide elements based on certain conditions. Here is an example of conditional rendering in JSX:

`function App() {
    const isLoggedIn = true;

    if (!isLoggedIn) {
        return <p>Please log in to continue.</p>;
    }

    return (
        <div>
            {isLoggedIn 
                ? <p>Welcome, User!</p>
                : <p>Please log in to continue.</p>
            }
        </div>
    );
}`;


// In this example, we define a variable isLoggedIn that determines whether the user is logged in or not. We use the ternary operator to conditionally render different elements based on the value of isLoggedIn. If isLoggedIn is true, we render a welcome message, otherwise, we render a message asking the user to log in.

// Outside the return statement, you can write regular javascript code. Inside the return statement, you can only write JSX code.










`STYLE IN JSX`;
// You can also apply inline styles to JSX elements using the style attribute. The style attribute takes an object with CSS properties and values as key-value pairs. Here's an example of how to apply inline styles to a JSX element:

`
function Header({ title }) {
    const headerStyle = {
        backgroundColor: 'lightblue',
        color: 'white',
        padding: '1rem'
    };

    return <header style={headerStyle}>
        <div className="container">
            <h2>{title}</h2>
        </div>
    </header>;
}
`;

// In this example, the Header component defines a headerStyle object that contains CSS properties and values. The headerStyle object is then passed to the style attribute of the header element to apply the inline styles. Inline styles in JSX allow you to create dynamic and reusable styles for your components.


