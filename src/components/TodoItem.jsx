import { useState } from 'react'
import { FaTrash, FaPencilAlt, FaSave } from 'react-icons/fa'
import { IoCheckmarkCircleOutline, IoCheckmarkCircleSharp } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedText, setEditedText] = useState(todo.text)

    const handleSave = () => {
        if (editedText.trim() !== '') {
            onEdit(todo.id, editedText)
            setIsEditing(false)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSave()
        }
    }

    return (
        <motion.li
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-between mt-5 p-2 sm:p-3 rounded shadow
                   bg-white dark:bg-gray-800 dark:text-white"
        >
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onToggle(todo.id)}
                    className="text-xl sm:text-2xl text-gray-400 hover:text-green-500
                     dark:text-gray-500 dark:hover:text-green-400 flex-shrink-0"
                >
                    {todo.completed ?
                        <IoCheckmarkCircleSharp className="text-green-500 dark:text-green-400" /> :
                        <IoCheckmarkCircleOutline />
                    }
                </motion.button>
                {isEditing ? (
                    <motion.input
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1 p-1 text-sm sm:text-base border rounded focus:outline-none focus:border-blue-500
                     dark:bg-gray-700 dark:border-gray-600 dark:text-white min-w-0"
                        autoFocus
                    />
                ) : (
                    <motion.span
                        layout
                        animate={{ opacity: 1 }}
                        className={`${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}
                         text-sm sm:text-base truncate`}
                    >
                        {todo.text}
                    </motion.span>
                )}
            </div>
            <div className="flex gap-1 sm:gap-2 ml-2 flex-shrink-0">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={isEditing ? handleSave : () => setIsEditing(true)}
                    className="text-blue-500 hover:text-blue-700 p-1
                     dark:text-blue-400 dark:hover:text-blue-300"
                >
                    {isEditing ? <FaSave /> : <FaPencilAlt />}
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onDelete(todo.id)}
                    className="text-red-500 hover:text-red-700 p-1
                     dark:text-red-400 dark:hover:text-red-300"
                >
                    <FaTrash />
                </motion.button>
            </div>
        </motion.li>
    )
}

export default TodoItem 