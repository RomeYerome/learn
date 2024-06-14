`PARTIALS`;
// Partials are like modules for SASS. They allow you to break your stylesheet into smaller, more manageable pieces. Partials are files that contain snippets of SASS code that you can include in other SASS files. 

// Partials help organize your code, making it easier to maintain. 


`Creating a partial in SASS`;
// To create a partial in SASS, you need to create a file with a leading underscore (_) in the filename. For example, _variables.scss. You can then include the partial in another SASS file using the @use directive or the @import directive. Example of a partial file:

`_variables.scss`;

`$primary-color: #3498db`;






`Importing a partial in SASS`;
// You import a partial in SASS using the @use directive. The @use directive which has replaced the @import directive, is the recommended way to include partials in SASS files. Here is an example of how to include a partial in SASS:

// main.scss file;
`@use 'variables`;

// In this example, we are importing the _variables.scss partial into our main SASS file. This allows us to use the variables defined in the _variables.scss file in our main SASS file. You can create as many partials as you need to organize your code effectively. 

// The _variables.scss file in this case is in the same directory as the main SASS file. If the partial is in a different directory, you need to specify the path to the partial file in the @use directive.





`Using Variables from partials in SASS`;
// When using variables from partials in SASS, you have to reference the partial name before the variable name. For example, if you have a variable $primary-color defined in a partial _variables.scss, you would reference it in your main SASS file like this:

// main.scss file;

`@use 'variables`;

`body {
    background-color: variables.$primary-color;
}`;

// This is different from the deprecated @import directive, where you would reference the variable directly without the partial name. The @use directive requires you to specify the partial name before the variable name. This helps prevent naming conflicts and makes it easier to understand where the variable is coming from.


