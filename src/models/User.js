const UserModel = (sequelize, DataTypes) => {
  const UserSchema = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
});

UserSchema.associate = (models) => {
  UserSchema.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'blogPost',
    });
};

return UserSchema;
}

module.exports = UserModel;