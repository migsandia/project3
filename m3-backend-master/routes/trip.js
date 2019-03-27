const express = require('express');
const router = express.Router();

const Trip = require('../models/Trip');

const { isLoggedIn, isNotLoggedIn, validationLoggin } = require('../helpers/middlewares');

router.post('/trips', isLoggedIn(), (req, res, next) => {
  console.log(req.body)
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
  return newTripCreated.save();
});


module.exports = router;
