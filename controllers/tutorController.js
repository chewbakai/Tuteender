const Tutor = require("../models/tutor");

exports.getAllTutors = async(req, res, next) => {
    Tutor.model.findAll()
        .then(tutors => {
            res.render('home', { tutors, path: '/' });
        })
        .catch(err => console.log(err));
};

exports.getTutorDetail = async (req, res, next) => {
    const title = req.params.title;
    Tutor.model.findAll( { where : {
        title:title }
    })
        .then(tutors => {
            res.render('tutor-detail', { tutors , pageTitle: 'Tutor Detail', path: '/' });
            console.log("title", title);
        })
        .catch(err => console.log(err));
}

exports.addToCart = (req, res, next) => {
    req.user.addToCart(req.body.id)
        .then(() => {
            res.redirect('/cart');
        }).catch(err => console.log(err));
}

exports.getCart = async (req, res, next) => {
    Tutor.model.findByPk(req.params.id)
    //req.user
        //.populate('cart.items.id')
        .then(user => {
            console.log(user);
            res.render('cart', { cart: Tutor.cart, pageTitle: 'Shopping Cart Detail', path: '/cart'});
        })
        .catch(err => console.log(err));
}

exports.deleteInCart = (req, res, next) => {
    req.user.removeFromCart(req.body.prodId)
        .then(() => {
            res.redirect('/cart');
        }).catch(err => console.log(err));

}