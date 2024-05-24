`THE AUDIO API`;

// definition = `The audio API is a browser API that allows you to play audio files in your browser. It's a high level API that is part of the HTML5 spec and is supported in all modern browsers. It's not supported in IE8 and below though.

// To use, you create an audio element in your html file and give it an id

// <audio id="myAudio" src="audio.mp3"></audio>

// Then you select the audio element in your javascript file and assign it to a variable

const audio = document.getElementById('myAudio');

// The audio element does not show a default player unless you add the controls attribute. You can create your own player with buttons and a slider to control the audio

`Some Common Properties and Methods of the audio api`
audio.play();   // plays the audio. You can attach this to a button click event to control it

audio.pause();  // pauses the audio. You can attach this to a button click event to control it

audio.currentTime = 10; // sets the current time of the audio to 10 seconds. Used to parse through the audio and can be attached to a slider to control it

audio.volume = 0.5; // sets the volume of the audio to 50%

audio.playbackRate = 0.5; // sets the playback rate of the audio to 50%

audio.loop = true; // sets the audio to loop

audio.muted = true; // mutes the audio

audio.defaultPlaybackRate = 0.5; // sets the default playback rate of the audio to 50%

audio.autoplay = true; // sets the audio to autoplay

audio.controls = true; // sets the audio to show controls

audio.preload = true; // sets the audio to preload

audio.src = 'audio.mp3'; // sets the source of the audio

audio.currentSrc = 'audio.mp3'; // gets the source of the audio

audio.duration = 10; // gets / sets the duration of the audio

audio.paused = true; // checks if the audio is paused

audio.ended = true; // checks if the audio has ended

audio.error = true; // checks if there is an error with the audio

audio.seeking = true; // checks if the audio is seeking

audio.seekable = true; // checks if the audio is seekable

audio.readyState = true; // checks if the audio is ready to play

audio.networkState = true; // checks the network state of the audio

audio.buffered = true; // checks if the audio is buffered

audio.canPlayType('audio/mp3'); // checks if the audio can play the specified type

audio.canPlayType('audio/mp3', 'maybe'); // checks if the audio can play the specified type and returns maybe

audio.canPlayType('audio/mp3', 'probably'); // checks if the audio can play the specified type and returns probably

audio.load(); // loads the audio


`Stop Audio`
// The audio api does not have a stop method. To stop the audio, you have to pause it and set the currentTime to 0
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});










