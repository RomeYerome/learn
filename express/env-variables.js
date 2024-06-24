`ENVIRONMENT VARIABLES`;
// Environment variables are variables outside of the application that can be accessed by the application. They are used to store sensitive information such as API keys, database passwords, etc. They are accessed using the `process.env` object in Node.js. Environment variables are set using the `export` command in the terminal. For example, to set an environment variable called `API_KEY`, you would run the following command in the terminal:

`export API_KEY=your-api-key`;

// You can access the environment variable in your Node.js application like this:

`const apiKey = process.env.API_KEY`;

// You can also set environment variables in a `.env` file in the root directory of your project. This file should not be committed to version control, as it may contain sensitive information. You should add it to your .gitignore files so you don't end up pushing your apikeys with your code. The `.env` file should have the following format:

`API_KEY=your-api-key`;