const Player = require('../../database/models/player');

// exports.changePlayer = ({ avater, name, wins }) => Player.findOneAndUpdate({ name }).exec();

exports.addPlayerWin = ({ name }) => {
  return Player.findOneAndUpdate({ name }, { $inc: { wins: 1 } }).exec();
};

exports.createPlayer = ({ avatar, name, wins }) => {
  const player = new Player(
    {
      avatar,
      name,
      wins,
    },
  );
  return player.save();
};

exports.getPlayerByName = ({ name }) => Player.findOne({ name }).exec();
