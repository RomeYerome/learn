// By adding "type": "module" to the package.json file, you can use ES6 modules in Node.js. This allows you to use import and export statements instead of require and module.exports. 

import express from 'express';
// const express = require('express');
import path from 'path';
// const path = require('path');
import posts from './routes/posts.js';
// const posts = require('./routes/posts');

import cors from 'cors';
import errorHandler from './middleware/error-handler.js';
// const errorHandler = require('./middleware/error-handler');
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));




const app = express();
const port = process.env.PORT || 5000;


app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/posts', posts);


app.use(errorHandler);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });
// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, '/about.html'));
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});