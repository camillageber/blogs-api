const { BlogPost, Category, User, PostCategory } = require('../models');

const findAllPosts = async () => {
  const posts = await BlogPost.findAll({
      include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories', through: { attributes: [] } },
      ],
  });
  return posts;
};

const findPostById = async (id) => {
  const posts = await BlogPost.findOne({
    where: { id },
      include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories', through: { attributes: [] } },
      ],
  });

  if (!posts) {
    const err = new Error('Post does not exist');
    err.status = 404;
    throw err;
  }
  return posts;
};

const createPost = async ({ title, content, categoryIds }, userId) => {
  try {
      const addedPost = await BlogPost.create({
          title, content, userId,
      });
      const mapedPost = categoryIds.map((id) => ({
          postId: addedPost.id,
          categoryId: id,
      }));
      await PostCategory.bulkCreate(mapedPost);
      return addedPost;
  } catch (err) {
      return 'somethingMissing';
  }
};

module.exports = {
  findAllPosts,
  findPostById,
  createPost, 
};