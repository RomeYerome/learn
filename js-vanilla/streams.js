`STREAMS`;
// Streams are objects that let you read data from a source or write data to a destination in continuous fashion. They are used to read and write large amounts of data in Node.JS. There are four types of streams in Node.JS: Readable, Writable, Duplex and Transform. They are all instances of EventEmitter. They all have the same basic methods and properties. The main difference is how they are used. See example below

`Readable Streams`;
// Readable streams are used to read data from a source. They are instances of EventEmitter. They have the following basic methods and properties:

// .pipe() method is used to read the data from a readable stream and write it to a destination. It is used to connect the output of a readable stream to the input of a writable stream

// .readable property is used to check if the stream is readable. It is a boolean value

// .on() method is used to listen for the 'data' event. The 'data' event is emitted when the stream is ready to read data

// .once() method is used to listen for the 'end' event. The 'end' event is emitted when there is no more data to read

// .pause() method is used to pause the stream. It is used to stop the 'data' event from being emitted

// .resume() method is used to resume the stream. It is used to start the 'data' event from being emitted

// .destroy() method is used to stop the stream. It is used to stop the 'data' event from being emitted and free up resources

// .destroyed property is used to check if the stream is destroyed. It is a boolean value

// .setEncoding() method is used to set the encoding of the data read from the stream. It is used to convert the data from a buffer to a string

// .unpipe() method is used to stop the readable stream from being piped to a destination

// .unshift() method is used to push the data back into the stream. It is used to push the data back into the stream so that it can be read again

// .wrap() method is used to wrap the readable stream in a Readable stream. It is used to wrap the readable stream in a Readable stream so that it can be used as a readable stream

// .isPaused() method is used to check if the stream is paused. It is a boolean value

// .read() method is used to read the data from the stream. It is used to read the data from the stream. It takes in an optional size parameter. The default size is 64kb

// .push() method is used to push the data into the stream. It is used to push the data into the stream so that it can be read

// .readableLength property is used to check the length of the data in the stream. It is a number value

// .readableHighWaterMark property is used to check the high water mark of the stream. It is a number value

// .readableFlowing property is used to check if the stream is flowing. It is a boolean value

// .readableEnded property is used to check if the stream is ended. It is a boolean value

// .readableEncoding property is used to check the encoding of the data in the stream. It is a string value

// .readableBuffer property is used to check the buffer of the data in the stream. It is a buffer value

// .readableObjectMode property is used to check if the stream is in object mode. It is a boolean value

// .readableDefaultEncoding property is used to check the default encoding of the data in the stream. It is a string value

// .readableDestroyed property is used to check if the stream is destroyed. It is a boolean value

// .readableError property is used to check if the stream has an error. It is an error value

// .readableEnded property is used to check if the stream is ended. It is a boolean value
