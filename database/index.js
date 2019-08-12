require('dotenv').config();
const mongoose = require('mongoose');

const db = mongoose.connect(`mongodb://${process.env.DBHOST}:27017/hyper_hacker`, { useNewUrlParser: true });

db
  .then(() => console.log(`Connected to: ${process.env.DBHOST}`))
  .catch((err) => {
    console.log(`There was a problem connecting to mongo at: ${process.env.DBHOST}`);
    console.log(err);
  });

module.exports = db;
