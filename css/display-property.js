`DISPLAY`;
// The display property is very important in CSS as it determines how an element is displayed on the page. The display property can take on many values, each of which has its own unique behavior. Some of the most common values for the display property are:



`block`;
// This value makes an element a block-level element. Block-level elements take up the full width of their container and start on a new line. Examples of block-level elements are <div>, <p>, <h1>, <form>, etc.

// They also accept width, height, margin, padding, and border properties. You can set the width and height of a block-level element, and it will take up the full width of its container by default.



`inline`;
// This value makes an element an inline element. Inline elements do not start on a new line and only take up as much width as their content. Examples of inline elements are <span>, <a>, <strong>, <em>, etc.

`NOTE`;
// Inline elements ignore width and height properties. 
// You can ONLY add HORIZONTAL padding, HORIZONTAL margin and HORIZONTAL border to inline elements. Vertical margin will be ignored and vertical padding and border will overlap the surrounding elements.



`inline-block`;
// This value makes an element an inline-block element. Inline-block elements are similar to inline elements, but they can have width, height, margin, padding, and border properties. Examples of inline-block elements are <img>, <input>, <button>, etc.

// Inline-block elements take up as much width as their content, but you can set the width and height of an inline-block element. They also accept margin, padding, and border properties.

`NOTE`;
// You can't center with margin: auto; on inline-block elements. Remember this when you're trying to center an image. Instead you can use text-align: center; on the parent element and yes it'll work for images, divs and every inline-block elementtoo.

// inline block is great for lining elements up horizontally like inline elements, but while being able to add padding, margin, border, width and height like block elements.


`none`;
// This value hides an element from the page. The element is not displayed on the page, and it does not take up any space. This is useful for hiding elements that you do not want to display on the page.



`flex`;
// This value makes an element a flex container. Flex containers can have flex items inside them, and you can use the flexbox properties to align and distribute the flex items inside the flex container. Examples of flex properties are justify-content, align-items, flex-direction, etc.



`grid`;
// This value makes an element a grid container. Grid containers can have grid items inside them, and you can use the grid properties to align and distribute the grid items inside the grid container. Examples of grid properties are grid-template-columns, grid-template-rows, grid-gap, etc.



`table`;
// This value makes an element a table element. Table elements behave like HTML table elements, and you can use the table properties to style the table element. Examples of table properties are table-layout, border-collapse, border-spacing, etc.



`table-cell`;
// This value makes an element a table-cell element. Table-cell elements behave like HTML table cells, and you can use the table-cell properties to style the table-cell element. Examples of table-cell properties are vertical-align, text-align, etc.



`table-row`;
// This value makes an element a table-row element. Table-row elements behave like HTML table rows, and you can use the table-row properties to style the table-row element. Examples of table-row properties are background-color, border, etc.



`list-item`;
// This value makes an element a list item. List items behave like HTML list items, and you can use the list-item properties to style the list item element. Examples of list-item properties are list-style-type, list-style-position, etc.



`inherit`;
// This value inherits the display property from the parent element. The element will inherit the display property of its parent element.

// The display property is very important in CSS as it determines how an element is displayed on the page. By using the display property, you can control the layout of your page and create complex designs. You can use the display property to create block-level elements, inline elements, inline-block elements, flex containers, grid containers, table elements, table-cell elements, table-row elements, list items, etc. The display property is a powerful tool in CSS that allows you to create responsive and flexible layouts for your web pages.

