import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <React.Fragment>
      <h2>All Todo's</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.todoText}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default TodoList;
