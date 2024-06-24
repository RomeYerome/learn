// HANDLES
const button = document.querySelector('#get-posts-btn');
const posts = document.getElementById('output');

const postForm = document.getElementById('post-form');
const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('body');


const postsEndpoint = 'http://localhost:5000/api/posts';

// Functions
const getPosts = async () => {
    const res = await fetch(postsEndpoint);
    const data = await res.json();

    posts.innerHTML = '';
    posts.innerHTML = data.map(post => {
        return `
                <h3>${post.title}</h3>
        `;
    }).join('');
}

const createPost = async (e) => {
    e.preventDefault();

    const formData = new FormData(postForm);
    const title = formData.get('title');
    const body = formData.get('body');

    try {
        if (!title || !body) {
            throw new Error('Please include title and body');
        }

        const res = await fetch(postsEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, body }),
        });

        if (!res.ok) {
            throw new Error('Server error');
        }

        const data = await res.json();
        console.log(data);

        titleInput.value = '';
        bodyInput.value = '';
        getPosts();

    } catch (error) {
        console.log(error);
    }



}


// Event Listeners
button.addEventListener('click', getPosts);
postForm.addEventListener('submit', createPost);