import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todo.slice';
import TodoTextInput from './TodoTextInput';

const Header = () => {
  const dispatch = useDispatch();
  const onSave = (text) => {
    dispatch(addTodo(text));
  };
  return (
    <header className="header">
      <h1>Tareas</h1>
      <TodoTextInput onSave={onSave} placeholder="¿Qué vamos a hacer hoy?" />
    </header>
  );
};

export default Header;
