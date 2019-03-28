import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import tripService from '../lib/trip-services';

class TripDetail extends Component {

    state = {
      data:[]
    }
 
  componentDidMount(){
   tripService.getOne(this.props.match.params.id)
     .then(data => {
      console.log(data)
      this.setState({
        data: data
      })
    })
  }
  
  render() {
    const {data} = this.state;
    return (
      <div>
        <h1>TripDetail</h1>
          <img width="60px" src="http://tifositours.com/wp-content/uploads/2019/02/Barcelona.jpg" alt="image" />
          <p>{data.date}</p>
          <p>{data.dateInit}</p>
          <h1>{data.title}</h1>
          <p>{data.itinerary}</p>
          <p>{data.ageRange}</p>
        <Navbar />
      </div>
    );
  }
}

export default TripDetail;