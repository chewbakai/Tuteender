const{Sequelize0, Sequelize} = require("sequelize");
const sequelize = new Sequelize("tuteender", "root", "", {
    host:"localhost",
    dialect: "mysql",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        paranoid: true 
    }
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
exports.sequelize = sequelize;