import React, { Component } from 'react';
import logo from './logo.svg';
import Container from './Container';
import Filter from './Filter';
import Search from './Search';
import Missions from './Missions';
import LaunchSpecs from './LaunchSpecs';
import './App.css';

class App extends Component {

  state = {
    launches: [],
    successfulOnly: false,
    myMissions: [],
    currentMission: [],
    query: '',
    clicked: false
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
    return this.state.launches.filter((launch) =>
        (!this.state.successfulOnly || this.state.successfulOnly && launch.launch_success))
        .filter((launch) => launch.mission_name.toLowerCase().includes(this.state.query.toLowerCase()))
  }

  handleCheck = () => {
      this.setState({
        successfulOnly: !this.state.successfulOnly
      })
  }

  handleSearch = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  missionClick = (findFlightNum) => {
    const removeLaunch = this.state.launches.filter(launch => launch.flight_number !== findFlightNum)
    const addLaunch = this.state.launches.find(launch => launch.flight_number === findFlightNum)
    this.setState({
      launches: removeLaunch,
      myMissions: [...this.state.myMissions, addLaunch]
    })
  }

  missionRemove = (findFlightNum) => {
    console.log('test')
    const removeLaunch = this.state.myMissions.filter(launch => launch.flight_number !== findFlightNum)
    const addLaunch = this.state.myMissions.find(launch => launch.flight_number === findFlightNum)
    this.setState({
      launches: [...this.state.launches, addLaunch],
      myMissions: removeLaunch
    })
  }

  clickedCheck = (id) => {
    let checkMission = this.state.launches.find((mission) => mission.flight_number === id)
    this.setState({
      clicked: !this.state.clicked,
      currentMission: [checkMission, ...this.state.currentMission]
    })
  }

  goBack = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    if(!this.state.clicked){
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
          < Missions
            myMissions={this.state.myMissions}
            missionRemove={this.missionRemove}
          />

          < Container
            launches={this.filteredMissions()}
            clickedCheck={this.clickedCheck}
            missionRemove={this.missionRemove}
            myMissions={this.state.MyMissions}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
          </header>
          < Missions
            myMissions={this.state.myMissions}
            missionRemove={this.missionRemove}
          />

          < LaunchSpecs launch={this.state.currentMission[0]}
                        missionClick={this.missionClick}
                        goBack={this.goBack}
                        />
      </div>
      )
    }

  }
}

export default App;
