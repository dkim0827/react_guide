import React, { Component } from 'react';

class LearnSetState extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // When look for state use this.state
    return (
      <div>
        <b>* Learn SetState</b>
        <h1>Changing Number : {number}</h1>
        <h1>Fixed Number : {fixedNumber}</h1>
        <button
          onClick={() => {
            // why it only adds up 1? Even with 2 setState?
            // because even we use setState the value of the state do not change right away
            // solution for this is in this.setState put function as parameter instead of object
            this.setState({ number: number + 1 });
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            // because even
            this.setState(() => {
              this.setState((prevState) => {
                return {
                  number: prevState.number + 1,
                };
              });
              // code below do exactly same thing with code above.
              // code below means it returns object right away from function
              //   this.setState((prevState) => ({
              //     number: prevState.number + 1,
              //   }));
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default LearnSetState;
