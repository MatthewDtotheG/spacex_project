import React, { Component } from 'react';
import logo from './logo.svg';
import Container from './Container';
import Filter from './Filter';
import Search from './Search';

import './App.css';

class App extends Component {

  state = {
    launches: [],
    successfulOnly: false,
    myMissions: [],
    query: ''
  }

  componentDidMount = () => {
    fetch('https://api.spacexdata.com/v2/launches/')
    .then(x => x.json())
    .then((launchData) => {
      this.setState({
            launches: launchData
        });
    })
  }

  filteredMissions = () => {
    // return filterMissionName(filterLaunchSuccess(this.state.launches))
    return this.state.launches.filter((launch) =>
        (!this.state.successfulOnly || this.state.successfulOnly && launch.launch_success))
        .filter((launch) => launch.mission_name.toLowerCase().includes(this.state.query))
  }

  handleCheck = () => {
      this.setState(prevState => ({successfulOnly: !prevState.successfulOnly}))
  }

  missionClick = (findFlightNum) => {
    const indexMatch = this.state.launches.findIndex(launch => launch.flight_number === findFlightNum)
    const MissionToMove = this.state.launches[indexMatch]
    this.setState({
      launches: this.state.launches.filter((launch) => launch.flight_number !== findFlightNum),
      myMissions: [...this.state.myMissions, MissionToMove]
    })
  }

  missionRemove = (findFlightNum) => {
    const indexMatch = this.state.myMissions.findIndex(launch => launch.flight_number === findFlightNum)
    const MissionToMove = this.state.myMissions[indexMatch]
    this.setState({
      myMissions: this.state.myMissions.filter((launch) => launch.flight_number !== findFlightNum),
      launches: [MissionToMove, ...this.state.launches]
    })
  }

  handleSearch = (e) => {
    this.setState({
      query: e.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="log2o" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        < Filter
          successfulOnly={this.state.successfulOnly}
          handleCheck={this.handleCheck}
        />
        < Search
          handleSearch={this.handleSearch}
          query={this.state.query}
        />
        < Container
          launches={this.filteredMissions()}
          missionClick={this.missionClick}
          missionRemove={this.missionRemove}
          myMissions={this.state.myMissions}
        />
      </div>
    );
  }
}

export default App;
