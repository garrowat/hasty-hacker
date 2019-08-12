const mongoose = require('mongoose');

const { Schema } = mongoose;

// ToAdd: Memecount (for favorite Meme feature)

const playerSchema = new Schema({
  name: String,
  avatar: String,
  wins: Number,
});

module.exports = mongoose.model('Player', playerSchema);
