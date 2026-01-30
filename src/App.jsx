import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Filters from './components/Filters'
import './App.css'

function App() {
  // State for todos
  // Initialize state from localStorage using a function (lazy initialization) to read only on first render
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  // State for filter: 'all', 'active', 'completed'
  const [filter, setFilter] = useState('all')

  // Persist todos to localStorage whenever the 'todos' state changes
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
    // State updates are immutable; a new array is created with the new todo.
    setTodos([...todos, newTodo])
  }

  // Toggle completion by creating a new array with the updated item (maintaining immutability)
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Remove item by filtering it out into a new array (maintaining immutability)
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Edit todo text
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  // Clear completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // Calculate generic derived state
  const activeCount = todos.filter(todo => !todo.completed).length

  // Filter todos for display
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="app-container">
      <h1>Todo Manager</h1>

      <TodoInput onAdd={addTodo} />

      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />

      <Filters
        currentFilter={filter}
        setFilter={setFilter}
        activeCount={activeCount}
        onClearCompleted={clearCompleted}
      />
    </div>
  )
}

export default App
