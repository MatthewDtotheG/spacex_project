import React, { Component } from 'react';
import './App.css';

class Show extends Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    let {flight_number, mission_name, links, launch_success, details, rocket} = this.props.launch

    if(this.state.clicked) {
      return (
        <div className='stuffs' >
          <h1>{mission_name}</h1>
          <p>Rocket: {rocket.rocket_name}</p>
          <p>Mission Successful: {launch_success.toString()}</p>
          <p>Mission Details: {details}</p>

          <img src={links.mission_patch_small} onClick={() => this.props.missionClick(flight_number)}/>
          <br/>
          <button onClick={this.handleClick}>Show Info</button>
        </div>
      );
    } else {
      return (
        <div className='stuffs'>
        <h1>{mission_name}</h1>
        <img src={links.mission_patch_small} onClick={() => this.props.missionClick(flight_number)}/>
        <br/>
        <button onClick={this.handleClick}>Show Info</button>
        </div>
      );
    }
  }
}

export default Show;
