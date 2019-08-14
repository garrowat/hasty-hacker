require('dotenv').config();
const mongoose = require('mongoose');
const Challenge = require('./models/challenge');

const connection = mongoose.createConnection(`mongodb://${process.env.DBHOST}:27017/hyper_hacker`, { useNewUrlParser: true });

const challenges = [
  {
    name: 'script placement',
    challengePrompt: 'Inside which HTML element do we put the JavaScript?',
    challengeText: '<_____>',
    answers: ['script'],
  },
  {
    name: 'console foo',
    challengePrompt: 'What is printed to the console?',
    challengeText: `var foo = function foo() {
      console.log(foo === foo);
  };
  foo();`,
    answers: ['true'],
  },
  {
    name: 'return placement',
    challengePrompt: 'What is the output of the alert?',
    challengeText: `function aaa() {
      return
      {
          test: 1
      };
  }
  alert(typeof aaa());`,
    answers: ['undefined'],
  },
];

connection.dropCollection('challenges')
  .then(() => {
    Challenge.insertMany(challenges);
  })
  .catch(() => {
    return Challenge.insertMany(challenges, console.log);
  })
  .then(console.log)
