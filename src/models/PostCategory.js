const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategorySchema = sequelize.define('PostCategory', {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
  },
  {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
  });
  
  PostCategorySchema.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blogPosts',
        through: PostCategorySchema,
        foreignKey: 'categoryId', 
        otherKey: 'postId',
      });
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategorySchema,
        foreignKey: 'postId', 
        otherKey: 'categoryId',
      });
  };
  return PostCategorySchema;
};

module.exports = PostCategoryModel;