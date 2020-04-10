import React from 'react';
import DefaultProps from './DefaultProps';
import Children from './Children';
import DestructuringAssignment from './DestructuringAssignment';
import LearnPropTypes from './LearnPropTypes';
import LearnState from './LearnState';
import LearnSetState from './LearnSetState';
import LearnUseState from './LearnUseState';

const App = () => {
  return (
    <>
      <DefaultProps name="React" />
      <br />
      <Children>I am between Children</Children>
      <br />
      <DestructuringAssignment name="Destructuring">
        Assignment
      </DestructuringAssignment>
      <br />
      <LearnPropTypes name={3} />
      <br />
      <LearnState />
      <br />
      <LearnSetState />
      <br />
      <LearnUseState />
    </>
  );
};

export default App;
