const db = require('../config/db');

const getAllPosts = () => db.query('SELECT * FROM posts');
const getPostById = (id) => db.query('SELECT * FROM posts WHERE id = $1', [id]);
const createPost = (title, content) => db.query(
  'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
  [title, content]
);
const updatePost = (id, title, content) => db.query(
  'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
  [title, content, id]
);
const deletePost = (id) => db.query('DELETE FROM posts WHERE id = $1', [id]);

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
