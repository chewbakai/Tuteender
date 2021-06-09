const accounts = require("../models/account");
const bcrypt = require('bcrypt');

const saltRounds = 10;


var generateCode = () => {
    let generate = "";
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 32;
    for ( var i = 0; i < length; i++ ) {
        generate += char.charAt(Math.floor(Math.random() * char.length));
    }
    return generate;
}
var isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

exports.registerAccount = (req,res) => { res.render("create");}
exports.about = (req,res) => { res.render('./partials/about');}
exports.createAccount = async (req, res) => {
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password,salt);   
 
    if (!isValidEmail(req.body.email)) {
        return res.json({status: 'error', message: 'Email address not formed correctly.'});
    }
      await accounts.model.create({ 
              code: generateCode(),
                picture: req.body.picture,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                school: req.body.school,
                selectDegree: req.body.selectDegree,
                selectYear: req.body.selectYear,
                course: req.body.course,
                email: req.body.email,
                username: req.body.userName,
                password: hash
    }).then(result => {
        if(result){
            res.redirect('/home');
        }
    }).catch(err => {
        console.log(err)
        res.render("create",{err:"Error"})
        return res.json({status: 'error', message: 'Email address already exists.'});   
     })
}      

exports.loginAccount = async (req, res) => {
    let data = await accounts.model.findOne({where: {username: req.body.userName}});
   
    if (data.username === null) {
        console.log('Not found!');
        res.redirect('/');
    } else {
        bcrypt.compare(req.body.password, data.password, (err, result) => {
            if(err){throw err;}
            if( (data.username == req.body.userName) && result){
                req.session.loggedIn = true;
                req.session.username = data.username;
                req.session.code= data.code;
                res.redirect("/home");
            }else{
                res.redirect("/");
            } 
        });    
    }
}
exports.myAccount = async(req, res, next) => {
	const id = 6; //req.params.id does not work with this case idk 
    // change to updated id for new account
     accounts.model.findAll({ 
         where: {
             id: id
         }
     })
    .then(accounts => {
        res.render('accountProfile', { accounts, path: '/myprofile' });
        console.log("id",id);
    })
    .catch(err => console.log(err));
};

exports.updateAccount = async (req, res) => {
    let data = await accounts.model.update({
            password: "P@$$w0rd"
        }, {
        where: {
            id: req.body.id
        }
        }
    )
    res.send(data);
}
