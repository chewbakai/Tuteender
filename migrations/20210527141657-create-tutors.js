'use strict';

const tutors = require("../models/tutors");
const accounts = require("../models/accounts");
import 'sequelize-file';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tutors', {
      
      tutorId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tutorName: {
        type: Sequelize.STRING
      },
      picture: {
          type: Sequelize.BLOB,
          attribute: 'picture',
          mimetype: /^image/,
          crop: true,
          sizes: {
            small: 64, //width 64
            big: 150, //width 150
          }
      },
      tutorEmail: {
        type: Sequelize.STRING
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

picture.addTo(tutors);
export default tutors; 