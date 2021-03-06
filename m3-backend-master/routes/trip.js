const express = require('express');
const router = express.Router();

const Trip = require('../models/Trip');

const { isLoggedIn } = require('../helpers/middlewares');

router.post('/', async (req, res, next) => {
  const { title, description, itinerary, date, dateInit, ageRange, numberPersons } = req.body;

  if (!title || !description || !itinerary || !date || !dateInit || !ageRange || !numberPersons) {
    res.status(400);
    res.json({ message: 'Debes rellenar todos los campos para poder crear el viaje.' })
    return;
  }
console.log(req.session)
  try {
    const newTrip = {
      owner: req.session.currentUser._id,
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
  const allTrips = await Trip.find()
  try {
    if (!allTrips) {
      res.status(404);
      res.json({ mesage: 'No hay viajes disponibles' })
      return;
    }
    res.json(allTrips);
  } catch (error) {
    next(error);
  }
});

//Viajes creados por el usuario
router.get('/mytrips', async (req, res, next) => {
  const ownerTrips = await Trip.find({owner: req.session.currentUser._id})
  try {
    if (!ownerTrips) {
      res.status(404);
      res.json({ mesage: 'No hay viajes disponibles' })
      return;
    }
    res.json(ownerTrips);
  } catch (error) {
    next(error);
  }
});

//Devuelve al FrontEnd un viaje
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const oneTrip = await Trip.findById(id)
  try {
    if (!oneTrip) {
      res.status(404);
      res.json({ mesage: 'La información del viaje no está disponible' })
      return;
    }
    res.json(oneTrip);
  } catch (error) {
    next(error);
  }
});


router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  const deleteTrip = await Trip.findById(id)
  if(deleteTrip.owner == req.session.currentUser._id){
    const oneTrip = await Trip.findByIdAndDelete(id)
  }else{
    return;
  }
  try {
    // if()
    res.status(200);
    res.json({ message: 'Viaje eliminado' });
  } catch (error) {
    next(error);
  }
});

router.put('/:id/edit', async (req, res, next) => {
  const { id } = req.params;
  const { title, description, itinerary, date, dateInit, ageRange, numberPersons } = req.body;
  if (!title || !description || !itinerary || !date || !dateInit || !ageRange || !numberPersons) {
    res.status(400);
    res.json({ message: 'Debes rellenar todos los campos para poder crear el viaje.' })
    return;
  }
  const updateTrip = {
    title,
    description,
    itinerary,
    date,
    dateInit,
    ageRange,
    numberPersons,
  }

  try {
    const updateTripCreated = await Trip.findByIdAndUpdate(id, updateTrip, {new:true});
    res.status(200)
    res.json({message: 'Viaje editado'})
    // newTripCreated.save();
  } catch (error) {
    next(error)
  }
});

module.exports = router;