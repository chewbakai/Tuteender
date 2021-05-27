const task = require("../models/tutors");

exports.getTutor = (req, res) =>{ 
   res.redirect("/");
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