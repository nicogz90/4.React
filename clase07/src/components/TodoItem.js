import React from 'react';
import { useDispatch } from 'react-redux';
import { checkTodo } from '../redux/todo.slice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(checkTodo(todo.id))}
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => null} />
      </div>
    </li>
  );
}
