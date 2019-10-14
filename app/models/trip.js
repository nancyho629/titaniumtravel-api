const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  completed: {
    type: Boolean
  },
  activities: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Activity'
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Trip', tripSchema)
