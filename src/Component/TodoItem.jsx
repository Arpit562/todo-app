import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, toggleComplete }) {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    if (newText.trim()) {
      todo.text = newText;
      setEditing(false);
    }
  };

  return (
    <div >
      {editing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
           
          />
          <button onClick={handleSave} >Save</button>
        </>
      ) : (
        <>
          <span
            className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={handleEdit} style={{ marginLeft: '10px' }}>Edit</button>
        </>
      )}
      <button onClick={() => deleteTodo(todo.id)} >Delete</button>
    </div>
  );
}

export default TodoItem;

