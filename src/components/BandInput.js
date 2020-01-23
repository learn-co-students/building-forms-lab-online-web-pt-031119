// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name='name' onChange={this.handleNameChange} type='text' />
          <button>Add Band</button>
        </form>
      </div>
    )
  }
}

export default BandInput
