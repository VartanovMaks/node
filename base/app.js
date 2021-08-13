const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const { gameRouter, taskRouter } = require('./routes');

const app = express();
_mongooseConnector();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/select-game', gameRouter);
app.use('/create-task', taskRouter);

app.listen(3000, () => {
  console.log('App listen 3000');
});

function _mongooseConnector() {
  mongoose.connect('mongodb://localhost:27017/words-base', { useNewUrlParser: true, useUnifiedTopology: true });
}

// const fs = require('fs');
// const utils = require('util');
//
// const readFilePromise = utils.promisify(fs.readFile);
//
// readFilePromise('./dataBase/users.js').then(user => {
//   console.log(user.toString());
// })
