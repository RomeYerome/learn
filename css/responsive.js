`RESPONSIVE DESIGN`;
// Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.

`FUNDAMENTAL PRACTICES FOR RESPONSIVE DESIGN`;
// 1. Set the viewport / scale
// 2. Use fluid widths (max-width) as opposed to fixed widths
// 3. Use media queries to apply different styles for different devices
// 4. Rem units over px units
// 5. Mobile first design


`VIEWPORT`;
// The viewport is the user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen. The viewport is set in a meta tag in the head of the HTML document.

`
<meta name="viewport" content="width=device-width, initial-scale=1.0">
`;

// The viewport meta tag tells the browser how to control the dimensions and scaling of the page. The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device). The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.


`FLUID WIDTHS`;
// Fluid layouts are layouts that expand and contract based on the size of the user's screen. They are built using relative units like percentages instead of fixed units like pixels. And also using max width instead of width for containers

`
.container {
    max-width: 80%;
    margin: 0 auto;
}
`;

// The max-width property is used to set the maximum width of a container. The margin: 0 auto; property is used to center the container on the page.


`MEDIA QUERIES`;
// Media queries are used to apply different styles based on the device's screen size. They are added to the CSS using the @media rule. The most common media query is for screen width. 


`Syntax`;
// A media query is composed of an optional media type and any number of media feature expressions, which may optionally be combined in various ways using logical operators.Media queries are case-insensitive.

`
@media [media-type] and (media-feature-rule) {
    /* styles go here */
}
`;

// Example
`
@media screen and (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
`;

// The above media query will apply the styles inside the curly braces when the screen width is 600px or less. You can also use min-width to apply styles when the screen width is a certain size or larger.


`Media Types`;
// Media types describe the general category of a device. The most common media types are all, screen and print. The media type is optional and defaults to all when omitted. The all media type is used to apply styles to all devices. The screen media type is used to apply styles to devices with screens. The print media type is used to apply styles to printed pages. The speech media type is used to apply styles to screen readers.

// You can also target more than one media type by separating them with a comma.

// Example
`
@media screen, print {
    body {
        color: red;
    }
}
`;

`Media Features`;
// Media features describe specific characteristics of the user's device, such as screen width, height, and color. The most common media features are width, height, orientation, and aspect-ratio. Media features are used to apply styles based on the device's characteristics. You can also combine media features using logical operators like, and, and not.

`Common List of Media Features`;
// 1. width
// 2. max-width
// 3. height
// 4. max-height
// 5. orientation
// 6. aspect-ratio
// 7. color
// 8. resolution
// 9. hover



`LOGICAL OPERATORS`;
// Logical operators are used to combine multiple media features. The most common logical operators are and, or, and not.

// Example
`
@media screen and (max-width: 600px) and (orientation: landscape) {
    body {
        background-color: lightblue;
    }
}
`;

// The above media query will apply the styles inside the curly braces when the screen width is 600px or less and the orientation is landscape.

`
@media screen and (max-width: 600px), (orientation: landscape) {
    body {
        background-color: lightblue;
    }
}
`;

// The above media query will apply the styles inside the curly braces when the screen width is 600px or less or the orientation is landscape.

`
@media screen and (max-width <= 600px) and not (orientation: landscape) {
    body {
        background-color: lightblue;
    }
}
`;

// The above media query will apply the styles inside the curly braces when the screen width is 600px or less and the orientation is not landscape.

`
@media not screen and (color) {
    body {
        background-color: lightblue;
    }
}
`;

// The above media query will apply the styles inside the curly braces when the device is not a screen and has a color display.

`
@media only screen and (max-width: 600px) or (orientation: landscape) {
    body {
        background-color: lightblue;
    }
}
`;

// The above media query will apply the styles inside the curly braces when the screen width is 600px or less or the orientation is landscape.





`DESIGNATING A STYLE SHEET WITH MEDIA QUERIES`;
// You can also designate a specific style sheet to be used for a specific media type or media feature. This is done using the media attribute in the link tag.

`
<link rel="stylesheet" media="screen and (max-width: 600px)" href="small.css">
`;

// The above link tag will apply the small.css style sheet when the screen width is 600px or less.