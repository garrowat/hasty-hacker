const mongoose = require('mongoose');

const { Schema } = mongoose;

// ToAdd:
//  - Fastest answer
//  - Record holder
//  - Topic
//  - Difficulty

const challengeSchema = new Schema({
  name: { type: String, required: true },
  challengePrompt: { type: String, required: true },
  challengeText: { type: String },
  answers: Array,
});

module.exports = mongoose.model('Challenge', challengeSchema);
