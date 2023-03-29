import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, todoLoading } from '../redux/todo.slice';
import TodoTextInput from './TodoTextInput';
import axios from 'axios';

const Header = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const onSave = (text) => {
    dispatch(todoLoading(true));
    // setIsLoading(true);
    axios
      .post('http://localhost:3004/todos', { text, completed: false })
      .then((res) => {
        dispatch(addTodo(text));
        dispatch(todoLoading(false));
        // setIsLoading(false);
      });
  };
  return (
    <header className="header">
      <h1>Tareas</h1>
      <TodoTextInput onSave={onSave} placeholder="¿Qué vamos a hacer hoy?" />
    </header>
  );
};

export default Header;
