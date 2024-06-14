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