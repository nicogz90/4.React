import React from 'react';

export default function TodoItem({ todo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => null}
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => null} />
      </div>
    </li>
  );
}
