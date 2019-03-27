import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Trips from './pages/Trips';
import TripsCreate from './pages/TripsCreate';
import TripsEdit from './pages/TripsEdit';
import TripDetail from './pages/TripDetail';
import MyTrips from './pages/MyTrips';
import TripFavs from './pages/TripFavs';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import AuthProvider from './providers/AuthProvider';
import NoMatch from './pages/NoMatch';



class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>Module 3 boilerplate</h1>
          <Navbar />
          <Switch>
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/trips" component={Trips} />
            <PrivateRoute exact path="/trips/new" component={TripsCreate} />
            <PrivateRoute exact path="/trips/:id" component={TripDetail} />
            <PrivateRoute exact path="/trips/:id/edit" component={TripsEdit} />
            <PrivateRoute exact path="/mytrips" component={MyTrips} />
            <PrivateRoute exact path="/favs" component={TripFavs} />
            <PrivateRoute exact path="/profile/me/edit" component={ProfileEdit} />
            <PrivateRoute exact path="/profile/me" component={Profile} />
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <Route component={NoMatch} />

          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
