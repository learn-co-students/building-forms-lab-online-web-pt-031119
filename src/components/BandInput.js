// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {

  state = {
    name: ''
  };

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    });
  };


  render() { 

    return(
      <div>
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
          value={this.state.name}
            type="text"
            onChange={this.handleOnChange}
            name="name"
            id="name"
            placeholder="band name" />
        </p>
        <input type="submit"/>
      </form>
      </div>
    )
  }
}




export default (BandInput)
