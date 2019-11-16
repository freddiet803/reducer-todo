import React, { useState, useReducer } from 'react';
import { initialState, TodoReducer } from '../reducers';
import Todo from './Todo';
import '../App.css';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const handleTodoSubmit = load => {
    dispatch({ type: 'ADD_TODO', payload: load });
  };

  const toggleTodoCompletion = todoId => {
    dispatch({ type: 'TOGGLE_COMPLETION', payload: todoId });
    console.log(todoId + 'inside dispatch');
  };
  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <div>
      <h1>Reducer Todo List</h1>
      {state.map(item => {
        return <Todo key={item.id} {...item} toggle={toggleTodoCompletion} />;
      })}
      <AddTodoForm submit={handleTodoSubmit} clear={clearCompleted} />
    </div>
  );
};
export default TodoList;
