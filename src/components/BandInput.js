// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name:""
  }

  handleOnChange = event =>{
    this.setState({
      name: event.target.value
    })
   
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    // debugger
    this.props.addBand(this.state)
    this.setState({
      name:''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => {this.handleSubmit(event)}}>
          <label>Band Name:</label>
          <input name="name" onChange={this.handleOnChange} value={this.state.name}></input>
          <input type="submit"></input>
        </form>
          {this.props.renderbands}
      </div>
    )
  }
}

export default BandInput
