`THE PATH MODULE`;
// The path module is used to work with file and directory paths. It has various methods for working with paths such as join, resolve, normalize, parse and format. 

// It is also used to get the directory name, base name, extension and file name of a file path. The path module is a core module and does not need to be installed. 

// File paths on windows use the backslash (\) while file paths on unix (Linux and Mac) use the forward slash (/). The path module handles these differences so you don't have to type seperate paths for different OS. You use it as shown below



const path = require('path');       // require the path module



`Base Name`;
// The basename() method is used to get the base name of a file path i.e the name of the actual file. It takes in the file path and an optional extension as arguments. The default extension is an empty string. If you pass in the extension (file type), it will remove the extension from the file name

const baseName = path.basename('filepath', '?extension');      // get the base name of a file path

const baseName2 = path.basename('users/john/desktop/index.html');      // returns index.html

const baseName3 = path.basename('users/john/desktop/index.html', '.html');      // returns index



`Directory Name`;
// The dirname() method is used to get the directory name of a file path. It takes in the file path as an argument. It returns the directory name of the file path. It does not include the file name

const dirName = path.dirname('filepath');      // get the directory name of a file path

const dirName2 = path.dirname('users/john/desktop/index.html');      // returns users/john/desktop



`Extension`;
// The extname() method is used to get the extension of a file path. It takes in the file path as an argument. It returns the extension of the file itself. It does not include the dot (.)

const extName = path.extname('filepath');      // get the extension of a file path e.g js, html, css

const extName2 = path.extname('users/john/desktop/index.html');      // returns .html



`Parse`;
// The parse() method is used to parse a file path. It takes in the file path as an argument. It returns an object with the root, dir, base, ext and name properties. The root property is the root of the file path, the dir property is the directory name, the base property is the base name, the ext property is the extension and the name property is the file name

const parsedPath = path.parse('filepath');      // parse a file path

const parsedPath2 = path.parse('users/john/desktop/index.html');      // returns an object with the root, dir, base, ext and name properties. i.e. { root: '', dir: 'users/john/desktop', base: 'index.html', ext: '.html', name: 'index' }



`Format`;
// The format() method is used to format a file path. It is the opposite of parse, it takes in an object with the root, dir, base, ext and name properties as an argument. It returns a file path. The root property is the root of the file path, the dir property is the directory name, the base property is the base name, the ext property is the extension and the name property is the file name

const formattedPath = path.format({ root: '', dir: 'users/john/desktop', base: 'index.html', ext: '.html', name: 'index' });      // format a file path and returns users/john/desktop/index.html



`Normalize`;
// The normalize() method is used to normalize a file path. It takes in the file path as an argument. It returns the normalized file path. It removes any extra slashes and .. and resolves any relative paths

const normalizedPath = path.normalize('filepath');      // normalize a file path

const normalizedPath2 = path.normalize('users/john/desktop/../index.html');      // returns users/john/index.html




`Joining Paths`;
// The join() method is used to join two or more paths together. It takes in the paths to join as arguments. It returns the joined path

const path1 = 'dir1';
const path2 = 'dir2';
const path3 = 'dir3';

const joinedPath = path.join(path1, path2, path3);      // join paths and returns dir1\dir2\dir3 on windows and dir1/dir2/dir3 on unix

const joinedPath2 = path.join('john/desktop', 'index.html');      // returns john/desktop/index.html




`Resolving Paths`;
// The resolve() method resolves a file path to an absolute path. It takes in the file path as an argument and returns the resolved file path

const resolvedPath = path.resolve('filepath');      // resolve a file path to an absolute path

const resolvedPath2 = path.resolve('john/desktop', 'index.html');      // returns the absolute path of the file i.e. C:\users\john\desktop\index.html on windows and /users/john/desktop/index.html on unix


`__dirname and __filename`;
// The __dirname and __filename are global objects in Node.JS. They are used to get the directory name and file name of the current module/file. The __dirname object is used to get the directory name of the current module. The __filename object is used to get the file name of the current module

console.log(__dirname);      // returns the directory name of the current file i.e. for this file it will return C:\Users\John\Desktop\ on windows and /Users/John/Desktop/ on unix for example

console.log(__filename);      // returns the file name of the current file i.e. for this file it will return C:\Users\John\Desktop\learn.js on windows and /Users/John/Desktop/learn.js on unix for example



