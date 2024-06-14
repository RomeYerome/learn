`FUNCTIONS`;
// SASS has a lot of built-in functions that you can use to manipulate your styles. This is one of the things that makes SASS so powerful. The syntax for using functions is the same as using mixins. You use the @function directive to define a function and the @return directive to return a value from the function.

// Here is an example of a function that calculates the width of a container based on the number of columns you want to display:

`@function container-width($columns) {
    @return $columns * 100px;
}`;

// In this example, the container-width function takes one argument, $columns, which is the number of columns you want to display. The function multiplies the number of columns by 100px and returns the result.


// SASS functions are similar to functions on other programming languages. They can take arguments, perform calculations, and return values. You can use functions to create reusable code snippets that can be used in multiple places in your stylesheets. 

// The list of built-in functions in SASS is extensive. You can find the full list of functions in the SASS documentation.