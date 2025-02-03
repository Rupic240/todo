import { useState, useEffect } from 'react'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'
import ThemeToggle from './components/ThemeToggle'
import { loadTodos, saveTodos } from './utils/localStorage'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [todos, setTodos] = useState(() => loadTodos())
  const [input, setInput] = useState('')

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() === '') return

    setTodos([...todos, { id: Date.now(), text: input, completed: false }])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-md mx-auto pt-10 p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Todo List</h1>
          <ThemeToggle />
        </div>

        <TodoForm
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
        />

        <ul className="space-y-3">
          <AnimatePresence>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  )
}

export default App
