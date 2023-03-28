import React from 'react';
import { useDispatch } from 'react-redux';
import { checkTodo, deleteTodo } from '../redux/todo.slice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) =>
            dispatch(checkTodo({ id: todo.id, completed: e.target.checked }))
          }
        />
        <label>{todo.text}</label>
        <button
          className="destroy"
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
        />
      </div>
    </li>
  );
}
