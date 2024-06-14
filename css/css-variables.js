`CSS VARIABLES`;
// CSS variables are used to store and reuse values in a CSS file as you would in any programming language. They are defined using the `--` prefix, and can be used in any CSS property that accepts a value.




`Declaring a CSS variable`;
// To declare a CSS variable, you need to use the `--` prefix followed by the variable name. Here's an example:

`
:root {
    --max-width: 1200px;
  --main-color: #ff0000;
  --secondary-color: #00ff00;
}
`;





`Using a CSS variable`;
// To use a CSS variable, you need to reference it using the `var()` function. Here's an example:

`
body {
  background-color: var(--main-color);
}
`;






`Variable scope`;
// CSS variables can either have a global scope or a local scope. Global variables are declared in the `:root` pseudo-class, while local variables are declared within a selector. Here's an example:


// Global variable
`
:root {
    --main-color: #ff0000;
}
`;

// Local variable
`
body {
    --main-color: #00ff00;
}
`;