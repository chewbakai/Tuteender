const Tutor = require('../models/tutor');

exports.getTutorForm = (req, res, next) => {
    res.render('add-tutor', { name: 'Tina', path: '/admin/add-tutor', pageTitle: 'Add Tutor' });
}

exports.postTutor = (req, res, next) => {
    const prod = new Tutor({
        title: req.body.title,
        imageURL: req.body.imageURL,
        status: req.body.status,
        rate: req.body.rate,
        description: req.body.description
    });
    prod.save()
        .then(result => {
            res.redirect('/');
        }).catch(err => console.log(err));
}

exports.editTutorPage = (req, res, next) => {
    Tutor.findById(req.params.prodId)
        .then(tutor => {
            res.render('edit-tutor', { tutor: tutor, path: '/', pageTitle: 'Edit Tutor', name: 'Tina' });
        }).catch(err => console.log(err));
}

exports.editTutorPost = (req, res, next) => {

    Tutor.updateOne({ _id: req.body.id }, { $set: { title: req.body.title, imageURL: req.body.imageURL, price: req.body.price, description: req.body.description } })
        .then(result => {
            res.redirect('/tutors/' + req.body.id);
        })
        .catch(err => console.log(err));

    // Tutor.findByIdAndUpdate(req.body.id)
    //     .then(oldTutor => {
    //         oldTutor.title = req.body.title;
    //         oldTutor.imageURL = req.body.imageURL;
    //         oldTutor.price = req.body.price;
    //         oldTutor.description = req.body.description;
    //         return oldTutor.save();
    //     })
    //     .then(result => {
    //         res.redirect('/tutors/' + req.body.id);
    //     })
    //     .catch(err => console.log(err));
}

exports.deleteTutor = (req, res, next) => {

    // Tutor.deleteOne({ _id: req.body.id }) //deleteOne mongodb
    // Tutor.findByIdAndDelete(req.body.id) //findOneAndDelete
    Tutor.findByIdAndRemove(req.body.id) //findAndModify
        .then(result => {
            res.redirect('/');
        })
        .catch(err => console.log(err));

}