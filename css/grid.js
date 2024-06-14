`CSS GRID`;
// The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

// It is similar to the Flexbox Layout in that you have a container and items inside the container. However, the Grid Layout is intended for two-dimensional layouts (rows and columns) while Flexbox is for one-dimensional layouts (row or column).

// The grid properties are supported in all modern browsers.


`Creating a Grid Container`;
// To get started you have to define a container element as a grid with display: grid, set the column and row sizes with grid-template-columns and grid-template-rows, and then place its child elements into the grid with grid-column and grid-row. Similarly to flexbox, the source order of the grid items doesn’t matter. Your CSS can place them in any order, which makes it super easy to rearrange your grid with media queries. 

// Imagine defining the layout of your entire page, and then completely rearranging it to accommodate a different screen width all with only a couple lines of CSS. Grid is one of the most powerful CSS modules ever introduced.

`Grid Items`;
// Grid items are the direct children of a grid container.

`Grid Cells`;
// The smallest unit of the grid is a grid cell. It is the intersection of a row and a column.

`Grid Lines`;
// The lines between columns are called column lines. The lines between rows are called row lines. 


`Grid Tracks`;
// The space between two column lines is a column track. The space between two row lines is a row track. i.e the rows and the columns.

`Grid Rows and Columns`;
// The vertical lines of the grid are called columns or column tracks. The horizontal lines of the grid are called rows or row tracks.

`Grid Gaps`;
// The spaces between each column/row are called gaps. You can adjust the size of these gaps using the grid-column-gap and grid-row-gap properties.

`Grid Area`;
// The total space surrounded by four grid lines. A grid area may be composed of any number of grid cells.The grid-area property can also be used to assign names to grid items.



`Grid Container Properties`;
// The grid container properties are used on the parent element (the grid container) and define the columns and rows.

`display`;
// Defines the element as a grid container and establishes a new grid formatting context for its contents. The values are: grid – generates a block-level grid, inline-grid – generates an inline-level grid.

`grid-template-columns`;
// Defines the columns of the grid with a space-separated list of values. The values represent the track size (column size in this case), and the space between them represents the grid line. The values can be a length, a percentage, auto, or a fraction of the free space in the grid represented by the fr unit.

// if all the columns have the same size, you can use the repeat(number-of-columns, size) function, which is a shortcut to avoid writing out each size.

// Example:
// .grid-container {
//     display: grid;
//     grid-template-columns: 100px auto 100px;
//     grid-template-columns: repeat(3, 100px);
//     grid-template-columns: 33% 33% 33%;
//     grid-template-columns: 1fr 1fr 1fr;
// }

`grid-template-rows`;
// Defines the rows of the grid. The values are a space-separated list, where each value defines the height of the row. The values can be a length, a percentage, auto, or a fraction of the free space in the grid represented by the fr unit.

// if all the rows have the same size, you can use the repeat(number-of-rows, size) function, which is a shortcut to avoid writing out each size.

// Example:
// .grid-container {
//     display: grid;
//     grid-template-rows: 100px auto 100px;
//     grid-template-rows: repeat(3, 100px);
//     grid-template-rows: 33% 33% 33%;
//     grid-template-rows: 1fr 1fr 1fr;
// }


`grid-lines`;
// The lines between columns are called column lines. The lines between rows are called row lines. They are automatically created when you define the grid with grid-template-columns and grid-template-rows. They are numbered starting from 1 but you can choose to name them while creating grid-template-areas, grid-template-columns, or grid-template-rows.

// example:

// .grid-container {
//     display: grid;
//     grid-template-columns: [first] 100px [line 2] 100px [last] 100px;
//     grid-template-rows: [row1] 100px [row2] 100px [row3] 100px;
// }

// -1 is also a valid line number, and it means the last line of the grid. Lines can also have more than one name, if you put them in the square brackets with space-separated names.



`grid-template-areas`;
// Defines a grid template by referencing the names of the grid areas which are specified with the grid-area property. Repeating the name of a grid area causes the content to span those cells. A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid.

// Example:
// .grid-container {
//     display: grid;
//     grid-template-columns: auto auto auto;
//     grid-template-rows: 80px 80px;
//     grid-template-areas: "header header header"
//                          "main main sidebar"
//                          "footer footer footer";
// }

// .item1 { grid-area: header; }
// .item2 { grid-area: main; }
// .item3 { grid-area: sidebar; }

// It works in tandem with the grid-area property, which is used to assign names to grid items. The grid-template-areas property can be used to define a grid template by referencing the names of the grid areas you want to use. The syntax itself provides a visualization of the structure of the grid.

// Notice that you’re not naming lines with this syntax, just areas. When you use this syntax the lines on either end of the areas are actually getting named automatically. If the name of your grid area is foo, the name of the area’s starting row line and starting column line will be foo-start, and the name of its last row line and last column line will be foo-end. This means that some lines might have multiple names, such as the far left line in the above example, which will have three names: header-start, main-start, and footer-start.


`Grid Template - Shorthand for grid-template-rows, grid-template-columns and grid-template-areas`;
// The grid-template property is a shorthand property for the grid-template-rows, grid-template-columns, and grid-template-areas properties. The grid-template property can be used to set grid rows, grid columns, and grid areas in a single declaration.

// the syntax is:

// grid-template: none | <grid-template-rows> / <grid-template-columns> | <grid-template-areas>;

// Example:
// .grid-container {
//     display: grid;
//     grid-template:
//         [header-start] "header header header" 80px [header-end]
//         [main-start] "main main sidebar" 200px [main-end]
//         [footer-start] "footer footer footer" 80px [footer-end]
//         / auto 50% auto;
// }

`column-gap (formerly grid-column-gap)`;
// Specifies the size of the gap between the columns. You can use any length unit, or a percentage. The default value is 0.

`row-gap (formerly grid-row-gap)`;
// Specifies the size of the gap between the rows. You can use any length unit, or a percentage. The default value is 0.

`gap (formerly grid-gap)`;
// A shorthand property for the grid-row-gap and the grid-column-gap properties. The first value is the grid-row-gap, the second is the grid-column-gap. If the second value is omitted, the first value is also used for the grid-column-gap. If only one value is present, it is used for both the grid-row-gap and the grid-column-gap.

// Example:
// .grid-container {
//     display: grid;
//     grid-column-gap: 50px;
//     grid-row-gap: 50px;
//     grid-gap: 50px 100px;
// }



`Justify Items`;
// Aligns grid items along the inline (row) axis (as opposed to the align-items property which aligns along the block (column) axis). This value applies to all grid items inside the container. The value start aligns the items at the start of the container. The value end aligns the items at the end of the container. The value center aligns the items at the center of the container. The value stretch stretches the items to fill the container. The value baseline aligns the items such that their baselines align.

// justify-items: start | end | center | stretch | baseline;

`align-items`;
// Aligns grid items along the block (column) axis (as opposed to justify-items which aligns along the inline (row) axis). This value applies to all grid items inside the container. The value start aligns the items at the start of the container. The value end aligns the items at the end of the container. The value center aligns the items at the center of the container. The value stretch stretches the items to fill the container. The value baseline aligns the items such that their baselines align.

// align-items: start | end | center | stretch | baseline;

`place-items`;
// A shorthand property for the align-items and justify-items properties. The first value represents align-items and the second value represents justify-items. If the second value is omitted, the first value is also used for the second value.

// place-items: <align-items> <justify-items>;

// Example:
// .grid-container {
//     display: grid;
//     align-items: center;
//     justify-items: center;
//     place-items: center center; OR place-items: center;
// }

`justify-content`;
// Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the inline (row) axis (as opposed to align-content which aligns the grid along the block (column) axis).

// justify-content: start | end | center | stretch | space-around | space-between | space-evenly;

`align-content`;
// Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the block (column) axis (as opposed to justify-content which aligns the grid along the inline (row) axis).

// align-content: start | end | center | stretch | space-around | space-between | space-evenly;

`place-content`;
// A shorthand property for the align-content and justify-content properties. The first value represents align-content and the second value represents justify-content. If the second value is omitted, the first value is also used for the second value.

// place-content: <align-content> <justify-content>;

// Example:
// .grid-container {
//     display: grid;
//     align-content: center;
//     justify-content: center;
//     place-content: center center; OR place-content: center;
// }

`grid-auto-columns, grid-auto-rows`;
// Specifies the size of any auto-generated grid tracks (aka implicit grid tracks) not explicitly sized by grid-template-rows or grid-template-columns. The value can be a length, a percentage, or a fraction of the free space in the grid, represented by the fr unit.

// Implicit tracks get created when there are more grid items than cells in the grid or when a grid item is placed outside of the explicit grid.

// use cases:
// .container {
//  grid - template - columns: 60px 60px;
//  grid - template - rows: 90px 90px;
// }

// This creates a 2 x 2 grid.

// But now imagine you use grid - column and grid - row to position your grid items like this:

// .item1 {
//  grid - column: 1 / 3;
//  grid - row: 1 / 3;
// }

// .item2 {
//  grid - column: 2 / 4;
//  grid - row: 2 / 4;
// }

// .item3 {
//  grid - column: 3 / 5;
//  grid - row: 3 / 5;
// }

// You now have a 4 x 4 grid, with 3 implicit tracks created. The grid - auto - columns and grid - auto - rows properties allow you to control the size of these implicit tracks. If no size is specified, the implicit tracks will have a size of auto or 0, depending on the browser.


`grid-auto-flow`;
// If you have grid items that you don’t explicitly place on the grid, the auto-placement algorithm kicks in to automatically place the items. This property controls how the auto-placement algorithm works. You can specify direction, dense packing or both.

// grid-auto-flow: row | column | dense | row dense | column dense;

// row – tells the auto-placement algorithm to fill in each row in turn, adding new rows as necessary (default)

// column – tells the auto - placement algorithm to fill in each column in turn, adding new columns as necessary

// dense – tells the auto - placement algorithm to attempt to fill in holes earlier in the grid if smaller items come up later


`grid (shorthand )`;

// TA shorthand for setting all of the following properties in a single declaration: grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, and grid-auto-flow (Note: You can only specify the explicit or the implicit grid properties in a single grid declaration).

// grid: none | <grid-template-rows> / <grid-template-columns> | <grid-template-areas> | <grid-auto-rows> | <grid-auto-columns> | <grid-auto-flow>;

// Example:
// .grid-container {
//     display: grid;
//     grid: 100px 100px / 50% 50%;
// }






`GRID ITEM PROPERTIES`;
// The grid item properties are used on the grid items themselves. They define the size and location of the grid items.

`grid-column-start, grid-column-end, grid-row-start, grid-row-end`;
// Determines a grid item’s location within the grid by referring to specific grid lines.grid - column - start / grid - row - start is the line where the item begins, and grid - column - end / grid - row - end is the line where the item ends.

// The lines can be referred to by their line number or by their name. The lines are numbered starting from 1.

// values:
// <line> – can be a number to refer to a numbered grid line, or a name to refer to a named grid line
// span <number> – the item will span across the provided number of grid tracks
// span <name> – the item will span across until it hits the next line with the provided name
// auto – indicates auto-placement, an automatic span, or a default span of one

// the syntax is:
// grid-column-start: <line> | span <number> | span <name> | auto;
// grid-column-end: <line> | span <number> | span <name> | auto;
// grid-row-start: <line> | span <number> | span <name> | auto;
// grid-row-end: <line> | span <number> | span <name> | auto;

// Example:
// .item {
//     grid-column-start: 2;
//     grid-column-end: five;
//     grid-row-start: row1;
//     grid-row-end: 3;



`grid-column, grid-row  (shorthand)`;
// A shorthand for setting grid-column-start, grid-column-end | grid-row-start, and grid-row-end in a single declaration.

// grid-column: <start-line> / <end-line> OR <start-line> / span <value>;
// grid-row: <start-line> / <end-line> OR <start-line> / span <value>;

// Example:
// .item {
//     grid-column: 2 / five;
//     grid-row: row1 / 3;
// }

// .item {
//     grid-column: 2 / span 3;
//     grid-row: row1 / span 2;
// }



`grid-area`;
// Gives an item a name so that it can be referenced by a template created with the grid-template-areas property. Alternatively, this property can be used as an even shorter shorthand for grid-row-start + grid-column-start + grid-row-end + grid-column-end.

// grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;

// Example:
// .item {
//     grid-area: header;
// }

// .item {
//     grid-area: 1 / col4 / last-line / 6;
// }



`justify-self`;
// Aligns a grid item inside a cell along the inline (row) axis (as opposed to align-self which aligns along the block (column) axis). This value applies to the content inside a single grid item.

// justify-self: start | end | center | stretch | auto;

// start – aligns the grid item at the start of the cell
// end – aligns the grid item at the end of the cell
// center – aligns the grid item at the center of the cell
// stretch – fills the whole width of the cell (this is the default)
// auto – the default alignment as determined by the auto-placement algorithm



`align-self`;
// Aligns a grid item inside a cell along the block (column) axis (as opposed to justify-self which aligns along the inline (row) axis). This value applies to the content inside a single grid item.   

// align-self: start | end | center | stretch | auto;



`place-self`;
// A shorthand for align-self and justify-self. The first value represents align-self and the second value represents justify-self. If the second value is omitted, the first value is also used for the second value.

// place-self: <align-self> <justify-self>;

// Example:
// .item {
//     align-self: center;
//     justify-self: center;
//     place-self: center center; OR place-self: center;
// }




`SPECIAL UNITS & FUNCTIONS`;

`fr`;
// The CSS Grid Layout Module introduces a new unit, the fr unit, which represents a fraction of the available space in the grid container. It is especially useful when the grid container has a dynamic size, like in a responsive design.

// The fr unit is short for “fraction unit”. It takes up the available space in the grid container, and it’s especially useful when you want to distribute the available space in the grid container among the columns or rows.


// Example:
// .grid-container {
//     display: grid;
//     grid-template-columns: 1fr 2fr 1fr;
// }

// This will create a grid with three columns, the first and the third column taking up 1 fraction of the available space each, and the second column taking up 2 fractions of the available space.


`sizing keywords`;
// The CSS Grid Layout Module also introduces a series of keywords to represent the available space in the grid container. These keywords are:

// min-content – the smallest size the content can be while still fitting around the content. Imagine a line of text like “E pluribus unum”, the min-content is likely the width of the word “pluribus”.

// max-content – the largest size the content can be without overflowing the content. Imagine the sentence above, the max-content is the length of the whole sentence.

// auto – the default size for the grid item. The item will be as big as the content inside it.



`sizing functions`;
// The CSS Grid Layout Module introduces a series of functions to represent the available space in the grid container. These functions are:

// minmax(min, max) – defines a size range greater than or equal to min and less than or equal to max. It’s useful for setting a size range for your grid items.

// fit-content() – uses the space available, but never less than min-content and never more than max-content.



`repeat function`;
// The repeat() function is a CSS function that represents repetitive fragments of the grid-template-rows and grid-template-columns properties. It creates a repeating pattern for the columns or rows.

// The repeat() function takes two arguments, the first is the number of times the fragment should be repeated, and the second is the fragment itself.

// Example:
// grid - template - columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

/* easier: */
// grid - template - columns: repeat(8, 1fr);

/* especially when: */
// grid - template - columns: repeat(8, minmax(10px, 1fr));

// The repeat() function is especially useful when you have a large number of columns or rows that all have the same size. It’s a great way to avoid writing out each size individually.



// But repeat() can get extra fancy when combined with keywords:

// auto - fill: Fit as many possible columns as possible on a row, even if they are empty.
    
// auto - fit: Fit whatever columns there are into the space.Prefer expanding columns to fill space rather than empty columns.

// This bears the most famous snippet in all of CSS Grid and one of the all - time great CSS tricks:

`grid - template - columns: repeat(auto - fit, minmax(250px, 1fr))`;
