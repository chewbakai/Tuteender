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
  
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'));
app.use(session({secret: "12345678", resave: false, saveUninitialized: false }));
//routes
app.use("/account", require('./routes/accountRoutes'))
app.use("/tutor", require('./routes/tutorRoutes'))
   
app.get("/", (req,res) => res.render("index"))
app.get("/login", (req,res) => res.render("login"))
app.get("/logout", (req,res) => {  req.session.destroy(); res.redirect('/');})
app.get('/home', (req, res) => res.render("home"));
app.get('/profile', (req, res) => res.render("profile"))

app.listen(8080);
console.log('Server is listening on port 8080');
