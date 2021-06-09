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

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname + '/public')));
app.use( session({ secret: 'secret', resave: true, saveUninitialized: true }) );

const accountRoutes = require('./routes/accountRoutes');
const tutorRoutes = require('./routes/tutorRoutes');

app.get("/", (req,res) => res.render("index"))
app.get("/login", (req,res) => res.render("login"))
app.get("/logout", (req,res) => {  req.session.destroy(); res.redirect('/');})
// i just had to hsdgh for testing purpose only but hfhag
app.get("/add-tutor", (req,res) => res.render("add-tutor"))
app.get("/tutor/:id", (req,res) => res.render("edit-tutor"))

app.use(accountRoutes)
app.use(tutorRoutes) 
 
app.listen(8080);
console.log('Server is listening on port 8080');

