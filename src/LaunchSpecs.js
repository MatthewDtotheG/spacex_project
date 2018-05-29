import React, { Component } from 'react';
import Show from './Show';
import Search from './Search';
class LaunchSpecs extends Component {

  render() {
    let {flight_number, mission_name, links, launch_success, details, rocket} = this.props.launch

      return (
        <div>
            <h1>{mission_name}</h1>
            <img src={links.mission_patch_small} />
            <p>Rocket: {rocket.rocket_name}</p>
            <p>Mission Successful: {launch_success.toString()}</p>
            <p>Mission Details: {details}</p>
            <br/>
            <button onClick={() => this.props.missionClick(flight_number)}>Add Mission</button>
            <button onClick={() => this.props.goBack()}>Go Back</button>
        </div>
    );
  }
}

export default LaunchSpecs;
