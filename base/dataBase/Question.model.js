const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
  task: {
    type: String,
    required: true
  },
  words: [{
    type: String,
    required: true
  }]
}, { timestamps: true });

module.exports = model('Question', questionSchema);
