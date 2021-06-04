const tutorial = require("../models/tutorial");

exports.index = async (req, res) => {
    try{
        let tutorials = await tutorial.findAll({where:{
            user_id: req.session.userId
        }})
        res.render("home", {
            tutorials,
            userId: req.session.userId
        })
    }catch(err){
        res.send(err)
    }
};

exports.create = async (req, res) => {
    try{
        let tutorial = await tutorial.create({
            user_id: req.session.userId,
            title: req.body.title,
            is_completed: 0
        })
        if(!tutorial) throw "Unable to create tutorial."
        res.redirect('back')
    }catch(err){
        res.send(err)
    }
};

exports.complete = async (req, res) => {
    req.body.mark = req.body.mark ? true : false;
    try{
        await tutorial.update({is_completed: req.body.mark},{
            where: {
                user_id: req.session.userId,
                id: req.params.tutorialId
            }
        })
        res.redirect('back')
    }catch(err){
        res.send(err)
    }
};

exports.edit = async (req, res) => {
    try{
        await tutorial.update({
            title: req.body.title,
        }, {
            where:{
                user_id: req.session.userId,
                id: req.params.tutorialId
            }
        })
        res.redirect('back')
    }catch(err){
        res.send(err)
    }
};

exports.deleteT = async (req, res) => {
    try{
        await tutorial.destroy({
            where:{
                id: req.params.tutorialId,
                user_id: req.session.userId
            }
        })
        res.redirect('back')
    }catch(err){
        res.send(err)
    }

};