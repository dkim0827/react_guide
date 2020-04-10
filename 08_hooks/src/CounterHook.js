import React, { useReducer } from 'react';

// Good thing for useReducer is you can pull out component update logic
// outside of component
function reducer(state, action) {
  // work different on action.type
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // when it does not meet any condition
      return state;
  }
}

const CounterHook = () => {
  // state = current target
  // dispatch = function trigger action
  // dispatch(action)
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <h1>* useReducer Hook</h1>
      <p>Current Value is : {state.value}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default CounterHook;
