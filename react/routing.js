`ROUTING IN REACT`;
// One reason why React is a library and not a framework is because it doesn't have a built-in routing system. However, with react-router-dom (a third-party package), you can add routing to your React applications. This extension provides a way to navigate between different components in your application, similar to how you would navigate between different pages in a traditional website.


`Using react-router-dom`;
// To use react-router-dom, you need to install it first. You can do this by running the following command in your project directory:

`npm install react-router-dom`;

// Once you have installed react-router-dom, you can import the necessary components from the library to set up routing in your application. The key components you will use are BrowserRouter, Route, and Switch.

// BrowserRouter: This component is used to wrap your application and provide the routing functionality. It ensures that the routing context is available to all components in your application. There are two types of routers: BrowserRouter and HashRouter. BrowserRouter uses the HTML5 history API to keep your UI in sync with the URL, while HashRouter uses the hash portion of the URL to keep your UI in sync with the URL (like fragments).

// Route: This component is used to define a route in your application. It specifies the path and the component that should be rendered when the path matches.

// Switch: This component is used to group Route components. It ensures that only one Route component is rendered at a time. When a path matches, the first matching Route component is rendered, and the rest are ignored.





`SETTING UP ROUTING`;
// Here's an example of how you can set up routing in a React application using react-router-dom:



// 1. Import the necessary components from react-router-dom:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// The BrowserRouter component is aliased as Router to make it easy. The Routes and Route components are used to define the routes in your application. There are two types of Routers: BrowserRouter and HashRouter. The BrowserRouter component uses the HTML5 history API to keep your UI in sync with the URL, while the HashRouter component uses the hash portion of the URL to keep your UI in sync with the URL (like fragments).

import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import BlogPage from './components/pages/BlogPage'
import ContactPage from './components/pages/ContactPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/blog' element={<BlogPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='*' element={
                    <>
                        <Header />
                        <NotFoundPage />
                        <Footer />
                    </>
                } />
            </Routes>
        </Router>
    )
}



// In this example, we have defined three routes: /about, /contact, and /services. When the user navigates to these paths, the corresponding components (AboutPage, ContactPage, and ServicesPage) will be rendered.






`Route Parameters`;
// You can also define routes with parameters in react-router-dom. Route parameters allow you to pass dynamic values in the URL path and access them in the component using the useParam Hook. For example, you can define a route like this:

<Route path="/user/:id" component={UserPage} />






`ESSENTIAL ROUTE ATTRIBUTES`;

`Path`;     // The path attribute specifies the URL path for the route. It can be a string an array of strings. The route will be matched if the URL path matches the specified path. For example, the following route will match the URL path /about: 


`Exact`;    // The exact attribute is a KEYWORD that specifies whether the route should match the URL path exactly. For example, the following route will only match the URL path /about and not /about/contact:
<Route exact path="/about" element={AboutPage} />


`Element`;  // The element attribute specifies the component(s) that should be rendered when the route matches. It can be a React component or an element. For example, the following route will render the HomePage component when the URL path is /:

<Route path='/' element={<HomePage />} />

// OR
``;
<Route path='/' element={<h1>This is the HomePage</h1>} />

// OR
``;
<Route path='/' element={
    <>
        <Header />
        <Body />
        <Footer />
    </>
} />





`Link`; // You can create links to other routes within your project in react-router-dom using the Link component. The Link component takes a 'to' attribute that specifies the URL path to link to. For example, you can create a link to the /about route like this:

<Link to="/about">About</Link>
``;
// The link component is better than the anchor tag for internal links because it prevents the page from reloading when the link is clicked. It also updates the URL in the address bar without reloading the page.


// The link component can also take an object as the 'to' attribute. This object can contain the pathname, search, hash, and state properties. For example, you can create a link with a search query like this:

<Link to={{
    pathname: '/search',
    search: '?q=react',
    hash: '#section1',
    state: { from: 'home' }
}}
>Search
</Link>



`activeClassName`; // The activeClassName attribute specifies the class name to apply to the link when the route is active. For example, you can apply the 'active' class to the link when the route is active like this:

<Link to="/about" activeClassName="active">About</Link>




`NAVLINK`; // Like the name implies, NavLink is used for navigation link. The NavLink component is similar to the Link component but with additional features. The NavLink component allows you to style the link based on whether the route is active or not. You can use the activeClassName attribute to specify the class name to apply when the route is active. For example, you can apply the 'active' class to the link when the route is active like this:

<NavLink to="/about" activeClassName="active">About</NavLink>
``;

// The NavLink component also has an activeStyle attribute that allows you to apply inline styles when the route is active. For example, you can apply a red color to the link when the route is active like this:

<NavLink to="/about" activeStyle={{ color: 'red' }}>About</NavLink>
``;






`NESTED ROUTES`;
// You can nest routes in react-router-dom by using the children attribute. This allows you to define routes within routes. For example, you can define a route like this:

<Route path='/' element={<HomePage />}>
    <Route path='/about' element={<AboutPage />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='/services' element={<ServicesPage />} />
</Route>







`NAVIGATE`;
// Navigate is a react-router-dom component that allows you to navigate programmatically in your application. You can use the navigate component to navigate to a different route in response to user actions or other events. For example, you can navigate to the /about route when a button is clicked like this:

import { Navigate } from 'react-router-dom';

function AboutButton() {
    return (
        <button onClick={() => <Navigate to="/about" />} >About</button>
    )
}

// The navigate component is similar to the Link component but allows you to navigate programmatically instead of using a link. You can use the navigate component in response to user actions or other events to navigate to a different route in your application.


`useNavigate`;
// The useNavigate hook is another way to navigate programmatically in your application. The useNavigate hook returns a navigate function that you can use to navigate to a different route. For example, you can use the useNavigate hook to navigate to the /about route when a button is clicked like this:

import { useNavigate } from 'react-router-dom';

function AboutButton() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate('/about')} >About</button>
    )
}

// The useNavigate hook is similar to the navigate component but allows you to navigate programmatically using a hook instead of a component. You can use the useNavigate hook in response to user actions or other events to navigate to a different route in your application. 







`ROUTE PARAMETERS`;
// You can define routes with parameters in react-router-dom. Route parameters allow you to pass dynamic values in the URL path and access them in the component. For example, you can define a route like this:

<Route path="/user/:id" component={UserPage} />


// In this example, the :id is a route parameter that can be accessed in the UserPage component. For example, if the URL path is /user/123, the id parameter will be 123. You can access the route parameters in the component using the useParams hook from react-router-dom. The useParams hook returns an object containing the route parameters. For example, you can access the id parameter in the UserPage component like this:

`Accessing Route Parameters`;
// You can access route parameters in the component using the useParams hook from react-router-dom. The useParams hook returns an object containing the route parameters. For example, you can access the id parameter in the UserPage component like this:

import { useParams } from 'react-router-dom';
import Header from './feedback-app/src/components/Header';

function UserPage() {
    const { id } = useParams();
    return <div>User ID: {id}</div>;
}
