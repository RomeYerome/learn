`WEB SPEECH API`;

// definition = `The web speech API is a browser API that allows you to add speech recognition and speech synthesis to your web page. It's allows webpages handle voice data.




`SPEECH RECOGNITION`;

// speech recognition is accessed by the speech recognition interface which enables you recognize speech from an audio input (normally from a microphone). Generally, you'll create a SpeechRecognition object with it which has a number of event handlers for detecting and reacting to speech input. 

// The SpeechGrammar interface of the Web Speech API represents a set of words or patterns of words that your app should recognize. Grammar is defined using JSpeech Grammar Format (JSGF) .It is used with the SpeechRecognition interface. 

// The SpeechRecognitionResult interface of the Web Speech API represents a single recognition match, which may contain multiple SpeechRecognitionAlternative objects. It contains the words that were said by the user and a confidence score for each word. The SpeechRecognitionAlternative interface of the Web Speech API represents a single word that has been recognized by the speech recognition service. It contains a transcript of the recognized word along with a confidence score.





`SPEECH SYNTHESIS`;

// speech synthesis is accessed by the speech synthesis interface which allows web pages to control text-to-speech output. Generally, you'll create a SpeechSynthesis object with the SpeechSynthesis Interface which allows your app to read out text generally through the default speech synthesizer.

// Different voices are accessed through SpeechSynthesisVoice objects. Each SpeechSynthesisVoice has its own relative speech service including information about language, name and URI. You can get a list of available voices by calling SpeechSynthesis.getVoices().

// The SpeechSynthesisUtterance interface of the Web Speech API represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)



`SPEECH RECOGNITION EXAMPLE`;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // check for browser compatibility

// Create a new speech recognition object
const recognition = new SpeechRecognition();

// Set the properties
recognition.lang = 'en-US'; // sets the language of the recognition
recognition.continuous = false; // sets whether continuous results are returned for each recognition, or only a single result. Defaults to false

recognition.interimResults = false; // sets whether the speech recognition system should return interim results, or just final results. Interim results are results that are not yet final (e.g. the SpeechRecognitionResult.isFinal property is false), so they may change before the final results. If you set this to true, you'll get interim results while you speak and the final result when you stop speaking

recognition.maxAlternatives = 1; // sets the maximum number of SpeechRecognitionAlternatives provided per SpeechRecognitionResult. The default value is 1

// Add event listeners
recognition.onresult(e => {
    console.log(e); // logs the event object
    console.log(e.results); // logs the results array
    console.log(e.results[0]); // logs the first result object
    console.log(e.results[0][0]); // logs the first alternative containing the transcript


    // Get the transcript of the first alternative of the first result
    console.log(e.results[0][0].transcript);
});





`some common methods and properties of the speech recognition api`;


`Instance Properties`;

recognition.grammars // gets/sets the grammars that will be understood by the current SpeechRecognition

recognition.continuous; // gets/sets a Boolean indicating whether continuous results are returned for each recognition, or only a single result

recognition.interimResults; // returns a Boolean indicating whether interim results should be returned (true) or not (false.) Interim results are results that are not yet final (e.g. the SpeechRecognitionResult.isFinal property is false), so they may change before the final results. If you set this to true, you'll get interim results while you speak and the final result when you stop speaking

recognition.maxAlternatives; // returns an unsigned long representing the maximum number of SpeechRecognitionAlternatives provided per SpeechRecognitionResult. The default value is 1

recognition.lang; // returns a DOMString representing the language of the current SpeechRecognition. It is a BCP 47 language tag that identifies the language being recognized. If not specified, this defaults to the HTML lang attribute value, or the user agent's language setting if that isn't set either




`Instance Methods`

recognition.start(); // starts the speech recognition service listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition. This method returns void

recognition.stop(); // stops the speech recognition service from listening to incoming audio, and attempts to return a SpeechRecognitionResult using the audio captured so far. This method returns void

recognition.abort(); // stops the speech recognition service from listening to incoming audio, and doesn't attempt to return a SpeechRecognitionResult. This method returns void



`Instance Events`

recognition.onresult = () => {
    // what you want to happen when the result event fires
}; // sets the event handler for the result event of the SpeechRecognition object

recognition.onaudiostart; // returns the event handler for the audiostart event

recognition.onaudioend; // OR 'audioend' when using event listeners. Fires the event handler when the user agent has finished capturing audio

recognition.onend; // Fires when the speech recognition service has disconnected

recognition.onerror; // returns the event handler for the error event

recognition.onnomatch; // returns the event handler for the nomatch event

recognition.onresult; // returns the event handler for the result event

recognition.onsoundstart; // returns the event handler for the soundstart event

recognition.onsoundend; // returns the event handler when all sound including non-speech has stopped being detected

recognition.onspeechstart; // returns the event handler for the speechstart event

recognition.onspeechend; // returns the event handler when you stop speaking

recognition.onstart; // returns the event handler when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition


recognition.serviceURI; // returns a DOMString containing the name of the service used to provide speech recognition. This is specified in the constructor, using the serviceURI parameter. If this is not specified, the user agent's default speech service is used







`SPEECH SYNTHESIS`;

// speech synthesis is accessed by the speech synthesis interface which allows web pages to control text-to-speech output. Generally, you'll create a SpeechSynthesis object with the SpeechSynthesis Interface which allows your app to read out text generally through the default speech synthesizer.`

`SPEECH SYNTHESIS EXAMPLE`;

const synth = window.speechSynthesis; // check for browser compatibility

// Create a new speech synthesis object
const utterance = new SpeechSynthesisUtterance();

// Set the properties
utterance.text = 'Hello world'; // sets the text to be spoken

utterance.lang = 'en-US'; // sets the language of the speech

utterance.volume = 1; // sets the volume of the speech

utterance.rate = 1; // sets the rate of the speech

utterance.pitch = 1; // sets the pitch of the speech

utterance.voice = synth.getVoices()[0]; // sets the voice of the speech

utterance.onstart = () => { }; // fires the event handler when the speech starts

utterance.onend = () => { }; // fires the event handler when the speech ends

utterance.onerror = () => { }; // fires the event handler when there is an error

utterance.onpause = () => { }; // fires the event handler when the speech is paused

utterance.onresume = () => { }; // fires off the event handler when the speech resumes

utterance.onmark = () => { }; // fires off the event handler when the speech reaches a named SSML 'mark' tag

utterance.onboundary = () => { }; // fires off the event handler when the speech reaches a word or sentence boundary

utterance.onvoiceschanged = () => { }; // fires off the event handler when the list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed (when the voiceschanged event fires.)


`Instance Properties`

synth.paused; // returns a Boolean indicating whether the SpeechSynthesis object is in a paused state or not

synth.pending; // returns a Boolean indicating whether the utterance queue contains as-yet-unspoken utterances

synth.speaking; // returns a Boolean indicating whether the SpeechSynthesis object is currently in the process of speaking or not


`Instance Methods`

synth.speak(utterance); // adds an utterance to the utterance queue; it will be spoken when any other utterances queued before it have been spoken

synth.cancel(); // removes all utterances from the utterance queue

synth.getVoices(); // returns a list of SpeechSynthesisVoice objects representing all the available voices on the current device

synth.pause(); // puts the SpeechSynthesis object into a paused state

synth.resume(); // puts the SpeechSynthesis object into a non-paused state: resumes it if it was already paused


`Instance Events`

synth.onvoiceschanged; // returns the event handler for the voiceschanged event

synth.onvoiceschanged = () => { }; // fires off the event handler when the list of SpeechSynthesisVoice objects that would be returned by the SpeechSynthesis.getVoices() method has changed (when the voiceschanged event fires.)


















