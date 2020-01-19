// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
   constructor()  {
      super()
      this.state = {
        name: ''
      }
   }

   handleOnChange = event => {
    this.setState({
      name: event.target.value,
    })
    // Handle Updalting Component State
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <label>Band Input</label>
            <input type='text' value={this.state.name} name="name" onChange={this.handleOnChange}/>
          </p>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}


export default BandInput
