import React, { Component } from 'react';

/*
Things to know when you use event
1. name of the event is written in camelCase
in html = onclick, onkeyup
in react = onClick, onKeyUp

2. Rather than javascript code give function on event.

3. only can apply on DOM element
can apply event on div, span etc..
but not directly on Component

Supported Event by react
- Clipboard
- Composition
- Keyboard
- Focus
- Form
- Mouse
- Selection
- Touch
- UI
- Wheel
- Media
- Image
- Animation
- Transition

React Manual(https://facebook.github.io/react/docs/events.html)

*/

class EventPractice extends Component {
  state = {
    message: '',
  };

  render() {
    return (
      <div>
        <h1>* Practice Event</h1>
        <h3>{this.state.message}</h3>
        {/* onChange Event */}
        <input
          type="text"
          name="message"
          placeholder="type something"
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
        />
        {/* onClick Event */}
        <button
          onClick={() => {
            // when buttons is clicked it will alert current state and reset the state
            alert(this.state.message);
            this.setState({
              message: '',
            });
          }}
        >
          OK
        </button>
      </div>
    );
  }
}

export default EventPractice;
