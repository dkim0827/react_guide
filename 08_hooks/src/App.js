import React, { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import CounterHook from './CounterHook';
import InfoHook from './InfoHook';
import Average from './Average';
import InfoCustom from './InfoCustom';

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'HIDE' : 'SHOW'}
      </button>
      {visible && (
        <>
          <Counter />
          <Info />
          <CounterHook />
          <InfoHook />
          <Average />
          <InfoCustom />
        </>
      )}
    </div>
  );
};

export default App;
