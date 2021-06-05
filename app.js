const express = require("express"),
    ejs = require('ejs');
    app = express(),
    path = require('path'),
    fileUpload = require('express-fileupload'),
    session = require("express-session"),
    http = require("http"),
    server = http.createServer(app),
    bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))  

const adminRoutes = require('./routes/admin');
const accountRoutes = require('./routes/accountRoutes');
const tutorRoutes = require('./routes/tutorRoutes');
// const User = require('./models/account');

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname + '/public')));
app.use( session({ secret: 'secret', resave: true, saveUninitialized: true }) );
// app.use((req, res, next) => {
//     User.findById('5e66f68515f15f313c76b07f')
//         .then(userInDB => {
//             req.user = userInDB;
//             next();
//         })
//         .catch(err => console.log(err));
// });
app.get("/", (req,res) => res.render("index"))
app.get("/login", (req,res) => res.render("login"))
// app.get("/logout", (req,res) => {  req.session.destroy(); res.redirect('/');})
// app.get('/home', (req, res) => res.render("home"));
// app.get('/profile', (req, res) => res.render("profile", { firstName: 'Kayelle Ceniza'}));
app.use('/admin', adminRoutes);
app.use(accountRoutes)
app.use(tutorRoutes) 
 
app.listen(8080);
console.log('Server is listening on port 8080');

