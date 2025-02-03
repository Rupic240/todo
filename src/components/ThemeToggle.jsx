import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
    const { darkMode, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                      text-gray-800 dark:text-white transition-colors duration-200"
        >
            {darkMode ?
                <MdLightMode className="w-5 h-5 sm:w-6 sm:h-6" /> :
                <MdDarkMode className="w-5 h-5 sm:w-6 sm:h-6" />
            }
        </button>
    )
}

export default ThemeToggle 