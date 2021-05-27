'use strict';

const tutors = require("../models/tutors");
const accounts = require("../models/accounts");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tutors', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tutorId: {
        type: Sequelize.BIGINT
      },
      status: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tutors');
  }
};

tutors.associate = function (models){
  tutors.belongsTo(models.accounts, {
    foreignKey: 'tutorId',
    targetKey:'id'
  });
}; 