`EVENTS`;
// Events are actions that happen in the browser. They can be triggered by the user (eg. a mouse click or window resize) or by the browser (a page load). Examples of events are mouse clicks, mouse movements, key presses, page loading, typing into a text field, hovering above an element etc. You can use JS to listen for these events and respond to them with a callback function.

// Events can also be triggered programmatically using the event constructor. This is useful for testing and debugging. Examples are click, mouseover, mouseout, keydown, keyup, resize, scroll, submit, focus, blur, change, etc



`EVENT LISTENERS`;

// Event listeners are triggers you set on DOM elements. JS lets you listen for these events such as a mouse click or a button press, and executes a given callback function anytime it happens. This callback function can be an anonymous function or a named one;


// In the example below, we're selecting an element with a class of .clear-tasks and adding a 'click' eventListener 

document.querySelector('.clear-tasks').addEventListener('click', function () {
    console.log('Hello World');
});

// Event listeners can be created with the addEventListener() function or by using the onEventName property of the element e.g. onclick(). The addEventListener() function is the preferred method as it allows you to add multiple event listeners to the same element. The onEventName property can only have one event listener at a time.

// the syntax for both is as shown

`element.addEventListener(event, callbackFunction)`; // preferred method

`element.onEventName = callbackFunction`;




'removeEventListener()';
// There is a remove event listener method. You don't have to remove event listeners but it's good practice to do so. 

// It takes the same arguments as the addEventListener() method. 

// A good time to use it is when you remove elements with event listeners from the DOM. If you don't remove the event listener, it will still be in memory and can cause problems like memory leaks and performance issues so first remove the event listener, then remove the element.


setTimeout(() => btn.removeEventListener('click', onClearFn), 3000);

// This function will disable the event listener after 3 seconds. Can be a neat trick for when you want an event listener to only work once or for a limited time. You can also use the once option in the addEventListener() method to do the same thing. The once option is a boolean that defaults to false. When set to true, it will remove the event listener after it's first use. It's syntax is as follows: 

element.addEventListener('event', callbackFunction, { once: true });









`EVENT LISTENERS WITH ANONYMOUS CALLBACK FN`
// adding event listeners to elements takes the following format: element.addEventListener('event', callback funtion);


document.querySelector('.clear-tasks').addEventListener('click', (e) => {
    console.log(e);

    e.preventDefault();
});


`EVENT LISTENERS WITH NAMED CALLBACK FN`;
// The event object has many useful methods and properties and one of them is the target property, that returns the target element
document.querySelector('.clear-tasks').addEventListener('click', onClick);











`The EVENT OBJECT`;

// contains methods and properties common to all events. It can be passed as an argument in the callback function of an eventListener and used to call any of it's methods


element.addEventListener('eventName', callbackFunction(e)); // the event option is usually represented by e or event and passed into the callback fn as an argument like this


// The most popular properties and methods of the event object are

e.target; // returns the target element, the element that triggered the event
e.target.id; // returns the id of the target element
e.target.className; // returns the class of the target element
e.target.classList; // returns a nodeList of all classes on the target element
e.target.innerText; // returns the text content of the target element


e.currentTarget; // returns the element that the event listener is attached to (same as above in most cases). It's useful when you have nested elements and you want to target the parent element
e.type;   // returns the type of event
e.timeStamp;   // returns the time the event was triggered

// Position Coodinates of the event origin relative to 
e.clientX;   // returns the x coordinate of the event relative to the window
e.clientY;   // returns the y coordinate of the event relative to the window
e.screenX;   // returns the x coordinate of the event relative to the screen (entire monitor (beyond the window))
e.screenY;   // returns the y coordinate of the event relative to the screen
e.offsetX;   // returns the x coordinate of the event relative to the element
e.offsetY;   // returns the y coordinate of the event relative to the element


e.altKey;    // returns true if the alt key was pressed when the event was triggered
e.ctrlKey;    // returns true if the ctrl key was pressed when the event was triggered
e.shiftKey;    // returns true if the shift key was pressed when the event was triggered

e.key;  // returns the key that was pressed when the event was triggered eg. a, b, c, 1, 2, 3, etc
e.keyCode;  // returns the keyCode of the key that was pressed when the event was triggered eg. 65, 66, 67, 49, 50, 51, etc
e.code;  // returns the code of the key that was pressed when the event was triggered eg. KeyA, KeyB, KeyC, Digit1, Digit2, Digit3, etc
e.repeat;  // returns true if the key was held down and the event was triggered repeatedly


// Methods
e.preventDefault(); // prevents the default behaviour of the event. e.g. prevents a link from opening when clicked
e.stopPropagation(); // prevents the event from bubbling up to parent elements. It's useful when you have nested elements and you want to target the parent element





function onClick(e) {
    console.log('Clicked');

    let val = e;
    val = e.target.id;   // returns the id of the target element
    val = e.target.className;   // returns a string of all classes on the target element
    val = e.target.ClassList;   // returns a nodeList of all classes on target element

    e.target.innerText = 'Clicked';

    val = e.timestamp;   // returns time of event
    val = e.type;   // returns type of event

    e.clientY; // y coordinate relative to window
    e.clientX; // x coordinate relative to window

    e.offsetY; // y coordinate relative to element
    e.offsetX; // x coordinate relative to element
}
// console.log(val);









`MOUSE EVENTS`;
// using a selected button element we have called clearBtn 

let clearBtn = document.querySelector('.clear-tasks');
let card = document.querySelector('.card');


function runEvent(e) {
    console.log(`Event Type: ${e.type}`)
}


// Click
clearBtn.addEventListener('click', runEvent); // click event

// Double Click
clearBtn.addEventListener('dblclick', runEvent); // double click event

// Mouse Down
clearBtn.addEventListener('mousedown', runEvent); // mouse pressed down

// Mouse Up
clearBtn.addEventListener('mouseup', runEvent); // mouse released after press down

// Mouse Enter
card.addEventListener('mouseenter', runEvent); // mouse enters the region of the element (hover event)

// Mouse Leave
card.addEventListener('mouseleave', runEvent); // mouse leaves the region of the element (exithover event)

// Mouse Over
card.addEventListener('mouseover', runEvent); // Like mouse enter but triggers with nested elements (hover event)

// Mouse Out
card.addEventListener('mouseout', runEvent); // like mouse leave but triggers with nested elements 

// Mouse Move
card.addEventListener('mousemove', runEvent); // triggers when mouse moves within the element

// Wheel
card.addEventListener('wheel', runEvent);   // triggers when mouse wheel is used over target element (card)

// Drag Event
card.addEventListener('drag', runEvent);    // triggers when/while element is dragged

// Drag Start
card.addEventListener('dragstart', runEvent);   // triggers at the start of target element being dragged

// Drag End
card.addEventListener('dragend', runEvent); // triggers at the end of target element being dragged when it is let go












`KEYBOARD EVENTS`

// keydown
taskInput.addEventListener('keydown', runEvent);    // triggers when any key is pressed. It repeats while the key is held down unlike keypress

// keyup
taskInput.addEventListener('keyup', runEvent);  // triggers when a pressed key is released

// keypress
taskInput.addEventListener('keypress', runEvent);   // triggers when any key is pressed/tapped, doesn't continuously trigger event if key is held down. triggers once


// some event properties associated with keyboard events are: key, keyCode, code, which, etc

// key
runEvent = (e) => e.key;    // returns the key that was pressed eg. a, b, c, 1, 2, 3, etc key is not supported by older browsers

// keyCode
runEvent = (e) => e.keyCode;    // returns the ASCI keyCode of the key that was pressed eg. 65, 66, 67, 49, 50, 51, etc

// code
runEvent = (e) => e.code;   // returns the code of the key that was pressed eg. KeyA, KeyB, KeyC, Digit1, Digit2, Digit3, etc










`INPUT EVENTS`;
// This segment, we'll look at events specific to inputs (forms, text fields, etc)


`Input`;
// the input event fires anytime the value of an input field changes. When the input is a form field, the input event is similar to the keypress/keydown event, but it is better to use input with forms as it is more robust. It emcompasses the change event which is used with dropdown selectors... if the input field is a dropdown selector or a checkbox, input still fires off while keydown won't. It's useful for live search features and other similar features

taskInput.addEventListener('input', runEvent);

function runEvent(e) {
    console.log(e.target.value)
}

// focus
taskInput.addEventListener('focus', runEvent);  // triggers when you click on an input field

// blur
taskInput.addEventListener('blur', runEvent);   // triggers when you click away from a focused input field

// cut
taskInput.addEventListener('cut', runEvent);    // triggers when you cut text from an input field

// paste
taskInput.addEventListener('paste', runEvent);  // triggers when you paste text into an input field



// Change
select.addEventListener('change', runEvent);    // triggers when you change the value of a dropdown selector


// Submit
form.addEventListener('submit', runEvent);  // triggers when you submit a form







`Window Events`
// The window object has its own events that you can listen for. Some of them are:

// DOM Load Event
window.addEventListener('DOMContentLoaded', runEvent); // triggers when the DOM is loaded, it doesn't wait for all resources such as images to finish loading

// Load
window.addEventListener('load', runEvent);    // triggers when the entire page is loaded


`the load event was very common in the 2000s when devs put their scripts in the head tag causing errors as the scripts would run before the DOM was loaded. The load event was used to fix this. Now, it's better to put your scripts at the bottom of the body tag or use the DOMContentLoaded event. The load event is still useful for things like images and other resources that take a while to load

Alternatively, you can now put your scripts in the head tag by adding the defer attribute to it`

// Resize
window.addEventListener('resize', runEvent);  // triggers when the window is resized, can be combined with innerWidth and innerHeight to make responsive designs

// Scroll
window.addEventListener('scroll', runEvent);  // triggers when you scroll the page. Can be combined with scrollY and scrollX to make sticky navbars and other similar features

// Location Change
window.addEventListener('locationchange', runEvent); // triggers when the location of the page changes

// Focus
window.addEventListener('focus', runEvent);  // triggers when the window is in focus (tab is active)

// Blur
window.addEventListener('blur', runEvent);   // triggers when the window is out of focus (tab is inactive)






'EVENT BUBBLING';

// If you have event listeners on a parent element and it's child (eg a click event listener), clicking on the child will also trigger the event listener of the parent like you clicked on it too. So it can be said that the event is bubbling from the child to parents and grandparents;


`you can stop this behaviour by using the stopPropagation() method on the event object. It's syntax is as follows: e.stopPropagation()`



'EVENT DELEGATION';
// It's the reverse of bubbling. It's when you put an event listener on multiple elements or the parent element and use a conditional statement eg. if statement, to restrict the action to just the specific children you want";


const delItem = document.querySelector('.delete-item');
const collection = document.querySelector('.collection');

collection.addEventListener('click', deleteItem);

function deleteItem(e) {
    console.log('delete item', e.target);
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}




// Event Handler
function runEvent(e) {
    console.log(`Event Type: ${e.type} | ${e.target.value}`);

    // heading.innerText = e.target.value;
    // e.preventDefault();
}







`e.currentTarget vs e.target`;
// the difference between e.cuurentTarget and e.target is that e.currentTarget returns the element which the event listener is attached to while e.target returns the element that triggered the event. 

// Because of event bubbling, a click event listener for example can be attached to a nested element and be triggered by clicking on the parent element. 

// e.target will return the parent element that was clicked while e.currentTarget will return the nested element that the event listener is attached to.








`DISPATCHING EVENTS`;
// You can create and dispatch your own events in JS. It's useful for testing and debugging. It's syntax is as follows:

element.dispatchEvent(new Event('eventName'));

// You can also pass in an object with options as a second argument. The options are:

`bubbles: true`; // whether the event bubbles up through the DOM or not
`cancelable: true`; // whether the event can be cancelled with preventDefault()
`composed: true`; // whether the event will trigger listeners outside of a shadow DOM

element.dispatchEvent(new Event('eventName', {
    bubbles: true,
    cancelable: true,
    composed: true
}));

// You can also create custom events with the CustomEvent constructor. It takes two arguments, the event name and an object with options. The options are:

`detail: any`; // any data you want to pass along with the event

element.dispatchEvent(new CustomEvent('eventName', {
    detail: { key: 'value' }
}));

// You can listen for custom events the same way you listen for built-in events. You can also pass data along with the event using the detail property of the event object. The data can be accessed with e.detail.key

element.addEventListener('eventName', (e) => {
    console.log(e.detail.key);
});


// FOR EXAMPLE

// Create an event
document.dispatchEvent(new Event('closeForm'));

// Listen for the event
document.addEventListener('closeForm', closeFormFn);
