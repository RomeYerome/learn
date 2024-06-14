`BOX SHADOW PROPERTIES`;
// Box shadows in CSS are used to add shadows to elements. 

// The box-shadow property requires values for horizontal and vertical offsets from the element, a blur radius, a spread radius, and a color. 

// The syntax is as follows:

`box-shadow: offset-x offset-y blur-radius spread-radius color *inset *initial *inherit *unset *currentColor`;

`offset-x`; // The horizontal offset of the shadow. A positive value moves the shadow to the right, and a negative value moves the shadow to the left.

`offset-y`; // The vertical offset of the shadow. A positive value moves the shadow down, and a negative value moves the shadow up.

`blur-radius`; // The blur radius of the shadow. A larger value will create a more blurred shadow.

`spread-radius`; // The spread radius of the shadow. A positive value will cause the shadow to expand and grow bigger, and a negative value will cause the shadow to shrink.

`color`; // The color of the shadow. The color can be specified using a color keyword, a HEX value, an RGB value, or an RGBA value.

`inset`; // The inset keyword creates an inner shadow. The shadow will be inside the element, rather than outside.




`Multiple Shadows`;
// The box-shadow property can accept multiple shadows, separated by commas. The box-shadow property can also accept the inset keyword to create an inner shadow. 

// Example:
`box-shadow: 10px 10px 5px 0px #000, -10px -10px 5px 0px #000 inset;`;


// The box-shadow property can also accept the none keyword to remove any shadows. The box-shadow property can also accept the initial keyword to set the property to its default value. The box-shadow property can also accept the inherit keyword to set the property to the computed value of its parent element. The box-shadow property can also accept the unset keyword to set the property to its inherited value if it inherits from its parent element, or to its initial value if not. The box-shadow property can also accept the currentColor keyword to set the color to the current color of the element













`TEXT SHADOW PROPERTIES`;
// Text shadows in CSS are used to add shadows to text. They take the shape of the text, and can be used to create a variety of effects.

// The text-shadow property requires values for horizontal and vertical offsets from the text, a blur radius, and a color.

// The syntax is as follows:

`text-shadow: offset-x offset-y blur-radius color`;

`offset-x`; // The horizontal offset of the shadow. A positive value moves the shadow to the right, and a negative value moves the shadow to the left.

`offset-y`; // The vertical offset of the shadow. A positive value moves the shadow down, and a negative value moves the shadow up.

`blur-radius`; // The blur radius of the shadow. A larger value will create a more blurred shadow.

`color`; // The color of the shadow. The color can be specified using a color keyword, a HEX value, an RGB value, or an RGBA value.




// other optional properties are *initial *inherit *unset *currentColor