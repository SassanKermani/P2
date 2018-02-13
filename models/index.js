var mongoose = require('mongoose');

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/P2");

module.exports.chat = require('./chat.js');
module.exports.User = require('./user.js');