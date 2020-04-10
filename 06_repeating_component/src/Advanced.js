import React, { useState } from 'react';

const Advanced = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'Snowman' },
    { id: 2, text: 'Ice' },
    { id: 3, text: 'Snow' },
    { id: 4, text: 'Wind' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // id will be used when you add new li

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  const onClick = () => {
    // make copy
    // push = mutate original array vs concat = make new array
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); // add 1 on nextId
    setNames(nextNames); // update value of names
    setInputText(''); // empty inputText
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <h1>* Advanced</h1>
      <input
        type="text"
        name="text"
        value={inputText}
        placeholder="Add Text"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Add To List</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default Advanced;
