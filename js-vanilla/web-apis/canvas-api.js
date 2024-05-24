`THE CANVAS API`;

// definition = `The canvas API is a browser API that allows you to draw graphics in realtime with javascript on a web page. It's a low level API that gives you a lot of control over what you can do. It's part of the HTML5 spec and is supported in all modern browsers. It's not supported in IE8 and below though.

// The canvas mainly focuses on 2D graphics but it also has some 3D capabilities. The WEBGL API which also uses the canvas element, draws hardware accelerated 2D and 3D graphics.

// The canvas API is great for creating animations, games, data visualizations, photo manipulations, real-time video processing etc


// To use, you create a canvas element in your html file and give it an id
// <canvas id="myCanvas"></canvas>

// Then you select the canvas element in your javascript file and assign it to a variable
const canvas = document.getElementById('myCanvas');

// Then you create a context variable and assign it to the canvas context
const ctx = canvas.getContext('2d');

// The context variable is what you use to draw on the canvas

`NOTE: The canvas element has a width and height attribute that you can set in your html file or in your javascript file. If you set it in your html file, you can access it in your javascript file with the canvas.width and canvas.height properties. If you set it in your javascript file, you can access it with the canvas.width and canvas.height properties


YOU CAN NOT SET THE WIDTH AND HEIGHT OF THE CANVAS WITH CSS. YOU'LL HAVE ISSUES IF YOU DO THAT`


// the fillStyle property sets the color, gradient or pattern used to fill the drawing
ctx.fillStyle = 'red'; // sets the fill color
ctx.fillStyle = '#FF0000'; // sets the fill color
ctx.fillStyle = 'rgb(255, 0, 0)'; // sets the fill color
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // sets the fill color
// example of gradient fill
ctx.fillStyle = gradient; // sets the fill color to a gradient
ctx.fillStyle = pattern; // sets the fill color to a pattern


// Draw a rectangle
ctx.fillRect(x - origin, y - origin, width, height); // draws a rectangle with the origin corner at 20,20 and a width and height of 150,100

// Draw an arc or circle
ctx.arc(x - origin, y - origin, radius, startAngle, endAngle, anticlockwise); // draws an arc if you specify the end angle as 2*Math.PI or as 360deg and the start as 0deg



// Draw a circle
// ctx.beginPath();
ctx.arc(300, 300, 100, 0, Math.PI * 2, false);
ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;
ctx.stroke();
ctx.fill();


// Draw Lines
ctx.beginPath();
ctx.moveTo(50, 300);    // Moves the pen to the specified coordinates
ctx.lineTo(300, 100);  // Draws a line from the current position to the specified coordinates
ctx.lineTo(400, 300);   // Draws a line from the current position to the specified coordinates
ctx.strokeStyle = '#fa34a3'; // Sets the color used for strokes
ctx.lineWidth = 10; // Sets the current line width
ctx.stroke(); // Draws the path you have defined


// Text
ctx.font = '30px Arial';    // Sets the current font properties for text content
ctx.fillStyle = 'purple';   // Sets the color used inside shapes
ctx.fillText('Hello world', 400, 50); // Draws filled text on the canvas ('text', x, y, [maxWidth])
ctx.strokeStyle = 'black'; // Sets the color used for strokes
ctx.lineWidth = 1; // Sets the current line width
ctx.strokeText('Hello world', 400, 100); // Draws text on the canvas (without fill) ('text', x, y, [maxWidth])



// Pull images from the DOM into canvas
`To do this, you'll add an image tag to your html file and give it an id. Then you'll select the image tag in your javascript file and assign it to a variable. Then you'll add an event listener to the image variable that listens for the load event. When the image loads, you'll call a function that draws the image on the canvas`

// <img id="source" src="image.jpg" alt="image">

const image = document.getElementById('source');
image.style.display = 'none';

image.addEventListener('load', () => ctx.drawImage(image, 270, 270, 150, 150));     // Draws an image, canvas, or video onto the canvas ('image', x, y, width, height)










`Window.requestAnimationFrame()`
// definition = `The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint`

// The syntax is as follows:

window.requestAnimationFrame(callback); // the window is optional as it is the default object

// The callback method is passed a single argument, a DOMHighResTimeStamp, which indicates the current time (the time returned from performance.now()) for when requestAnimationFrame() starts to fire callback functions.


`NOTE: Your callback fn must itself call requestAnimationFrame() again if you want to animate another frame at the next repaint. It is common to call requestAnimationFrame() from within the callback function`

// The request animation frame defaults to 60fps i.e it refreshes every second. You can change that by using the setTimeout() or setInterval() methods



// Example: Animate a ball element

const div = document.querySelector('div');

let start;
let done = false;

const ball = document.querySelector('img');

function step(timestamp) {
    if (start === undefined)
        start = timestamp;

    const elapsed = timestamp - start;

    elapsed > 2000 && (done = true);

    if (done)
        return;

    ball.style.transform = `translateX(${elapsed / 20}px) rotate(${elapsed / 10}deg)`;

    requestAnimationFrame(step);
}

requestAnimationFrame(step);



`A more advanced example`
// const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

// let x = 0;
// let y = 0;
let width = 50;
let height = 50;
let dx = 5;
let dy = 5;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, width, height);

    if (x + width > canvas.width || x < 0)
        dx = -dx;

    if (y + height > canvas.height || y < 0)
        dy = -dy;

    x += dx;
    y += dy;

    requestAnimationFrame(draw);
}

draw();












