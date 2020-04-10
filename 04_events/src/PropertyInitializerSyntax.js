import React, { Component } from 'react';

// it is commen that do method binding in constructor.
// to make this more cleaner one can use babel's transform-class-properties syntax
class PropertyInitializerSyntax extends Component {
  state = {
    message: '',
  };

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <div>
        <h1>* Property Initializer Syntax</h1>
        <h3>{this.state.message}</h3>
        <input
          type="text"
          name="message"
          placeholder="type something"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>OK</button>
      </div>
    );
  }
}

export default PropertyInitializerSyntax;
