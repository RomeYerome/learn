`CONTEXT API`;
// The Context API is a feature in React that allows you to share data between components without having to pass props down manually through each level of the component tree. This can be useful for sharing global data such as user authentication status, theme settings, or language preferences.

// The Context API consists of two main components: the Context object and the Provider component. The Context object is used to create a new context, while the Provider component is used to provide the context value to its child components.

// Here's an example of how you can use the Context API in a React application:

// 1. Import the createContext() function from the react module:
import { createContext } from 'react';

// 2. Create a new context using the createContext() function:
const MyContext = createContext();

// 3. Create a Provider component that wraps the child components and provides the context value to them:
const MyProvider = ({ children }) => {
    const contextValue = 'Hello, world!';

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};

// 4. Export the context object and the Provider component so that they can be used in other parts of the application:
export { MyContext, MyProvider };

// 5. Use the useContext() hook to access the context value in a child component:
import { useContext } from 'react';
import { MyContext } from './MyContext';

const MyComponent = () => {
    const contextValue = useContext(MyContext);

    return <div>{contextValue}</div>;
}

// In this example, we create a new context called MyContext and a Provider component called MyProvider. We then provide the context value 'Hello, world!' to the child components using the Provider component. Finally, we access the context value in a child component using the useContext() hook.