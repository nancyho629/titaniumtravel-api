const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
  activity: {
    type: String,
    required: true
  },
  date: {
    type: Date
  },
  description: {
    type: String
  },
  time: {
    type: String
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
