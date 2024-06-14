`LINKS`;
// Styling Links and Buttons with CSS is a bit different because you typically have to consider states like hover, active, and focus.

// Links come with an ugly default underline and blue color, so you'll want to remove that with text-decoration: none; and color: yourPreferedColor;

// Buttons are similar to links, but you'll want to add padding, border-radius, and a background color to make them look like buttons. Sometimes you'll also want to style links to look like buttons.

// Here's an example of how you can style links and buttons in CSS:

// Link
`
a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
}

a:hover {
    color: #666;
}

a:active {
    color: #000;
}

a:focus {
    outline: none;
}

a:visited {
    color: #666;
}
`;

// Button
`
button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: #333;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
}

button:hover {
    background-color: #666;
}

button:active {
    background-color: #000;
}

button:focus {
    outline: none;
}
`;

// You can also style links to look like buttons by adding the button styles to the link styles:


`The big difference between links and buttons is that links are used to navigate to other pages, while buttons are used to perform actions. Links have a href attribute and cursor by default, while buttons don't. You can add a cursor: pointer; to buttons to show they are clickable. Buttons are used to submit forms, open modals, and perform other actions. Links are used to navigate to other pages.`