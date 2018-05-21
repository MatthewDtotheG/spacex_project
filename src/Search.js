import React, { Component } from 'react'

class Search extends Component {

render() {
  console.log(this.props.query)
  return (
    <form>
      <input
        placeholder="Search for..."
        value={this.props.query}
        onChange={this.props.handleSearch}
      />
      <p>{this.props.query}</p>
    </form>
  )
}
}

export default Search
