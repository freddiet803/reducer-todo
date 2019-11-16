import React, { useState } from 'react';

const AddTodoForm = props => {
  const [newTodo, setNewTodo] = useState('');

  const handleChangeTodo = e => {
    e.preventDefault();
    setNewTodo(e.target.value);
    console.log(newTodo);
  };

  const handleTodoSubmit = e => {
    e.preventDefault();
    if (newTodo.length > 0) {
      props.submit(newTodo);
      setNewTodo('');
    } else {
      alert('add todo');
    }
  };

  const clearCompleted = e => {
    e.preventDefault();
    props.clear();
  };

  return (
    <div>
      <form onSubmit={handleTodoSubmit}>
        <input
          className='todo'
          value={newTodo}
          name='todoInput'
          type='text'
          onChange={handleChangeTodo}
        />
        <button type='submit'>Add Todo</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
