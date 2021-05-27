const express = require("express"),
    app = express(),
    path = require('path'),
    fileUpload = require('express-fileupload'),
    session = require("express-session"),
    http = require("http"),
    server = http.createServer(app),
    bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));      

const  accountRoutes = require('./routes/accountRoutes'),
       tutorRoutes = require('./routes/tutorRoutes');

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: "12345678",
    resave: false,
    saveUninitialized: false    
}));

app.get("/", (req,res) => {
    res.render("index");
})
app.get("/login", (req,res) => {
    res.render("login");
})
// app.get('/profile/:id',routes.profile);
app.get("/logout", (req,res) => {
    req.session.destroy();
    res.redirect('/');
})

app.get('/home', (req, res) => {
	// if (req.session.loginAccount) {
	// 	res.send('Welcome back, ' + req.session.username + '!');
        res.render("home");
	// } else {
	// 	res.send('Please login to view this page!');
	// }
	// res.end();
});
//routes
app.use("/account", accountRoutes);
app.use("/tutor", tutorRoutes);

app.listen(8080);
console.log('Server is listening on port 8080');
