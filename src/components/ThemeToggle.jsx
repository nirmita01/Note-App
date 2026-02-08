export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`
        px-4 py-2 rounded-full
        bg-pink-700 dark:bg-gray-700
        ${darkMode ? "text-gray-100" : "text-gray-900"} 
      `}
    >
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
