import React from 'react';
import PropTypes from 'prop-types';

const LearnPropTypes = ({ name, children, favouriteColor }) => {
  return (
    <div>
      <b>* PropTypes</b>
      <br />
      Hi My name is {name}. <br />
      value of children is {children}. value of favouriteColor is{' '}
      {favouriteColor};
    </div>
  );
};

LearnPropTypes.defaultProps = {
  name: 'PropTypes',
};

// Gives warning if typeof props is different.
// Can set must given props with isRequired
// for more info visit
// https://github.com/facebook/prop-types

LearnPropTypes.propTypes = {
  name: PropTypes.string,
  favouriteColor: PropTypes.string.isRequired,
};

export default LearnPropTypes;
