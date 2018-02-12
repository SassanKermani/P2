//seting up 
let db = require('./models');

//chats seed for testing
let chats_list = [
	
	{
		name: "Dave",
		message: "sup",
	},
	{
		name: "Dug",
		message: "not much you",
	},
	{
		name: "Dave",
		message: "just working on stuff, you?",
	},
	{
		name: "Dug",
		message: "stuck on a bug, I hate mongoose's documentation",
	},
	{
		name: "Dave",
		message: "ya its bad your boned",
	},
	{
		name: "Dug",
		message: "I'm going to be up all night on this arnt I?",
	},
	{
		name: "Dave",
		message: " yaaaaaaaa..... see ya tomorrow ",
	}
];

//putting it in the datta base and whiping anything that might have been there befor			chats
db.chat.remove({}, function(err, chat){
  if(err) {
    console.log('Error occurred in remove: ', err);
  } else {

  	console.log("got hear");

    // // create new records based on the array chats_list
    // db.chat.create(chats_list, function(err, chats){
    //   if (err) { return console.log('err', err); }
    //   console.log("it worked");
    //   process.exit();
    // });
  }
});

console.log("test");


