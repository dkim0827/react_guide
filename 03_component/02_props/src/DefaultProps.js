import React from 'react';

const DefaultProps = (props) => {
  return (
    <div>
      <b>* defaultProps</b>
      <br />
      Hello my name is {props.name}!
    </div>
  );
};

// If there are no defaultProps it will throw an error when name is not given as props.
DefaultProps.defaultProps = {
  name: 'Basic Name',
};

export default DefaultProps;
