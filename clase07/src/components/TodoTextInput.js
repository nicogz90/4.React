import React, { useState } from 'react';

export default function TodoTextInput({ placeholder, onSave }) {
  const [text, setText] = useState('');

  // In case we don't put the input inside a form:
  const handleSubmit = (e) => {
    const text = e.target.value.trim();

    // e.which returns the pressed keycode (13 for Enter key)
    if (e.which === 13) {
      onSave(text);
      setText('');
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <input
      className={'new-todo'}
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
}
