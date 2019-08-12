const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
require('../database');
const challenge = require('./controllers/challenge');
const player = require('./controllers/player');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/api/player', (req, res) => {
  player.createPlayer(req.body)
    .then((result) => res.status(201).send(result))
    .catch((err) => res.status(401).send(err));
});

app.post('/api/challenge', (req, res) => {
  challenge.createChallenge(req.body)
    .then((result) => res.status(201).send(result))
    .catch((err) => res.status(401).send(err));
});

app.get('/api/player', (req, res) => {
  player.getPlayerByName(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(400).send(err));
});

app.get('/api/randomChallenge', (req, res) => {
  challenge.getRandomChallenge()
    .then((result) => res.send(result))
    .catch((err) => res.status(400).send(err));
});

app.put('/api/player/win', (req, res) => {
  player.addPlayerWin(req.body)
    .then((result) => res.send(result))
    .catch((err) => res.status(400).send('Error recording win: ', err));
});

const PORT = process.env.SERVERPORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
