function TodoForm({ input, setInput, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1 p-2 text-sm sm:text-base border rounded focus:outline-none focus:border-blue-500 
                   dark:bg-gray-800 dark:border-gray-700 dark:text-white 
                   dark:placeholder-gray-400"
            />
            <button
                type="submit"
                className="px-4 py-2 text-sm sm:text-base bg-blue-500 text-white rounded hover:bg-blue-600
                   dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-200"
            >
                Add
            </button>
        </form>
    )
}

export default TodoForm 