import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './TodoList';
import axios from 'axios';
import { setTodos } from '../redux/todo.slice';

const MainSection = () => {
  const loading = false;

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:3004/todos')
      .then((res) => dispatch(setTodos(res.data)));
  }, [dispatch]);

  return (
    <section className="main">
      {loading ? (
        <div style={{ margin: '15px' }}>
          <i className="fa fa-spinner fa-spin fa-4x"></i>
        </div>
      ) : (
        <TodoList />
      )}
    </section>
  );
};

export default MainSection;
