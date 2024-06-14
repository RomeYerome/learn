`TRANSFORM`;
// The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move (translate), skew, etc., elements.

`2D Transforms`;
// The 2D transform properties are:

`translate(x, y)`; // Moves an element from its current position (according to the parameters given for the X-axis and the Y-axis). The parameters can be in pixels, percentages, or ems. If you only specify one value, the other value will be set to "0".
`translateX(n)`; // Moves an element horizontally.
`translateY(n)`; // Moves an element vertically.


`scale(x, y)`; // Increases or decreases the size of an element. The parameters can be in values greater than 1 or less than 1. If you only specify one value, the other value will be set to the same value.
`scaleX(n)`; // Increases or decreases the width of an element.
`scaleY(n)`; // Increases or decreases the height of an element.


`rotate(angle)`; // Rotates an element clockwise from its current position. The angle can be in degrees or radians.

`skew(x-angle, y-angle)`; // Skews an element along the X and Y-axis by the given angles. The angles can be in degrees or radians. If you only specify one value, the other value will be set to "0".
`skewX(angle)`; // Skews an element along the X-axis by the given angle.
`skewY(angle)`; // Skews an element along the Y-axis by the given angle.

`matrix(n,n,n,n,n,n)`; // Combines all the 2D transform methods into one. The matrix() method takes six parameters, containing mathematic functions, which allows you to rotate, scale, move (translate), and skew elements.

`3D Transforms`;
// The 3D transform properties are:

`rotateX(angle)`; // Rotates an element around its X-axis at a given degree.
`rotateY(angle)`; // Rotates an element around its Y-axis at a given degree.
`rotateZ(angle)`; // Rotates an element around its Z-axis at a given degree.
`rotate3d(x,y,z,angle)`; // Rotates an element around a specified point in 3D space.

`scaleZ(n)`; // Increases or decreases the size of an element in the Z-axis.
`scale3d(x,y,z)`; // Increases or decreases the size of an element in 3D space.
`translate3d(x,y,z)`; // Moves an element in 3D space.
`translateZ(n)`; // Moves an element along the Z-axis.
`perspective(n)`; // Sets the perspective view for a 3D transformed element. The perspective view defines how the 3D elements are viewed.

`matrix3d(n ,n ,n ,n ,n ,n ,n ,n ,n ,n ,n ,n ,n ,n ,n ,n)`; // Combines all the 3D transform methods into one. The matrix3d() method takes 16 parameters, containing mathematic functions, which allows you to rotate, scale, move (translate), and skew elements in 3D space.