const tutors = require("../models/tutors");

exports.getTutor = (req, res) =>{ 
    console.log("mas yawa");
    req.session.tutors= tutors;
        tutors.model.findAll();
                res.render("home",{
                    tutorName: req.session.tutorName,
                    tutorEmail: req.session.tutorEmail, 
                    status:req.session.status,
                    rate:req.session.rate,
                    description:req.session.description
            });
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