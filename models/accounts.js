const {DataTypes} = require("sequelize");
const db = require("../connection");

const accounts = db.sequelize.define("accounts", {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    code:{
        type: DataTypes.STRING,
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      school: {
        type: DataTypes.STRING
      },
      selectDegree: {
        type: DataTypes.STRING
      },
      selectYear: {
        type: DataTypes.STRING
      },
      course: {
        type: DataTypes.STRING
      },
      accountType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false
      },
      password2:{
        type: DataTypes.STRING,
        allowNull: false
      },
    username: {
        type: DataTypes.STRING,
        allowNull: false
      },
    password:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },{
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: "accounts"
    }
)
exports.model = accounts;