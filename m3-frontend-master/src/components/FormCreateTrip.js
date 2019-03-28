import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import tripService from '../lib/trip-services';

class FormCreateTrip extends Component {
  state = {
    title:"",
    description:"",
    itinerary:"",
    date:"",
    ageRange:"",
    numberPersons:"",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const itinerary = this.state.itinerary;
    const date = this.state.date;
    const ageRange = this.state.ageRange;
    const numberPersons = this.state.numberPersons;

    tripService.create({ title, description, itinerary, date, ageRange, numberPersons })
      .then(() => {
        this.setState({
          title:"",
          description:"",
          itinerary:"",
          date:"",
          ageRange:"",
          numberPersons:"",
        });
      })
      .catch(error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const {title, description, itinerary, date, ageRange, numberPersons} = this.state;
    return (
      <>
      <h1>¡Crea tu propio viaje!</h1>
        <form onSubmit={this.handleFormSubmit}>
        <label>Introduce el título de tu viaje</label>
          <input type="text" name="title" value={title} onChange={this.handleChange} className="borderTest"/>
          <label>Descripción:</label>
          <textarea name="description" value={description} onChange={this.handleChange}> 
          </textarea>
          <label>Itinerario:</label>
          <input type="text" name="itinerary" value={itinerary} onChange={this.handleChange} className="borderTest"/>
          <label>Fecha:</label>
          <input type="date" name="date" value={date} onChange={this.handleChange} className="borderTest"/>
          <label>Rango de edad:</label>
          <select value={ageRange} name="ageRange" onChange={this.handleChange}>
            <option value="18-25">18-25</option>
            <option value="25-30">25-30</option>
            <option value="30-40">30-40</option>
            <option value="40-50">40-50</option>
            <option value="+50">+50</option>
          </select>
          <label>Número máximo de personas:</label>
          <input type="number" name="numberPersons" value={numberPersons} onChange={this.handleChange} className="borderTest"/>
          <input type="submit" value="Crear viaje" />
        </form>
      </>
    );
  }
}

export default FormCreateTrip;