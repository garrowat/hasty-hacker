const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const image = require('./controllers/prompt');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/randomChallenge', (req, res) => {
  image.getRandomImage()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => res.status(400).send(err));
});

const PORT = process.env.SERVERPORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
