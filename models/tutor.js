const {DataTypes} = require("sequelize");
const db = require("../connection");
// const picture = ("sequelize-file");

const tutor = db.sequelize.define("tutors", {
      title:{
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
      rate: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING  
      },
      // cart: {
      //   items: [{
      //       tutorId: {
      //         type: db.findById,
      //           ref: 'Tutor',
      //           required: true
      //       },
      //       qty: {
      //           type: Number,
      //           required: true
      //       }
      //   }],
      //   totalRate: Number
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    }
)


// tutor.methods.addToCart = async function(tutorId) {
//   const tutor = await Product.findById(tutorId);
//   if (tutor) {
//       const cart = this.cart;
//       const isExisting = cart.items.findIndex(objInItems => new String(objInItems.tutorId).trim() === new String(tutor._id).trim());
//       if (isExisting >= 0) {
//           cart.items[isExisting].qty += 1;
//       } else {
//           cart.items.push({ tutorId: tutor._id, qty: 1 });
//       }
//       if (!cart.totalRate) {
//           cart.totalRate = 0;
//       }
//       cart.totalRate += tutor.rate;
//       return this.save();
//   }

// };


// tutor.methods.removeFromCart = function(tutorId) {
//   const cart = this.cart;
//   const isExisting = cart.items.findIndex(objInItems => new String(objInItems.tutorId).trim() === new String(tutorId).trim());
//   if (isExisting >= 0) {
//       cart.items.splice(isExisting, 1);
//       return this.save();
//   }
// }
// picture.addTo(tutors);
 exports.model = tutor;
// exports.model = db.model('Tutors', tutorSchema);