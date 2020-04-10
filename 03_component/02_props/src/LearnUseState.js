import React, { useState } from 'react';

/*
Array desctructuring assignment

const array = [1, 2];
const one = array[0];
const two = array[1];

const array = [1, 2];
const [one, two] = array;

in class component for the state you must need to put an object.
but in useState it does not matter.

when useState is called it returns an array. first index is current state and 2nd index is function that changes state.
this function is called Setter function.

Also useState can be used multiple times in one component.
*/
const LearnUseState = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('Welcome');
  const onClickLeave = () => setMessage('Bye');

  const [color, setColor] = useState('black');

  return (
    <div>
      <b>* useState Hook in functional Component</b>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <div>
        <button style={{ color: 'red' }} onClick={() => setColor('red')}>
          RED
        </button>
        <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
          BLUE
        </button>
        <button style={{ color: 'green' }} onClick={() => setColor('green')}>
          GREEN
        </button>
      </div>
    </div>
  );
};

/*
Caution when you use state.
when you need to update array or object
1. make a copy of array or object
2. update the value in the copy
3. update state of copied array or object by using setState or Setter function.

// object
const object = { a: 1, b: 2, c: 3 };
const nextObject = { ...object, b: 2 }; // make a copy of object and only overwrite value of b

// array
const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false }
];
let nextArray = array.concat({id: 4, value: true}); // Add new element
nextArray.filter(item => item.id !== 2) // delete where id is equal to 2
nextArray.map(item => (item.id === 1 ? {  ...item, value: false } : item)); // if id === 1 change value to false

When make copy of
object use spread syntax(...)
array use functions that array has(filter, map etc...)

* Important.
after hook came out react development team mentioned that trend will be turn into
class component -> useState hook.

reason why few code are written in class component is for the explain purpose.
*/

export default LearnUseState;
