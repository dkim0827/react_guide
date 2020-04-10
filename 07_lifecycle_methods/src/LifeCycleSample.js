import React, { Component } from 'react';

/*
There are total 9 types of LifeCycle Method.
one with Will occur before action happens
one with Did occur after action happens

LifeCycle is divided into 3 Categories (Mount, Update, Unmount)

* Mount = when DOM is created and appear on Web Browser
Create Component -> Constructor -> getDerivedStateFromProps -> render -> componentDidMount
- constructor : method that called everytime when component is created
- getDerivedStateFromProps : method called when put value in the props into state
- render : method that render UI
- componentDidMount : method that called after component is rendered on Web Browser

* Update = update occur in 4 situations
1. When props change
2. When state change
3. When parent component re-render
4. when render is forced by this.forceUpdate

update situation occur -> getDerivedStateFromProps
 -> shouldComponentUpdate(if return true call render / if false action stops)
 -> render -> getSnapshotBeforeUpdate - actual change occur on DOM in web browser -> componentDidUpdate

* Unmount = opposite of mounting. it removes component from the DOM
unmount -> componentWillUnmount

*/

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // where will set up ref

  // called when component is created, can set up initial state
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // this method is also called during mounting state, also when update is triggered.
  // used when you want to give change on state when props changes
  static getDerivedStateFromProps(nextProps, preveState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== preveState.color) {
      return { color: nextProps.color };
    }
    return null; // if you don't need to update state return null
  }

  // this method is called after first render
  // you can put other javascript library's function or framework's function or
  // handle async actions.
  componentDidMount() {
    console.log('componentDidMount');
  }

  // it determines whether component need to re-render or not. in this method you must return
  // true or false. If true it continues lifecycle method / if false it stops.
  // as default it returns true
  // if this.forceUpdate() is called it skips shouldComponentUpdate and call render()
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // if end number is 4 it do not re-render
    return nextState.number % 10 !== 4;
  }

  // method called before component get removed from web browser
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // this method is called right before apply change of Component in the DOM
  // snapshot is used when you need value before the update(ex: maintain scrollbar positon)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // method that called after component is updated
  // it is after the update so you can access DOM
  // also with prevProps or prevState can access value that component had before
  // also if getSnapshotBeforeUpdate returned the value you can receive value of snapshot at here
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('color before update : ', snapshot);
    }
  }

  /*
  inside render you never ever use setState outside of event,
  also you never touch browsers DOM.
  When you bring DOM information or give change in state
  you do it at componentDidMount
  */
  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1>* LifeCycle Methods</h1>
        <h3 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h3>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>PLUS</button>
      </div>
    );
  }
}

/*
componentDidCatch
- this method prevent showing white empty page when error occurs so it is more recognizable for user.
see ErrorBoundary.js for detail.


*/
export default LifeCycleSample;
