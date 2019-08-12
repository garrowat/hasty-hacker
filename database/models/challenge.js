const mongoose = require('mongoose');

const { Schema } = mongoose;

// ToAdd:
//  - Fastest answer
//  - Record holder
//  - Topic
//  - Difficulty

const challengeSchema = new Schema({
  text: String,
  answer: String,
});

module.exports = mongoose.model('Challenge', challengeSchema);
