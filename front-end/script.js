document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value;

    fetch('/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, author, content }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        loadPosts(); // Reload the list of posts
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

function loadPosts() {
    fetch('/posts')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts');
            postsContainer.innerHTML = '';
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <small>Author: ${post.author}</small>
                `;
                postsContainer.appendChild(postElement);
            });
        });
}

// Load posts when the page loads
window.onload = function() {
    loadPosts();
};