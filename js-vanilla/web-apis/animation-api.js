`WEB ANIMATIONS API`;

// definition = `The web animations API is a browser API that allows you to animate elements on your web page. You can animate the position, size, color, opacity, and other aspects of elements in your web page. It is similar to 'animate' in css but you have extended functionality. It's a high level API that is part of the HTML5 spec and is supported in all modern browsers. It's not supported in IE8 and below though.

// It's syntax is as follows:`

element.animate(keyframes, options);

// The element is the element you want to animate. It can be a div, a p, a span, an image, a video, a canvas etc

// The keyframes is an array of objects that define the animation. Each object is a keyframe that defines the styles of the element at a given time. The keyframes are defined as percentages of the animation's duration. The first keyframe is always 0% and the last keyframe is always 100%. You can have as many keyframes as you want in between. The keyframes are defined as follows:

const keyframes = [
    { transform: 'translateY(0px)', color: 'red' },
    { transform: 'translateY(100px)', color: 'blue' }
];

// The options is an object that defines the options for the animation. The most common ones are: duration, delay, easing, iterations, direction, fill, endDelay, composite, iterationStart, iterationComposite, and playbackRate. The options are defined as follows:

const animateOptions = {
    duration: 1000, // the duration of the animation in milliseconds
    delay: 1000, // the delay before the animation starts in milliseconds
    easing: 'ease-in-out', // the easing function to use for the animation
    iterations: 1, // the number of times the animation should repeat, can be infitity or a number
    direction: 'alternate', // the direction of the animation, can be normal, reverse, alternate, alternate-reverse
    fill: 'forwards', // the fill mode of the animation, can be none, forwards, backwards, both
    endDelay: 1000, // the delay before the animation ends in milliseconds
    composite: 'add', // the composite operation to use to combine the animations, can be add, accumulate, replace
    iterationStart: 0.5, // the iteration start time of the animation, can be a number between 0 and 1
    iterationComposite: 'replace', // the iteration composite operation to use to combine the animations, can be replace, accumulate
    playbackRate: 1 // the playback rate of the animation, can be a number
};

`The animation object returned by the animate method has the following properties and methods`

animation.playState; // returns the current state of the animation, can be idle, pending, running, paused, finished

animation.play(); // plays the animation

animation.pause(); // pauses the animation

animation.reverse(); // reverses the animation

animation.finish(); // finishes the animation

animation.cancel(); // cancels the animation

animation.startTime; // sets / returns the start time of the animation

animation.currentTime; // sets / returns the current time of the animation

animation.playbackRate; // returns the playback rate of the animation

animation.effect; // returns the effect of the animation

animation.onfinish; // returns the onfinish event handler of the animation

animation.oncancel; // returns the oncancel event handler of the animation

animation.ready; // returns a promise that resolves when the animation is ready to play

animation.finished; // returns a promise that resolves when the animation is finished playing

animation.cancelled; // returns a promise that resolves when the animation is cancelled

animation.pending; // returns a promise that resolves when the animation is pending

animation.startTime = 1000; // sets the start time of the animation

animation.currentTime = 1000; // sets the current time of the animation

animation.playbackRate = 0.5; // sets the playback rate of the animation

animation.onfinish = () => { }; // sets the onfinish event handler of the animation

animation.oncancel = () => { }; // sets the oncancel event handler of the animation

animation.ready.then(() => { }); // runs when the animation is ready to play

animation.finished.then(() => { }); // runs when the animation is finished playing

animation.cancelled.then(() => { }); // runs when the animation is cancelled

animation.pending.then(() => { }); // runs when the animation is pending








