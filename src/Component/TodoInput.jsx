import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;

