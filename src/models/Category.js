CategoryModel = (sequelize, DataTypes) => {
  const CategorySchema = sequelize.define('Category', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
      name: DataTypes.STRING,
  },
  {
      tableName: 'categories',
      timestamps: false,
  });
  
  return CategorySchema;
};

module.exports = CategoryModel;