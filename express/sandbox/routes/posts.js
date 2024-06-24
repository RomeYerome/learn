// By adding "type": "module" to the package.json file, you can use ES6 modules in Node.js. This allows you to use import and export statements instead of require and module.exports. 

import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from './controllers/posts-controller.js';
// const express = require('express');
const router = express.Router();




// Get All Posts
router.get('/', getPosts);

// Get Single Post
router.get('/:id', getPost);

// Create Post
router.post('/', createPost);



// Update Post
router.put('/:id', updatePost);


// Delete Post
router.delete('/:id', deletePost);



export default router;
// module.exports = router;