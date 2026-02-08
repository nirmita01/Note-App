import NoteCard from "./NoteCard";

export default function NotesSidebar({ notes, selectedNoteId, setSelectedNoteId, addNote, deleteNote }) {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 flex flex-col">
      {/* Header + add button */}
      <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
        <h2 className="font-bold text-lg">Notes</h2>
        <button
          onClick={addNote}
          className="text-xl font-bold text-pink-500 dark:text-pink-300"
        >
          +
        </button>
      </div>

      {/* List of notes */}
      <div className="flex-1 overflow-y-auto">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            isSelected={note.id === selectedNoteId}
            onClick={() => setSelectedNoteId(note.id)}
            deleteNote={deleteNote}  
          />
        ))}
      </div>
    </div>
  );
}
