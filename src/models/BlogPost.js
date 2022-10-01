const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPostSchema = sequelize.define('BlogPost', {
      id:{
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
  },
  {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
  });
  BlogPostSchema.associate = (models) => {
    BlogPostSchema.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      });
  };
  return BlogPostSchema;
}

module.exports = BlogPostModel;