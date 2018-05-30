import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import './App.css';

class Filter extends Component {

  // state = {
  //   allRockets: []
  // }



rocketTypeFilter = () => {
  return this.props.allRockets.map((rocket) => <option value={rocket}>{rocket}</option>)
}

// componentDidMount(){
//   this.props.populateSelect()
//   this.props.populateCustomers()
// }
//
// componentDidUpdate(){
//   this.props.populateSelect()
//   this.props.populateCustomers()
// }


render() {

  this.props.populateSelect()
  this.props.populateCustomers()

  const rocketsSelectObject = this.props.allRockets.map((rocket) => ({value: rocket, text: rocket}))
    return (
      <div className="filterStuff">
        <form className="Search">
          <label>Search Missions:</label>
          <input
            className="ui fluid category search filterStuff"
            placeholder="Search for..."
            value={this.props.query}
            onChange={this.props.handleSearch}
          />
        </form>

        <br/>
        <label>Rocket Type:</label>
          <select className='ui search dropdown filterStuff' onChange={this.props.handleSelect}>
            <option value='All Rockets'>All Rockets</option>
            {this.rocketTypeFilter()}
          </select>

        <br/>
        <br/>
        <label>Customers:</label>
        <select className='ui search dropdown filterStuff' onChange={this.props.handleCustomer}>
          <option value='All Customers'>All Customers</option>
          {this.props.customerFilter()}
        </select>

        <br/>
        <br/>
        <label>
          Successful Missions:
        </label>
          <input
            name="successfulOnly"
            type="checkbox"
            checked={this.props.successfulOnly}
            onChange={this.props.handleCheck}
          />
            <br/>
            <br/>
      </div>
    );
  }
}


export default Filter;
