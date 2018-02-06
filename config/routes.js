const 
	express = require('express'),
	router = express.Router(),
	vew = require('../controllers/view_controller'),
	db = require('../models');
  var bodyParser= require('body-parser');

  router.use(bodyParser.urlencoded({ extended: true }));


//get /yo
router.get('/yo', vew.sendHomepage);

//get /sup
router.get('/sup', vew.two);


// //test now is a dead zone
//
// router.get('/4', function(req, res){
// 			res.render('monster')
// });

//the big one 
for( let i = 0; i < 326; i++){
	router.get('/' + i, function(req, res){

		//res.send("befor <br> test: " + {i} + " <br> after" );
		res.render('monster', {i});

	});
};

//routs for chats

//GET ALL
router.get('/chat', function(req, res){
	db.chat.find(function(err, chats){
		if(err){ return console.log("index error: " + err); };
    	res.json(chats);
	});
});

//GET BY ID
router.get('/api/chat/:id', function(req, res){
  db.chat.findById( req.params.id , function(err, data){
    if(err){ return console.log("index error: " + err); };
    res.json(data);
  });
});

//POST
router.post('/chat', function(req, res){
  let newChat = new db.chat(req.body);
  
  newChat.save(function handleDBChatSaved(err, savedChat){
    //res.json(savedChat);
    res.redirect('/yo')
  });

});

//DELETE
router.delete('/chat/:id', function(req, res){
  console.log(req.params.id);
  let chatId = req.params.id;
  db.chat.findOneAndRemove( { _id: chatId }, function(err, deletedChat){
    res.json(deletedChat);
  });
});

//exports the router
module.exports = router;

