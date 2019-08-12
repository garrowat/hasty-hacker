const mongoose = require('mongoose');

const { Schema } = mongoose;

// ToAdd:
//  - Fastest answer
//  - Record holder
//  - Topic
//  - Difficulty

const challengeSchema = new Schema({
  name: { type: String, required: true },
  challengeText: { type: String, required: true },
  answers: String,
});

module.exports = mongoose.model('Challenge', challengeSchema);
