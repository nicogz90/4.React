import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, todoLoading } from '../redux/todo.slice';
import TodoTextInput from './TodoTextInput';
import axios from 'axios';

const Header = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const onSave = (text) => {
    // We are using the demo json server, allowing us to create a demo REST API.
    // JSON Server is a notable Node module ('npm install json-server') that you can use to build demo REST JSON services effortlessly and quickly.
    // To create the fake REST API, you will only need a JSON file (in this case 'db.json', port 3004 --> see script 'start-api' at package.json) and add some sample data into it.
    const DB_URL = 'http://localhost:3004/todos';
    dispatch(todoLoading(true));
    // setIsLoading(true);
    axios
      .post(DB_URL, { text, completed: false }) // added to DB (normally this is done on server-side)
      .then((res) => {
        dispatch(addTodo(text)); // added to state
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
