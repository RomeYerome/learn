`ID`;
// The id attribute is first and foremost a unique identifier. It is a global attribute and can be used on any element. The id attribute is used to identify an element in the document and gives semantic naming to elements e.g #main-header. It must be unique within the document. If you have more than one element with the same id, the document is invalid. 

// The id attribute is used to select a specific element in the document. This is it's second function. It can be targeted with CSS to add styling or with JavaScript to add functionality.

// Lastly it helps with accessibility. It can be used to create anchor links to specific sections of a page. It can be used for screen readers to navigate to specific sections of a page. It also helps your SEO as it can be used to create a unique URL for a specific section of a page.

// Example:

// HTML
<div id="main-header"></div>

// CSS
// #main-header {
//   color: #fff;
// }

// JavaScript
document.getElementById('main-header');



`CLASS`;
// The class attribute is used to group elements. One or more elements can have the same class. It is a global attribute and can be used on any element. It is used to apply the same styling to one or more elements with the same class name at once. It can also be used to select elements in the document with JavaScript.

