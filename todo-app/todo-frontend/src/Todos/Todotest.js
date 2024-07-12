import React, { useState } from 'react';

const Todo = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed);

  const handleCheckboxChange = (event) => {
    setCompleted(event.target.checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <span>{todo.text}</span>
    </div>
  );
};

export default Todo;