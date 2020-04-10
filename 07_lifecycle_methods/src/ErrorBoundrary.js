import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  /*
  error parameter tells you which error occured
  info parameter tells you which code made an error.

  you also can collect error by calling server API

  but the limit is when you use this method it cannot catch error for component itself
  it only can catch error occur from this.props.children
  */
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  render() {
    if (this.state.error) return <div>Error Occured</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
