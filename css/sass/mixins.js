`MIXINS`;
// Mixins are reusable code snippets that help you avoid duplicating things over and over in your stylesheets. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. They keep your stylesheets DRY (Don't Repeat Yourself) and make your code more maintainable. You can even pass in values to make your mixin more flexible. 

// Here is an example of a mixin that sets the font size and color of an element:

`@mixin text-style {
    font-size: 16px;
    color: #333;
}`;

// In this example, the text-style mixin sets the font size to 16px and the color to #333. You can include this mixin in any selector by using the @include directive.

// Here is an example of using the text-style mixin:

`.header {
        @include text-style;
    }`;

// In this example, the .header class includes the text-style mixin. This will compile to:

`.header {
        font-size: 16px;
        color: #333;
    }`;

`Mixin with Arguments`;

// You can also pass arguments to mixins to make them more flexible. Here is an example of a mixin that sets the font size and color of an element with arguments:

`@mixin text-style($size, $color) {
        font-size: $size;
        color: $color;
    }`;

// In this example, the text-style mixin takes two arguments, $size and $color. You can include this mixin in any selector and pass in values for the arguments.

// Here is an example of using the text-style mixin with arguments:

`.header {
        @include text-style(20px, red);
    }`;

// In this example, the .header class includes the text-style mixin with arguments. This will compile to:

`.header {
        font-size: 20px;
        color: red;
    }`;


`Mixin with Default Arguments`;

// You can also set default values for mixin arguments. Here is an example of a mixin that sets the font size and color of an element with default arguments:

`@mixin text-style($size: 16px, $color: #333) {
        font-size: $size;
        color: $color;
    }`;



// Mixins are a powerful feature of SASS that can help you write cleaner and more maintainable stylesheets. They allow you to reuse code snippets and make your stylesheets more modular. You can use mixins to create reusable styles for common elements like buttons, forms, and headers.