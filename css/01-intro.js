`CSS`;
// stands for Cascading Style Sheets. It is used to style / beautify the content on web pages. CSS is used to define the layout, colors, fonts, and other visual aspects of a webpage. 

// CSS is a language that describes the style of an HTML document. CSS describes how HTML elements should be displayed. There are three ways to apply CSS to an HTML document: inline, internal, and external.

`INLINE CSS`;
// Inline CSS is used to apply a unique style to a single HTML element. It is applied directly to the element using the style attribute. Inline CSS has the highest specificity and will override any other CSS that is applied to the element. However, it is not recommended to use inline CSS because it mixes content with presentation and makes the code harder to maintain.

// Example:

<h1 style="color: red;">This is a heading</h1>

`INTERNAL CSS`;
// Internal CSS is used to apply a unique style to a single HTML document. It is placed inside the <style> tag in the <head> section of the HTML document. Internal CSS has a medium specificity and will override external CSS but not inline CSS.

// Example:

`<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: red;
        }
    </style>
</html>`;

`EXTERNAL CSS`;
// External CSS is used to apply a consistent style to multiple HTML documents. It is placed in a separate CSS file with a .css extension and linked to the HTML document using the <link> tag in the <head> section. External CSS has the lowest specificity and will be overridden by inline and internal CSS.

// Example:

`<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>This is a heading</h1>
</body>
</html>`;




`CSS SYNTAX`;
// CSS syntax consists of a selector and a declaration block. The selector specifies which HTML elements the style should be applied to, and the declaration block contains the style rules that define how the elements should be styled.

// The declaration block consists of one or more declarations, each separated by a semicolon. Each declaration consists of a property and a value, separated by a colon. The property specifies the style rule to be applied, and the value specifies the value of the style rule.

// Example:

`h1 {
    color: red;
    font-size: 24px;
}`;

// In this example, the selector is h1, which specifies that the style rules should be applied to all <h1> elements. The declaration block contains two declarations: color: red and font-size: 24px. This will make the text color of the <h1> elements red and set the font size to 24 pixels.




`DEVELOPMENT TOOLS`;
// Most modern web browsers come with built-in developer tools that allow you to inspect and modify the HTML and CSS of a webpage. You can access the developer tools by right-clicking on an element and selecting "Inspect" or by pressing F12.

// The developer tool lets you click on a specific element to see its HTML and CSS properties. You can also modify the CSS properties in real-time to see how they affect the appearance of the element. This is useful for debugging and experimenting with different styles.

// Another useful feature of developer tools is the ability to view the CSS styles applied to an element, including the styles inherited from parent elements and the styles applied by different CSS selectors. This can help you understand why a particular style is being applied to an element and how to override it if needed.

// It also allows you to view the box model of an element, which shows the content, padding, border, and margin of the element. This can help you understand the layout of the element and how it interacts with other elements on the page.

// Lastly it has a computed tab that shows the final styles applied to an element after all the CSS rules have been calculated. This can help you troubleshoot issues with conflicting styles and understand how the browser is rendering the page.





