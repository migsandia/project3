const express = require('express');
const router = express.Router();

const Trip = require('../models/Trip');

const { isLoggedIn } = require('../helpers/middlewares');

// router.get('/', (req, res, next) => {

//   console.log('tusmuerto')
// }) 

router.post('/', async (req, res, next) => {
  console.log(req.body)

  const { title, description, itinerary, date,dateInit, ageRange, numberPersons } = req.body;

  if (!title || !description || !itinerary || !date || !dateInit ||!ageRange || !numberPersons) {
    res.status(400);
    res.json({ message: 'Debes rellenar todos los campos para poder crear el viaje.' })
    return;
  }

  try {
    const newTrip = {
      title,
      description,
      itinerary,
      date,
      dateInit,
      ageRange,
      numberPersons,
    }
    const newTripCreated = await new Trip(newTrip);
    res.status(200)
    res.json(newTripCreated)
    newTripCreated.save();
  } catch (error) {
    next(error)
  }
}
);

// Devuelve al FrontEnd todos los viajes
router.get('/', async (req, res, next) => {
  const allTrips= await Trip.find()
  try{
    if(!allTrips){
      res.status(404);
      res.json({mesage: 'No hay viajes disponibles'})
      return;
    }
    res.json(allTrips);
  }catch(error){
    next(error);
  }
});


module.exports = router