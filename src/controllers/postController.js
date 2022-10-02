const postService = require('../services/postService');

const findAllPosts = async (req, res, next) => {
  try {
    const posts = await postService.findAllPosts();
    res.status(200).json(posts);
  } catch (e) {
    next(e);
  }
};

// const createPost = async (req, res, next) => {
//   try {
//     const newPost = await postService.createPost(req.body);
//     res.status(201).json(newPost);
//   } catch (e) {
//     next(e);
//   }
// };

module.exports = {
  findAllPosts,
};