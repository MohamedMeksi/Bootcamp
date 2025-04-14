const express = require('express');
const { get } = require('lodash');
const app = express();

const data = [
    { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
    { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
    { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.' }
];
app.use(express.json());

app.get('/api/posts', (req, res) => {
    const posts = data.map(post => ({ id: post.id, title: post.title }));
    res.json(posts);
});

app.get('/api/posts/:id', (req, res) => {
    const post = data.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
});


app.post('/api/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ error: 'Title and content are required' });
    const newPost = { id: data.length + 1, title, content };
    data.push(newPost);
    res.status(201).json(newPost);
});

app.put('/api/posts/:id', (req, res) => {
    const post = data.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ error: 'Post not found' });
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ error: 'Title and content are required' });
    post.title = title;
    post.content = content;
    res.json(post);
});


app.delete('/api/posts/:id', (req, res) => {
    const postIndex = data.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) return res.status(404).json({ error: 'Post not found' });
    data.splice(postIndex, 1);
    res.status(204).send();
});

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});