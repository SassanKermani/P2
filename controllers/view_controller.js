/************************************
*	controles for yo and sup pages 	*
************************************/

let thisIsAThing = 42;

const sendHomepage = (req, res) => {
	console.log("hit the yo rout");
	res.render('index', {thisIsAThing});
};

const two = (req, res) =>{
	res.render('newPage');
}

/****************************************
* 	controlloers for passport ish stuff	*
****************************************/

var passport = require("passport");

//get signup page
function gettSignup(req, res) {  
  res.render('signup.ejs');
};

//post to signup 
function postSignup(req, res, next){
	var signupStrategy = passport.authenticate('local-signup', {
		successRedirect : '/yo' ,
		failureRedirect : '/signup',
		//failureFlash : true
	});
	return signupStrategy(req, res, next);
}

//get login
function getLogin(req, res){
	res.render('login.ejs');
}

//post login
function postLogin(request, response, next){
	console.log("hit thie logi in post rout");
	var loginStrategy = passport.authenticate('local-login', {
		successRedirect : '/yo',
		failureRedirect : '/',
		//failureFlash : true
	});

	return loginStrategy(request, response, next)
}

//get logout
function getLogout(request, response) {
	request.logout();
	response.redirect('/');
}

//exports
module.exports = {
	sendHomepage,
	two,
	//passport stuff
	gettSignup,
	postSignup,
	getLogin,
	postLogin,
	getLogout
}