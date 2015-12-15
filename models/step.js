var mongoose = require('mongoose');

var stepSchema = new mongoose.Schema({

  stepTitle: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

var Step = mongoose.model('Step', stepSchema);

module.exports = Step;
