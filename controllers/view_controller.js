let thisIsAThing = 42;

const sendHomepage = (req, res) => {
	res.render('index', {thisIsAThing});
};

const two = (req, res) =>{
	res.render('newPage')
}


module.exports = {
	sendHomepage,
	two

}