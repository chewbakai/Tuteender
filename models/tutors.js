const {DataTypes} = require("sequelize");
const db = require("../connection");
// const picture = ("sequelize-file");

const tutors = db.sequelize.define("tutors", {
    tutorId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      tutorName:{
        type: DataTypes.STRING,
        allowNull: false
      },
      picture: {
        type: DataTypes.BLOB,
        attribute: 'picture',
        mimetype: /^image/,
        crop: true,
        sizes: {
          small: 64, //width 64
          big: 150, //width 150
        }
      },
      tutorEmail: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING
      },
      rate: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING  
      },
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
    }
)
// picture.addTo(tutors);
 exports.model = tutors;