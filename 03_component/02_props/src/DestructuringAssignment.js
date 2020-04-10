import React from 'react';

const DestructuringAssignment = (props) => {
  const { name, children } = props;

  return (
    <div>
      <b>* DestructuringAssignment</b>
      <br />
      Hi My name is {name}. <br />
      value of children is {children}.
    </div>
  );
};

/* Better way
const DestructuringAssignment = {name, children} => {
  return (
    <div>
      <b>* DestructuringAssignment</b>
      <br />
      Hi My name is {name}. <br />
      value of children is {children}.
    </div>
  );
}
*/
export default DestructuringAssignment;
