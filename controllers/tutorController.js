const Tutor = require("../models/tutor");

exports.create = async (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!"});
    return;
  } // Create a Tutor
    await Tutor.model.create({
      title: req.body.title,
      picture: req.body.picture,
      description: req.body.description,
      rate: req.body.rate
    })
    .then(result => {
      if(result){
          res.redirect('/home');
        }
      }).catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutor."});
      })
}


exports.getAllTutors = async(req, res, next) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Tutor.model.findAll({ where: condition })
    .then(tutors=> {
      res.render('home', { tutors, path: '/' });
      //res.send(tutors);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.getTutorDetail = async (req, res, next) => {
  const id = req.params.id;
  Tutor.model.findByPk(id)
    .then(data => {
      res.render('tutor-detail', { tutors , pageTitle: 'Tutor Detail', path: '/' });
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutor with id=" + id });
    });
}
// --- not implemented changed of plans but in the future ----
// exports.addToCart = (req, res, next) => {
//     req.user.addToCart(req.body.id)
//         .then(() => {
//             res.redirect('/cart');
//         }).catch(err => console.log(err));
// }

// exports.getCart = async (req, res, next) => {
//     Tutor.model.findByPk(req.params.id)
//     //req.user
//         //.populate('cart.items.id')
//         .then(user => {
//             console.log(user);
//             res.render('cart', { cart: Tutor.cart, pageTitle: 'Shopping Cart Detail', path: '/cart'});
//         })
//         .catch(err => console.log(err));
// }

// exports.deleteInCart = (req, res, next) => {
//     req.user.removeFromCart(req.body.prodId)
//         .then(() => {
//             res.redirect('/cart');
//         }).catch(err => console.log(err));
// --------------------
// }
// Update a Tutor by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tutor.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutor was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutor with id=${id}. Maybe Tutor was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutor with id=" + id
      });
    });
};

// Delete a Tutor with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutor.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutor was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutor with id=${id}. Maybe Tutor was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutor with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutor.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};