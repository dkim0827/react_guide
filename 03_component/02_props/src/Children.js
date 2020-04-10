import React from 'react';

// if you use children things between the tags goes in
// <Children>something</Children>
const Children = (props) => {
  return (
    <div>
      <b>* children</b>
      <br />
      This is How you use {props.children}
    </div>
  );
};

export default Children;
