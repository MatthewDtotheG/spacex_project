import React, { Component } from 'react';
import Show from './Show';
import Search from './Search';
class Container extends Component {

  render() {
    return (
      <div>
        <div className='mymissions'>
          <h1>My Missions</h1>
          {this.props.myMissions.map(launch => < Show launch={launch} missionClick={this.props.missionRemove}/>)}
        </div>
        <div className='container'>
          {this.props.launches.map(launch => < Show launch={launch} missionClick={this.props.missionClick}/>)}
        </div>
      </div>
    );
  }
}

export default Container;
