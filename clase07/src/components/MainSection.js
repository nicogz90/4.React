import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import axios from 'axios';
import { setTodos, todoLoading } from '../redux/todo.slice';
// import { useState } from 'react';

const MainSection = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const isLoading = useSelector((state) => state.todo.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoLoading(true));
    // setIsLoading(true);
    axios.get('http://localhost:3004/todos').then((res) => {
      dispatch(todoLoading(false));
      dispatch(setTodos(res.data));
      // setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <section className="main">
      {isLoading ? (
        <div style={{ margin: '15px' }}>
          <i className="fa fa-spinner fa-spin fa-2x"></i>
        </div>
      ) : (
        <TodoList />
      )}
    </section>
  );
};

export default MainSection;
