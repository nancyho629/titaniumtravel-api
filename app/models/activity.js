const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
  activity: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  time: {
    type: String
  },
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip',
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Activity', activitySchema)
