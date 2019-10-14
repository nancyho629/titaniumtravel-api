const express = require('express')
const passport = require('passport')
const Trip = require('../models/trip')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()
const Activity = require('../models/activity')

// INDEX
router.get('/trips', requireToken, (req, res, next) => {
  Trip.find()
    // .populate('activities')
    .then(trips => {
      trips.map(trip => trip.toObject())
      return trips.reverse()
    })
    .then(trips => res.status(200).json({ trips: trips }))
    .catch(next)
})

// CREATE
router.post('/trips', requireToken, (req, res, next) => {
  req.body.trip.owner = req.user.id

  Trip.create(req.body.trip)
    .then(trip => {
      res.status(201).json({ trip: trip.toObject() })
    })
    .catch(next)
})

// PATCH
router.patch('/trips/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.trip.owner

  Trip.findById(req.params.id)
    .then(handle404)
    .then(trip => {
      requireOwnership(req, trip)
      return trip.updateOne(req.body.trip)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// SHOW
router.get('/trips/:id', requireToken, (req, res, next) => {
  Trip.findById(req.params.id)
    .populate('activities')
    .then(handle404)
    // .then(trip => {
    //   requireOwnership(req, trip)
    // })
    .then(trip => res.status(200).json({ trip: trip.toObject() }))
    .catch(next)
})

// DELETE
router.delete('/trips/:id', requireToken, (req, res, next) => {
  Trip.findById(req.params.id)
    .then(handle404)
    .then(trip => {
      requireOwnership(req, trip)
      // const id = trip
      // Activity.deleteMany({ trip: id }, (err, res) => {
      //   if (err) throw err
      // })
      trip.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})
module.exports = router
