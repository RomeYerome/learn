`CSS SELECTORS`;
// CSS selectors are used to target specific HTML elements to apply styles to. There are several types of CSS selectors, each with a different level of specificity and targeting capabilities.



`ELEMENT SELECTORS`;
// Element selectors target HTML elements based on their tag name. They are the simplest type of selector and apply styles to all elements of the specified tag name.

// Example:

`h1 {
    color: red;
}`;

// In this example, the h1 selector targets all <h1> elements and sets their text color to red.




`CLASS SELECTORS`;
// Class selectors target HTML elements based on their class attribute. They are denoted by a period (.) followed by the class name.

// Example:

`.highlight {
        background-color: yellow;
    }`;

// In this example, the .highlight selector targets all elements with the class name "highlight" and sets their background color to yellow.

// You can limit your class selector to a specific element by combining it with an element selector. For example, h1.highlight will target only <h1> elements with the class name "highlight".






`ID SELECTORS`;
// ID selectors target HTML elements based on their id attribute. They are denoted by a hash (#) followed by the id name.

// Example:

`#header {
        font-size: 24px;
    }`;

// In this example, the #header selector targets the element with the id "header" and sets its font size to 24 pixels.

// ID selectors have a higher specificity than class selectors, which means they will override class selectors if they conflict. You can limit your ID selector to a specific element by combining it with an element selector. For example, h1#header will target only <h1> elements with the id "header".


`Universal Selector`;
// The universal selector (*) targets all HTML elements on the page. It is denoted by an asterisk (*).

// Example:

`* {
        margin: 0;
        padding: 0;
    }`;

// In this example, the * selector targets all HTML elements and sets their margin and padding to 0.




`GROUPING SELECTORS`;
// Grouping selectors target multiple HTML elements by grouping them together in a comma-separated list.

// Example:

`h1, h2, h3 {
        color: blue;
    }`;

// In this example, the h1, h2, h3 selector targets all <h1>, <h2>, and <h3> elements and sets their text color to blue.







`ATTRIBUTE SELECTORS`;
// Attribute selectors target HTML elements based on their attributes. They are denoted by square brackets [] with the attribute name and optional value.

// Example:

`[type="text"] {
            border: 1px solid black;
        }`;

// In this example, the [type="text"] selector targets all elements with the attribute type="text" and sets their border to 1 pixel solid black.

`[type] {
            background-color: lightgray;
        }`;

// In this example, the [type] selector targets all elements with a type attribute and sets their background color to light gray.





`COMBINATOR SELECTORS`;
// Combinator selectors target HTML elements based on their relationship to other elements. There are several types of combinator selectors, including descendant, child, adjacent sibling, general sibling, and more.

`Descendeant Selector`;

`div p {
            color: blue;
        }`;

// In this example, the div p selector targets all <p> elements that are descendants of a <div> element and sets their text color to blue.




`Direct Child Selector:`;



`div > p {
            color: red;
        }`;

// In this example, the div > p selector targets all <p> elements that are direct children of a <div> element and sets their text color to red.



`Adjacent Sibling Selector:`;

`h1 + p {
            font-weight: bold;
        }`;

// In this example, the h1 + p selector targets all <p> elements that are immediately preceded by an <h1> element and sets their font weight to bold.


`Direct Adjacent Sibling Example`;

`h1 ~ p {
            font-style: italic;
        }`;

// In this example, the h1 ~ p selector targets all <p> elements that are direct siblings of (right next to) an <h1> element and sets their font style to italic. 












`PSEUDO-CLASS SELECTORS`;
// Pseudo-class selectors target HTML elements based on their state or position. They are denoted by a colon (:) followed by the pseudo-class name.

// Example:

`a:hover {
            text-decoration: underline;
        }`;

// In this example, the a:hover selector targets all <a> elements that are being hovered over by the mouse and sets their text decoration to underline.




`All the pseudo-class selectors are:`;

`links`;
// :link - Selects all unvisited links
// :active - Selects the active link
// :visited - Selects all visited links


`user interaction`;
// :focus - Selects the element that has focus
// :hover - Selects the element that the mouse is over


`form elements`;
// :checked - Selects every checked <input> element
// :disabled - Selects every disabled <input> element
// :enabled - Selects every enabled <input> element
// :read-only - Selects <input> elements with a "readonly" attribute specified
// :read-write - Selects <input> elements with no "readonly" attribute
// :required - Selects <input> elements with a "required" attribute specified
// :optional - Selects <input> elements with no "required" attribute
// :out-of-range - Selects <input> elements with a value outside a specified range
// :in-range - Selects <input> elements with a value within a specified range
// :invalid - Selects all <input> elements with an invalid value
// :valid - Selects all <input> elements with a valid value



`child and sibling selectors`;
// :first-child - Selects the first child of a parent element
// :first-of-type - Selects the first <h1> element

// :last-child - Selects the last child of a parent element
// :last-of-type - Selects the last <h1> element

// :nth-child(n) - Selects every element that is the nth child, regardless of type, of its parent
// :nth-last-child(n) - Selects every element that is the nth child, regardless of type, of its parent, counting from the last child

// :nth-last-of-type(n) - Selects every element that is the nth child, of a particular type, of its parent, counting from the last child
// :nth-of-type(n) - Selects every element that is the nth child, of a particular type, of its parent

// :only-of-type - Selects every element that is the only child, of a particular type, of its parent
// :only-child - Selects every element that is the only child of its parent


// :empty - Selects every element that has no children
// :lang(language) - Selects every element in a specific language
// :not(selector) - Selects every element that is not a specified element
// :root - Selects the document's root element
// :target - Selects the current active #target element



`Nth-child Selector`;
// The :nth-child(n) pseudo-class selector selects every element that is the nth child of its parent, regardless of the element type. The value of n can be a number, a keyword, or a formula. nth-child selector is very versatile so here's a few examples to illustrate its usage.

// n is a number
`li:nth-child(2) {
            color: red;
        }`;

// In this example, the li:nth-child(2) selector targets the second <li> element and sets its text color to red.


// n is a keyword
`li:nth-child(even) {
            background-color: lightgray;
        }`;

// In this example, the li:nth-child(even) selector targets all even-numbered <li> elements and sets their background color to light gray. i.e it selects the 2nd, 4th, 6th, etc. <li> elements. You can also use the odd keyword to select all odd-numbered elements.


// n is a formula (counter + offset)
`li:nth-child(2n+1) {
            font-weight: bold;
        }`;

// In this example, the li:nth-child(2n+1) selector targets every odd-numbered <li> element and sets its font weight to bold. The formula 2n+1 selects all odd-numbered elements starting from the first element. You can also use other formulas like 3n+1, 4n+2, etc. to target different sets of elements. The offset value can be any integer, positive or negative. It basically tells the selector where to start counting from. The counter on the other hand is the multiplier of n. In this case, the counter is 2, so the selector will select every 2nd element starting from the offset value of 1.












`PSEUDO-ELEMENT SELECTORS`;
// Pseudo-element selectors target specific parts of HTML elements. They are denoted by a double colon (::) followed by the pseudo-element name.

// Example:

`p::first-line {
            font-weight: bold;
        }`;

// In this example, the p::first-line selector targets the first line of all <p> elements and sets the font weight to bold.

`Common pseudo-element selectors are:`
// ::first-line - Selects the first line of an element  
// ::first-letter - Selects the first letter of an element
// ::before - Insert content before an element
// ::after - Insert content after an element
// ::selection - Selects the portion of an element that is selected by a user
// ::placeholder - Selects the placeholder text of an <input> element
// ::marker - Selects the marker box (list style) of a list item
// ::spelling-error - Selects a word with a spelling error
// ::grammar-error - Selects a word with a grammar error
// ::file-selector-button - Selects the button of a file input element




`::before and ::after Pseudo-elements`;
// The ::before and ::after pseudo-elements are used to insert content before and after an element, respectively. They are often used to add decorative elements or icons to elements without modifying the HTML content.

// Example:
    
    `.button::before {
                content: "🔥";
            }`;

// In this example, the .button::before selector inserts a fire emoji before the content of all elements with the class "button".

    `.button::after {
                content: "🔥";
            }`;


// In this example, the .button::after selector inserts a fire emoji after the content of all elements with the class "button".

// You can use the content property to specify the content to be inserted. This content can be text, an image, or any other valid CSS content value.


`::before & ::after for Overlay`;
// You can use the ::before and ::after pseudo-elements to create an overlay effect on an element. By positioning the pseudo-elements absolutely and setting their background color and opacity, you can create a semi-transparent overlay on top of the element.

// Example:
    
        `.overlay::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                }`;
                

// In this example, the .overlay::before selector creates a semi-transparent black overlay on top of all elements with the class "overlay". The rgba() function is used to specify the background color with an alpha (opacity) value of 0.5, making the overlay 50% transparent.






