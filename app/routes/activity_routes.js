const express = require('express')
const passport = require('passport')
const Activity = require('../models/activity')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()
const Trip = require('../models/trip')

// INDEX
router.get('/trips/:id/activities', requireToken, (req, res, next) => {
  Activity.find()
    .then(activities => {
      activities.map(activity => activity.toObject())
      return activities.reverse()
    })
    .then(activities => res.status(200).json({ activities: activities }))
    .catch(next)
})

// CREATE
router.post('/trips/:id/activities', requireToken, (req, res, next) => {
  req.body.activity.owner = req.user.id

  Activity.create(req.body.activity)
    .then(activity => {
      Trip.findById(req.params.id)
        .then(handle404)
        .then(trip => {
          // Then push this new made activity to the array of activities in the trip
          trip.activities.push(activity._id)
          // Update the trip so the new activity stays in the array
          return trip.updateOne(trip)
        })
        .then(() => {
          res.status(201).json({ activity: activity.toObject() })
        })
        .catch(next)
    })
    .catch(next)
})

// PATCH
router.patch('/trips/:id/activities/:aid', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.activity.owner
  Activity.findById(req.params.aid)
    .then(handle404)
    .then(activity => {
      requireOwnership(req, activity)
      return activity.update(req.body.activity)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// SHOW
router.get('/trips/:id/activities/:aid', requireToken, (req, res, next) => {
  Activity.findById(req.params.aid)
    .then(handle404)
    .then(activity => res.status(200).json({ activity: activity.toObject() }))
    .catch(next)
})

// DELETE
router.delete('/trips/:id/activities/:aid', requireToken, (req, res, next) => {
  Activity.findById(req.params.aid)
    .then(handle404)
    .then(activity => {
      requireOwnership(req, activity)
      activity.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
