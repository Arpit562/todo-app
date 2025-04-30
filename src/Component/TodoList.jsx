
import TodoItem from './TodoItem';
import React ,{ useState } from 'react';


function TodoList({ todos, deleteTodo, toggleComplete }) {
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
  });

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')} >Active</button>
        <button onClick={() => setFilter('completed')} >Completed</button>
      </div>

      {filteredTodos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        filteredTodos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            deleteTodo={deleteTodo} 
            toggleComplete={toggleComplete} 
          />
        ))
      )}
    </div>
  );
}

export default TodoList;




