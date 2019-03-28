const express = require('express');
const router = express.Router();

const Trip = require('../models/Trip');

const { isLoggedIn } = require('../helpers/middlewares');

// router.get('/', (req, res, next) => {

//   console.log('tusmuerto')
// }) 

router.post('/', (req, res, next) => {
  const {title, description, itinerary, date, ageRange, numberPersons} = req.body;
  
  const newTrip = {
    title, 
    description, 
    itinerary, 
    date, 
    ageRange, 
    numberPersons,
  }
  const newTripCreated = new Trip(newTrip);
  res.status(200)
  res.json(newTripCreated)
  return newTripCreated.save();

});


module.exports = router