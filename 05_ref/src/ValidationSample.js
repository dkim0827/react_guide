import React, { Component } from 'react';
import './ValidationSample.css';

/*
When you style react component you rarely use id.
- The reason is id must be unique and as app gets bigger it is hard to keep uniqueness.

When to use ref?
- When you need to touch DOM directly.

In most of time react can handle ref with state but in some cases it is not possible
- Give focus on specific input box
- Controll ScrollBox
- Draw picture on Canvas element

those are the situaton when you need to use ref.

How to use ref?
1. with callback function
<input ref={(ref) => {this.input=ref}} />

2. with createRef
import React, { Component } from 'react';

class RefSample extends Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }

    render(){
        return(
            <div>
                <input ref={this.input} />
            </div>
        )
    }
}

export default RefSample;

*/

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
  };

  render() {
    return (
      <div>
        <h1>* Learn ref</h1>
        <input
          ref={(ref) => {
            // after click OK button focus goes back to input right away.
            this.input = ref;
          }}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            // when button is clicked(true), if validated(true) give class success else failure
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>OK</button>
      </div>
    );
  }
}

export default ValidationSample;
