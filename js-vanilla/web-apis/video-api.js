`VIDEO API`;

// definition = `The video API is a browser API that allows you to play video files in your browser. It's a high level API that is part of the HTML5 spec and is supported in all modern browsers. It's not supported in IE8 and below though.


// To use, you create a video element in your html file and give it an id

// <video id="myVideo" src="video.mp4"></video>

`you can attach attributes directly to the video element like width, autoplay, controls, loop, muted, poster etc OR with CSS`

// Then you select the video element in your javascript file and assign it to a variable

const video = document.getElementById('myVideo');

// The video element does not show a default player unless you add the controls attribute. You can create your own player with buttons and a slider to control the video


`Some Common Properties and Methods of the video api`
video.play();   // plays the video. You can attach this to a button click event to control it

video.pause();  // pauses the video. You can attach this to a button click event to control it

video.currentTime = 10; // sets (or gets if you don't assign a value) the current time of the video to 10 seconds. Used to parse through the video and can be attached to a slider to control it

video.volume = 0.5; // sets the volume of the video to 50%

video.playbackRate = 0.5; // sets the playback rate of the video to 50%

video.loop = true; // sets the video to loop

video.muted = true; // mutes the video

video.defaultPlaybackRate = 0.5; // sets the default playback rate of the video to 50%

video.autoplay = true; // sets the video to autoplay

video.controls = true; // sets the video to show controls

video.preload = true; // sets the video to preload

video.src = 'video.mp4'; // sets the source of the video

video.currentSrc = 'video.mp4'; // gets the source of the video

video.duration = 10; // gets / sets the duration of the video

video.paused = true; // checks if the video is paused

video.ended = true; // checks if the video has ended

video.error = true; // checks if there is an error with the video

video.seeking = true; // checks if the video is seeking

video.seekable = true; // checks if the video is seekable

video.readyState = true; // checks if the video is ready to play

video.networkState = true; // checks the network state of the video

video.buffered = true; // checks if the video is buffered

video.canPlayType('video/mp4'); // checks if the video can play the specified type

video.poster = 'poster.jpg'; // sets the poster image of the video

video.load(); // loads the video








