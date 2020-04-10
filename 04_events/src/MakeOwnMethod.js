import React, { Component } from 'react';

class MakeOwnMethod extends Component {
  state = {
    message: '',
  };

  constructor(props) {
    // if don't bind it will point undefined.
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // handle______ is one of the convention way when you make method
  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }
  render() {
    return (
      <div>
        <h1>* Make Own Method</h1>
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

export default MakeOwnMethod;
