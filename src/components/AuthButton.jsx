export default function AuthButton({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full font-medium
        bg-pink-700 hover:bg-pink-500 text-gray-100
        dark:bg-gray-700 dark:hover:bg-gray-500
        transition-colors duration-200
        ${className || ""}
      `}
    >
      {children}
    </button>
  );
}
