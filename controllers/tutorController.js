const tutors = require("../models/tutors");

exports.getTutor = (req, res) =>{ 
    if(req.session.code){
        tutors.model.findAll({
            where:{ tutorId: req.session.code
            }
        }).then(tutors =>{
            req.session.tutors = tutors;
            if(tutors){
                res.render("home",{tutorname: req.session.Name,code: req.session.code, tasks:req.session.tutors,loggedIn:req.session.loggedIn});
            }
        })
    }else{
        res.redirect("/");
    }
}

exports.updateTutor = async (req, res) => {   
    if(req.session.code){
        let result = await tutor.model.update({status:"available"} ,
        {
            where:{
                id: req.query.id
            }
        })
        if(!result){

        }else{
            res.redirect("/tutor");
        }
    }else{
        res.redirect("/");
    }
}

// exports.searchTutor = async (req, res) => {
//     if(req.session.code){
//         await task.model.destroy({
//             where: {
//                 id: req.query.tutorId
//             }
//         }).then(result => {
//             if(result){
//                 res.redirect("/tutor");
//             }else{
//                 res.redirect("/tutor");
//             }
//         })
//     }else{
//         res.redirect("/");
//     }
// }