`TRANSITIONS`;
// Transitions in CSS are used to change property values smoothly (over a given duration) when a state change occurs. They are defined using the `transition` property, which takes four values: the property to transition, the duration of the transition, the timing function, and the delay before the transition starts. 

// It is important to note that transitions only work on properties that have an identifiable start and end value. For example, you can't transition from `display: none` to `display: block`, as there is no intermediate state between the two.

// It is similar to the `animation` property, but with fewer options and a simpler syntax. It is usually triggered by an event. Here's an example of a transition:

`
button {
    background-color: #f00;
    transition: background-color 0.5s ease;
    }

button:hover {
    background-color: #0f0;
}
`;

// In this example, the background color of the button will transition from red to green over 0.5 seconds when the button is hovered over. The `ease` timing function is used to create a smooth transition effect.


`Transition Properties`;
// The `transition` property is shorthand for the following properties:

`transition-property`; //Specifies the name of the CSS property to which the transition should be applied.
`transition-duration`; //Specifies the duration of the transition effect. Default value is 0. 
`transition-timing-function`; //Specifies the speed curve of the transition effect. The values are `ease`, `linear`, `ease-in`, `ease-out`, and `ease-in-out`.
`transition-delay`; //Specifies when the transition effect will start.




`Multiple Transitions`;
// You can apply multiple transitions to different properties by separating them with commas. Here's an example:

`
button {
    background-color: #f00;
    color: #fff;
    transition: background-color 0.5s ease, color 0.5s ease;
    transition: background-color, border-radius 0.5s ease;
    transition: all 0.5s ease;
    }

button:hover {
    background-color: #0f0;
    color: #000;
}
`;

// In this example, both the background color and text color of the button will transition when hovered over.


`Transition Events`;
// You can listen for transition events using JavaScript. The `transitionend` event is fired when a CSS transition has completed. Here's an example:

`
button.addEventListener('transitionend', () => {
    console.log('Transition ended');
}
);

button.addEventListener('transitionstart', () => {
    console.log('Transition started');
}
);
`;

// In this example, the `transitionend` event is fired when the transition has completed, and the `transitionstart` event is fired when the transition has started.




