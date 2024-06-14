`KEYFRAME ANIMATION`;
// Animating in CSS is taking a static element and changing its properties (that have a range of values) over time. This means changing the element's position, size, color, etc. Keyframe animations are a way to create complex animations by defining the changes in properties at specific points in time.

// Keyframe animations are defined using the `@keyframes` rule, which specifies the animation's name and the keyframes that define the changes in properties at specific points in time. 

`Creating a keyframe animation`;
// To create a keyframe animation, you need to define the animation using the `@keyframes` rule. The syntax is as follows:

`
@keyframes animation-name {
    from {
        /* properties at the start of the animation */
    }
    to {
        /* properties at the end of the animation */
    }
    }
    `;
// The `animation-name` is a custom name for the animation, and you can define the starting and ending properties using the `from` and `to` keywords, respectively.


// Here's an example:

`
@keyframes slidein {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
`;

// In this example, the `slidein` animation moves an element from the left side of the screen to its original position. The `from` and `to` keywords define the starting and ending points of the animation, respectively. You can also define intermediate keyframes using percentages.

// Keywords for defining keyframes:
`from`;    // Used to specify the starting properties of the animation. It is equivalent to 0%. If the `from` keyword is not used, the animation will start from the element's current state.
`to`;      // Used to specify the ending properties of the animation. It is equivalent to 100%.
`%`;       // Used to specify intermediate keyframes in the animation. You can define multiple keyframes using percentages between 0% and 100%.






`Applying a keyframe animation`;
// To apply a keyframe animation to an element, you need to use the `animation` property in CSS. The syntax is as follows:

`
.element {
    animation-name: slidein;
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
}
`;


// In this example, the `animation-name` property specifies the name of the keyframe animation to apply to the element. You can also customize the animation by setting additional properties like `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, and `animation-fill-mode`.





`Properties for keyframe animations`;

`animation-name`;     // Specifies the name of the keyframe animation to apply to the element.
`animation-duration`; // Specifies the duration of the animation in seconds or milliseconds.
`animation-timing-function`; // Specifies the speed curve of the animation. Common values are `ease`, `linear`, `ease-in`, `ease-out`, and `ease-in-out`. You can also use cubic-bezier functions for more control. ease is the default value. It starts slow, speeds up in the middle, and slows down at the end. Linear is same speed from start to finish. ease-in starts slow and speeds up. ease-out starts fast and slows down. ease-in-out starts slow, speeds up, and slows down.
`animation-delay`;    // Specifies the delay before the animation starts.
`animation-iteration-count`; // Specifies the number of times the animation should repeat. You can use values like `infinite` for continuous looping.
`animation-direction`; // Specifies whether the animation should play forward, backward, or alternate between the two. Values are `normal`, `reverse`, `alternate`, and `alternate-reverse`.
`animation-fill-mode`; // CSS animations do not affect an element before the first keyframe is played or after the last keyframe is played. The animation-fill-mode property can override this behavior. Values are `none`, `forwards`, `backwards`, and `both`. This property is useful for maintaining the final state of the animation after it finishes. none is the default value. forwards keeps the final state of the animation. backwards applies the first keyframe before the animation starts. both applies the first keyframe before the animation starts and the last keyframe after the animation ends.







`Animation shorthand property`;
// You can use the `animation` shorthand property to set all the animation properties in one declaration. The syntax is as follows:

`
.element {
    animation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction animation-fill-mode;
}
`;
