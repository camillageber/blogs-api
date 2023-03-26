const postService = require('../services/postService');

const findAllPosts = async (req, res, next) => {
  try {
    const posts = await postService.findAllPosts();
    res.status(200).json(posts);
  } catch (e) {
    next(e);
  }
};

const findPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const posts = await postService.findPostById(id);
    res.status(200).json(posts);
  } catch (e) {
    next(e);
  }
};

const createPost = async (req, res, next) => {
  try {
    const post = await postService.createPost(req.body, req.data.id);
    if (post === 'somethingMissing') res.status(400).json({ message: '"categoryIds" not found' });
    res.status(201).json(post);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  findAllPosts,
  findPostById,
  createPost,
};