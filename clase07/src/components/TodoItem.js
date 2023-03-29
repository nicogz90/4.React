import axios from 'axios';
import React from 'react';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkTodo, deleteTodo, todoLoading } from '../redux/todo.slice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false)
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            dispatch(todoLoading(true));
            // setIsLoading(true);
            axios
              .patch(`http://localhost:3004/todos/${todo.id}`, {
                completed: e.target.checked,
              }) // patched to DB (normally this is done on server-side)
              .then((res) => {
                dispatch(
                  checkTodo({ id: todo.id, completed: e.target.checked })
                ); // patched to state
                dispatch(todoLoading(false));
                // setIsLoading(false);
              });
          }}
        />
        <label>{todo.text}</label>
        <button
          className="destroy"
          onClick={() => {
            dispatch(todoLoading(true));
            // setIsLoading(true);
            axios
              .delete(`http://localhost:3004/todos/${todo.id}`) // deleted from DB (normally this is done on server-side)
              .then((res) => {
                dispatch(deleteTodo(todo.id)); // deleted from state
                dispatch(todoLoading(false));
                // setIsLoading(false);
              });
          }}
        />
      </div>
    </li>
  );
}
