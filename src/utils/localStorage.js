export const loadTodos = () => {
    try {
        const savedTodos = localStorage.getItem('todos')
        return savedTodos ? JSON.parse(savedTodos) : []
    } catch (error) {
        console.error('Error loading todos:', error)
        return []
    }
}

export const saveTodos = (todos) => {
    try {
        localStorage.setItem('todos', JSON.stringify(todos))
    } catch (error) {
        console.error('Error saving todos:', error)
    }
} 