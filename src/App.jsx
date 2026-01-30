import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  // State for todos
  // Initialize from localStorage if available
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  // State for filter: 'all', 'active', 'completed'
  const [filter, setFilter] = useState('all')

  // Effect to save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Function to add a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div className="app-container">
      <h1>Todo Manager</h1>

      <TodoInput onAdd={addTodo} />

      <TodoList todos={todos} />

      {/* Filters will go here later */}
    </div>
  )
}

export default App
