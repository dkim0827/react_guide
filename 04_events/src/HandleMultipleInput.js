import React, { Component } from 'react';

/*
what should we do when we have multiple input?
should we make several methods?
that also can be a solution but there is a better way.

use e.target.name
in onChange event handler e.target.name is that input's name.
*/

class HandleMultipleInput extends Component {
  state = {
    username: '',
    message: '',
  };

  /* 
  Code below is important part. in object if you wrap key with [] actual value is used as key value 
  const name = 'variantKey';
  const object = {
      [name]: 'value';
  }

  result is:
  {
      'variantKey': 'value'
  }
  */
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ' : ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  render() {
    return (
      <div>
        <h1>* HandleMultipleInput</h1>
        <h3>{this.state.message}</h3>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>OK</button>
      </div>
    );
  }
}

export default HandleMultipleInput;
