`BACKGROUNDS`;
// There are several options for styling properties such as putting an image, a color, a gradient, a pattern, or leaving it transparent. There are several properties in CSS that allow you to style the background of an element. These properties include background-color, background-image, background-repeat, background-attachment, and background-position.



`BACKGROUND-COLOR`;
// The background-color property is used to set the background color of an element. It accepts a variety of color values, including color names, RGB, HSL, and hexadecimal values.

// Example:
`body {
    background-color: lightblue;
}`;

// In this example, the background-color property sets the background color of the <body> element to light blue.





`BACKGROUND-IMAGE`;
// The background-image property is used to set a background image for an element. It accepts a URL value that specifies the path to the image file. The path can be relative (a file in your project) or absolute (a link to a file on the web).

// Example:
`div {
    background-image: url('image.jpg');
}`;

// In this example, the background-image property sets a background image for the <div> element using the image.jpg file.

// The background image can be repeated, positioned, and attached using the background-repeat, background-position, and background-attachment properties, respectively.



`Background-Repeat`;
// The background-repeat property is used to specify how a background image should be repeated to cover the entire container if it is smaller than the container. It accepts values such as repeat, repeat-x, repeat-y, no-repeat, and space.

`repeat`;   // The background image is repeated both horizontally and vertically to cover the entire container.
`repeat-x`; // The background image is repeated horizontally to cover the entire container.
`repeat-y`; // The background image is repeated vertically to cover the entire container.
`no-repeat`; // The background image is not repeated and is displayed only once.
`space`;    // The background image is repeated to cover the entire container with space between the images.



`Background-Position`;
// The background-position property is used to specify the position of a background image within its container. It accepts values such as top, bottom, left, right, center, and length values like 10px, 20%, etc. where the first value specifies the horizontal position and the second value specifies the vertical position.

`top left`;     // The background image is positioned at the top left corner of the container.
`top center`;   // The background image is positioned at the top center of the container.
`top right`;    // The background image is positioned at the top right corner of the container.
`center left`;  // The background image is positioned at the center left of the container.
`center center`; // The background image is positioned at the center of the container.
`center right`; // The background image is positioned at the center right of the container.
`bottom left`;  // The background image is positioned at the bottom left of the container.
`bottom center`; // The background image is positioned at the bottom center of the container.
`bottom right`; // The background image is positioned at the bottom right of the container.
`100px 50px`;       // The background image is positioned at the specified length values. i.e 100px from the left and 50px from the top. negative values are also allowed and will push the image left and up out of the container.



`Background-Attachment`;
// The background-attachment property is used to specify whether a background image should scroll with the content or remain fixed in place. It accepts values such as scroll, fixed, and local (scrolls with the element's content).

`scroll`; // The background image scrolls with the content.
`fixed`;  // The background image remains fixed in place.
`local`;  // The background image scrolls with the element's content.


// other properties include background-size, background-origin, background-clip, background-blend-mode, and background-color.



`Background-Size`;
// The background-size property is used to specify the size of a background image. It accepts values such as auto, cover, contain, and length values like 100px, 50%, etc. the length values specify the width and height of the background image.

`cover`;    // The background image is resized to cover the entire container while maintaining its aspect ratio.
`contain`;  // The background image is resized to fit within the container while maintaining its aspect ratio.
`auto`;     // The background image is displayed at its original size.
`length`;   // The background image is resized to the specified length values.



`Background-Origin`;
// The background-origin property is used to specify where the background image should be positioned relative to the padding, border, or content box of an element. It accepts values such as padding-box, border-box, and content-box.

`padding-box`;  // The background image is positioned relative to the padding box of the element.
`border-box`;   // The background image is positioned relative to the border box of the element.
`content-box`;  // The background image is positioned relative to the content box of the element.



`Background-Clip`;
// The background-clip property is used to specify how the background image should be clipped relative to the padding, border, or content box of an element. It accepts values such as padding-box, border-box, and content-box.

`padding-box`;  // The background image is clipped relative to the padding box of the element.
`border-box`;   // The background image is clipped relative to the border box of the element.
`content-box`;  // The background image is clipped relative to the content box of the element.



`Background-Blend-Mode`;
// The background-blend-mode property is used to specify how the background image should blend with the background color or other background images. It accepts values such as normal, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, difference, exclusion, hue, saturation, color, luminosity.

//Example:

`div {
    background-image: url('image.jpg');
    background-color: red;
    background-blend-mode: multiply;
}`;








`GRADIENTS`;
// CSS gradients are used to create smooth transitions between two or more colors. There are two types of gradients: linear and radial.

`Linear Gradient`;
// A linear gradient is defined by an angle or direction, and it transitions between two or more colors in a straight line.

// Example:
`div {
    background-image: linear-gradient(direction, start color, end color);
}`;

// In this example, the background-image property sets a linear gradient background for the <div> element. The direction specifies the angle or direction of the gradient, and the start color and end color define the colors used in the gradient.

// The direction can be specified using angles (e.g., 45deg), keywords (e.g., to right), or side values (e.g., to top right).

// The colors can be specified using color names, RGB, HSL, or hexadecimal values.

`Radial Gradient`;
// A radial gradient is defined by a shape and size, and it transitions between two or more colors in a circular or elliptical pattern.

// Example:
`div {
    background-image: radial-gradient(shape size, start color, end color);
}`;

// In this example, the background-image property sets a radial gradient background for the <div> element. The shape specifies the shape of the gradient (circle or ellipse), the size defines the size of the gradient, and the start color and end color define the colors used in the gradient.

// The shape can be specified using keywords (e.g., circle, ellipse).

// The size can be specified using keywords (e.g., closest-side, farthest-corner) or lengths (e.g., 50px, 10%, 2em).

// The colors can be specified using color names, RGB, HSL, or hexadecimal values.



`Multiple Backgrounds`;
// You can apply multiple background images or gradients to an element by separating them with commas. This allows you to layer backgrounds on top of each other. The backgrounds are rendered from the last specified to the first specified.

// Example:
`div {
    background-image: url('image1.jpg'), url('image2.jpg'), linear-gradient(to right, red, blue);
}`;

// In this example, the background-image property sets multiple backgrounds for the <div> element. The images and gradients are layered on top of each other, with the linear gradient on top of the two images.





`Background Shorthand`;
// The background property is a shorthand property that combines multiple background properties into a single declaration. It accepts values like background-color, background-image, background-repeat, background-attachment, background-position, and background-size.

// Example:
`div {
    background: red url('image.jpg') no-repeat center center / cover fixed;
    background: linear-gradient(to right, red, blue) no-repeat center;
    background: url('image.jpg') no-repeat center center / cover fixed, linear-gradient(to right, red, blue) no-repeat center;
    background: url('image.jpg');
}`;