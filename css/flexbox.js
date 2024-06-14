`FLEXBOX`;
// Flexbox was introduced in CSS3 and is a layout mode that allows you to design complex layouts more easily. It is a one-dimensional layout method for laying out items in rows or columns. Flexbox replaces float layouts, table layouts, and positioning layouts. Flexbox is perfect for creating responsive layouts.

// Flexbox is made up of a parent container and child items. The parent container is called a flex container, and the child items are called flex items. The flex container can have multiple flex items. The flex items can be laid out in any direction and can have different sizes.

// Flexbox is based on the main axis and the cross axis. The main axis is the primary axis along which the flex items are laid out. The cross axis is the perpendicular axis to the main axis.






`Display Flex - Container`;
// To use Flexbox, you need to set the display property of the parent container to flex. This will make the parent container a flex container. The child items will automatically become flex items.


`Flex Items`;
// The direct child items of a flex container are called flex items. The flex items can be laid out in any direction (determined by the flex direction property) and can have different sizes. The flex items can be styled using the flex property.






`Flex Direction`;
// The flex-direction property is used to set the direction of the main axis. The main axis can be horizontal or vertical. The default value is row (horizontal).

// Syntax

// .container {
//     display: flex;
//     flex-direction: row | row-reverse | column | column-reverse;
// }


`Flex Wrap`;
// The flex-wrap property is used to control whether the flex items are laid out in a single line or wether they wrap into multiple lines. The default value is nowrap.

// Syntax

// .container {
//     flex-wrap: nowrap | wrap | wrap-reverse;
// }


`Flex Flow - Shorthand for Flex Direction and Flex Wrap`;
// The flex-flow property is a shorthand property for the flex-direction and flex-wrap properties. It is used to set the direction of the main axis and control whether the flex items wrap into multiple lines.

// Syntax

// .container {
//     flex-flow: flex-direction flex-wrap;
// }

// Example
// .container {
//     display: flex;
//     flex-flow: row wrap;
// }









`Flex Grow`;
// The flex-grow property specifies how much the flex item will grow relative to its sibling flex items when you resize the browser window. The default value is 0. A flex-grow value of 1 means that the flex item will grow to fill the available space. And a flex flow value of 2 means that the flex item will grow twice as much as the other flex items.

// Syntax

// .item {
//     flex-grow: number;
// }

// The flex items with a higher flex-grow value will grow more than the flex items with a lower flex-grow value.


`Flex Shrink`;
// The flex-shrink property specifies how much the flex item will shrink relative to its sibling flex items when you resize the browser window. The default value is 1. A flex-shrink value of 1 means that the flex item will shrink to fit the available space. And a flex-shrink value of 2 means that the flex item will shrink twice as much as the other flex items. 

// Syntax

// .item {
//     flex-shrink: number;
// }

// The flex items with a higher flex-shrink value will shrink proportionately more than the flex items with a lower flex-shrink value.


`Flex Basis`;
// The flex-basis property specifies the initial size of the flex item before any available space is distributed. The default value is auto, which means the initial size of the flex item is based on its content. The flex-basis property can be set to a length value (e.g. 100px) or a percentage value (e.g. 50%).

// Syntax

// .item {
//     flex-basis: length | auto;
// }

// The flex-basis property specifies the initial size of the flex item before any available space is distributed. The flex items are laid out based on the flex-basis value and the available space along the main axis.




`Flex - Shorthand for Flex Grow, Flex Shrink, and Flex Basis`;
// The flex property is a shorthand property for the flex-grow, flex-shrink, and flex-basis properties. It is used to set the length of the flex items along the main axis.

// Syntax

// .item {
//     flex: flex-grow flex-shrink flex-basis;
// }

// The flex-grow property specifies how much the flex item will grow relative to the other flex items. The flex-shrink property specifies how much the flex item will shrink relative to the other flex items. The flex-basis property specifies the initial size of the flex item.












`Order`;
// The order property is used to set the order of the flex items. The default value is 0. The order property can be negative, positive, or zero.

// Syntax

// .item {
//     order: number;
// }

// The order property specifies the order of the flex items. The flex items are laid out in the order of the order property. The flex items with the lowest order value are laid out first, and the flex items with the highest order value are laid out last.










`DISTRIBUTING FLEX ITEMS`;


`Justify Content - Main Axis`;
// The justify-content property defines how flex items are positioned within their container, when they do not take up all the available space on the main axis. It is used to distribute extra space when the flex items do not use all available space on the main axis. Note that if any of the items has a flex grow property greater than 0, the extra space will be eaten up by that item and justify content will have no effect.

// Syntax

// .container {
//     justify-content: flex-start OR start | flex-end OR end | center | space-between | space-around;
// }


`flex-start / start`;   // positions items flush to each other, side by side at the start of the main axis. The extra space stays at the end of the main axis.

`flex-end / end`;   // positions the items, flush to each other at the end of main axis. The extra space stays at the beginning of the main axis.

`center`;   // positions the items flush to each other at the center of the main axis. The extra space is distributed equally before and after the items.

`space-between`;    // Distributes the flex items evenly along the main axis. The first item is flush at the start, and the last item is at the end.

`space-around`;     // Distributes the flex items evenly along the main axis with space around them. The space at the edges is half the space between the items.

`space-evenly`;     //Distributes the flex items evenly along the main axis with space around them. The space between the items is the same as the space at the edges.






`Align Items - Cross Axis`;
// The align-items property defines how flex items are positioned along the cross axis when the items are smaller than the available space along the cress axis. The align-items property only works when the flex items do not take up all the available space on the cross axis.

// Syntax

// .container {
//     align-items: stretch | flex-start | flex-end | center | baseline;
// }

`normal`;       // Default value. Like stretch, items are stretched to fit the container.
`flex-start`;   // Aligns the flex items at the start of the cross axis, leaving any extra space at the end of the cross axis.
`flex-end`;     // Aligns the flex items at the end of the cross axis, leaving any extra space at the start of the cross axis.
`center`;       // Aligns the flex items at the center of the cross axis, leaving any extra space equally before and after the items.
`baseline`;     // Aligns the flex items at the baseline of the cross axis.
`stretch`;      // Stretches the flex items to fill the container.



`Align Self - Single Flex Item`;
// The align-self property is used to align a single flex item along the cross axis. It overrides the align-items property of the flex container. The align-self property only works when the flex items do not take up all the available space on the cross axis.

// Syntax

// .item {
//     align-self: auto | stretch | flex-start | flex-end | center | baseline;
// }






`Flexbox Example`;
// The following example shows how to create a simple layout using Flexbox.

// HTML
// <div class="container">
//     <div class="item">1</div>
//     <div class="item">2</div>
//     <div class="item">3</div>
// </div>

// CSS
// .container {
//     display: flex;
//     justify-content: space-around;
// }

// .item {
//     flex: 1;
//     background-color: lightblue;
//     margin: 10px;
//     padding: 20px;
// }

// In the example above, the container is a flex container, and the items are flex items. The items are laid out in a row with equal space around them. The items have a flex value of 1, which means they will take up an equal amount of space along the main axis.

`Flexbox Properties`;
// Flexbox has many properties that can be used to create complex layouts. Some of the most common properties are:

// 1. display: flex - Makes the container a flex container.
// 2. flex-direction - Sets the direction of the main axis.
// 3. flex - A shorthand property for flex-grow, flex-shrink, and flex-basis.
// 4. justify-content - Aligns the flex items along the main axis.
// 5. align-items - Aligns the flex items along the cross axis.
// 6. align-content - Aligns the flex lines in the cross axis.
// 7. flex-wrap - Controls whether the flex items wrap into multiple lines.
// 8. order - Sets the order of the flex items.
// 9. align-self - Aligns a single flex item along the cross axis.
// 10. flex-grow - Specifies how much the flex item will grow relative to the other flex items.
// 11. flex-shrink - Specifies how much the flex item will shrink relative to the other flex items.
// 12. flex-basis - Specifies the initial size of the flex item.
// 13. flex-flow - A shorthand property for flex-direction and flex-wrap.
