'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', { 
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,      
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: { 
          model: 'users', 
          key: 'id' 
        },
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};