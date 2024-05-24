`EFFECTS IN REACT`;
// Effects or SideEffects in react are operations triggered by changes in the state or props of a component. Just like the name implies, they are the side effects of a change or update in the state or props of a component. They are used to perform operations that are not directly related to the rendering of the component. They are used to perform operations like data fetching, setting up subscriptions, and manually changing the DOM in React components.



`USEEFFECT HOOK`;
// Effects are implemented using the useEffect hook in React. The useEffect hook is a built-in hook in React that allows you to perform side effects in your functional components. The useEffect hook is called after the component has been rendered to the DOM. It is called after every render of the component. The useEffect hook takes two arguments, a callback function and an array of dependencies. The callback function is the side effect you want to perform, and the array of dependencies is an array of values that the effect depends on. The effect will only be called if one of the values in the array of dependencies changes.

// The useEffect hook can be used to perform operations like data fetching, setting up subscriptions, and manually changing the DOM in React components. It can also be used to clean up side effects by returning a cleanup function from the effect.


`USEEFFECT HOOK EXAMPLE`;
// The following is an example of how to use the useEffect hook in a React component:
import { useEffect } from 'react';

function MyComponent() {
    useEffect(() => {
        // Perform side effect here
    }, [/* array of dependencies */]);

    return (
        ` some JSX`
    )
}

// In the example above, the useEffect hook is used to perform a side effect in the MyComponent component. The side effect is defined in the callback function passed to the useEffect hook. The array of dependencies is an array of values that the effect depends on. The effect will only be called if one of the values in the array of dependencies changes.

// Basically you pass it a function you want to run when the component renders, and an array of dependencies that will trigger the function to run when they change. If you pass an empty array, the function will only run once when the component mounts. If you don't pass an array, the function will run every time the component renders.