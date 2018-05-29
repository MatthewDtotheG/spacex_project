import React, { Component } from 'react';
import Show from './Show';
import Search from './Search';
import LaunchSpecs from './LaunchSpecs';

class Missions extends Component {

  render() {
    return (
      <div>
        <div className='mymissions'>

          <h1>My Missions</h1>
          {this.props.myMissions.map(launch => < Show launch={launch} clickedCheck={this.props.missionRemove}/>)}
        </div>

      </div>
    );
  }
}

export default Missions;
