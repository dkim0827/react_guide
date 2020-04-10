import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  /*
  * useEffect = is hook when component is rendered do something
  its like componentDidMount + componentDidUpdate

  if you want to call useEffect only at the first render you put an empty array([]) as second parameter
  useEffect(() => {
      console.log('only at first rendering');
  }, [])

  when you want to call useEffect when specific value changes you put that as second parameter
  useEffect(() => {
      console.log(name);
  }, [name])


  * useEffect usually occur after rendering is done and depend on second aprameter occur situation change.

  if you want to do something before component unmount or before component update you need to return
  cleanup function in useEffect hook.

  */
  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      // when cleanup is called it will show value before update
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <h1>* multiple useState and useEffect</h1>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
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

export default Info;
