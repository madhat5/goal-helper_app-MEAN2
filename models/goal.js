var mongoose = require('mongoose');

var goalSchema = new mongoose.Schema({

  goalTitle: String,
  steps: Array,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

var Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
