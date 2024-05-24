`PROPS`;
// Props (short for properties) are a way to pass data from a parent component to a child component in React. Props are read-only and cannot be modified by the child component. Props are used to pass data down the component tree and are a fundamental concept in React.

// Props are passed to a component as attributes in JSX. For example, if you have a component called Hello that takes a prop called name, you can pass the name prop to the Hello component like this:

`<Header title="Feedback UI" />`;

// In this example, the title prop is passed to the Header component with the value "Feedback UI". The Header component can then access the title prop inside its function body like this:

`
function Header(props) {
    return <header>
        <div className="container">
            <h2>{props.title}</h2>
        </div>
    </header>;
}
`;

// In this example, the title prop is accessed using the props object inside the Header component. The value of the title prop is rendered inside an h2 element in the Header component.

// Props can be used to pass any type of data to a component, including strings, numbers, arrays, objects, functions, and even other components. Props are a powerful way to pass data between components in a React application and are a key part of building reusable and composable UI components.



`Destructuring Props`;
// Props can also be destructured inside a component to make it easier to access individual props. For example, you can destructure the title prop inside the Header component like this:

`
function Header({ title }) {
    return <header>
        <div className="container">
            <h2>{title}</h2>
        </div>
    </header>;
}
`;

// In this example, the title prop is destructured inside the Header component, which allows you to access the title prop directly without using the props object. This can make your code more concise and easier to read, especially when working with multiple props in a component.



`Default Parameters`;
// You can also define default values for props in a component just like you will with JS arguments. If a prop is not provided when the component is rendered, the default value will be used instead. Here's an example of how to define default props for a component:

`
function Header({ title = "Default Title"}) {
    return <header>
        <div className="container">
            <h2>{title}</h2>
        </div>
    </header>;
}

`;

// In this example, the Header component defines a default property that specifies a default value for the title prop. If the title prop is not provided when the Header component is rendered, the default value 'Default Title' will be used instead.



`Prop Types`;
// You can also define the types of props that a component expects using the propTypes property. Prop types help catch bugs and provide better documentation for your components. Here's an example of how to define prop types for a component:

`
import PropTypes from 'prop-types';

function Header({ title }) {
    return <header>
        <div className="container">
            <h2>{title}</h2>
        </div>
    </header>;
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};
`;

// In this example, the Header component defines a propTypes property that specifies that the title prop should be a string and is required (optional). If the title prop is not provided or is not a string, a warning will be logged to the console. PropTypes help ensure that the correct data types are passed to a component and provide better error handling and debugging capabilities.


`ArrayOf PropType`;
// In addition to all the data types you can define for a prop, there is the special ArrayOf PropType that lets you specify the expected elements in an array. Here's an example of how to define an array of strings prop type for a component:

`
Component.propTypes = {
    names: PropTypes.arrayOf(PropTypes.string).isRequired
};

OR

Component.propTypes = {
    namesArray: PropTypes.arrayOf(
        {
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired
        }
    )
`;

// In the first example, the names prop is expected to be an array of strings. If the names prop is not an array of strings, a warning will be logged to the console. In the second example, the namesArray prop is expected to be an array of objects with name and age properties. If the namesArray prop is not an array of objects with name and age properties, a warning will be logged to the console.






`CHILDREN PROP / CHILDREN ELEMENTS IN REACT COMPONENTS`;
// The children prop is a special prop that can be used to pass children elements to a React component. The children prop allows you to nest elements inside a component and access them within the component's render /return method.

// The children prop is a common pattern in React that allows you to create reusable components that can be composed together to create complex UIs. By using the children prop, you can create components that can render different content based on the children elements that are passed to them.

// For example. A card component

// Card.jsx

export default function Card({ children }) {
    return <div className="card">
        {children}
    </div>;
}

// App.js

import Card from './Card';

export default function App() {
    return <Card>
        <h2>Card Title</h2>
        <p>Card Content</p>
    </Card>;
}

// In this example, the Card component takes a children prop and renders the children elements inside a div with the card class. The children elements passed to the Card component are rendered inside the div with the card class.

// This pattern allows you create flexible custom components that can be used to render different content based on the children elements that are passed to them. The children prop is a powerful feature in React that allows you to create reusable components that can be composed together to create complex UIs.






`PROPS DRILLING IN REACT`;
// Props drilling is a common pattern in React where props are passed down from a parent component to a child component, and then to another child component, and so on. Props drilling is a way to pass data from a parent component to a deeply nested child component without using state management libraries like Redux or Context API.

// Props drilling is a simple and effective way to pass data between components in a React application. However, it can become cumbersome and hard to maintain as the application grows and the component tree becomes more complex. In such cases, you may want to consider using state management libraries like Redux or the Context API to manage application state more effectively.







`CONDITIONAL STYLES AND CLASSES IN REACT COMPONENTS`;
// You can conditionally apply styles and classes to elements in a React component by using JavaScript expressions inside JSX. By using JavaScript expressions, you can dynamically change the styles and classes of elements based on the component's state or props.

// For example, you can conditionally apply a class to an element based on a prop value like this:



`Outside the return statement`;
// Header.jsx

export default function Header({ title, isDarkMode }) {
    const headerStyles = {
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black'
    };

    return <header style={headerStyles}>
        <div className="container">
            <h2>{title}</h2>
        </div>
    </header>;
}

// In this example, the Header component takes a title prop and an isDarkMode prop. The headerStyles object is used to conditionally apply background and text colors to the header element based on the value of the isDarkMode prop. If the isDarkMode prop is true, the header element will have a black background and white text color; otherwise, it will have a white background and black text color.



`Conditional Classes - Inside the return statement`;

// Header.jsx

export default function Header({ title, isDarkMode }) {
    return <header className={isDarkMode ? 'dark' : 'light'}>
        <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
            <h2>{title}</h2>
        </div>
    </header>;
}

// As seen above, conditional styling is acheived using the ternary operator and template strings. The className attribute is used to conditionally apply a class to an element based on the value of the isDarkMode prop. If the isDarkMode prop is true, the header element will have the dark class; otherwise, it will have the light class. The container element also has a conditional class based on the value of the isDarkMode prop.



`Conditional Styles - Inside the return statement`;

// Header.jsx

export default function Header({ title, isDarkMode }) {
    return <header style={{ backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>
        <div className="container">
            <h2>{title}</h2>
        </div>
    </header>;
}