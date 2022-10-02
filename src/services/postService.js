// const Sequelize = require('sequelize');
const { BlogPost, Category, User } = require('../models');
// const config = require('../config/config');

// const env = process.env.NODE_ENV;
// const sequelize = new Sequelize(config[env]);

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

// const create = async ({ title, content, categoryIds }) => {
//   const result = await sequelize.transaction(async (t) => {
//     const newPost = await BlogPost.create(
//       { title, content, categoryIds },
//       {
//         include: [{ model: Category, as: 'categories' }],
//         transaction: t,
//       },
//       );
 
//       return newPost;
//   });
//   return result;
// };
  
// const createPost = async ({ title, content, categoryIds }) => {
//   const newPost = await create({ title, content, categoryIds });
 
//   const payload = {
//     id: newPost.dataValues.id,
//     title: newPost.dataValues.title,
//     content: newPost.dataValues.content,
//     userId: newPost.dataValues.userId,
//     updated: newPost.dataValues.updated,
//     published: newPost.dataValues.published,
//   };
      
//   return payload;
// };

module.exports = {
  findAllPosts,
  findPostById,  
};