`__DIRNAME FIX`;
// When using ES6 modules, `__dirname` is not available. It is only available in Common JS Modules. This is a workaround to get the directory name of the current module.

// This code snippet will give you the directory name of the current module in ES6 modules.

// Here's how you can use it in your code:
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __dirname = path.dirname(__filename);

// Now you can use `__dirname` in your code to get the directory name of the current module.

// Note: This workaround is necessary because `__dirname` is not available in ES6 modules. It is a common issue when migrating from CommonJS to ES6 modules in Node.js.