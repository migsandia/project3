import React, { Component } from 'react'
import { withAuth } from '../providers/AuthProvider';
class Trips extends Component {
  render() {
    const { user } = this.props
    return (
      <div>
        <h1>Welcome {user.username}</h1>
      </div>
    )
  }
}

export default withAuth(Trips);