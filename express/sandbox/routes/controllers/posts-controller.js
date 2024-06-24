const posts = [
    {
        id: 1,
        title: 'Post 1',
        body: 'This is the first post',
    },
    {
        id: 2,
        title: 'Post 2',
        body: 'This is the second post',
    },
    {
        id: 3,
        title: 'Post 3',
        body: 'This is the third post',
    },
];


// @desc Get all posts
// @route GET /api/posts
// @access Public
const getPosts = (req, res, next) => {
    res.json(posts);
};


// @desc Get a single post
// @route GET /api/posts/:id
// @access Public
const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        const error = new Error('Post not found!');
        error.status = 404;
        return next(error);
    }

    res.json(post);
}


// @desc Create a post
// @route POST /api/posts
// @access Public
const createPost = (req, res, next) => {
    const { title, body } = req.body;

    if (!title || !body) {
        return res
            .status(400)
            .json({ message: 'Please include title and body' });
    }

    const id = posts.length + 1;
    const newPost = {
        id,
        title,
        body,
    };

    posts.push(newPost);
    res
        .status(201)
        .json(newPost);
}


// @desc Update a post
// @route PUT /api/posts/:id
// @access Public
const updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        return res
            .status(404)
            .json({ message: 'Post not found' });
    }

    const { title, body } = req.body;

    if (!title || !body) {
        return res
            .status(400)
            .json({ message: 'Please include title and body' });
    }

    post.title = title;
    post.body = body;

    res.json(post);
}


// @desc Delete a post
// @route DELETE /api/posts/:id
// @access Public
const deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(post => post.id === id);

    if (index === -1) {
        return res
            .status(404)
            .json({ message: 'Post not found' });
    }

    posts.splice(index, 1);
    res.status(204).send();
}

export { getPosts, getPost, createPost, updatePost, deletePost };