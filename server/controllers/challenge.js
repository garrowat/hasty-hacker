const Challenge = require('../../database/models/challenge');

exports.createChallenge = ({ name, challengeText, answers }) => {
  const challenge = new Challenge(
    {
      name,
      challengeText,
      answers,
    },
  );

  return challenge.save();
};

exports.getRandomChallenge = () => Challenge.findOne().exec();
