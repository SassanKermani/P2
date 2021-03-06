const
	express = require('express'),
	app = express(),
	ejs = require('ejs'),
	bodyParser = require('body-parser'),
	router = require('./config/routes'),
	mongoose = require('mongoose'),

	passport = require('passport'),
	flash = require('connect-flash'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	db = require('mongodb').MongoClient,

	PORT =process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/P2"); 

//setting up stuff for ejs
app.set('views', './views')
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//setting up for passport
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(session({secret: 'This-Needs-To-Stay-A-Secret'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
})

// //testing 
// app.get('/', function(req, res){
// 	console.log("hit the test rout");
// 	res.send("hit the test rout")
// })

//setting up routs
console.log("at server");
app.use(router);

//its listening
app.listen(PORT, function(){
	console.log("up at " + PORT);
})