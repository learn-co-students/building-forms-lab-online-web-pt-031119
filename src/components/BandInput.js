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
        <lable> Band Name: </lable>
          <input
          value={this.state.name}
            type="text"
            onChange={this.handleOnChange}
            name="name"
            id="name"
             />
        
        <input type="submit"/>
      </form>
      {this.props.renderbands}
      </div>
    )
  }
}
export default BandInput 
