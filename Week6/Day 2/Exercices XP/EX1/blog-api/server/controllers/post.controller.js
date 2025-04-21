const Post = require('../models/post.model');

exports.getAll = async (req, res) => {
  const result = await Post.getAllPosts();
  res.json(result.rows);
};

exports.getOne = async (req, res) => {
  const id = req.params.id;
  const result = await Post.getPostById(id);
  if (result.rows.length === 0) return res.status(404).json({ error: 'Post not found' });
  res.json(result.rows[0]);
};

exports.create = async (req, res) => {
  const { title, content } = req.body;
  const result = await Post.createPost(title, content);
  res.status(201).json(result.rows[0]);
};

exports.update = async (req, res) => {
  const { title, content } = req.body;
  const id = req.params.id;
  const result = await Post.updatePost(id, title, content);
  if (result.rows.length === 0) return res.status(404).json({ error: 'Post not found' });
  res.json(result.rows[0]);
};

exports.remove = async (req, res) => {
  const id = req.params.id;
  await Post.deletePost(id);
  res.status(204).send();
};
