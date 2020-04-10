import React, { useState } from 'react';

const HookVersion = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ' : ' + message);
    setForm({
      username: '',
      message: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>* code with useState</h1>
      <h3>{form.message}</h3>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={form.username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="message"
        value={form.message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>OK</button>
    </div>
  );
};

export default HookVersion;
