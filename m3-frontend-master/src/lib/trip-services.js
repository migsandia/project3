import axios from 'axios';

class TripService {
  constructor() {
    this.trip = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  create(data) {
    const { title, description, itinerary, date, dateInit, ageRange, numberPersons } = data;
    return this.trip.post('/trip', { title, description, itinerary, date, dateInit, ageRange, numberPersons })
      .then(({ data }) => data);
  }

  edit(id,data) {
    console.log(id,data)
    const { title, description, itinerary, date, dateInit, ageRange, numberPersons } = data;
    return this.trip.put(`/trip/${id}/edit`, { title, description, itinerary, date, dateInit, ageRange, numberPersons })
      .then(({ data }) => data);
  }
  // Llama a la Api para recoger todos los viajes
  getAll() {
    return this.trip.get('/trip')
      .then(({ data }) => data);
  }

  // Llama a la Api para recoger un viaje especifico
  getOne(id) {
    console.log(id)
    return this.trip.get(`/trip/${id}`)
      .then(({ data }) => data);
  }

  deleteOne(id) {
    return this.trip.delete(`/trip/${id}`)
      .then(({ data }) => data);
  }
}

const tripService = new TripService();

export default tripService;