const mongoose = require('mongoose');

const { Schema } = mongoose;

// ToAdd: Memecount (for favorite Meme feature)

const playerSchema = new Schema({
  name: { type: String, required: true },
  avatar: String,
  wins: Number,
});

module.exports = mongoose.model('Player', playerSchema);
