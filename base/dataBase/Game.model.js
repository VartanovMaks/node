const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  questions: [{
    task: {
      type: String,
      required: true
    },
    words: [{
      type: String,
      required: true
    }]
  }]
}, { timestamps: true });

module.exports = model('Game', gameSchema);
