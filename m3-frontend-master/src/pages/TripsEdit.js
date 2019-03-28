import React, { Component } from 'react';
import FormEditTrip from '../components/FormEditTrip';
import tripService from '../lib/trip-services';

class TripsEdit extends Component {

  state = {
    isLoading: true,
    data: {}
  }

  componentDidMount = () => {
    this.getTrip();
  }

  getTrip = () => {
    const { id } = this.props.match.params;
    tripService.getOne(id)
      .then(data => {
        this.setState({
          data: data,
          isLoading: false
        })

      })

  }
  // handleEdit = (e) => {
  //   e.preventDefault();
  //   tripService.editOne(this.props.match.params.id, this.state)
  //     .then(message => {
  //       this.setState({
  //         message,
  //       })
  //       console.log(message)
  //       this.props.history.goBack();
  //     })
  // }
  render() {
    const { data,isLoading } = this.state;
    switch (isLoading) {
      case true:
        return 'loading...';
      case false:
        return (
          <div>
            <h1>TripsEdit</h1>
            <FormEditTrip trip={data}/>
          </div>
        );
      default:
          break;
    }
  }
}

export default TripsEdit;