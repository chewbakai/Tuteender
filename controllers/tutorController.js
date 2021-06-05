const Tutor = require("../models/tutor");

exports.getAllTutors = async(req, res, next) => {
    Tutor.model.findAll()
        .then(tutors => {
            res.render('home', { tutors, path: '/' });
        })
        .catch(err => console.log(err));
};

exports.getTutorDetail = (req, res, next) => {
    Tutor.model.findById(req.params.prodId)
        .then(tutor => {
            res.render('tutor-detail', { prod: tutor, pageTitle: 'Tutor Detail', path: '/', name: 'Edward' });
        })
        .catch(err => console.log(err));
}

exports.addToCart = (req, res, next) => {
    req.user.addToCart(req.body.id)
        .then(() => {
            res.redirect('/cart');
        }).catch(err => console.log(err));
}

exports.getCart = (req, res, next) => {
    req.user
        .populate('cart.items.tutorId')
        .execPopulate()
        .then(user => {
            console.log(user);
            res.render('cart', { cart: user.cart, pageTitle: 'Shopping Cart Detail', path: '/cart', name: 'Edward' });
        })
        .catch(err => console.log(err));
}

exports.deleteInCart = (req, res, next) => {
    req.user.removeFromCart(req.body.prodId)
        .then(() => {
            res.redirect('/cart');
        }).catch(err => console.log(err));

}