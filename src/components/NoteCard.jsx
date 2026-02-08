export default function NoteCard({ note, isSelected, onClick, deleteNote }) {
  return (
    <div
      className={`relative flex justify-between items-center cursor-pointer p-3 border-b dark:border-gray-700 transition-colors
        ${isSelected ? "bg-pink-200 dark:bg-gray-700" : "hover:bg-pink-100 dark:hover:bg-gray-600"}`}
    >
      <div onClick={onClick} className="flex-1 truncate">
        {note.text || "New Note"}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent selecting note when deleting
          deleteNote(note.id);
        }}
        className="text-gray-400 hover:text-red-500 font-bold ml-2"
      >
        ✕
      </button>
    </div>
  );
}
