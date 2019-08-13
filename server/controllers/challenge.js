const Challenge = require('../../database/models/challenge');

exports.createChallenge = ({
  name,
  challengePrompt,
  challengeText,
  answers,
}) => {
  const challenge = new Challenge(
    {
      name,
      challengePrompt,
      challengeText: challengeText || '',
      answers,
    },
  );

  return challenge.save();
};

exports.getRandomChallenge = () => Challenge.findOne().exec();
