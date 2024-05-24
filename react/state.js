`WHAT IS STATE IN REACT?`;
// State is basically data. It is a built-in feature in React that allows you store data. State is used to manage the data that changes over time in a component. When the state of a component changes, React automatically re-renders the component to reflect the updated state. State is a key concept in React because it allows you to create dynamic and interactive user interfaces.

// There are 2 types of state in React: local state (component level state) and global state (app level state). Local state is used to manage the state of a single component, while global state is used to manage the state of multiple components and is usually in the main App.js file so it can be passed into child components.

// In React, state is managed by the useState hook, which is a built-in hook that allows you to add state to functional components. The useState hook returns an array with two elements: the current state value and a function that allows you to update the state value.

// A hook is a special function that allows you to use state and other React features in functional components. Hooks are a new addition in React 16.8 and provide a way to use state and other React features without writing a class component.

// Here is an example of using the useState hook to add state to a functional component:


// First, you need to import the useState hook from the 'react' package
`
import React, { useState } from 'react';

function Counter() {
    // Declare a state variable called count and a function to update the count
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
`;


// The useState format is as follows:

// const [stateName, setStateName] = useState(initialState);

// The useState hook takes an initial state value as an argument and returns an array with two elements: the current state value and a function to update the state value. In the example above, we declare a state variable called count with an initial value of 0 and a function called setCount to update the count value.