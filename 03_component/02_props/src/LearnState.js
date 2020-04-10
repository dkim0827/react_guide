import React, { Component } from 'react';

class LearnState extends Component {
  constructor(props) {
    super(props);
    // set initial state of state
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  render() {
    const { number, fixedNumber } = this.state; // When look for state use this.state
    return (
      <div>
        <b>* Learn State</b>
        <h1>Changing Number : {number}</h1>
        <h1>Fixed Number : {fixedNumber}</h1>
        <button
          // set function call when button is clicked
          onClick={() => {
            // able to put new value in state with this.setState
            // setState function only change the value of parameter given.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

/*
better way
import React, { Component } from 'react';

class LearnState extends Component{
    state = {
        number: 0,
        fixedNumber: 0
    };
    render(){
        const { number, fixedNumber } = this.state
        return (...)
    }
}
*/

export default LearnState;
