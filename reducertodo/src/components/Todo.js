import React from 'react';
import '../App.css';

const Todo = props => {
  const toggleIt = e => {
    e.preventDefault();

    props.toggle(props.id);
    // console.log(props.id);
    // console.log(props.completed);
  };
  return (
    <div className={props.completed ? 'completedTodo' : ''} onClick={toggleIt}>
      <h3>{props.item}</h3>
    </div>
  );
};
export default Todo;
