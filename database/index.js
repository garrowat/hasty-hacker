var mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.DBHOST}/memes_with_teams`, {useNewUrlParser: true});

module.exports = mongoose.connection;
