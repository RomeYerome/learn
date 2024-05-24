`WHAT IS REACT?`;
// React is a javascript library for building user interfaces created and maintained by Facebook. It is not a framework like Angular or Vue (because it doesn't have a built in router or http client) but a library that focuses on the view layer of the application. React is used to build single-page applications, mobile applications, and large-scale applications. React is a declarative, efficient, and flexible library that makes it easy to build complex user interfaces.

// NOTE: React can be extended to be a framework in essence by adding libraries like react-router for routing, axios for http requests, and redux for state management.


`Components`;
// React gives us a way to build UIs with organized and reusable components. React uses a virtual DOM to update the actual DOM efficiently. React uses JSX which is a syntax extension for javascript that allows us to write HTML in javascript. JSX makes it easier to write and understand the code.

// A component is a reusable piece of code that defines how a part of the UI should look. Components can be nested inside other components to create complex UIs. Components can be functional or class components. Functional components are just functions that return JSX. Class components are ES6 classes that extend React.Component and have a render method that returns JSX.

// A component is all encompassing, containing the output (JSX/HTML), the logic (javascript), and the styles (CSS). This makes it easy to manage and maintain the codebase.

// Examples of components can be the header, the footer, the searchbar etc



`Benefits of Using React`;
// 1. Organization: React allows you to organize your code into reusable components. This makes it easier to maintain and update your codebase.
// 2. Reusable: React components are reusable. You can use the same component in multiple places in your application. Or in multiple applications.
// 3. Efficiency: React uses a virtual DOM to update the actual DOM efficiently. This makes React fast and efficient.
// 4. Declarative: React uses a declarative programming style. This makes it easier to write and understand the code.
// 5. Flexibility: React is a flexible library that can be extended with other libraries to create a full-featured framework.
// 6. Community: React has a large and active community. There are many resources available to help you learn and use React.



`Building Blocks of React`;
// 1. Components: Components are the building blocks of React. Components are reusable pieces of code that define how a part of the UI should look.
// 2. Props: Props are like arguments (of any data type) passed into a component. Props are read-only and cannot be changed by the child component.
// 3. State: is data, you have component state e.g open & close for a navigation, OR app level state e.g users. State is mutable and can be changed by the component.
// 4. Events: Events are actions that can be triggered by the user (e.g clicking a button). Events are used to update the state of the component.



`HOW DOES REACT WORK ?`;
// React creates a virtual DOM in memory, instead of manipulating the browser's DOM directly, react does all it's manipulations in the virtual DOM before changing only what needs to be changed in the browser DOM. It basically compares the virtual DOM with the browser DOM and only updates the parts that have changed. This makes React fast and efficient.