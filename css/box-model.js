`BOX MODEL`;

// Every HTML element has a bounding box and its size is controlled by certain css properties and it's content. The box model is a way of visualizing the space an element occupies on a webpage. The box model is made up of the following properties:

`display`;  // block or inline - determines if the elements box stretches to the width of the container or just the width of the content

`width`;    // determines the width of the element's box for block element or inline block elements. The width of inline elements are determined by its content


`Margin`;   // determines the space surrounding the box of an element i.e the space between the element and other elements

`Padding`;  //determines the space inside the box of an element i.e between the content and the border

`Border`;   // the bounding box around the element

`Content`;  // the content in an element determines the height (and width in the case of inline elements) of the box

`Box-Sizing`;   // border-box OR content-box; - the Box-Sizing property determines if an element's box increases with padding and border or if the padding and border are included in the width of the element. Basically when you set the width of an element, the box-sizing property determines if the padding and border are included in the width of the element or if they are added to the width of the element. The default value of the box-sizing property is content-box, which means that the padding and border are added to the width of the element. If you set the box-sizing property to border-box, the padding and border are included in the width of the element.


`Box Model Example`;

`div {
    width: 200px;
    padding: 20px;
    border: 1px solid black;
    margin: 10px;
}`;



`ANATOMY OF THE BOX MODEL`;

`Content Box`; // The content box is the innermost box of an element. It contains the content of the element, such as text, images, or other media.

`Padding Box`; // The padding box is the area between the content box and the border box. It is used to create space between the content and the border of an element.

`Border Box`; // The border box is the area between the padding box and the margin of an element. It contains the border of the element.

`Margin Box`; // The margin box is the outermost box of an element. It is used to create space between the element and other elements on the page.



`APPLYING MARGIN AND PADDING`;
// You can set margin or padding on an element in different ways. You can set it on one side, on the horizontal and vertical sides, or on all sides at once.

// Individual Sides
`margin-top: 20px`;     // sets a 20px margin on the top of the element
`margin-right: 20px`;     // sets a 20px margin on the right of the element
`margin-bottom: 20px`;     // sets a 20px margin on bottom of the element
`margin-left: 20px`;     // sets a 20px margin on left of the element

// Individual Sides Shorthand - Top Right Left Bottom (Always Clockwise)
`padding: 10px 20px 30px 40px`;

// All sides
`padding: 40px`;        // sets a 40px padding on all 4 sides

// Vertical and Horizontal
`padding: 20px 40px;`;  // sets a 20px vertical margin (top and bottom) and a 40px horizontal margin (left and right)

// Top Horizontal Bottom
`margin: 20px 30px 10px`;   // sets a 20px top margin, a 30px horizontal margin and a 10px bottom margin


`Margin Collapse`; // When two elements are stacked on top of each other, the margin of the two elements will collapse into one margin. The margin of the two elements will be the margin of the element with the larger margin. This is known as margin collapse. To prevent margin collapse, you can add padding or border to one of the elements.

`Margin Auto`;  // setting horizontal margin (both left and right) to auto, centers a block-level element. it has no effect on inline elements