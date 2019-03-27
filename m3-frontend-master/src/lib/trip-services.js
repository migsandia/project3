import axios from 'axios';

class TripService {
  constructor() {
    this.trip = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  create(data) {
    console.log(data)
    const { title, description, itinerary, date, ageRange, numberPersons } = data;
    return this.trip.post('/trip', {title, description, itinerary, date, ageRange, numberPersons})
      .then(({ data }) => data);
  }

}

const tripService = new TripService();

export default tripService;