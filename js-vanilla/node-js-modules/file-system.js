`THE FILE SYSTEM MODULE (FS)`;
// The file system module is used to work with files and directories. It is used to read, write, create and delete files


`WRITING TO FILES`;

// You can either write to a file synchronously with the writeFileSync() method or asynchronously with the writeFile() method using callbacks or promises. 



`FLAGS`;
// w: opens file for writing. It creates the file if none exists, overwrites it if it does 

// wx: creates the file for writing. It fails if the file already exists

// a: opens a file for writing(appending). It creates the file if none exists

// ax: creates a file for writing(appending). It fails if the file it exists

// r+: opens a file for reading and writing. If the file does not exist, the operation fails

// w+: opens a file for reading and writing. If the file does not exist, it will be created. If the file exists, it will be truncated/overwritten

// a+: is used to open the file for reading and writing(appending). If the file does not exist, it will be created. If the file exists, it will be appended to

// rs+: opens a file for reading in synchronous mode. Instructs the operating system to bypass the local file system cache. This is primarily used for opening files on network volumes. It is not recommended for general use










`WRITING SYNCHRONOUSLY (DEFAULT)`;
// To write asynchronously, you can either use the callback method or promises. They both use the writeFile() method however, the callback method requires the fs module while the promises method requires the fs/promises module. 

// The writeFile() method takes in the file name, the content to write, an optional options object and an optional callback function as arguments. The options object can be used to specify the encoding, mode and flag. The default encoding is utf8, the default mode is 0o666 and the default flag is 'w'




`Callback Method`
// The callback function takes in an error parameter. If there is an error, the error parameter will contain the error, else it will be null

const fs = require('fs');   // require the fs module

fs.writeFile('filename', 'content', '?{options object}', (err) => {
    if (err) throw err;

    console.log('File written to...');
});



`Promises Method`
// The promises method requires the fs/promises module. It returns a promise that resolves when the file is written to. The promise resolves with no value. You can either use the .then() method or the async/await syntax to handle the promise

const fsPromises = require('fs/promises');   // require the fs/promises module

// .then() method
fsPromises.writeFile('filename', 'content', '?{options object}')
    .then(() => console.log('File written to...'))
    .catch((err) => console.log(err));


// async/await method
async function writeToFile(filename, content) {
    try {
        await fsPromises.writeFile(filename, content, '?{options object}');
        console.log('File written to...');
    } catch (err) {
        console.log(err);
    }
}

writeToFile('filename.txt', 'content');





`WRITING SYNCHRONOUSLY`;
// To write synchronously, You have to require the fs module and then you can call the writeFileSync() method. The method takes in the file name, the content to write and an options object. The options object can be used to specify the encoding, mode and flag. The default encoding is utf8, the default mode is 0o666 and the default flag is 'w'

const fs = require('fs');   // require the fs module

fs.writeFileSync('filename', 'content', '?{options object}');  // write to a file synchronously















`READING FROM FILES`;
// You can either read from a file synchronously with the readFileSync() method or asynchronously with the readFile() method using callbacks or promises.




`READING ASYNCHRONOUSLY`;
// To read asynchronously, you either use the callback method or promises. They both use the readFile() method, however, the callback method requires the fs module while the promises method requires the fs/promises module.

// The readFile() method takes in the file name, an optional encoding and an optional callback function as arguments. The default encoding is utf8



`Callback Method`;
// The callback function takes in an error parameter and a data parameter. If there is an error, the error parameter will contain the error, else it will be null. The data parameter will contain the data read from the file

const fs = require('fs');       // require the fs module

fs.readFile('filename', 'utf-8', (err, data) => {
    if (err) throw err;

    console.log(data);
});



`Promises Method`;
// The promises method requires the fs/promises module. It returns a promise that resolves when the file is read from. The promise resolves with the data read from the file. You can either use the .then() method or the async/await syntax to handle the promise

const fsPromises = require('fs/promises');       // require the fs/promises module

// .then() method
fsPromises.readFile('filename', 'utf-8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


// async/await method
async function readFromFile(filename) {
    try {
        const data = await fsPromises.readFile(filename, 'utf-8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}


readFromFile('filename.txt');





`Reading Synchronously`
// To read synchronously, You have to require the fs module and then you can call the readFileSync() method. The method takes in the file name and the encoding which is 'utf-8' by default

const fs = require('fs');       // require the fs module

const data = fs.readFileSync('filename', 'utf-8');      // read from a file synchronously

console.log(data);










`DELETING / REMOVING FILES`;
// You can either delete a file synchronously with the unlinkSync() method or asynchronously with the unlink() method using callbacks or promises.





`DELETING ASYNCHRONOUSLY`;
// To delete asynchronously, you can either use the callback method or promises. They both use the unlink() method however, the callback method requires the fs module while the promises method requires the fs/promises module.

// The unlink() method takes in the file name and an optional callback function as arguments.


`Callback Method`
// The callback function takes in an error parameter. If there is an error, the error parameter will contain the error, else it will be null

const fs = require('fs');       // require the fs module

fs.unlink('filename', (err) => {
    if (err) throw err;

    console.log('File removed...');
});



`Promises Method`
// The promises method requires the fs/promises module. It returns a promise that resolves when the file is removed. The promise resolves with no value. You can either use the .then() method or the async/await syntax to handle the promise

const fsPromises = require('fs/promises');       // require the fs/promises module

// .then() method
fsPromises.unlink('filename')
    .then(() => console.log('File removed...'))
    .catch((err) => console.log(err));

// async/await method
async function removeFile(filename) {
    try {
        await fsPromises.unlink(filename);
        console.log('File removed...');
    } catch (err) {
        console.log(err);
    }
}

removeFile('filename');





`DELETING SYNCHRONOUSLY`;
// To delete synchronously, You have to require the fs module and then you can call the unlinkSync() method. The method takes in the file name as an argument

const fs = require('fs');       // require the fs module

fs.unlinkSync('filename');      // delete a file synchronously















`CREATING DIRECTORIES`;
// You can either create a directory synchronously with the mkdirSync() method or asynchronously with the mkdir() method using callbacks or promises.


`CREATING DIRECTORIES ASYNCHRONOUSLY`;
// To create asynchronously, you can either use the callback method or promises. They both use the mkdir() method however, the callback method requires the fs module while the promises method requires the fs/promises module.

// The mkdir() method takes in the directory name, an optional options object and an optional callback function as arguments. The options object can be used to specify the mode and recursive. The default mode is 0o777 and the default recursive is false

// Recursive is used to create the directory and any necessary subdirectories. If the directory already exists, it will not throw an error. 

// You create subdirectories by setting the recursive option to true and passing the directory path as the directory name




`Callback Method`;
// The callback function takes in an error parameter. If there is an error, the error parameter will contain the error, else it will be null

const fs = require('fs');       // require the fs module

fs.mkdir('dirname', '?{options object}', (err) => {
    if (err) throw err;

    console.log('Directory created...');

});



`Promises Method`;
// The promises method requires the fs/promises module. It returns a promise that resolves when the directory is created. The promise resolves with no value. You can either use the .then() method or the async/await syntax to handle the promise

const fsPromises = require('fs/promises');       // require the fs/promises module

// .then() method
fsPromises.mkdir('dirname', '?{options object}')
    .then(() => console.log('Directory created...'))
    .catch((err) => console.log(err));

// async/await method
async function createDirectory(dirname) {
    try {
        await fsPromises.mkdir(dirname, '?{options object}');
        console.log('Directory created...');
    } catch (err) {
        console.log(err);
    }
}

createDirectory('dirname');






`CREATING DIRECTORIES SYNCHRONOUSLY`;
// To create synchronously, You have to require the fs module and then you can call the mkdirSync() method. The method takes in the directory name and an optional options object as arguments. The options object can be used to specify the mode and recursive. The default mode is 0o777 and the default recursive is false

const fs = require('fs');       // require the fs module

fs.mkdirSync('dirname', '?{options object}');      // create a directory synchronously















`REMOVING DIRECTORIES`;
// You can either remove a directory synchronously with the rmdirSync() method or asynchronously with the rmdir() method using callbacks or promises.






`REMOVING DIRECTORIES ASYNCHRONOUSLY`;
// To remove asynchronously, you can either use the callback method or promises. They both use the rmdir() method however, the callback method requires the fs module while the promises method requires the fs/promises module.



`Callback Method`;
// The callback function takes in an error parameter. If there is an error, the error parameter will contain the error, else it will be null

const fs = require('fs');       // require the fs module

fs.rmdir('dirname', '?{options object}', (err) => {
    if (err) throw err;

    console.log('Directory removed...');
});



`Promises Method`;
// The promises method requires the fs/promises module. It returns a promise that resolves when the directory is removed. The promise resolves with no value. You can either use the .then() method or the async/await syntax to handle the promise

const fsPromises = require('fs/promises');       // require the fs/promises module

// .then() method
fsPromises.rmdir('dirname', '?{options object}')
    .then(() => console.log('Directory removed...'))
    .catch((err) => console.log(err));

// async/await method
async function removeDirectory(dirname) {
    try {
        await
            fsPromises.rmdir(dirname, '?{options object}');
        console.log('Directory removed...');
    } catch (err) {
        console.log(err);
    }
}

removeDirectory('dirname');






`REMOVING DIRECTORIES SYNCHRONOUSLY`;
// To remove synchronously, You have to require the fs module and then you can call the rmdirSync() method. The method takes in the directory name and an optional options object as arguments. The options object can be used to specify the recursive option. The default recursive is false

// Recursive is used to remove the directory and any necessary subdirectories. If the directory does not exist, it will throw an error.

const fs = require('fs');       // require the fs module

fs.rmdirSync('dirname', '?{options object}');      // remove a directory synchronously













`RENAME FILES OR DIRECTORIES`;
// You can either rename a file or directory synchronously with the renameSync() method or asynchronously with the rename() method using callbacks or promises.



`RENAMING FILES/DIRECTORIES ASYNCHRONOUSLY`;
// To rename asynchronously, you can either use the callback method or promises. They both use the rename() method however, the callback method requires the fs module while the promises method requires the fs/promises module.


`Callback Method`;
// The callback function takes in an error parameter. If there is an error, the error parameter will contain the error, else it will be null

const fs = require('fs');       // require the fs module

fs.rename('oldname', 'newname', '?{options object}', (err) => {
    if (err) throw err;
    console.log('File renamed...');
});


`Promises Method`;
// The promises method requires the fs/promises module. It returns a promise that resolves when the file is renamed. The promise resolves with no value. You can either use the .then() method or the async/await syntax to handle the promise

const fsPromises = require('fs/promises');       // require the fs/promises module

// .then() method
fsPromises.rename('oldname', 'newname', '?{options object}')
    .then(() => console.log('File renamed...'))
    .catch((err) => console.log(err));

// async/await method
async function renameFile(oldname, newname) {
    try {
        await fsPromises.rename(oldname, newname, '?{options object}');
        console.log('File renamed...');
    } catch (err) {
        console.log(err);
    }
}

renameFile('oldname', 'newname');





`RENAMING SYNCHRONOUSLY`;
// To rename synchronously, You have to require the fs module and then you can call the renameSync() method. The method takes in the old file name, the new file name and an optional options object as arguments. The options object can be used to specify the encoding, mode and flag. The default encoding is utf8, the default mode is 0o666 and the default flag is 'w'

const fs = require('fs');       // require the fs module

fs.renameSync('oldname', 'newname', '?{options object}');      // rename a file synchronously




















`APPENDING TO FILES`;
// You can either append to a file synchronously with the appendFileSync() method or asynchronously with the appendFile() method using callbacks or promises.



`APPENDING TO FILES ASYNCHRONOUSLY`;
// To append asynchronously, you can either use the callback method or promises. They both use the appendFile() method however, the callback method requires the fs module while the promises method requires the fs/promises module.

// They are similar in operations to writing a file with the writeFile method but the flag is set to 'a' instead of 'w'

`Callback Method`;
// The callback function takes in an error parameter. If there is an error, the error parameter will contain the error, else it will be null

const fs = require('fs');       // require the fs module

fs.appendFile('filename', 'content', '?{options object}', (err) => {
    if (err) throw err;
    console.log('Data appended to file...');
});


`Promises Method`;
// The promises method requires the fs/promises module. It returns a promise that resolves when the file is appended to. The promise resolves with no value. You can either use the .then() method or the async/await syntax to handle the promise

const fsPromises = require('fs/promises');       // require the fs/promises module

// .then() method
fsPromises.appendFile('filename', 'content', '?{options object}')
    .then(() => console.log('Data appended to file...'))
    .catch((err) => console.log(err));

// async/await method
async function appendToFile(filename, content) {
    try {
        await fsPromises.appendFile(filename, content, '?{options object}');
        console.log('Data appended to file...');
    } catch (err) {
        console.log(err);
    }
}

appendToFile('filename.txt', 'content');







`APPENDING SYNCHRONOUSLY`;
// To append synchronously, You have to require the fs module and then you can call the appendFileSync() method. The method takes in the file name, the content to append and an optional options object as arguments. The options object can be used to specify the encoding, mode and flag. The default encoding is utf8, the default mode is 0o666 and the default flag is 'a'

const fs = require('fs');       // require the fs module

fs.appendFileSync('filename', 'content', '?{options object}');      // append to a file synchronously


















`WATCHING FILES AND DIRECTORIES`;
// You can watch for changes in files and directories with the watch() method. The watch() method returns an instance of fs.FSWatcher. The fs.FSWatcher object is an EventEmitter that emits the 'change' event when a file or directory is modified. It also emits the 'rename' event when a file or directory is renamed.


`Watching Files and Directories`;
// To watch for changes in both files and directories, you have to require the fs module and then you can call the watch() method. The method takes in the file or directory name and an optional options object as arguments. The options object can be used to specify the persistent option. The default persistent is true

const fs = require('fs');       // require the fs module

const watcher = fs.watch('filename or dirname', '?{options object}');      // watch a file or directory

watcher.on('change', (eventType, filename) => {
    console.log(`File ${filename} has been ${eventType}d`);
});



`Options Object`;
// The options object can be used to specify the persistent option. The default persistent is true

`persistent`; 
// true is used to continue watching the file or directory until the process is terminated. If set to false, the watcher will stop watching the file or directory after the first change event is emitted

`recursive`; 
// true is used to watch all files and directories in the specified directory. If set to false, the watcher will only watch the specified directory

`encoding`; 
// 'utf8' is used to specify the encoding of the file being watched. The default encoding is utf8




`Closing the Watcher`;
// To close the watcher, you can call the close() method on the watcher object

watcher.close();


