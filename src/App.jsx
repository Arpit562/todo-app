import React, { useState, useEffect } from 'react';
import Header from './Component/Header';
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';

function App() {
  const [todos, setTodos] = useState([]);


  // Load todos from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);




  // Add a new todo
  const addTodo = (task) => {
    const newTodo = { id: Date.now(), text: task, completed: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  // Delete a todo
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  // Toggle completion status
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='app-container'>
      <Header  />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
