import React, { Component } from 'react';
import './App.css';

class Filter extends Component {

  render() {
    return (
      <div>
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
