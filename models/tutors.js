'use strict';
const accounts = require("../models/accounts");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tutors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tutors.init({
  
    tutorId: DataTypes.BIGINT,
    status: DataTypes.STRING,
    rate: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tutors',
  });
  return tutors;
};
accounts.associate = function (models){
  tutors.hasMany(models.accounts, {
    foreignKey: 'tutorId',
    sourceKey:'id'
  });
}; 