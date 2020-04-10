import React from 'react';
import useInputs from './useInputs';

const InfoCustom = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;

  return (
    <div>
      <h1>* customHook</h1>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>Name: </b>
        {name}
      </div>
      <div>
        <b>Nickname: </b>
        {nickname}
      </div>
    </div>
  );
};

export default InfoCustom;
